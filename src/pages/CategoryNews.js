import React from "react";
import { useNews } from "../context/NewsContext";
import NewsGrid from "../components/news/NewsGrid";
import Sidebar from "../components/layout/Sidebar";

export default function CategoryNews() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <section className="lg:col-span-8">
          <NewsGrid />
        </section>
        <section className="lg:col-span-4 sticky top-28">
          <Sidebar />
        </section>
      </div>
    </div>
  );
}
