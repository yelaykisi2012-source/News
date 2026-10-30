import React from "react";

export default function Card({ children, className = "", hover = true, onClick, ...props }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
        hover ? "hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 hover:-translate-y-1" : ""
      } ${onClick ? "cursor-pointer" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
