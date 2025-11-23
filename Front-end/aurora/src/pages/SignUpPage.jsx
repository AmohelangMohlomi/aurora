import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import "../Styles/SignUpPage.css";

export default function SignUpPage() {
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        navigate("/dashboard");
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h1 className="signup-title">Create Account</h1>
                <p className="signup-subtitle">Join Aurora and experience safety at its peak</p>

               <form className="signup-form" onSubmit={handleSignUp}>
                    <input type="email" placeholder="Email" className="signup-input" required/>
                    <input type="password" placeholder="Password" className="signup-input" required/>
                    <input type="password" placeholder="Confirm Password" className="signup-input" required/>
                    
                    <Button size="lg" type="submit">
                        Sign Up
                    </Button>
                </form>
                
                <p className="signup-footer">
                    Already have an account? <a href="/signin">Sign In</a>
                </p>
            </div>
        </div>
    )
}