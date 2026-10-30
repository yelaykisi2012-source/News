import React from "react";

const variantStyles = {
  primary: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/50",
  secondary: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60",
  red: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-200/60 dark:border-rose-800/50",
  emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/50",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200/60 dark:border-amber-800/50",
  purple: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border border-purple-200/60 dark:border-purple-800/50",
  outline: "border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-transparent",
};

export default function Badge({ children, variant = "primary", className = "", size = "md" }) {
  const sizeStyle = size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs font-semibold";
  const base = variantStyles[variant] || variantStyles.primary;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md uppercase tracking-wider ${sizeStyle} ${base} ${className}`}
    >
      {children}
    </span>
  );
}
