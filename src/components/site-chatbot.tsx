"use client";

import Link from "next/link";
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { siteConfig } from "@/config/site";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi, I am SitesBrand Guide. Tell me what you want to improve and I will point you in the right direction.",
};

const quickPrompts = [
  "Which service fits my goal?",
  "How does your process work?",
  "Can I get a free audit?",
] as const;

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.4 5.25h11.2A2.9 2.9 0 0 1 20.5 8.1v6.6a2.9 2.9 0 0 1-2.9 2.9h-6.7l-4.65 3v-3.05A2.9 2.9 0 0 1 3.5 14.7V8.1a2.9 2.9 0 0 1 2.9-2.85Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.4h.01M12 11.4h.01M16 11.4h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m4 4 17 8-17 8 3-8-3-8Zm3 8h14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading, open]);

  useEffect(() => {
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  async function sendMessage(value: string) {
    const trimmed = value.trim().slice(0, 500);
    if (!trimmed || loading) return;

    messageIdRef.current += 1;
    const userMessage: ChatMessage = {
      id: `user-${messageIdRef.current}`,
      role: "user",
      content: trimmed,
    };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages
            .filter((message) => message.id !== "welcome")
            .slice(-8)
            .map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = (await response.json()) as { reply?: string };
      if (!data.reply) throw new Error("Missing reply");

      setMessages((current) => [
        ...current,
        {
          id: `assistant-${messageIdRef.current}`,
          role: "assistant",
          content: data.reply as string,
        },
      ]);
    } catch {
      setError(
        "Chat is unavailable right now. Please use WhatsApp or try again in a moment.",
      );
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  }

  return (
    <div className="site-chatbot">
      {open ? (
        <section
          className="site-chatbot-panel"
          aria-label="SitesBrand AI assistant"
        >
          <header className="site-chatbot-header">
            <div className="site-chatbot-avatar" aria-hidden="true">
              S
              <span />
            </div>
            <div>
              <strong>SitesBrand Guide</strong>
              <span>AI assistant • Online</span>
            </div>
            <button
              type="button"
              className="site-chatbot-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </header>

          <div
            ref={scrollRef}
            className="site-chatbot-messages"
            role="log"
            aria-live="polite"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`site-chatbot-message site-chatbot-message-${message.role}`}
              >
                {message.content}
              </div>
            ))}

            {messages.length === 1 ? (
              <div className="site-chatbot-prompts" aria-label="Suggested questions">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => void sendMessage(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            ) : null}

            {loading ? (
              <div
                className="site-chatbot-message site-chatbot-message-assistant site-chatbot-typing"
                aria-label="SitesBrand Guide is typing"
              >
                <span />
                <span />
                <span />
              </div>
            ) : null}

            {error ? <p className="site-chatbot-error">{error}</p> : null}
          </div>

          <div className="site-chatbot-actions">
            <Link href="/free-audit">Free audit</Link>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to a person
            </a>
          </div>

          <form className="site-chatbot-form" onSubmit={submit}>
            <input
              ref={inputRef}
              value={input}
              maxLength={500}
              placeholder="Ask about your growth goal..."
              aria-label="Message SitesBrand Guide"
              disabled={loading}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleInputKeyDown}
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={loading || !input.trim()}
            >
              <SendIcon />
            </button>
          </form>
          <p className="site-chatbot-privacy">
            AI can make mistakes. Do not share sensitive data. Chats are not
            stored by SitesBrand.
          </p>
        </section>
      ) : null}

      <button
        type="button"
        className="site-chatbot-launcher"
        aria-label={open ? "Close SitesBrand Guide" : "Open SitesBrand Guide"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span className="site-chatbot-launcher-icon">
          {open ? "×" : <ChatIcon />}
        </span>
        <span className="site-chatbot-launcher-copy">
          <strong>Ask SitesBrand</strong>
          <small>Get a quick answer</small>
        </span>
      </button>
    </div>
  );
}
