{/*
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
*/}

import React, { useState } from "react";
import { X } from "lucide-react";

function linkify(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.split(urlRegex).map((part, i) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline break-words"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function ChatbotIcon() {
    const [isClicked, setIsClicked] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    const openBot = () => setIsClicked(!isClicked);

    // Function to call your backend mock AI
    async function sendMessageToBackend(message) {
        const res = await fetch("http://localhost:8000/api/ai/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message, category: selectedCategory }),
        });
        const data = await res.json();
        return data.reply;
    }

    // Handle category selection
    function handleCategorySelect(category) {
        setSelectedCategory(category);
    }

    // Handle sending message
    async function handleSendMessage() {
        if (!userInput.trim()) return;

        // Add user message
        const newMessages = [...messages, { sender: "user", text: userInput }];
        setMessages(newMessages);

        // Get bot reply
        const botReply = await sendMessageToBackend(userInput);

        // Add bot reply
        setMessages([...newMessages, { sender: "bot", text: botReply }]);
        setUserInput("");
    }

    return (
        <>
            {/* Chatbot icon button */}
            <button
                onClick={openBot}
                style={{
                    position: "fixed",
                    bottom: "2.5vh",
                    right: "2.5vw",
                    width: "4.75vw",
                    height: "4.75vw",
                    borderRadius: "50%",
                    backgroundColor: "#000000ff",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4vh 4vw 0.7vw rgba(255, 239, 8, 1)",
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="70%"
                    height="70%"
                    fill="white"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <g transform="translate(256 256) scale(1.5) translate(-256 -256)">
                        <circle cx="256" cy="256" r="80" fill="#fbe033ff" />
                        <ellipse cx="180" cy="260" rx="40" ry="60" fill="#fbe033ff" />
                        <ellipse cx="332" cy="260" rx="40" ry="60" fill="#fbe033ff" />
                        <circle cx="230" cy="240" r="10" fill="black" />
                        <circle cx="282" cy="240" r="10" fill="black" />
                        <circle cx="256" cy="280" r="12" fill="black" />
                    </g>
                </svg>
            </button>

            {/* Chat window */}
            {isClicked && (
                <div
                    className="fixed bottom-[100px] right-[50px] w-[300px] h-[520px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-[10px] flex flex-col"
                    style={{ zIndex: 9999 }}
                >
                    {/* Header */}
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

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                        {/* Welcome message */}
                        {messages.length === 0 && (
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
                                    <p className="text-sm text-gray-800 mb-3">
                                        Hello! I am your CSEE virtual assistant. To get started, please tell me what category you fall in:
                                    </p>
                                    {!selectedCategory && (
                                        <div className="flex flex-col gap-2">
                                            <button
                                                onClick={() => handleCategorySelect('undergraduate')}
                                                className="bg-yellow-50 hover:bg-yellow-200 text-black px-3 py-2 rounded text-xs font-semibold transition-colors border border-[#f5d820]"
                                            >
                                                Undergraduate
                                            </button>
                                            <button
                                                onClick={() => handleCategorySelect('graduate')}
                                                className="bg-yellow-50 hover:bg-yellow-200 text-black px-3 py-2 rounded text-xs font-semibold transition-colors border border-[#f5d820]"
                                            >
                                                Graduate
                                            </button>
                                            <button
                                                onClick={() => handleCategorySelect('faculty')}
                                                className="bg-yellow-50 hover:bg-yellow-200 text-black px-3 py-2 rounded text-xs font-semibold transition-colors border border-[#f5d820]"
                                            >
                                                Faculty
                                            </button>
                                        </div>
                                    )}
                                    {selectedCategory && (
                                        <p className="text-xs text-gray-700">Selected: <strong>{selectedCategory}</strong></p>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Dynamic chat messages */}
                        {messages.map((msg, index) =>
                            msg.sender === "user" ? (
                                <div key={index} className="flex justify-end mb-3">
                                    <div className="bg-black text-white p-3 rounded-lg max-w-[80%]">
                                        <p className="text-sm">{linkify(msg.text)}</p>
                                    </div>
                                </div>
                            ) : (
                                <div key={index} className="flex items-start gap-2 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0 p-1">
                                        {/* Mascot icon */}
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
                                    <div className="bg-[#fbe033] p-3 rounded-lg border border-[#f5d820] max-w-[80%]">
                                        <p className="text-sm">{linkify(msg.text)}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200 flex gap-2">
                        <input
                        type="text"
                        placeholder="Type your message..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                        disabled={!selectedCategory}
                        className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-sm ${
                            !selectedCategory
                            ? "bg-gray-100 cursor-not-allowed border-gray-200"
                            : "bg-white border-gray-300 focus:ring-[#fbe033]"
                        }`}
                        />
                        <button
                        onClick={handleSendMessage}
                        disabled={!selectedCategory}
                        className="bg-[#f5d820] hover:bg-[#fbe033] px-4 py-2 rounded-lg text-black font-semibold disabled:opacity-50"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
