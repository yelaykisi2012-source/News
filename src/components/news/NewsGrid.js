import React, { useState } from "react";
import { Newspaper, SearchX, RefreshCw } from "lucide-react";
import { useNews } from "../../context/NewsContext";
import NewsCard from "./NewsCard";
import CategoryFilter from "./CategoryFilter";
import Button from "../common/Button";

export default function NewsGrid() {
  const { articles, loading, searchQuery, setSearchQuery, category, setCategory, refreshData } = useNews();
  const [sortBy, setSortBy] = useState("newest");

  // Sort articles
  const sortedArticles = [...articles].sort((a, b) => {
    if (sortBy === "popular") {
      return (b.views || 0) - (a.views || 0);
    }
    if (sortBy === "liked") {
      return (b.likes || 0) - (a.likes || 0);
    }
    // newest default
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  return (
    <div className="space-y-6">
      {/* Category filter bar & sort */}
      <CategoryFilter sortBy={sortBy} setSortBy={setSortBy} />

      {/* Grid Status Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2 font-display">
          <Newspaper className="w-6 h-6 text-blue-600" />
          {searchQuery ? (
            <span>
              "{searchQuery}" bo‘yicha natijalar{" "}
              <span className="text-sm font-normal text-slate-500">
                ({sortedArticles.length} ta)
              </span>
            </span>
          ) : category === "all" ? (
            "So‘nggi yangiliklar lentasi"
          ) : (
            `${category.toUpperCase()} bo‘limi xabarlari`
          )}
        </h2>
      </div>

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 animate-pulse space-y-4"
            >
              <div className="aspect-[16/10] bg-slate-200 dark:bg-slate-800 rounded-xl" />
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3" />
              <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-full" />
              <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
            </div>
          ))}
        </div>
      ) : sortedArticles.length === 0 ? (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
            <SearchX className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            Hech qanday yangilik topilmadi
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-6">
            Qidiruv so‘zini o‘zgartirib ko‘ring yoki bo‘lim filtrini barchasiga o‘tkazing.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setCategory("all");
              }}
            >
              Barchasini ko‘rsatish
            </Button>
            <Button variant="outline" size="sm" onClick={refreshData}>
              <RefreshCw className="w-4 h-4" /> Yangilash
            </Button>
          </div>
        </div>
      ) : (
        /* Actual Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
