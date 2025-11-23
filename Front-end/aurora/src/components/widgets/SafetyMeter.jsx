import { Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const SafetyMeter = () => {
  const safetyLevel = 85;

  const getSafetyColor = (level) => {
    if (level >= 80) return "text-green-500";
    if (level >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  const getSafetyText = (level) => {
    if (level >= 80) return "Safe";
    if (level >= 50) return "Moderate";
    return "Alert";
  };

  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Shield className="w-5 h-5 text-primary" />
        </div>
        <h3 className="font-heading font-semibold text-lg">Safety Meter</h3>
      </div>
      
      <div className="text-center py-6">
        <div className={`text-6xl font-heading font-bold mb-2 ${getSafetyColor(safetyLevel)}`}>
          {safetyLevel}%
        </div>
        <p className="text-muted-foreground mb-4">{getSafetyText(safetyLevel)}</p>
        <Progress value={safetyLevel} className="h-2" />
      </div>

      <div className="mt-4 p-4 rounded-lg bg-secondary/50">
        <p className="text-sm text-muted-foreground">
          Based on location data, time of day, and nearby activity patterns
        </p>
      </div>
    </div>
  );
};

export default SafetyMeter;
