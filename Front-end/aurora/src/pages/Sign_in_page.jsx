import React from "react";;
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/SignInPage.css";

export default function SignInPage() {
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();

        console.log("Signing in...")
        // navigate("/dashboard");
    };

    return (
        <div className="signin-page">
            <div className="signin-container">
                <h1 className="signin-title">Welcome Back</h1>
                <p>Sign In To Continue To Aurora</p>

                <form className="signin-form" onSubmit={handleSignIn}>
                    <input type="email" placeholder="Email" className="signin-input" required/>
                    <input type="password" placeholder="Password" className="signin-input" required/>
                    <Button variant="primary" type="submit">
                        Sign In 
                    </Button>
                </form>
            </div>
        </div>
    )
}


