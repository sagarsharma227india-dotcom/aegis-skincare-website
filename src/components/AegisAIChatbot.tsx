import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';
import { chatService, ChatMessage } from '../services/chatService';
import { AegisMonogram } from './AegisMonogram';
import {
  Sparkles,
  X,
  Send,
  RotateCcw,
  ShoppingBag,
  ExternalLink,
  MessageSquare,
  Bot,
  User,
  ShieldAlert
} from 'lucide-react';

interface AegisAIChatbotProps {
  onSelectProduct: (productId: string) => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onOpenQuiz: () => void;
}

export const AegisAIChatbot: React.FC<AegisAIChatbotProps> = ({
  onSelectProduct,
  onAddToCart,
  onOpenQuiz
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Initial welcome message
  const initialMessages: ChatMessage[] = [
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: "Hi. I'm AEGIS AI. I can help you understand your skin, build a simple routine, or find the right AEGIS MEN products.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      quickActions: [
        'Build my routine',
        'I have acne',
        'My skin is dry',
        "I'm oily",
        'What should I use first?',
        'Explain an ingredient'
      ]
    }
  ];

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = sessionStorage.getItem('aegis_ai_chat_history');
      return saved ? JSON.parse(saved) : initialMessages;
    } catch {
      return initialMessages;
    }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Persist session messages
  useEffect(() => {
    try {
      sessionStorage.setItem('aegis_ai_chat_history', JSON.stringify(messages));
    } catch (e) {
      console.error(e);
    }
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || inputText.trim();
    if (!textToSend || isTyping) return;

    if (!overrideText) {
      setInputText('');
    }

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Natural typing delay for realistic interaction
    const delay = Math.min(1000, Math.max(400, textToSend.length * 15));

    setTimeout(async () => {
      try {
        const response = await chatService.sendMessage(textToSend, messages);
        const botMessage: ChatMessage = {
          id: `bot-${Date.now()}`,
          sender: 'assistant',
          text: response.message,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          recommendedProducts: response.recommendedProducts,
          quickActions: response.suggestedPrompts
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch {
        const errorMessage: ChatMessage = {
          id: `bot-err-${Date.now()}`,
          sender: 'assistant',
          text: "I experienced a brief connection glitch. As a baseline, our 3-step routine (Cleanse, Treat, Protect) is the best place to start. Would you like to take the Skin Quiz?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          quickActions: ['Take the Skin Quiz', 'Show me AEGIS WASH', 'Build my routine']
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    }, delay);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClearChat = () => {
    setMessages(initialMessages);
    try {
      sessionStorage.removeItem('aegis_ai_chat_history');
    } catch {}
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center">
        {!isOpen && (
          <button
            id="aegis-ai-open-btn"
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 px-4 py-3 bg-[#20231F] hover:bg-[#2B3029] text-[#F8F5EF] rounded-full shadow-lg border border-[#343A33] transition-all hover:scale-105 active:scale-95 focus:outline-hidden"
            aria-label="Open AEGIS AI Skincare Guide"
          >
            <div className="w-6 h-6 rounded-full bg-[#4B5848] flex items-center justify-center text-[#F8F5EF]">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <span className="block text-xs font-mono-spec tracking-wider font-semibold uppercase text-[#F8F5EF]">
                AEGIS AI
              </span>
              <span className="block text-[9px] text-[#A9B7B7] font-mono-spec">
                Skincare Guide
              </span>
            </div>
          </button>
        )}
      </div>

      {/* Chat Window Container */}
      {isOpen && (
        <div
          id="aegis-ai-chat-modal"
          role="dialog"
          aria-label="AEGIS AI Chat Window"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] h-[580px] max-h-[85vh] bg-[#F8F5EF] border border-[#CFC8BC] rounded-lg shadow-2xl flex flex-col overflow-hidden text-left"
        >
          {/* Header */}
          <div className="px-4 py-3.5 bg-[#20231F] text-[#F8F5EF] flex items-center justify-between border-b border-[#343A33]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4B5848] flex items-center justify-center text-[#F8F5EF] shadow-xs">
                <AegisMonogram size={16} color="#F8F5EF" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif-editorial text-sm font-semibold tracking-wide text-[#F8F5EF]">
                    AEGIS AI
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" title="Online" />
                </div>
                <p className="text-[10px] font-mono-spec text-[#A9B7B7] tracking-wider">
                  Your skincare guide.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                className="p-1.5 text-[#A9B7B7] hover:text-[#F8F5EF] rounded transition-colors"
                title="Reset conversation"
                aria-label="Clear chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                id="aegis-ai-close-btn"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#A9B7B7] hover:text-[#F8F5EF] rounded transition-colors"
                title="Close chat"
                aria-label="Close chat window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F8F5EF] text-xs leading-relaxed">
            {/* Clinical Notice Tag */}
            <div className="p-2.5 bg-[#F2EEE7] border border-[#CFC8BC] rounded-[4px] text-[10px] font-mono-spec text-[#5C625B] flex items-start gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-[#4B5848] shrink-0 mt-0.5" />
              <span>
                Educational guide based on AEGIS formulas. Not medical advice. For clinical skin conditions, consult a certified dermatologist.
              </span>
            </div>

            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#4B5848] text-[#F8F5EF] flex items-center justify-center shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-[6px] p-3 space-y-2.5 ${
                    msg.sender === 'user'
                      ? 'bg-[#20231F] text-[#F8F5EF] rounded-br-none'
                      : 'bg-[#F2EEE7] text-[#20231F] border border-[#CFC8BC] rounded-bl-none shadow-2xs'
                  }`}
                >
                  <div className="whitespace-pre-line text-xs font-normal leading-relaxed">
                    {msg.text}
                  </div>

                  {/* Recommended Products Card Grid */}
                  {msg.recommendedProducts && msg.recommendedProducts.length > 0 && (
                    <div className="pt-2 border-t border-[#CFC8BC]/60 space-y-2">
                      <span className="text-[9px] font-mono-spec font-bold uppercase tracking-wider text-[#4B5848] block">
                        RECOMMENDED FORMULATIONS
                      </span>
                      <div className="space-y-2">
                        {msg.recommendedProducts.map((product) => (
                          <div
                            key={product.id}
                            className="bg-[#F8F5EF] border border-[#CFC8BC] rounded-[4px] p-2.5 flex items-center gap-3 text-left"
                          >
                            <img
                              src={product.images.main}
                              alt={product.name}
                              className="w-12 h-12 object-cover rounded-[2px] bg-[#E8E1D6] shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <span className="text-[9px] font-mono-spec text-[#5C625B] block">
                                {product.stepNumber}
                              </span>
                              <h4 className="font-semibold text-xs text-[#20231F] truncate">
                                {product.name}
                              </h4>
                              <span className="text-[11px] font-mono-spec font-medium text-[#4B5848]">
                                ₹{product.price}
                              </span>
                            </div>

                            <div className="flex flex-col gap-1 shrink-0">
                              <button
                                onClick={() => {
                                  onSelectProduct(product.id);
                                  setIsOpen(false);
                                }}
                                className="px-2 py-1 bg-transparent hover:bg-[#E8E1D6] text-[#20231F] border border-[#CFC8BC] text-[9px] font-mono-spec rounded uppercase tracking-wider flex items-center gap-1"
                                title="Inspect formula"
                              >
                                <span>Inspect</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </button>
                              <button
                                onClick={() => onAddToCart(product, 1)}
                                className="px-2 py-1 bg-[#4B5848] hover:bg-[#394536] text-[#F8F5EF] text-[9px] font-mono-spec rounded uppercase tracking-wider flex items-center gap-1"
                                title="Add to Bag"
                              >
                                <ShoppingBag className="w-2.5 h-2.5" />
                                <span>Add</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Action Suggestion Chips */}
                  {msg.quickActions && msg.quickActions.length > 0 && (
                    <div className="pt-2 border-t border-[#CFC8BC]/50 flex flex-wrap gap-1.5">
                      {msg.quickActions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            if (action.toLowerCase().includes('quiz')) {
                              setIsOpen(false);
                              onOpenQuiz();
                            } else {
                              handleSend(action);
                            }
                          }}
                          className="px-2 py-1 bg-[#F8F5EF] hover:bg-[#E8E1D6] text-[#4B5848] border border-[#CFC8BC] rounded-full text-[10px] font-mono-spec tracking-tight transition-colors text-left"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-end text-[8px] font-mono-spec text-[#8F948C]">
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-[#20231F] text-[#F8F5EF] flex items-center justify-center shrink-0 mt-1">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-[#5C625B] text-xs font-mono-spec">
                <div className="w-6 h-6 rounded-full bg-[#4B5848] text-[#F8F5EF] flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-[#F2EEE7] border border-[#CFC8BC] rounded-full px-3 py-1.5 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#4B5848] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#4B5848] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-[#4B5848] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Chips (Above Input) */}
          <div className="px-3 py-2 bg-[#F2EEE7] border-t border-[#CFC8BC] flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-[10px] font-mono-spec">
            <span className="text-[#8F948C] text-[9px] uppercase tracking-wider shrink-0">Ask:</span>
            <button
              onClick={() => handleSend('Build my routine')}
              className="px-2 py-0.5 bg-[#F8F5EF] hover:bg-[#E8E1D6] border border-[#CFC8BC] rounded text-[#20231F] shrink-0"
            >
              Build Routine
            </button>
            <button
              onClick={() => handleSend('I have acne & oily skin')}
              className="px-2 py-0.5 bg-[#F8F5EF] hover:bg-[#E8E1D6] border border-[#CFC8BC] rounded text-[#20231F] shrink-0"
            >
              Acne / Oil
            </button>
            <button
              onClick={() => handleSend('My skin is dry after shaving')}
              className="px-2 py-0.5 bg-[#F8F5EF] hover:bg-[#E8E1D6] border border-[#CFC8BC] rounded text-[#20231F] shrink-0"
            >
              Razor Burn
            </button>
            <button
              onClick={() => handleSend('Tell me about sunscreen')}
              className="px-2 py-0.5 bg-[#F8F5EF] hover:bg-[#E8E1D6] border border-[#CFC8BC] rounded text-[#20231F] shrink-0"
            >
              SPF 50
            </button>
          </div>

          {/* Message Input Box */}
          <div className="p-3 bg-[#F8F5EF] border-t border-[#CFC8BC] flex items-end gap-2">
            <textarea
              ref={inputRef}
              id="aegis-ai-input"
              rows={1}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about skin concerns, ingredients, or routine..."
              className="flex-1 resize-none bg-white border border-[#CFC8BC] rounded-[4px] px-3 py-2 text-xs text-[#20231F] placeholder:text-[#8F948C] focus:outline-hidden focus:border-[#4B5848] max-h-24"
            />
            <button
              id="aegis-ai-send-btn"
              onClick={() => handleSend()}
              disabled={!inputText.trim() || isTyping}
              className="p-2.5 bg-[#4B5848] hover:bg-[#394536] disabled:opacity-40 disabled:hover:bg-[#4B5848] text-[#F8F5EF] rounded-[4px] transition-colors shrink-0"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
