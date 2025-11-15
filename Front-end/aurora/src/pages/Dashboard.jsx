import { Shield, MapPin, Heart, LifeBuoy, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import SafetyMeter from "@/components/SafetyMeter";
import LocationTracker from "@/components/LocationTracker";
import FriendTracker from "@/components/FriendTracker";
import AudioTrigger from "@/components/AudioTrigger";
import { AlertSystemDemo } from "@/components/AlertSystem";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-calm">
      <div className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
        <header className="mb-6 md:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-quicksand font-bold text-foreground mb-2">
                Welcome back, Sarah
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">
                You're safe.
              </p>
            </div>
          </div>
        </header>

/* Primary widgets */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <SafetyMeter />
          <LocationTracker />
        </div>

/* Secondary widgets */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <FriendTracker />
          <AudioTrigger />
        </div>

/* Alert system demo */
        <div className="mb-4 md:mb-6">
          <Card className="glass-card p-4 md:p-6">
            <AlertSystemDemo />
          </Card>
        </div>

/* Quick actions */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            className="glass-card p-6 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-left group"
            aria-label="Activate SOS Mode"
          >
            <Shield className="h-8 w-8 text-danger mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-quicksand font-semibold mb-2 text-foreground">SOS Mode</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trigger alarms and protective measures with one tap
            </p>
          </button>

          <button
            onClick={() => navigate('/help-resources')}
            className="glass-card p-6 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-left group"
            aria-label="View help resources"
          >
            <LifeBuoy className="h-8 w-8 text-safe mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-quicksand font-semibold mb-2 text-foreground">Get Help</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Access resources and support services
            </p>
          </button>

          <button
            className="glass-card p-6 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-left group sm:col-span-2 lg:col-span-1"
            aria-label="Open settings"
          >
            <Radio className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-quicksand font-semibold mb-2 text-foreground">Settings</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Configure alerts and safety preferences
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

