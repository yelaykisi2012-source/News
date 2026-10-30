import React from "react";
import {
  Send,
  Video,
  Smartphone,
  PhoneCall,
  Mail,
} from "lucide-react";
import { CATEGORIES } from "../../utils/constants";
import { useNews } from "../../context/NewsContext";

export default function Footer() {
  const { setCategory } = useNews();

  return (
    <footer className="bg-slate-900 text-slate-400 dark:bg-black pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-sky-500 text-white font-black text-xl shadow-lg">
                D
              </div>
              <span className="text-2xl font-black tracking-tight text-white font-display">
                DAVR<span className="text-blue-500">24</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              DAVR 24 — O‘zbekiston va xalqaro maydondagi eng so‘nggi, xolis va tekshirilgan ma'lumotlarni tezkor tarzda yetkazib beruvchi zamonaviy multimedia axborot platformasi.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-rose-600 hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="YouTube"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-colors text-slate-300"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Categories Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Bo‘limlar
            </h4>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.slice(1).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      setCategory(cat.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Editorial & About */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Tahririyat
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Jurnalistlar jamoasi
                </a>
              </li>
              <li>
                <a href="#ethics" className="hover:text-white transition-colors">
                  Media etikasi va qoidalari
                </a>
              </li>
              <li>
                <a href="#ads" className="hover:text-white transition-colors">
                  Reklama va hamkorlik
                </a>
              </li>
              <li>
                <a href="#vacancies" className="hover:text-white transition-colors">
                  Vakansiyalar
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Apps */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Bog‘lanish
            </h4>
            <div className="space-y-2 text-xs">
              <p className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
                <span>+998 (71) 200-00-24</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>info@davr24.uz</span>
              </p>
              <div className="pt-2">
                <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700/60">
                  <div className="flex items-center gap-2 text-white font-semibold text-xs mb-1">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>Mobil ilovani yuklang</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Tez orada iOS va Android uchun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} DAVR 24 Axborot Portali. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-300">
              Maxfiylik siyosati
            </a>
            <span>•</span>
            <a href="#terms" className="hover:text-slate-300">
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
