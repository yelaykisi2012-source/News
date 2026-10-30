import React, { useState } from "react";
import {
  Eye,
  Heart,
  Bookmark,
  Share2,
  Volume2,
  VolumeX,
  Type,
  ArrowLeft,
  Calendar,
} from "lucide-react";
import { useNews } from "../context/NewsContext";
import { formatRelativeTime } from "../utils/formatDate";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import CommentSection from "../components/user/CommentSection";
import NewsCard from "../components/news/NewsCard";

export default function NewsDetail() {
  const {
    selectedArticle,
    closeArticle,
    isBookmarked,
    toggleBookmark,
    handleLike,
    handleAddComment,
    articles,
    showToast,
  } = useNews();

  const [fontSize, setFontSize] = useState("text-base"); // text-sm, text-base, text-lg
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  if (!selectedArticle) return null;

  const bookmarked = isBookmarked(selectedArticle.id);

  // Related articles (same category or others, excluding current)
  const related = articles
    .filter((a) => a.id !== selectedArticle.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast("Maqola havolasi nusxalandi! 📋");
    }
  };

  const toggleAudioReader = () => {
    if (!isPlayingAudio) {
      setIsPlayingAudio(true);
      showToast("Ovozli o‘qish yoqildi 🎧");
    } else {
      setIsPlayingAudio(false);
      showToast("Ovozli o‘qish to‘xtatildi");
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-300">
      {/* Back Button */}
      <div className="mb-6">
        <Button
          variant="secondary"
          size="sm"
          onClick={closeArticle}
          className="gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Barcha yangiliklarga qaytish
        </Button>
      </div>

      {/* Category & Metadata header */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge variant="primary" size="md">
            {selectedArticle.categoryName}
          </Badge>

          <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatRelativeTime(selectedArticle.publishedAt)}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-emerald-500" />
              {selectedArticle.views?.toLocaleString()} marta o‘qildi
            </span>
            <span>•</span>
            <span>⏳ {selectedArticle.readTime}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight font-display">
          {selectedArticle.title}
        </h1>

        {/* Summary Lead */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed border-l-4 border-blue-600 pl-4 py-1">
          {selectedArticle.summary}
        </p>

        {/* Author info & Accessibility Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 dark:border-slate-800">
          {/* Author */}
          <div className="flex items-center gap-3">
            <img
              src={selectedArticle.author?.avatar}
              alt={selectedArticle.author?.name}
              className="w-11 h-11 rounded-full object-cover border-2 border-blue-500 shadow-sm"
            />
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {selectedArticle.author?.name}
              </h4>
              <p className="text-xs text-slate-500">
                {selectedArticle.author?.role}
              </p>
            </div>
          </div>

          {/* Controls: Audio Reader, Font Size, Bookmark, Share, Like */}
          <div className="flex items-center gap-2">
            {/* Audio Reader simulation */}
            <button
              onClick={toggleAudioReader}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isPlayingAudio
                  ? "bg-emerald-600 text-white border-emerald-600 animate-pulse"
                  : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              title="Ovozli tinglash"
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline">To‘xtatish</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-blue-500" />
                  <span className="hidden sm:inline">Tinglash</span>
                </>
              )}
            </button>

            {/* Font size toggle */}
            <button
              onClick={() => {
                if (fontSize === "text-base") setFontSize("text-lg");
                else if (fontSize === "text-lg") setFontSize("text-xl");
                else setFontSize("text-base");
              }}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Matn hajmini o‘zgartirish"
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => toggleBookmark(selectedArticle.id)}
              className={`p-2.5 rounded-xl border transition-all ${
                bookmarked
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                  : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
              title="Saqlash"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
            </button>

            {/* Like button */}
            <button
              onClick={() => handleLike(selectedArticle.id)}
              className="p-2.5 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 hover:bg-rose-100 flex items-center gap-1.5 transition-transform active:scale-90"
              title="Yoqdi"
            >
              <Heart className="w-4 h-4 fill-rose-500/30 text-rose-500" />
              <span className="text-xs font-bold">{selectedArticle.likes}</span>
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              title="Ulashish"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Cover Image */}
      <div className="rounded-3xl overflow-hidden shadow-xl mb-8 bg-slate-100 dark:bg-slate-800">
        <img
          src={selectedArticle.image}
          alt={selectedArticle.title}
          className="w-full max-h-[500px] object-cover"
        />
        {selectedArticle.imageCaption && (
          <p className="p-3 text-xs text-center text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 italic">
            📷 {selectedArticle.imageCaption}
          </p>
        )}
      </div>

      {/* Article Body Content */}
      <div
        className={`prose prose-slate dark:prose-invert max-w-none space-y-6 ${fontSize} leading-relaxed text-slate-800 dark:text-slate-200`}
      >
        {selectedArticle.content?.map((block, idx) => {
          if (block.type === "quote") {
            return (
              <blockquote
                key={idx}
                className="my-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50/40 dark:from-slate-800 dark:to-slate-900 border-l-4 border-blue-600 italic text-slate-800 dark:text-slate-100"
              >
                <p className="text-base sm:text-lg font-medium mb-2">
                  “{block.text}”
                </p>
                {block.author && (
                  <cite className="block text-xs font-bold text-blue-600 dark:text-blue-400 not-italic uppercase tracking-wide">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );
          }
          return <p key={idx}>{block.text}</p>;
        })}
      </div>

      {/* Tags */}
      {selectedArticle.tags && selectedArticle.tags.length > 0 && (
        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
            Mavzuga doir teglar:
          </span>
          {selectedArticle.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Comments Section */}
      <CommentSection
        comments={selectedArticle.comments}
        onAddComment={(commentData) =>
          handleAddComment(selectedArticle.id, commentData)
        }
      />

      {/* Related News */}
      {related.length > 0 && (
        <div className="pt-12 mt-12 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 font-display">
            Mavzuga doir boshqa yangiliklar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((item) => (
              <NewsCard key={item.id} article={item} compact={true} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
