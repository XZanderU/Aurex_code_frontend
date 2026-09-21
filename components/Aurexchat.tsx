"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { DefaultChatTransport } from "ai";
import { useChat } from "@ai-sdk/react";
import {
  Bot,
  Loader2,
  MessageCircle,
  Send,
  X,
} from "lucide-react";

export default function AurexChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const text = input.trim();

    if (!text || isBusy) {
      return;
    }

    sendMessage({
      text,
    });

    setInput("");
  };

  return (
    <div className="fixed bottom-24 right-8 z-50">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Abrir asistente AurexCode"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-blue-600 to-blue-400 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]">
          <MessageCircle size={26} className="transition-transform duration-300 group-hover:-rotate-12" />
        </button>
      )}

      {open && (
        <div className="flex h-150 w-95 max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800">
                <Bot size={20} />
              </div>

              <div>
                <p className="font-semibold text-white">AurexCode AI</p>
                <p className="text-xs text-slate-400">
                  Consultor de soluciones
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar asistente"
              className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="mb-2 font-medium text-white">
                  Hola, soy el asistente de AurexCode.
                </p>

                <p className="text-sm leading-6 text-slate-300">
                  Cuéntame qué problema quieres resolver, qué quieres
                  automatizar o qué tipo de software necesitas desarrollar.
                </p>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-white text-slate-900"
                      : "rounded-bl-md bg-white/5 text-slate-200"
                  }`}
                >
                  {message.parts.map((part, index) => {
                    if (part.type !== "text") {
                      return null;
                    }

                    return (
                      <p key={`${message.id}-${index}`}>
                        {part.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            ))}

            {isBusy && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-md bg-white/5 px-4 py-3 text-slate-300">
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-red-400/20 bg-red-400/10 p-3 text-sm text-red-200">
                No pude procesar tu mensaje. Inténtalo nuevamente.
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 p-3"
          >
            <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                placeholder="Cuéntame qué necesitas..."
                rows={1}
                disabled={isBusy}
                className="max-h-32 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="submit"
                disabled={!input.trim() || isBusy}
                aria-label="Enviar mensaje"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={17} />
              </button>
            </div>

            <p className="mt-2 text-center text-[11px] text-slate-500">
              AurexCode AI puede cometer errores.
            </p>
          </form>
        </div>
      )}
    </div>
  );
}