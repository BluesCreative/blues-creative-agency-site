import { useState, useEffect, useRef } from 'react';
import { Send, Loader2, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';

const translations = {
  es: {
    title: 'Asistente IA',
    placeholder: 'Escribe tu pregunta...',
    send: 'Enviar',
    close: 'Cerrar',
    welcome: 'Hola! Soy el asistente de Blue\'s Creative Agency. ¿En qué puedo ayudarte?',
  },
  en: {
    title: 'AI Assistant',
    placeholder: 'Type your question...',
    send: 'Send',
    close: 'Close',
    welcome: 'Hi! I\'m the Blue\'s Creative Agency assistant. How can I help you?',
  },
};

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChat() {
  const { language } = useLanguage();
  const t = translations[language];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: t.welcome,
    },
  ]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const createSessionMutation = trpc.chat.createSession.useQuery(undefined, {
    enabled: !sessionId,
  });

  const getHistoryQuery = trpc.chat.getHistory.useQuery(
    { sessionId },
    {
      enabled: !!sessionId && isOpen,
    }
  );

  const sendMessageMutation = trpc.chat.sendMessage.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: data.message,
        },
      ]);
    },
  });

  useEffect(() => {
    if (createSessionMutation.data?.sessionId && !sessionId) {
      setSessionId(createSessionMutation.data.sessionId);
    }
  }, [createSessionMutation.data, sessionId]);

  useEffect(() => {
    if (getHistoryQuery.data && getHistoryQuery.data.length > 0) {
      const loadedMessages = getHistoryQuery.data.map((msg) => ({
        id: msg.id.toString(),
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
      }));
      setMessages([
        {
          id: '0',
          role: 'assistant',
          content: t.welcome,
        },
        ...loadedMessages,
      ]);
    }
  }, [getHistoryQuery.data]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || !sessionId || sendMessageMutation.isPending) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    sendMessageMutation.mutate({
      sessionId,
      message: input,
      language: language as 'es' | 'en',
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3 md:p-4 rounded-full bg-primary-blue hover:bg-primary-blue/90 text-background shadow-lg glow-blue-lg transition-smooth hover:scale-110 transform"
          aria-label="Open chat"
        >
          <MessageCircle size={20} className="md:w-6 md:h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-h-96 md:max-h-[32rem] rounded-lg bg-card border border-border shadow-2xl flex flex-col overflow-hidden max-w-[calc(100vw-2rem)]">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-blue to-primary-blue/80 text-background">
            <h3 className="font-title font-bold">{t.title}</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded transition-smooth"
              aria-label={t.close}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary-blue text-background rounded-br-none'
                      : 'bg-card border border-border text-foreground rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            ))}

            {sendMessageMutation.isPending && (
              <div className="flex justify-start">
                <div className="bg-card border border-border text-foreground px-4 py-2 rounded-lg rounded-bl-none">
                  <Loader2 className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 md:p-4 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.placeholder}
              disabled={sendMessageMutation.isPending || !sessionId}
              className="bg-background border-border focus:border-primary-blue text-sm"
            />
            <Button
              onClick={handleSend}
              disabled={sendMessageMutation.isPending || !sessionId || !input.trim()}
              className="bg-primary-blue hover:bg-primary-blue/90 text-background px-2 md:px-3"
              size="sm"
            >
              {sendMessageMutation.isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
