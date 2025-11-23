import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Volume2, Mic, MicOff, AlertTriangle } from "lucide-react";
import { useState } from "react";

const AudioMonitorPage = () => {
  const [isListening, setIsListening] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);

  const alerts = [
    { time: "Today at 3:45 PM", type: "Loud noise detected", severity: "warning" },
    { time: "Today at 1:20 PM", type: "Distress keywords detected", severity: "high" },
    { time: "Yesterday at 8:30 PM", type: "Monitoring started", severity: "info" },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl mb-2 text-foreground">
              Audio Monitor
            </h1>
            <p className="text-muted-foreground">
              Monitor audio for potential safety concerns
            </p>
          </div>

          {/* Main Monitor */}
          <div className="glass-card p-8 rounded-2xl mb-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/20">
                <Volume2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-2xl text-foreground">Audio Monitoring</h2>
            </div>

            <div className="text-center py-8">
              <div className={`mx-auto w-40 h-40 rounded-full flex items-center justify-center mb-6 transition-all ${
                isListening ? 'bg-primary/20 animate-pulse-glow' : 'bg-secondary/30'
              }`}>
                {isListening ? (
                  <Mic className="w-20 h-20 text-primary" />
                ) : (
                  <MicOff className="w-20 h-20 text-muted-foreground" />
                )}
              </div>

              <p className="text-xl text-muted-foreground mb-6">
                {isListening ? "Monitoring audio for safety" : "Audio monitoring disabled"}
              </p>

              <Button
                onClick={() => setIsListening(!isListening)}
                className={`w-full md:w-auto px-8 h-14 text-lg font-semibold ${
                  isListening 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'gradient-primary text-primary-foreground'
                }`}
              >
                {isListening ? "Stop Monitoring" : "Start Monitoring"}
              </Button>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="glass-card p-6 rounded-2xl mb-6 bg-primary/10 border-primary/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Privacy & Security</h3>
                <p className="text-sm text-muted-foreground">
                  All audio is processed locally on your device using AI. No audio is recorded, 
                  stored, or transmitted to any servers. The system only detects potential safety 
                  concerns and alerts your emergency contacts when necessary.
                </p>
              </div>
            </div>
          </div>

          {/* Detection Settings */}
          <div className="glass-card p-6 rounded-2xl mb-6">
            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Detection Settings</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">Loud Noises</span>
                  <span className="text-sm text-primary">Enabled</span>
                </div>
                <p className="text-sm text-muted-foreground">Detect sudden loud sounds or shouting</p>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">Distress Keywords</span>
                  <span className="text-sm text-primary">Enabled</span>
                </div>
                <p className="text-sm text-muted-foreground">Recognize phrases indicating danger</p>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">Background Monitoring</span>
                  <span className="text-sm text-primary">Enabled</span>
                </div>
                <p className="text-sm text-muted-foreground">Continue monitoring when app is in background</p>
              </div>
            </div>
          </div>

          {/* Alert History */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Alert History</h3>
            <div className="space-y-3">
              {alerts.map((alert, index) => (
                <div key={index} className="p-4 rounded-lg bg-secondary/30">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-foreground">{alert.type}</p>
                      <p className="text-sm text-muted-foreground">{alert.time}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                      alert.severity === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-primary/20 text-primary'
                    }`}>
                      {alert.severity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AudioMonitorPage;
