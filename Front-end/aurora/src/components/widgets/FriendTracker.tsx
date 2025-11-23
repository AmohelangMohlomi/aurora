import { Users, Circle } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const FriendTracker = () => {
  const friends = [
    { name: "Sarah M.", status: "safe", initials: "SM" },
    { name: "Alex J.", status: "safe", initials: "AJ" },
    { name: "Emma K.", status: "moderate", initials: "EK" },
  ];

  const getStatusColor = (status: string) => {
    if (status === "safe") return "text-green-500";
    if (status === "moderate") return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg">Safety Circle</h3>
      </div>

      <div className="space-y-3">
        {friends.map((friend, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-all cursor-pointer"
          >
            <Avatar>
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {friend.initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium">{friend.name}</p>
              <p className="text-sm text-muted-foreground capitalize">{friend.status}</p>
            </div>
            <Circle className={`w-3 h-3 fill-current ${getStatusColor(friend.status)}`} />
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-all">
        View All Contacts
      </button>
    </div>
  );
};

export default FriendTracker;
