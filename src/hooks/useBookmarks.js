import { useNews } from "../context/NewsContext";

export function useBookmarks() {
  const { bookmarks, toggleBookmark, isBookmarked, articles, isSavedDrawerOpen, setIsSavedDrawerOpen } = useNews();
  
  const bookmarkedArticles = articles.filter((a) => bookmarks.includes(a.id));

  return {
    bookmarks,
    bookmarkedArticles,
    toggleBookmark,
    isBookmarked,
    isSavedDrawerOpen,
    setIsSavedDrawerOpen,
  };
}
