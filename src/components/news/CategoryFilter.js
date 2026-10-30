import React from "react";
import { Filter } from "lucide-react";
import { CATEGORIES } from "../../utils/constants";
import { useNews } from "../../context/NewsContext";

export default function CategoryFilter({ sortBy, setSortBy }) {
  const { category, setCategory, searchQuery, setSearchQuery } = useNews();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-b border-slate-200/80 dark:border-slate-800">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1 hidden sm:inline-flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Bo‘lim:
        </span>
        {CATEGORIES.map((cat) => {
          const isActive = category === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                isActive
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                  : "bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Sort Options */}
      <div className="flex items-center gap-2 ml-auto">
        <span className="text-xs font-medium text-slate-400 hidden md:inline">
          Tartiblash:
        </span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold rounded-xl px-3 py-1.5 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="newest">⚡ Eng yangilari</option>
          <option value="popular">🔥 Eng ko‘p o‘qilganlar</option>
          <option value="liked">❤️ Eng ko‘p yoqqanlar</option>
        </select>

        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-xs font-semibold text-rose-500 hover:underline px-2"
          >
            Filtrni tozalash
          </button>
        )}
      </div>
    </div>
  );
}
