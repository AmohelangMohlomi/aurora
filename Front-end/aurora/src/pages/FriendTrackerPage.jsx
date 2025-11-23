import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, MapPin, Clock } from "lucide-react";

const FriendTrackerPage = () => {
  const friends = [
    { 
      id: 1, 
      name: "Sarah M.", 
      status: "safe", 
      location: "Downtown",
      lastSeen: "2 mins ago",
      color: "bg-green-400"
    },
    { 
      id: 2, 
      name: "Emma K.", 
      status: "safe", 
      location: "Coffee Shop",
      lastSeen: "15 mins ago",
      color: "bg-green-400"
    },
    { 
      id: 3, 
      name: "John D.", 
      status: "unknown", 
      location: "Unknown",
      lastSeen: "3 hours ago",
      color: "bg-yellow-400"
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl mb-2 text-foreground">
              Safety Circle
            </h1>
            <p className="text-muted-foreground">
              Monitor the safety status of your trusted contacts
            </p>
          </div>

          {/* Add Friend Button */}
          <div className="mb-6">
            <Button className="gradient-primary text-primary-foreground w-full md:w-auto">
              <UserPlus className="w-5 h-5 mr-2" />
              Add to Safety Circle
            </Button>
          </div>

          {/* Friends List */}
          <div className="glass-card p-6 rounded-2xl mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/20">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-xl text-foreground">Your Safety Circle</h2>
            </div>

            <div className="space-y-4">
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  className="glass-card p-4 rounded-xl hover:scale-102 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-primary font-semibold text-lg">
                            {friend.name.charAt(0)}
                          </span>
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${friend.color} rounded-full border-2 border-background`}></div>
                      </div>
                      
                      <div>
                        <h3 className="font-heading font-semibold text-lg text-foreground">{friend.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{friend.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{friend.lastSeen}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                      <Button size="sm" className="gradient-primary text-primary-foreground">
                        Check In
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-heading font-bold text-green-400 mb-2">
                {friends.filter(f => f.status === "safe").length}
              </div>
              <p className="text-sm text-muted-foreground">Members Safe</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-heading font-bold text-primary mb-2">
                {friends.length}
              </div>
              <p className="text-sm text-muted-foreground">Total Members</p>
            </div>
            
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="text-4xl font-heading font-bold text-yellow-400 mb-2">
                {friends.filter(f => f.status === "unknown").length}
              </div>
              <p className="text-sm text-muted-foreground">Check-ins Needed</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FriendTrackerPage;
