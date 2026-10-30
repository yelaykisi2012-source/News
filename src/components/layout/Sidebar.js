import React, { useState } from "react";
import {
  CloudSun,
  Coins,
  Mail,
  Send,
  Flame,
  CheckCircle2,
} from "lucide-react";
import { useNews } from "../../context/NewsContext";
import { CURRENCY_RATES, WEATHER_DATA } from "../../utils/constants";
import Button from "../common/Button";

export default function Sidebar() {
  const { trendingNews, openArticle, showToast } = useNews();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    showToast("E-mail obunangiz qabul qilindi! 🎉");
    setEmail("");
  };

  return (
    <aside className="space-y-6">
      {/* 1. Trending / Eng ko'p o'qilganlar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400">
            <Flame className="w-4 h-4 fill-current" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Ko‘p o‘qilganlar
          </h3>
        </div>

        <div className="space-y-3.5">
          {trendingNews.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openArticle(item)}
              className="flex items-start gap-3 group cursor-pointer"
            >
              <span
                className={`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-bold shrink-0 ${
                  idx === 0
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                {idx + 1}
              </span>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 block mb-0.5">
                  {item.categoryName}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h4>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  {item.views?.toLocaleString()} o‘qildi
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Weather widget (Soft, soothing pastel design) */}
      <div className="bg-gradient-to-br from-sky-50 to-blue-50/60 dark:from-slate-900 dark:to-slate-800/80 rounded-3xl p-6 border border-sky-100 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CloudSun className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300">
              Ob-havo
            </h3>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium border border-slate-200/60 dark:border-slate-700/60">
            {WEATHER_DATA.city}
          </span>
        </div>

        <div className="flex items-baseline justify-between mb-3">
          <div className="text-3xl font-black text-slate-900 dark:text-white font-display">
            {WEATHER_DATA.temp}
          </div>
          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
            {WEATHER_DATA.condition}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2.5 border-t border-sky-100 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
          <div>
            Namlik: <strong className="text-slate-700 dark:text-slate-200">{WEATHER_DATA.humidity}</strong>
          </div>
          <div>
            Shamol: <strong className="text-slate-700 dark:text-slate-200">{WEATHER_DATA.wind}</strong>
          </div>
        </div>
      </div>

      {/* 3. Currency Rates */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400">
            <Coins className="w-4 h-4" />
          </div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Valyuta kurslari
          </h3>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {CURRENCY_RATES.map((curr) => (
            <div
              key={curr.code}
              className="py-2 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-700 dark:text-slate-300 text-[10px]">
                  {curr.symbol}
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {curr.code}
                </span>
              </div>
              <div className="text-right">
                <span className="font-semibold text-slate-900 dark:text-white mr-1.5">
                  {curr.rate}
                </span>
                <span
                  className={`text-[10px] font-bold ${
                    curr.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {curr.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Newsletter Subscription (Harmonious card) */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-sm">
        <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
          <Mail className="w-4 h-4" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Xabarnoma
          </span>
        </div>
        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
          Kunning eng muhim xabarlari
        </h3>
        <p className="text-xs text-slate-500 mb-3.5 leading-relaxed">
          Har kuni saralangan xabarlarni elektron pochtangizda qabul qiling.
        </p>

        {subscribed ? (
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
            Siz muvaffaqiyatli obuna bo‘ldingiz!
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="space-y-2">
            <input
              type="email"
              required
              placeholder="Elektron pochtangiz..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="w-full font-semibold"
            >
              Obuna bo‘lish <Send className="w-3.5 h-3.5 ml-1" />
            </Button>
          </form>
        )}
      </div>
    </aside>
  );
}
