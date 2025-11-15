import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import { Mic, Square, Trash2 } from "lucide-react";
import { showAlert } from "./AlertSystem";

const AudioTrigger = () => {
  const [isListening, setIsListening] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordings, setRecordings] = useState([]);
  const [waveformData, setWaveformData] = useState(Array(20).fill(0));

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("aurora_recordings");
    if (stored) {
      const parsed = JSON.parse(stored);
      setRecordings(parsed.map((r) => ({ ...r, timestamp: new Date(r.timestamp) })));
    }
  }, []);

  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setWaveformData(Array(20).fill(0).map(() => Math.random() * 100));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isListening]);

  const startListening = () => {
    setIsListening(true);
    showAlert({
      type: "info",
      title: "Listening for Keyword",
      message: "Say 'ATM' to trigger emergency recording.",
    });
  };

  const stopListening = () => {
    setIsListening(false);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        saveRecording(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
      setRecordingTime(0);

      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);

      showAlert({
        type: "danger",
        title: "Recording Started",
        message: "Emergency recording in progress. Audio and location being saved.",
      });
    } catch (error) {
      showAlert({
        type: "danger",
        title: "Microphone Access Denied",
        message: "Please enable microphone permissions to use this feature.",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
      if (timerRef.current) clearInterval(timerRef.current);
      setIsRecording(false);
      setRecordingTime(0);
    }
  };

  const saveRecording = (blob) => {
    const recording = {
      id: Date.now().toString(),
      timestamp: new Date(),
      duration: recordingTime,
      location: "Downtown Area",
      blob,
    };

    const updated = [...recordings, recording];
    setRecordings(updated);

    const toStore = updated.map(({ blob, ...rest }) => rest);
    localStorage.setItem("aurora_recordings", JSON.stringify(toStore));

    showAlert({
      type: "safe",
      title: "Recording Saved",
      message: "Emergency recording saved securely with timestamp and location.",
    });
  };

  const deleteRecording = (id) => {
    const updated = recordings.filter((r) => r.id !== id);
    setRecordings(updated);
    localStorage.setItem("aurora_recordings", JSON.stringify(updated));
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Card className="glass-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-quicksand font-semibold text-foreground">
          Audio Trigger
        </h3>
        <Mic className="h-5 w-5 text-accent" aria-hidden="true" />
      </div>

      <div className="space-y-6">
        {!isRecording && (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div>
                <p className="font-semibold text-sm">Keyword Detection</p>
                <p className="text-xs text-muted-foreground">
                  {isListening ? "Listening for 'ATM'..." : "Tap to activate"}
                </p>
              </div>
              <button
                onClick={isListening ? stopListening : startListening}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  isListening
                    ? "bg-danger hover:bg-danger/90"
                    : "bg-primary hover:bg-primary/90"
                }`}
              >
                {isListening ? "Stop" : "Start"}
              </button>
            </div>

            {isListening && (
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg animate-fade-in">
                <div className="flex items-end justify-around h-24 gap-1">
                  {waveformData.map((height, i) => (
                    <div
                      key={i}
                      className="w-2 bg-accent rounded-full transition-all duration-100"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  Say "ATM" to trigger emergency recording
                </p>
              </div>
            )}

            <button
              onClick={startRecording}
              className="w-full py-3 bg-danger hover:bg-danger/90 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Mic className="h-5 w-5" />
              Start Emergency Recording
            </button>
          </div>
        )}

        {isRecording && (
          <div className="space-y-4 animate-fade-in">
            <div className="p-6 bg-danger/10 border-2 border-danger rounded-lg text-center">
              <div className="w-16 h-16 bg-danger rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                <Mic className="h-8 w-8 text-white" />
              </div>
              <p className="text-2xl font-bold font-poppins mb-2">{formatTime(recordingTime)}</p>
              <p className="text-sm text-muted-foreground mb-4">Recording in progress...</p>
              <button
                onClick={stopRecording}
                className="px-6 py-2 bg-foreground text-background hover:bg-foreground/90 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                <Square className="h-4 w-4" />
                Stop & Save
              </button>
            </div>
          </div>
        )}

        {recordings.length > 0 && !isRecording && (
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-muted-foreground">Saved Recordings</h4>
            {recordings.map((recording) => (
              <div
                key={recording.id}
                className="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">
                    {recording.timestamp.toLocaleDateString()} at{" "}
                    {recording.timestamp.toLocaleTimeString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Duration: {formatTime(recording.duration)} • {recording.location}
                  </p>
                </div>
                <button
                  onClick={() => deleteRecording(recording.id)}
                  className="p-2 hover:bg-danger/10 rounded transition-colors"
                >
                  <Trash2 className="h-4 w-4 text-danger" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default AudioTrigger;

