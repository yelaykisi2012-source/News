import React from "react";
import { Bookmark, X, Trash2 } from "lucide-react";
import { useNews } from "../../context/NewsContext";
import Button from "../common/Button";

export default function BookmarkList() {
  const {
    isSavedDrawerOpen,
    setIsSavedDrawerOpen,
    bookmarks,
    articles,
    toggleBookmark,
    openArticle,
  } = useNews();

  if (!isSavedDrawerOpen) return null;

  const savedArticles = articles.filter((a) => bookmarks.includes(a.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSavedDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <Bookmark className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Saqlangan maqolalar
                </h3>
                <p className="text-xs text-slate-500">
                  {savedArticles.length} ta maqola saqlangan
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsSavedDrawerOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Yopish"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {savedArticles.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                  <Bookmark className="w-8 h-8" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  Saqlangan maqolalar yo‘q
                </h4>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Keyinroq o‘qish uchun yangiliklardagi xatcho‘p (bookmark) belgisini bosing.
                </p>
              </div>
            ) : (
              savedArticles.map((article) => (
                <div
                  key={article.id}
                  className="p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all flex gap-3 group"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer"
                    onClick={() => {
                      openArticle(article);
                      setIsSavedDrawerOpen(false);
                    }}
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                        {article.categoryName}
                      </span>
                      <h5
                        onClick={() => {
                          openArticle(article);
                          setIsSavedDrawerOpen(false);
                        }}
                        className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2 cursor-pointer hover:text-blue-600"
                      >
                        {article.title}
                      </h5>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-[10px] text-slate-400">
                        {article.readTime}
                      </span>
                      <button
                        onClick={() => toggleBookmark(article.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                        title="O‘chirish"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {savedArticles.length > 0 && (
            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-rose-600 border-rose-300 dark:border-rose-900 hover:bg-rose-50 dark:hover:bg-rose-950/40"
                onClick={() => {
                  savedArticles.forEach((a) => toggleBookmark(a.id));
                }}
              >
                <Trash2 className="w-4 h-4" /> Barcha saqlanganlarni tozalash
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
