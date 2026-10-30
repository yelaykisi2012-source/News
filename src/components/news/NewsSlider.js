import React from "react";
import { Clock, Eye, Bookmark, ArrowRight } from "lucide-react";
import { useNews } from "../../context/NewsContext";
import { formatRelativeTime } from "../../utils/formatDate";
import Badge from "../common/Badge";

export default function NewsSlider() {
  const { articles, openArticle, isBookmarked, toggleBookmark } = useNews();

  // Top featured lead story + 2 secondary stories
  const featured = articles.filter((a) => a.isFeatured);
  const items = featured.length >= 3 ? featured : articles.slice(0, 3);

  if (items.length === 0) return null;

  const lead = items[0];
  const secondary = items.slice(1, 3);
  const leadBookmarked = isBookmarked(lead.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* 1. Main Editorial Lead Story (8 cols on large screens) */}
      <div className="lg:col-span-8 flex flex-col justify-between bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
        {/* Cover Photo */}
        <div
          onClick={() => openArticle(lead)}
          className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer"
        >
          <img
            src={lead.image}
            alt={lead.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="primary" size="md">
              {lead.categoryName}
            </Badge>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(lead.id);
            }}
            className={`absolute top-4 right-4 p-2.5 rounded-xl backdrop-blur-md transition-all ${
              leadBookmarked
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-white/80 dark:bg-black/60 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-black"
            }`}
            title="Saqlash"
          >
            <Bookmark className={`w-4 h-4 ${leadBookmarked ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Lead Story Body */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
              <span>{formatRelativeTime(lead.publishedAt)}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                {lead.views?.toLocaleString()} o‘qildi
              </span>
              <span>•</span>
              <span>⏳ {lead.readTime}</span>
            </div>

            <h2
              onClick={() => openArticle(lead)}
              className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors leading-snug font-display mb-3"
            >
              {lead.title}
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
              {lead.summary}
            </p>
          </div>

          {/* Author info & Read More */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <img
                src={lead.author?.avatar}
                alt={lead.author?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {lead.author?.name}
              </span>
            </div>

            <button
              onClick={() => openArticle(lead)}
              className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
            >
              Maqolani o‘qish <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Secondary Editorial Stories Column (4 cols) */}
      <div className="lg:col-span-4 flex flex-col gap-5">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            Dolzarb tahlillar
          </span>
        </div>

        {secondary.map((item) => (
            <div
              key={item.id}
              onClick={() => openArticle(item)}
              className="flex-1 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 p-5 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all cursor-pointer group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-3.5 bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <Badge variant="secondary" size="sm">
                      {item.categoryName}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
                  <Clock className="w-3 h-3" />
                  <span>{formatRelativeTime(item.publishedAt)}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500">
                <span>{item.readTime} o‘qish</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
                  Batafsil →
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
