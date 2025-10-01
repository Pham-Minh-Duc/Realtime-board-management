
"use client";

import React from "react";

export default function Button({ label, onClick, className, type = "button", disabled = false }) {
    return(
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white h-10 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:opacity-50 ${className}`}
            disabled={disabled}
        >
            {label}
        </button>
    );
}