import { Shield, MapPin, Radio, Heart, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "One Safeword. Instant Protection.",
      description:
        "Say your safe word and Aurora activates alarms, shares location, begins recording—no fumbling, no delays.",
    },
    {
      icon: MapPin,
      title: "Smart Location Sharing.",
      description:
        "Automatically shares your live location to trusted contacts and responders.",
    },
    {
      icon: Radio,
      title: "SOS Mode with Shield.",
      description:
        "Discreetly trigger alarms and protective measures, ensuring the phone is locked.",
    },
    {
      icon: Heart,
      title: "Personalized Safety Network.",
      description:
        "Choose who gets notified—friends, family, or emergency services—so help is always familiar.",
    },
    {
      icon: Lock,
      title: "Privacy First.",
      description:
        "Your data is encrypted and only shared when you decide—no safety without privacy.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-aurora relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-orchid/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute top-20 left-20 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-20 right-20 w-48 h-48 bg-orchid/25 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <nav className="relative z-10 container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-accent" />
          <span className="text-2xl font-quicksand font-bold">Aurora</span>
        </div>
        <Button
          variant="ghost"
          className="text-foreground hover:text-accent hover:bg-accent/10"
          onClick={() => navigate("/dashboard")}
        >
          Home
        </Button>
      </nav>

      <main className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-quicksand font-bold mb-6 leading-tight">
            YOUR <span className="text-gradient-purple">SAFETY</span>
            <br />
            IS <span className="text-gradient-purple">ONE WORD</span> AWAY
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card/40 backdrop-blur-lg border border-border/50 rounded-2xl p-6 hover:bg-card/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/10"
              >
                <div className="mb-4">
                  <Icon className="h-12 w-12 text-accent" />
                </div>
                <h3 className="text-xl font-quicksand font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-accent/20"
            onClick={() => navigate("/dashboard")}
          >
            Enter Dashboard
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;

