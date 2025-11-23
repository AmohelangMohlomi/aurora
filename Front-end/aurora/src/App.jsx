import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import HelpResources from "./pages/HelpResources";
import HiddenApp from "./pages/HiddenApp";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import SafetyMeterPage from "./pages/SafetyMeterPage";
import LocationTrackerPage from "./pages/LocationTrackerPage";
import FriendTrackerPage from "./pages/FriendTrackerPage";
import AudioMonitorPage from "./pages/AudioMonitorPage";
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/help-resources" element={<HelpResources />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/safety-meter" element={<SafetyMeterPage />} />
          <Route path="/location-tracker" element={<LocationTrackerPage />} />
          <Route path="/safety-circle" element={<FriendTrackerPage />} />
          <Route path="/audio-monitor" element={<AudioMonitorPage />} />
          <Route path="/hidden" element={<HiddenApp />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
