import React from "react";
import { Clock, Eye, Heart, Bookmark, Share2 } from "lucide-react";
import { useNews } from "../../context/NewsContext";
import { formatRelativeTime } from "../../utils/formatDate";
import Badge from "../common/Badge";
import Card from "../common/Card";

export default function NewsCard({ article, compact = false }) {
  const { openArticle, isBookmarked, toggleBookmark, handleLike, showToast } = useNews();
  const bookmarked = isBookmarked(article.id);

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Xabar havolasi nusxalandi! 📋");
    }
  };

  if (compact) {
    return (
      <div
        onClick={() => openArticle(article)}
        className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer group shadow-sm hover:shadow"
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-20 h-20 rounded-xl object-cover shrink-0 group-hover:scale-102 transition-transform duration-300"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              {article.categoryName}
            </span>
            <span className="text-[10px] text-slate-400">
              {formatRelativeTime(article.publishedAt)}
            </span>
          </div>
          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {article.title}
          </h4>
          <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Eye className="w-3 h-3 text-slate-400" />
              {article.views?.toLocaleString()}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500/20" />
              {article.likes}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Card
      onClick={() => openArticle(article)}
      className="flex flex-col h-full group soft-card border border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge
            variant="secondary"
            size="sm"
            className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-800 dark:text-slate-200 border border-slate-200/50 dark:border-slate-700/50"
          >
            {article.categoryName}
          </Badge>
        </div>

        {/* Action icons on image */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(article.id);
            }}
            className={`p-2 rounded-xl backdrop-blur-md transition-all ${
              bookmarked
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                : "bg-white/80 dark:bg-black/60 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-black"
            }`}
            title="Saqlash"
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? "fill-current" : ""}`} />
          </button>
        </div>

        {/* Reading time indicator */}
        <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm text-[10px] font-medium text-white flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {article.readTime}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-1 p-5">
        {/* Date and Views */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
          <span>{formatRelativeTime(article.publishedAt)}</span>
          <span className="flex items-center gap-1 text-[11px]">
            <Eye className="w-3.5 h-3.5 text-slate-400" />
            {article.views?.toLocaleString()}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-display mb-2">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 leading-relaxed flex-1">
          {article.summary}
        </p>

        {/* Footer info: Author & Interactive reactions */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={article.author?.avatar}
              alt={article.author?.name}
              className="w-6 h-6 rounded-full object-cover shrink-0"
            />
            <span className="truncate font-medium text-slate-700 dark:text-slate-300 text-[11px]">
              {article.author?.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(article.id);
              }}
              className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-rose-500 transition-colors p-1"
              title="Yoqdi"
            >
              <Heart className="w-3.5 h-3.5 hover:fill-rose-500 hover:text-rose-500" />
              <span className="font-semibold text-[11px]">{article.likes}</span>
            </button>

            <button
              onClick={handleShare}
              className="text-slate-400 hover:text-blue-500 p-1"
              title="Ulashish"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}
