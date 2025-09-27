"use client";
import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import SubmenuPanel from "../../components/layout/SubmenuPanel";

// 🔹 Submenular burada təyin olunur
const submenus: Record<
  string,
  { key: string; label: string; children?: { key: string; label: string }[] }[]
> = {
  dashboard: [
    { key: "sub1", label: "Submenu 1" },
    { key: "sub2", label: "Submenu 2" },
  ],

  users: [
    { key: "admin-users", label: "Admin istifadəçilər" },
    { key: "site-users", label: "Sayt istifadəçiləri" },
    { key: "admin-groups", label: "Admin istifadəçi qrupları" },
    { key: "dealers", label: "Dilerlər" },
  ],

  // 🔹 Məhsullar menyusu
  products: [
    { key: "catalogs", label: "Kataloqlar" },
    { key: "categories", label: "Kateqoriyalar" },
    {
      key: "all-products",
      label: "Məhsullar",
      children: [
        { key: "product-list", label: "Məhsullar" },
        { key: "product-groups", label: "Məhsul qrupları" },
        { key: "attributes", label: "Atributlar" },
        { key: "tags", label: "Taglar" },
        { key: "sizes", label: "Ölçülər" },
        { key: "product-features", label: "Məhsul Özəllikləri" },
      ],
    },
    {
      key: "filters",
      label: "Filterlər",
      children: [
        { key: "filter-groups", label: "Filter qrupları" },
        { key: "filters-list", label: "Filterlər" },
      ],
    },
    { key: "reviews", label: "Reytinq və Rəylər" },
  ],
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex">
      {/* Sol: Sidebar */}
      <Sidebar activeKey={activeKey} onSelect={setActiveKey} />

      {/* Orta: Submenu paneli */}
      {activeKey ? (
        <SubmenuPanel
          activeKey={activeKey}
          submenu={submenus[activeKey] ?? []}
          activeSubmenu={activeSubmenu}
          onSubSelect={setActiveSubmenu}
        />
      ) : (
        <div className="w-48 bg-slate-900 border-r border-slate-800" />
      )}

      {/* Sağ: Content */}
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
