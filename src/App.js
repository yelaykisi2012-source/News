import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { NewsProvider, useNews } from "./context/NewsContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NewsDetail from "./pages/NewsDetail";
import BookmarkList from "./components/user/BookmarkList";
import Toast from "./components/common/Toast";

function MainContent() {
  const { selectedArticle } = useNews();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Page Area */}
      <div className="flex-1">
        {selectedArticle ? <NewsDetail /> : <Home />}
      </div>

      {/* Saved / Bookmarks slide-in drawer */}
      <BookmarkList />

      {/* Interactive Toasts */}
      <Toast />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <MainContent />
      </NewsProvider>
    </ThemeProvider>
  );
}