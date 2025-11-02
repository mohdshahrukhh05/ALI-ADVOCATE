import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Button } from './common/Button';

interface AIChatProps {
    onBack: () => void;
}

interface Message {
    role: 'user' | 'model';
    content: string;
}

const SYSTEM_INSTRUCTION = `You are a helpful legal AI assistant for a law firm in India called "Advocate Ali & Associates". Your goal is to provide general, preliminary information about Indian law based on user questions.
You must adhere to the following rules:
1.  Your knowledge is based on Indian legal frameworks. If a question is ambiguous, assume it pertains to India.
2.  You are an AI assistant, NOT a licensed advocate. You CANNOT give legal advice.
3.  Every response, without exception, must end with the following disclaimer, formatted exactly as below:
"---
**Disclaimer:** This is AI-generated information and should not be considered legal advice. Legal situations are complex and nuanced. Please consult with a qualified advocate for advice tailored to your specific circumstances."`;

export const AIChat: React.FC<AIChatProps> = ({ onBack }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatContainerRef.current?.scrollTo(0, chatContainerRef.current.scrollHeight);
    }, [messages]);
    
    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: 'user', content: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);
        setError('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const contents = newMessages.map(msg => ({
                role: msg.role,
                parts: [{ text: msg.content }]
            }));

            const responseStream = await ai.models.generateContentStream({
                model: 'gemini-2.5-flash',
                contents: contents,
                config: {
                    systemInstruction: SYSTEM_INSTRUCTION,
                }
            });

            let text = '';
            setMessages(prev => [...prev, { role: 'model', content: '' }]);

            for await (const chunk of responseStream) {
                text += chunk.text;
                setMessages(prev => {
                    const lastMsgIndex = prev.length - 1;
                    const updated = [...prev];
                    updated[lastMsgIndex] = { ...updated[lastMsgIndex], content: text };
                    return updated;
                });
            }

        } catch (e) {
            console.error(e);
            setError('Sorry, something went wrong. Please try again.');
            setMessages(prev => [...prev, {role: 'model', content: 'I am unable to respond at the moment.'}])
        } finally {
            setIsLoading(false);
        }
    };
    
     const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isLoading) {
            handleSend();
        }
    };


    return (
        <div className="min-h-screen bg-stone-100 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-3xl h-[90vh] bg-white rounded-2xl shadow-xl flex flex-col">
                <header className="p-4 border-b flex justify-between items-center bg-gray-50 rounded-t-2xl">
                    <h2 className="text-2xl font-bold text-gray-800 font-serif">AI Legal Assistant</h2>
                     <Button onClick={onBack} variant="secondary" size="sm">
                        Back
                    </Button>
                </header>
                <div ref={chatContainerRef} className="flex-1 p-6 space-y-4 overflow-y-auto bg-white">
                     <div className="flex justify-start">
                        <div className="max-w-lg p-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                            <p>Hello! I am an AI assistant from Advocate Ali & Associates. How can I help you with general questions about Indian law today?</p>
                        </div>
                    </div>
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-lg p-3 rounded-2xl ${msg.role === 'user' ? 'bg-amber-700 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                <p style={{ whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: msg.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') }}></p>
                            </div>
                        </div>
                    ))}
                     {isLoading && messages[messages.length-1].role === 'user' && (
                        <div className="flex justify-start">
                            <div className="max-w-lg p-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {error && <p className="text-red-600 px-6 pb-2 text-sm">{error}</p>}
                <div className="p-4 border-t bg-white rounded-b-2xl">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask a legal question..."
                            disabled={isLoading}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-700 disabled:bg-gray-100"
                        />
                        <Button onClick={handleSend} disabled={isLoading} size="lg">
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};