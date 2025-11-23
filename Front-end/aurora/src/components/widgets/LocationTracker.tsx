import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LocationTracker = () => {
  const [isSharing, setIsSharing] = useState(false);

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg">Location Tracker</h3>
      </div>

      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-secondary/50">
          <div className="flex items-start gap-3">
            <Navigation className="w-5 h-5 text-primary mt-1" />
            <div>
              <p className="font-medium mb-1">Current Location</p>
              <p className="text-sm text-muted-foreground">
                Downtown Area, Main Street
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => setIsSharing(!isSharing)}
          className={`w-full ${isSharing ? 'bg-green-500 hover:bg-green-600' : 'gradient-primary'} text-white`}
        >
          {isSharing ? "Sharing Location" : "Share Location"}
        </Button>

        <div className="text-xs text-muted-foreground text-center">
          {isSharing ? "3 trusted contacts can see your location" : "No one can see your location"}
        </div>
      </div>
    </div>
  );
};

export default LocationTracker;
