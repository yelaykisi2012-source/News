import React, { useState } from "react";
import { MessageSquare, Send, User } from "lucide-react";
import Button from "../common/Button";

export default function CommentSection({ comments = [], onAddComment }) {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setSubmitting(true);
    await onAddComment({
      author: name.trim() || "Foydalanuvchi",
      text: commentText.trim(),
      avatar: `https://images.unsplash.com/photo-${1535713875000 + Math.floor(Math.random() * 500)}?auto=format&fit=crop&w=120&q=80`,
    });
    setCommentText("");
    setSubmitting(false);
  };

  return (
    <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-600" />
          Muhokama va fikrlar{" "}
          <span className="text-sm font-normal text-slate-500">
            ({comments.length})
          </span>
        </h3>
      </div>

      {/* Comment Form */}
      <form
        onSubmit={handleSubmit}
        className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-3"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Ismingiz (ixtiyoriy)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <textarea
          rows={3}
          placeholder="Mavzu bo‘yicha o‘z fikringizni qoldiring..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          required
          className="w-full p-3 text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            variant="primary"
            size="sm"
            disabled={!commentText.trim() || submitting}
          >
            <Send className="w-4 h-4" />
            {submitting ? "Yuborilmoqda..." : "Fikr qoldirish"}
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-sm text-slate-500 italic text-center py-4">
            Hozircha izohlar yo‘q. Birinchi bo‘lib o‘z fikringizni bildiring!
          </p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
            >
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-9 h-9 rounded-full object-cover shrink-0 border border-slate-200 dark:border-slate-700"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {comment.author}
                  </h4>
                  <span className="text-[11px] text-slate-400 shrink-0">
                    {comment.date}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {comment.text}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
