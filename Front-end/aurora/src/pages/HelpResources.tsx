import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, MapPin, Heart, Shield, Search } from "lucide-react";
import { useState } from "react";

const HelpResources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOffline] = useState(false);

  const resources = [
    {
      icon: Phone,
      title: "National Domestic Violence Hotline",
      phone: "1-800-799-7233",
      description: "24/7 support for domestic violence victims",
      category: "Emergency",
    },
    {
      icon: Heart,
      title: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "Free 24/7 crisis support via text",
      category: "Crisis Support",
    },
    {
      icon: Shield,
      title: "National Sexual Assault Hotline",
      phone: "1-800-656-4673",
      description: "Confidential support from trained staff",
      category: "Support",
    },
    {
      icon: Phone,
      title: "Emergency Services",
      phone: "911",
      description: "Immediate emergency response",
      category: "Emergency",
    },
    {
      icon: MapPin,
      title: "Local Police (Non-Emergency)",
      phone: "311",
      description: "Non-emergency police services",
      category: "Local Support",
    },
    {
      icon: Heart,
      title: "Mental Health Crisis Line",
      phone: "1-800-273-8255",
      description: "24/7 mental health support and crisis intervention",
      category: "Mental Health",
    },
  ];

  const filteredResources = resources.filter(
    (resource) =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen gradient-bg">
      <Header />

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl mb-2">
              <span className="text-gradient">Help Resources</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Access professional support and emergency services 24/7
            </p>
          </div>

          {isOffline && (
            <div className="glass-card p-4 rounded-xl mb-6 bg-yellow-500/10 border-yellow-500/20">
              <p className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">
                You're currently offline. Some features may be limited.
              </p>
            </div>
          )}

          {/* Search Bar */}
          <div className="glass-card p-4 rounded-2xl mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search resources by name or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-102 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <resource.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-heading font-semibold text-lg leading-tight">
                        {resource.title}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                        {resource.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {resource.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <Button className="gradient-primary text-white flex-1">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                      <p className="font-mono font-semibold text-sm text-primary">
                        {resource.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No resources found matching your search.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HelpResources;