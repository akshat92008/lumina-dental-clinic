import { MessageSquareText, Phone, Send, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function FloatingWidgets() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hello! I'm Lumina's AI Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isChatOpen]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMsg = input.trim();
        setInput("");
        setMessages(prev => [...prev, { role: "user", content: userMsg }]);
        setIsLoading(true);

        try {
            const baseUrl = import.meta.env.VITE_API_URL || "";
            const res = await fetch(`${baseUrl}/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMsg })
            });

            if (!res.ok) throw new Error("Network response was not ok");

            const data = await res.json();
            setMessages(prev => [...prev, { role: "assistant", content: data.reply || "I'm sorry, I encountered an error." }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "I'm having trouble connecting right now. Please try calling us directly."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* WhatsApp Button - Bottom Left */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
                aria-label="Chat on WhatsApp"
            >
                <Phone className="w-6 h-6 fill-current" />
            </a>

            {/* AI Assistant Chat Widget - Bottom Right */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
                <AnimatePresence>
                    {isChatOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className="bg-white border border-brand-light rounded-2xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col"
                        >
                            <div className="bg-brand-navy text-white p-4 flex justify-between items-center shadow-md z-10">
                                <div className="font-bold flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></div>
                                    AI Dental Assistant
                                </div>
                                <button
                                    onClick={() => setIsChatOpen(false)}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="p-4 h-80 bg-slate-50 flex flex-col gap-3 overflow-y-auto w-full">
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`p-3 rounded-2xl text-sm max-w-[85%] shadow-sm ${msg.role === "assistant"
                                            ? "bg-white border border-brand-light text-text-dark self-start rounded-tl-none"
                                            : "bg-brand-teal text-brand-navy self-end rounded-tr-none"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="bg-white border border-brand-light p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-text-muted self-start flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin text-brand-teal" />
                                        Typing...
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>

                            <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-brand-light border border-white/10 focus:border-brand-teal rounded-full px-4 py-2 text-sm outline-none transition-colors"
                                    disabled={isLoading}
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim() || isLoading}
                                    className="w-10 h-10 rounded-full bg-brand-teal hover:bg-brand-aqua disabled:bg-brand-light/50 disabled:text-text-muted disabled:cursor-not-allowed text-brand-navy flex items-center justify-center transition-colors shrink-0"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className="bg-brand-teal text-brand-navy p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-brand-aqua hover:scale-105 transition-all flex items-center justify-center animate-bounce-slow"
                    aria-label="Open AI Assistant"
                >
                    <MessageSquareText className="w-6 h-6" />
                </button>
            </div>
        </>
    );
}
