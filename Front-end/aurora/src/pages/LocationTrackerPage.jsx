import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Users, Share2 } from "lucide-react";
import { useState } from "react";

const LocationTrackerPage = () => {
  const [isSharing, setIsSharing] = useState(false);
  const [sharedContacts, setSharedContacts] = useState([]);

  const contacts = [
    { id: 1, name: "Sarah M.", status: "online" },
    { id: 2, name: "Emma K.", status: "online" },
    { id: 3, name: "John D.", status: "offline" },
  ];

  const toggleContactShare = (contactId) => {
    if (sharedContacts.includes(contactId)) {
      setSharedContacts(sharedContacts.filter(id => id !== contactId));
    } else {
      setSharedContacts([...sharedContacts, contactId]);
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl mb-2 text-foreground">
              Location Tracker
            </h1>
            <p className="text-muted-foreground">
              Share your real-time location with trusted contacts
            </p>
          </div>

          {/* Current Location */}
          <div className="glass-card p-6 rounded-2xl mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/20">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-xl text-foreground">Current Location</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/30">
                <div className="flex items-start gap-3">
                  <Navigation className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <p className="font-medium mb-2 text-foreground">Downtown Area, Main Street</p>
                    <p className="text-sm text-muted-foreground">
                      Last updated: Just now
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => setIsSharing(!isSharing)}
                className={`w-full h-14 text-lg font-semibold ${
                  isSharing 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'gradient-primary text-primary-foreground'
                }`}
              >
                <Share2 className="w-5 h-5 mr-2" />
                {isSharing ? "Location Sharing Active" : "Start Sharing Location"}
              </Button>
            </div>
          </div>

          {/* Share with Contacts */}
          <div className="glass-card p-6 rounded-2xl mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/20">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-xl text-foreground">Share With</h2>
            </div>

            <div className="space-y-3">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/30"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {contact.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.name}</p>
                      <p className="text-xs text-muted-foreground capitalize">{contact.status}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={sharedContacts.includes(contact.id) ? "default" : "outline"}
                    onClick={() => toggleContactShare(contact.id)}
                  >
                    {sharedContacts.includes(contact.id) ? "Sharing" : "Share"}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Location History */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Recent Locations</h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-sm font-medium text-foreground">Downtown Area, Main Street</p>
                <p className="text-xs text-muted-foreground">Today at 2:30 PM</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-sm font-medium text-foreground">Coffee Shop, Oak Avenue</p>
                <p className="text-xs text-muted-foreground">Today at 11:45 AM</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-sm font-medium text-foreground">Home</p>
                <p className="text-xs text-muted-foreground">Today at 8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationTrackerPage;
