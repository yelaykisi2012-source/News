import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { NewsAPI } from "../services/api";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [breakingNews, setBreakingNews] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [isSavedDrawerOpen, setIsSavedDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = useCallback((msg, type = "success") => {
    setToastMessage({ msg, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  }, []);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const [allList, breaking, trending] = await Promise.all([
        NewsAPI.getAllNews(category, searchQuery),
        NewsAPI.getBreakingNews(),
        NewsAPI.getTrendingNews(),
      ]);
      setArticles(allList);
      setBreakingNews(breaking);
      setTrendingNews(trending);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [category, searchQuery]);

  // Initial bookmarks load
  useEffect(() => {
    setBookmarks(NewsAPI.getBookmarks());
  }, []);

  // Reload when category or searchQuery changes
  useEffect(() => {
    loadData();
  }, [loadData]);

  const toggleBookmark = (id) => {
    const result = NewsAPI.toggleBookmark(id);
    setBookmarks(result.bookmarks);
    if (result.isBookmarked) {
      showToast("Xabar saqlanganlarga qo‘shildi! ⭐");
    } else {
      showToast("Xabar saqlanganlardan olib tashlandi");
    }
  };

  const isBookmarked = (id) => bookmarks.includes(id);

  const openArticle = async (articleOrId) => {
    if (typeof articleOrId === "string") {
      const art = await NewsAPI.getNewsById(articleOrId);
      setSelectedArticle(art);
    } else {
      // Increment view in API
      NewsAPI.getNewsById(articleOrId.id);
      setSelectedArticle({
        ...articleOrId,
        views: (articleOrId.views || 0) + 1,
      });
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    // Refresh to sync views
    loadData();
  };

  const handleLike = async (id) => {
    const newLikes = await NewsAPI.toggleLike(id);
    if (selectedArticle && selectedArticle.id === id) {
      setSelectedArticle((prev) => ({ ...prev, likes: newLikes }));
    }
    setArticles((prev) =>
      prev.map((a) => (a.id === id ? { ...a, likes: newLikes } : a))
    );
    showToast("Fikr bildirildi! ❤️");
  };

  const handleAddComment = async (id, commentData) => {
    const updatedComments = await NewsAPI.addComment(id, commentData);
    if (selectedArticle && selectedArticle.id === id) {
      setSelectedArticle((prev) => ({ ...prev, comments: updatedComments }));
    }
    setArticles((prev) =>
      prev.map((a) => (a.id === id ? { ...a, comments: updatedComments } : a))
    );
    showToast("Izohingiz muvaffaqiyatli chop etildi! 💬");
  };

  return (
    <NewsContext.Provider
      value={{
        category,
        setCategory,
        searchQuery,
        setSearchQuery,
        articles,
        breakingNews,
        trendingNews,
        selectedArticle,
        openArticle,
        closeArticle,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        isSavedDrawerOpen,
        setIsSavedDrawerOpen,
        loading,
        refreshData: loadData,
        handleLike,
        handleAddComment,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => useContext(NewsContext);
