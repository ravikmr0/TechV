import { Card } from "@/components/ui/card";
import { Bot, MessageSquare, Sparkles } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AIDemo() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm your AI assistant. How can I help you today?",
    },
  ]);

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience AI in Action
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Try our interactive AI demo and see how it can transform your
            business
          </p>
        </div>

        <Card className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border-slate-800">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Bot className="w-6 h-6 text-indigo-400" />
              <h3 className="text-xl font-semibold text-white">
                AI Assistant Demo
              </h3>
            </div>

            <div className="space-y-4 mb-6 min-h-[200px] max-h-[300px] overflow-y-auto">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-2 ${message.role === "assistant" ? "text-indigo-300" : "text-white"}`}
                >
                  {message.role === "assistant" ? (
                    <Bot className="w-6 h-6 mt-1" />
                  ) : (
                    <MessageSquare className="w-6 h-6 mt-1" />
                  )}
                  <p className="text-sm">{message.content}</p>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <Input
                placeholder="Type your message..."
                className="flex-1 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
              />
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Try AI
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
