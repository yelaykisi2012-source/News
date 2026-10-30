import React, { useState } from "react";
import {
  Search,
  Bookmark,
  Sun,
  Moon,
  Menu,
  X,
  CloudSun,
} from "lucide-react";
import { useNews } from "../../context/NewsContext";
import { useTheme } from "../../context/ThemeContext";
import { CATEGORIES, CURRENCY_RATES, WEATHER_DATA } from "../../utils/constants";
import { formatFullDate } from "../../utils/formatDate";

export default function Navbar() {
  const {
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
    bookmarks,
    setIsSavedDrawerOpen,
    closeArticle,
  } = useNews();

  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const handleLogoClick = () => {
    closeArticle();
    setCategory("all");
    setSearchQuery("");
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-header border-b border-slate-200/70 dark:border-slate-800/80 transition-colors">
      {/* 1. Subtle Editorial Top Strip: Date, Weather, Currencies */}
      <div className="hidden md:block border-b border-slate-100 dark:border-slate-800/60 py-1.5 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="font-medium text-slate-600 dark:text-slate-300">
              {formatFullDate()}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
              <CloudSun className="w-3.5 h-3.5 text-amber-500" />
              <span>
                {WEATHER_DATA.city}: <strong>{WEATHER_DATA.temp}</strong>, {WEATHER_DATA.condition}
              </span>
            </div>
          </div>

          {/* Currencies rates */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              MB kursi:
            </span>
            {CURRENCY_RATES.slice(0, 3).map((c) => (
              <span
                key={c.code}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100/80 dark:bg-slate-800/60 text-[11px] text-slate-700 dark:text-slate-300"
              >
                <strong className="font-semibold text-slate-900 dark:text-white">{c.code}:</strong> {c.rate}
                <span className={c.isPositive ? "text-emerald-600 dark:text-emerald-400 font-semibold text-[10px]" : "text-rose-600 dark:text-rose-400 font-semibold text-[10px]"}>
                  {c.change}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              D
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white font-display">
                DAVR<span className="text-blue-600 dark:text-blue-400">24</span>
              </span>
            </div>
          </button>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-4 hidden lg:block">
            <div
              className={`relative flex items-center transition-all duration-200 rounded-full border ${
                searchFocused
                  ? "border-blue-500 ring-2 ring-blue-500/15 bg-white dark:bg-slate-900 shadow-sm"
                  : "border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <Search className="w-4 h-4 ml-4 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Yangiliklar, mavzular yoki kalit so‘zlarni qidiring..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full bg-transparent px-3 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="mr-3 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons: Saved, Theme Toggle, Mobile Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSavedDrawerOpen(true)}
              className="relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors flex items-center gap-2"
              title="Saqlangan maqolalar"
            >
              <Bookmark className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span className="hidden sm:inline">Saqlanganlar</span>
              {bookmarks.length > 0 && (
                <span className="flex h-5 min-w-[20px] px-1 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                  {bookmarks.length}
                </span>
              )}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              title={theme === "dark" ? "Kunduzgi rejim" : "Tungi rejim"}
              aria-label="Mavzu"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-600" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="mt-2.5 lg:hidden">
          <div className="relative flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/80 px-3.5 py-1.5">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Qidiruv..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent ml-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")}>
                <X className="w-4 h-4 text-slate-400" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 3. Category Bar (Subtle & clean horizontal scroll) */}
      <div className="border-t border-slate-200/60 dark:border-slate-800/60 bg-white/50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = category === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    closeArticle();
                    setCategory(cat.id);
                  }}
                  className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 shadow-xl">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Bo‘limlar
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  closeArticle();
                  setCategory(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-xl text-xs font-semibold ${
                  category === cat.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}