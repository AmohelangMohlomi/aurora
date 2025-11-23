import { Volume2, Mic, MicOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AudioTrigger = () => {
  const [isListening, setIsListening] = useState(false);

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Volume2 className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg">Audio Monitor</h3>
      </div>

      <div className="text-center py-6">
        <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-4 transition-all ${
          isListening ? 'bg-primary/20 animate-pulse-glow' : 'bg-secondary/50'
        }`}>
          {isListening ? (
            <Mic className="w-10 h-10 text-primary" />
          ) : (
            <MicOff className="w-10 h-10 text-muted-foreground" />
          )}
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          {isListening ? "Monitoring audio for safety" : "Audio monitoring disabled"}
        </p>

        <Button
          onClick={() => setIsListening(!isListening)}
          className={`w-full ${isListening ? 'bg-red-500 hover:bg-red-600' : 'gradient-primary'} text-white`}
        >
          {isListening ? "Stop Monitoring" : "Start Monitoring"}
        </Button>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-secondary/50">
        <p className="text-xs text-muted-foreground">
          Audio is processed locally and never stored or shared
        </p>
      </div>
    </div>
  );
};

export default AudioTrigger;
