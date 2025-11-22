import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

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
                    width="60%"
                    height="60%"
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

            {isClicked && (
                <div 
                    className="fixed bottom-[100px] right-[50px] w-[300px] h-[520px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-[10px] flex flex-col"
                    style={{ zIndex: 9999 }}
                >
                    <div className="p-4 bg-[#f5d820] text-black rounded-t-lg flex items-center justify-between">
                        <h3 className="font-semibold">AI Assistant</h3>
                        <button
                            onClick={() => setIsClicked(false)}
                            className="text-black hover:text-gray-700 transition-colors bg-[#e5c810] hover:bg-[#d5b800] rounded p-1"
                            aria-label="Close chat"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        <div className="flex items-start gap-2 mb-3">
                            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    width="70%"
                                    height="70%"
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
                            </div>
                            <div className="bg-[#fbe033] rounded-lg p-3 border border-[#f5d820] flex-1">
                                <p className="text-sm text-gray-800">Hello! I am your CSEE virtual assistant. How can I help you today?</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fbe033] text-sm"
                        />
                    </div>
                </div>
            )}
        </>
    );
}