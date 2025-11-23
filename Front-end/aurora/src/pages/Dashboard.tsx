import Header from "@/components/Header";
import SafetyMeter from "@/components/widgets/SafetyMeter";
import LocationTracker from "@/components/widgets/LocationTracker";
import FriendTracker from "@/components/widgets/FriendTracker";
import AudioTrigger from "@/components/widgets/AudioTrigger";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Phone, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl mb-2">
              Welcome Back, <span className="text-gradient">User</span>
            </h1>
            <p className="text-muted-foreground">
              Your safety dashboard is ready. Stay protected and connected.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white h-16 text-lg font-semibold"
            >
              <AlertTriangle className="w-6 h-6 mr-2" />
              SOS Mode
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 text-lg font-semibold"
            >
              <Phone className="w-6 h-6 mr-2" />
              Get Help
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 text-lg font-semibold"
            >
              <Settings className="w-6 h-6 mr-2" />
              Settings
            </Button>
          </div>

          {/* Widgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2">
              <SafetyMeter />
            </div>
            <LocationTracker />
            <AudioTrigger />
            <div className="lg:col-span-2">
              <FriendTracker />
            </div>
            <div className="lg:col-span-2 glass-card p-6 rounded-2xl">
              <h3 className="font-heading font-semibold text-lg mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-sm font-medium">Location shared with Sarah M.</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-sm font-medium">Safety check completed</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50">
                  <p className="text-sm font-medium">Emma K. checked in safely</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;