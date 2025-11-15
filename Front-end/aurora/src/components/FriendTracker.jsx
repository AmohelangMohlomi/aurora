import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Users, Share2, Clock, Copy, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { showAlert } from "./AlertSystem";

const FriendTracker = () => {
  const [selectedContact, setSelectedContact] = useState("");
  const [isSharingLocation, setIsSharingLocation] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [lastShared, setLastShared] = useState(null);
  const [linkCopied, setLinkCopied] = useState(false);

  const contacts = [
    { id: "1", name: "Mom", relationship: "Mother" },
    { id: "2", name: "Sarah Johnson", relationship: "Best Friend" },
    { id: "3", name: "Dr. Lisa Chen", relationship: "Therapist" },
    { id: "4", name: "Emergency Services", relationship: "Support Line" },
  ];

  const generateSecureLink = () => {
    const token = Math.random().toString(36).substring(2, 15);
    return `https://aurora.app/track/${token}`;
  };

  const handleToggleSharing = (enabled) => {
    setIsSharingLocation(enabled);

    if (enabled && selectedContact) {
      const link = generateSecureLink();
      setShareLink(link);
      setLastShared(new Date());

      const contactName = contacts.find((c) => c.id === selectedContact)?.name;
      showAlert({
        type: "safe",
        title: "Location Sharing Active",
        message: `Now sharing your location with ${contactName}`,
      });
    } else if (!enabled) {
      showAlert({
        type: "info",
        title: "Location Sharing Stopped",
        message: "Your location is no longer being shared.",
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    setLinkCopied(true);
    showAlert({
      type: "info",
      title: "Link Copied",
      message: "Share this link with your trusted contact.",
    });
    setTimeout(() => setLinkCopied(false), 2000);
  };

  return (
    <Card className="glass-card p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-lg md:text-xl font-quicksand font-semibold text-foreground">
          Safety Network
        </h3>
        <Users className="h-5 w-5 text-accent" aria-hidden="true" />
      </div>

      <div className="space-y-6">
/* Contact Selection */
        <div className="space-y-2">
          <label className="text-sm font-semibold text-muted-foreground">
            Select Contact
          </label>
          <Select value={selectedContact} onValueChange={setSelectedContact}>
            <SelectTrigger className="bg-background/50">
              <SelectValue placeholder="Choose a trusted contact" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border z-50">
              {contacts.map((contact) => (
                <SelectItem key={contact.id} value={contact.id}>
                  <div className="flex flex-col items-start">
                    <span className="font-semibold">{contact.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {contact.relationship}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

/* Sharing Toggle */
        <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
          <div className="flex items-center gap-3">
            <Share2 className="h-5 w-5 text-accent" />
            <div>
              <p className="font-semibold text-sm">Share Location</p>
              <p className="text-xs text-muted-foreground">
                {isSharingLocation ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
          <Switch
            checked={isSharingLocation}
            onCheckedChange={handleToggleSharing}
            disabled={!selectedContact}
          />
        </div>

/* Status Display */
        {isSharingLocation && selectedContact && (
          <div className="space-y-3 p-4 bg-safe/10 border border-safe/20 rounded-lg animate-fade-in">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-sm mb-1">
                  Sharing with {contacts.find((c) => c.id === selectedContact)?.name}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>
                    Started {lastShared?.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Secure Link */}
            {shareLink && (
              <div className="space-y-2">
                <label className="text-xs font-semibold text-muted-foreground">
                  Secure Share Link
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={shareLink}
                    readOnly
                    className="flex-1 px-3 py-2 bg-background/50 border border-border rounded text-xs font-mono"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-3 py-2 bg-primary hover:bg-primary/90 rounded transition-colors"
                  >
                    {linkCopied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default FriendTracker;

