import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Folder, File, Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HiddenApp = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [tapCount, setTapCount] = useState(0);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Triple tap detection
  useEffect(() => {
    let tapTimer;

    const handleClick = () => {
      setTapCount((prev) => prev + 1);
      clearTimeout(tapTimer);
      tapTimer = setTimeout(() => setTapCount(0), 500);
    };

    if (isLocked) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
      clearTimeout(tapTimer);
    };
  }, [isLocked]);

  useEffect(() => {
    if (tapCount >= 3) {
      setIsLocked(false);
      setTapCount(0);
    }
  }, [tapCount]);

  // Emergency exit with ESC key or double-click
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        navigate("/dashboard");
      }
    };

    let clickTimer;
    let clickCount = 0;

    const handleDoubleClick = () => {
      clickCount++;
      if (clickCount === 2) {
        navigate("/dashboard");
      }
      clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, 300);
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("dblclick", handleDoubleClick);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("dblclick", handleDoubleClick);
      clearTimeout(clickTimer);
    };
  }, [navigate]);

  const handleUnlock = () => {
    if (password === "safe") {
      setIsLocked(false);
    }
  };

  const fakeFiles = [
    { name: "Documents", type: "folder" },
    { name: "Photos", type: "folder" },
    { name: "Downloads", type: "folder" },
    { name: "report_2024.pdf", type: "file" },
    { name: "notes.txt", type: "file" },
    { name: "budget.xlsx", type: "file" },
  ];

  if (isLocked) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        <div className="max-w-md mx-auto mt-20">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <Lock className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                File Manager
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Triple-tap anywhere or enter password to access
              </p>
            </div>

            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                className="w-full"
              />
              <Button onClick={handleUnlock} className="w-full">
                Unlock
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 text-center">
                Demo password: "safe"
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="glass-card p-6 rounded-2xl mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Unlock className="w-6 h-6 text-primary" />
              <h1 className="font-heading font-bold text-2xl">
                Aurora <span className="text-gradient">Safety Dashboard</span>
              </h1>
            </div>
            <Button onClick={() => navigate("/dashboard")} className="gradient-primary text-white">
              Go to Dashboard
            </Button>
          </div>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <p className="text-muted-foreground mb-6">
            This is the hidden safety app. From the outside, it looks like a regular file browser.
            Press ESC or double-click anywhere to exit quickly.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {fakeFiles.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center gap-2">
                  {item.type === "folder" ? (
                    <Folder className="w-12 h-12 text-primary" />
                  ) : (
                    <File className="w-12 h-12 text-muted-foreground" />
                  )}
                  <p className="text-sm font-medium text-center">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiddenApp;