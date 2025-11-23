import { Link } from "react-router-dom";
import { Shield, MapPin, Users, Volume2, Bell, Heart, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const Landing = () => {
  const features = [
    {
      icon: Shield,
      title: "Safety Meter",
      description: "Real-time safety assessment based on your location and surroundings",
    },
    {
      icon: MapPin,
      title: "Location Tracking",
      description: "Share your location with trusted contacts for added security",
    },
    {
      icon: Users,
      title: "Friend Network",
      description: "Stay connected with your safety circle and check their status",
    },
    {
      icon: Volume2,
      title: "Audio Detection",
      description: "Smart audio monitoring for potential threats",
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Quick SOS mode to alert emergency contacts immediately",
    },
    {
      icon: Heart,
      title: "Support Resources",
      description: "Access to professional help and support services 24/7",
    },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="relative">
            {/* Animated decorative shapes */}
            <div className="absolute -top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -top-10 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
            
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 relative z-10">
              Your Personal
              <span className="block text-gradient">Safety Companion</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
              Aurora keeps you connected, protected, and empowered. Access emergency resources, 
              share your location, and stay safe wherever you go.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-primary text-white font-semibold px-8 hover:shadow-lg transition-all">
                  Get Started
                </Button>
              </Link>
              <Link to="/help-resources">
                <Button size="lg" variant="outline" className="font-semibold px-8">
                  View Resources
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl mb-4">
              Everything You Need to
              <span className="text-gradient"> Stay Safe</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive safety features designed with your security and peace of mind in focus
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-12 rounded-3xl text-center">
            <Lock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-heading font-bold text-4xl mb-4">
              Your Safety,
              <span className="text-gradient"> Your Control</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Take charge of your personal safety with Aurora. Join thousands who trust us 
              to keep them safe and connected.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="gradient-primary text-white font-semibold px-8 hover:shadow-lg transition-all">
                Start Protecting Yourself
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
