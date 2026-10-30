import React from "react";
import { Bookmark, ArrowLeft } from "lucide-react";
import { useNews } from "../context/NewsContext";
import NewsCard from "../components/news/NewsCard";
import Button from "../components/common/Button";

export default function SavedNews({ onBack }) {
  const { bookmarks, articles } = useNews();
  const savedArticles = articles.filter((a) => bookmarks.includes(a.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-blue-100 dark:bg-blue-950/60 text-blue-600">
            <Bookmark className="w-6 h-6 fill-current" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Saqlangan maqolalar
            </h1>
            <p className="text-sm text-slate-500">
              Siz saqlagan jami {savedArticles.length} ta maqola mavjud
            </p>
          </div>
        </div>

        {onBack && (
          <Button variant="outline" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" /> Bosh sahifa
          </Button>
        )}
      </div>

      {savedArticles.length === 0 ? (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
          <Bookmark className="w-12 h-12 mx-auto text-slate-400 mb-3" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Saqlangan yangiliklar mavjud emas
          </h3>
          <p className="text-sm text-slate-500 max-w-sm mx-auto mt-1">
            Qiziqarli xabarlarni saqlash uchun xatcho‘p belgisidan foydalaning.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
