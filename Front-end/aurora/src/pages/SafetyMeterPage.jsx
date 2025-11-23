import Header from "@/components/Header";
import { Shield, TrendingUp, MapPin, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SafetyMeterPage = () => {
  const safetyLevel = 85;

  const getSafetyColor = (level) => {
    if (level >= 80) return "text-green-400";
    if (level >= 50) return "text-yellow-400";
    return "text-red-400";
  };

  const getSafetyText = (level) => {
    if (level >= 80) return "Safe";
    if (level >= 50) return "Moderate";
    return "Alert";
  };

  const factors = [
    { icon: MapPin, label: "Location Safety", value: 90, color: "bg-green-400" },
    { icon: Clock, label: "Time of Day", value: 85, color: "bg-green-400" },
    { icon: TrendingUp, label: "Activity Pattern", value: 80, color: "bg-yellow-400" },
  ];

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="font-heading font-bold text-4xl mb-2 text-foreground">
              Safety Meter
            </h1>
            <p className="text-muted-foreground">
              Real-time safety assessment based on multiple factors
            </p>
          </div>

          {/* Main Safety Score */}
          <div className="glass-card p-8 rounded-2xl mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/20">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-heading font-semibold text-2xl text-foreground">Current Safety Level</h2>
            </div>
            
            <div className="text-center py-8">
              <div className={`text-8xl font-heading font-bold mb-4 ${getSafetyColor(safetyLevel)}`}>
                {safetyLevel}%
              </div>
              <p className="text-2xl text-muted-foreground mb-6">{getSafetyText(safetyLevel)}</p>
              <Progress value={safetyLevel} className="h-4 mb-4" />
              <p className="text-sm text-muted-foreground">
                Your safety score is calculated using location data, time of day, and activity patterns
              </p>
            </div>
          </div>

          {/* Safety Factors */}
          <div className="glass-card p-6 rounded-2xl mb-6">
            <h3 className="font-heading font-semibold text-xl mb-6 text-foreground">Contributing Factors</h3>
            <div className="space-y-6">
              {factors.map((factor, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <factor.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{factor.label}</span>
                    </div>
                    <span className="font-semibold text-primary">{factor.value}%</span>
                  </div>
                  <Progress value={factor.value} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">Safety Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-foreground">Stay in well-lit areas and avoid shortcuts through isolated spaces</p>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-foreground">Keep your phone charged and ensure location sharing is enabled</p>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30">
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-foreground">Trust your instincts and don't hesitate to contact emergency services if needed</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SafetyMeterPage;
