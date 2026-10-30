import React, { useState, useEffect } from "react";
import { Zap, ChevronRight, ChevronLeft } from "lucide-react";
import { useNews } from "../../context/NewsContext";

export default function BreakingNews() {
  const { breakingNews, openArticle } = useNews();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!breakingNews || breakingNews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [breakingNews]);

  if (!breakingNews || breakingNews.length === 0) return null;

  const current = breakingNews[currentIndex] || breakingNews[0];

  return (
    <div className="w-full bg-slate-100/70 dark:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        {/* Soft Ticker Label */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200/60 dark:border-rose-900/40 text-[11px] font-bold uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <Zap className="w-3 h-3 fill-current" />
            Tezkor
          </span>
        </div>

        {/* Ticker Headline text */}
        <div className="flex-1 overflow-hidden">
          <div
            key={current.id}
            onClick={() => openArticle(current)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {current.title}
            </span>
            <span className="hidden sm:inline-block text-[10px] text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 px-2 py-0.5 rounded">
              {current.categoryName}
            </span>
          </div>
        </div>

        {/* Subtle controls */}
        <div className="flex items-center gap-1 shrink-0 text-slate-400 dark:text-slate-500">
          <button
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + breakingNews.length) % breakingNews.length
              )
            }
            className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Oldingi xabar"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] font-mono px-1">
            {currentIndex + 1}/{breakingNews.length}
          </span>
          <button
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % breakingNews.length)
            }
            className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            aria-label="Keyingi xabar"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
