import { INITIAL_NEWS } from "./mockNews";

const STORAGE_KEY_NEWS = "davr_news_items";
const STORAGE_KEY_BOOKMARKS = "davr_news_bookmarks";

// Initialize localStorage if empty
function getStoredNews() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_NEWS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_NEWS, JSON.stringify(INITIAL_NEWS));
      return INITIAL_NEWS;
    }
    return JSON.parse(raw);
  } catch (e) {
    return INITIAL_NEWS;
  }
}

function saveNews(newsList) {
  try {
    localStorage.setItem(STORAGE_KEY_NEWS, JSON.stringify(newsList));
  } catch (e) {
    console.error("Local storage save error", e);
  }
}

export const NewsAPI = {
  // Get all news with optional filtering
  getAllNews: async (category = "all", searchQuery = "") => {
    // Simulate slight network delay for realism
    await new Promise((r) => setTimeout(r, 60));
    let list = getStoredNews();

    if (category && category !== "all") {
      list = list.filter((item) => item.category === category);
    }

    if (searchQuery && searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((item) => {
        const inTitle = item.title.toLowerCase().includes(q);
        const inSummary = item.summary.toLowerCase().includes(q);
        const inTags = item.tags.some((tag) => tag.toLowerCase().includes(q));
        const inCategory = item.categoryName.toLowerCase().includes(q);
        return inTitle || inSummary || inTags || inCategory;
      });
    }

    return list;
  },

  // Get single news by id
  getNewsById: async (id) => {
    await new Promise((r) => setTimeout(r, 40));
    const list = getStoredNews();
    const found = list.find((item) => item.id === id);
    if (found) {
      // Increment views
      found.views = (found.views || 0) + 1;
      saveNews(list);
      return { ...found };
    }
    return null;
  },

  // Get breaking news
  getBreakingNews: async () => {
    const list = getStoredNews();
    return list.filter((item) => item.isBreaking);
  },

  // Get featured news
  getFeaturedNews: async () => {
    const list = getStoredNews();
    return list.filter((item) => item.isFeatured);
  },

  // Get trending news
  getTrendingNews: async () => {
    const list = getStoredNews();
    return [...list].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
  },

  // Like an article
  toggleLike: async (id) => {
    const list = getStoredNews();
    const item = list.find((n) => n.id === id);
    if (item) {
      item.likes = (item.likes || 0) + 1;
      saveNews(list);
      return item.likes;
    }
    return 0;
  },

  // Add comment
  addComment: async (newsId, comment) => {
    const list = getStoredNews();
    const item = list.find((n) => n.id === newsId);
    if (item) {
      if (!item.comments) item.comments = [];
      const newComment = {
        id: "c-" + Date.now(),
        author: comment.author || "Mehmon",
        avatar: comment.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80",
        date: "Hozirgina",
        text: comment.text
      };
      item.comments.unshift(newComment);
      saveNews(list);
      return item.comments;
    }
    return [];
  },

  // Bookmarks management
  getBookmarks: () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_BOOKMARKS);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },

  toggleBookmark: (newsId) => {
    try {
      const bookmarks = NewsAPI.getBookmarks();
      let updated;
      const exists = bookmarks.includes(newsId);
      if (exists) {
        updated = bookmarks.filter((id) => id !== newsId);
      } else {
        updated = [...bookmarks, newsId];
      }
      localStorage.setItem(STORAGE_KEY_BOOKMARKS, JSON.stringify(updated));
      return { isBookmarked: !exists, bookmarks: updated };
    } catch {
      return { isBookmarked: false, bookmarks: [] };
    }
  }
};
