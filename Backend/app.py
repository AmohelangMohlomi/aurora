from flask import Flask, render_template, redirect, url_for
import os
import threading
import datetime
import speech_recognition as sr

app = Flask(__name__)
AUDIO_FOLDER = "audio"
ACTIVATION_KEYWORD = "computer"
SILENCE_THRESHOLD = 5  # seconds of silence to stop

recognizer = sr.Recognizer()
mic = sr.Microphone()

# Make sure the audio folder exists
os.makedirs(AUDIO_FOLDER, exist_ok=True)


def listen_for_keyword_and_record():
    print("Waiting for keyword...")

    with sr.Microphone() as source:  
        recognizer.adjust_for_ambient_noise(source)
        while True:
            try:
                audio = recognizer.listen(source)
                text = recognizer.recognize_google(audio).lower()
                print(f"You said: {text}")

                if ACTIVATION_KEYWORD in text:
                    print("Keyword detected!")
                    record_until_silent()
                    break
            except sr.UnknownValueError:
                print("Could not understand.")
            except sr.RequestError as e:
                print(f"Recognition error: {e}")
                break


def record_until_silent(silence_limit=SILENCE_THRESHOLD):
    print("Recording... (stay quiet to stop)")
    full_audio = sr.AudioData(b"", 16000, 2)

    with sr.Microphone() as source:
        recognizer.adjust_for_ambient_noise(source)

        while True:
            try:
                audio = recognizer.listen(
                    source,
                    timeout=silence_limit,
                    phrase_time_limit=None
                )
                full_audio = sr.AudioData(
                    full_audio.get_raw_data() + audio.get_raw_data(),
                    audio.sample_rate,
                    audio.sample_width
                )
                print("...still hearing you")
            except sr.WaitTimeoutError:
                print("Silence detected. Stopping recording.")
                break

    filename = datetime.datetime.now().strftime(f"{AUDIO_FOLDER}/recording_%Y%m%d_%H%M%S.wav")
    with open(filename, "wb") as f:
        f.write(full_audio.get_wav_data())
    print("Saved recording to:", filename)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/start')
def start_recording():
    # Run in background so Flask doesn't hang
    threading.Thread(target=listen_for_keyword_and_record).start()
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)
