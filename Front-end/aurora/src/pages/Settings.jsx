import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { User, Bell, Shield, Moon } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl mb-2 text-foreground">
              Settings
            </h1>
            <p className="text-muted-foreground">
              Manage your account and preferences
            </p>
          </div>

          <div className="space-y-6">
            {/* Profile Settings */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-heading font-semibold text-xl text-foreground">Profile Settings</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="mt-1.5" />
                </div>
                <Button className="gradient-primary text-primary-foreground">Save Changes</Button>
              </div>
            </div>

            {/* Emergency Contacts */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-heading font-semibold text-xl text-foreground">Emergency Contacts</h2>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact1" className="text-foreground">Contact 1 Name</Label>
                    <Input id="contact1" placeholder="Contact name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="contact1phone" className="text-foreground">Contact 1 Phone</Label>
                    <Input id="contact1phone" type="tel" placeholder="Phone number" className="mt-1.5" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact2" className="text-foreground">Contact 2 Name</Label>
                    <Input id="contact2" placeholder="Contact name" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="contact2phone" className="text-foreground">Contact 2 Phone</Label>
                    <Input id="contact2phone" type="tel" placeholder="Phone number" className="mt-1.5" />
                  </div>
                </div>
                <Button className="gradient-primary text-primary-foreground">Save Contacts</Button>
              </div>
            </div>

            {/* Preferences */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Bell className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-heading font-semibold text-xl text-foreground">Preferences</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive alerts and updates</p>
                  </div>
                  <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Location Sharing</p>
                    <p className="text-sm text-muted-foreground">Share location with trusted contacts</p>
                  </div>
                  <Switch checked={locationSharing} onCheckedChange={setLocationSharing} />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Moon className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">Toggle dark theme</p>
                    </div>
                  </div>
                  <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
