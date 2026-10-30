import { useNews } from "../context/NewsContext";

export function useFetchNews() {
  const { articles, loading, refreshData, category, setCategory, searchQuery, setSearchQuery } = useNews();
  return {
    articles,
    loading,
    refreshData,
    category,
    setCategory,
    searchQuery,
    setSearchQuery,
  };
}
