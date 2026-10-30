import React from "react";
import { CheckCircle2, Info } from "lucide-react";
import { useNews } from "../../context/NewsContext";

export default function Toast() {
  const { toastMessage } = useNews();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="flex items-center gap-3 px-5 py-3.5 bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 rounded-2xl shadow-2xl backdrop-blur-md border border-slate-700 dark:border-slate-200">
        {toastMessage.type === "success" ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 dark:text-emerald-600 shrink-0" />
        ) : (
          <Info className="w-5 h-5 text-blue-400 dark:text-blue-600 shrink-0" />
        )}
        <span className="text-sm font-semibold tracking-wide">{toastMessage.msg}</span>
      </div>
    </div>
  );
}
