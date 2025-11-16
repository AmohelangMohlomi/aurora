import React from 'react';
import '../Styles/Buttons.css'

export default function Button({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
}) {
    return (
        <button className={`button ${variant}-button`}
        type={type}
        onClick={onClick}
        disabled={disabled}
        >
            {children}
        </button>
    );
}