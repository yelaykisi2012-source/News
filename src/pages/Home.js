import React from "react";
import BreakingNews from "../components/news/BreakingNews";
import NewsSlider from "../components/news/NewsSlider";
import NewsGrid from "../components/news/NewsGrid";
import Sidebar from "../components/layout/Sidebar";
import { useNews } from "../context/NewsContext";

export default function Home() {
  const { searchQuery, category } = useNews();

  // If user is searching or has specific non-all category filter, emphasize the grid
  const isDefaultView = !searchQuery && category === "all";

  return (
    <main className="space-y-8 pb-16">
      {/* 1. Breaking News Ticker */}
      <BreakingNews />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 2. Hero Spotlight Slider (only on default view to keep it clean during search) */}
        {isDefaultView && (
          <section aria-label="Asosiy yangiliklar slayderi">
            <NewsSlider />
          </section>
        )}

        {/* 3. Main Content: Grid + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main News Grid (Left 8 cols) */}
          <section className="lg:col-span-8">
            <NewsGrid />
          </section>

          {/* Sticky Sidebar (Right 4 cols) */}
          <section className="lg:col-span-4 sticky top-28">
            <Sidebar />
          </section>
        </div>
      </div>
    </main>
  );
}
