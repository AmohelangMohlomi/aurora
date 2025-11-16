import React from 'react';
import Button from '../components/Button.jsx';
import { useNavigate } from 'react-router-dom';

export default function LandingPage(){
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/signup");
    }

    return (
        <div className='landing-page'>
            <header>
                <img src='/images/AuroraLogo.png' alt='Aurora logo' className='logo'/>
                <h1>Aurora</h1>
                <p>Safety reinvented</p>

                <Button variant="primary" onClick={handleGetStarted}>
                    Get Started
                </Button>
            </header>
        </div>
    )
}

