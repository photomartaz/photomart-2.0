"use client";
import { Bell, Search, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-14 bg-white dark:bg-[#0f172a] border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-6">
      <div className="font-bold text-green-600">Photomart Admin</div>
      <div className="flex items-center gap-4">
        <Search className="w-5 h-5 text-slate-600 dark:text-slate-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-slate-600 dark:text-slate-300 cursor-pointer" />
        <Settings className="w-5 h-5 text-slate-600 dark:text-slate-300 cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white text-xs cursor-pointer">
          N
        </div>
      </div>
    </header>
  );
}
