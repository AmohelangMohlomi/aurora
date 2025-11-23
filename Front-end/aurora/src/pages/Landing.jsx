import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "../Styles/Landing.css";

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <div className="landing-page">
      <header>
        <img src="/images/AuroraLogo.png" alt="Aurora logo" className="logo" />
        <h1>Aurora</h1>
        <p>Safety reinvented</p>

        <Button size="lg" onClick={handleGetStarted}>
          Get Started
        </Button>
      </header>
    </div>
  );
};

export default Landing;
