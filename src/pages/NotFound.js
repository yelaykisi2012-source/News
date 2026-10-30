import React from "react";
import { AlertCircle, Home } from "lucide-react";
import Button from "../components/common/Button";
import { useNews } from "../context/NewsContext";

export default function NotFound() {
  const { setCategory, setSearchQuery, closeArticle } = useNews();

  const handleGoHome = () => {
    closeArticle();
    setCategory("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-4 rounded-3xl bg-rose-50 dark:bg-rose-950/60 text-rose-500 flex items-center justify-center">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
          Sahifa topilmadi
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          Kechirasiz, siz qidirgan sahifa mavjud emas yoki boshqa manzilga ko‘chirilgan bo‘lishi mumkin.
        </p>
        <Button variant="primary" onClick={handleGoHome}>
          <Home className="w-4 h-4 mr-1.5" /> Bosh sahifaga qaytish
        </Button>
      </div>
    </div>
  );
}
