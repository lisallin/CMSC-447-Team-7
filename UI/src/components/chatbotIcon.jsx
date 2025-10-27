import React from "react";
import { useState } from "react";
import ChatbotIconPNG from '../assets/icons/chatbotIcon.png'

export default function ChatbotIcon() {
    const [isClicked, setIsClicked] = useState(false);

    const openBot = () => setIsClicked(!isClicked);

    return (
        <>
            <button
                onClick={openBot}
                style={{
                    position: "fixed",
                    bottom: "50px",
                    right: "50px",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "#000000ff",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 20px 50px rgba(255, 239, 8, 0.99)",
                }}
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="100%"
                    height="100%"
                    fill="white"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g transform="translate(256 256) scale(2.2) translate(-256 -256)">
                    <circle cx="256" cy="256" r="80" fill="#fbe033ff" />
                    <ellipse cx="180" cy="260" rx="40" ry="60" fill="#fbe033ff" />
                    <ellipse cx="332" cy="260" rx="40" ry="60" fill="#fbe033ff" />
                    <circle cx="230" cy="240" r="10" fill="black" />
                    <circle cx="282" cy="240" r="10" fill="black" />
                    <circle cx="256" cy="280" r="12" fill="black" />
                    </g>
                </svg>
            </button>

            {/*if isClicked is true and only true*/}
            {/*chatbot window box*/}
            {isClicked && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "100px",
                        right: "50px",
                        width: "300px",
                        height: "500px",
                        backgroundColor: "#ffffffff",
                        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                </div>
            )}
        </>
    );
}