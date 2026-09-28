"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({
  children,
  position = "fixed",
  containerClassName = "bottom-6 left-1/2 -translate-x-1/2"
}: {
  children: React.ReactNode;
  position?: "fixed" | "absolute";
  containerClassName?: string;
}) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((message: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    // Add new toasts to the start of the array to stack correctly from bottom
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className={`${position} ${containerClassName} z-[100] flex flex-col justify-end gap-2 pointer-events-none w-full max-w-sm px-4`}>
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              key={t.id}
              className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border backdrop-blur-md w-full bg-white/90 dark:bg-[#111111]/90 ${
                t.type === "error"
                  ? "border-red-500/30 text-red-500"
                  : t.type === "success"
                  ? "border-green-500/30 text-green-500"
                  : "border-blue-500/30 text-blue-500"
              }`}
            >
              {t.type === "error" && <AlertCircle className="w-5 h-5 shrink-0" />}
              {t.type === "success" && <CheckCircle2 className="w-5 h-5 shrink-0" />}
              {t.type === "info" && <Info className="w-5 h-5 shrink-0" />}
              <p className="text-sm font-medium flex-1">{t.message}</p>
              <button
                onClick={() => removeToast(t.id)}
                className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-md transition-colors"
              >
                <X className="w-4 h-4 opacity-70" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
