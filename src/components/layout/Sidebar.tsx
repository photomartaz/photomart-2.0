import {
  Home,
  Users,
  Package,
  ShoppingCart,
  Percent,
  Edit,
  Truck,
  BarChart2,
} from "lucide-react";

interface SidebarProps {
  activeKey: string | null;
  onSelect: (key: string) => void;
}

const items = [
  { key: "dashboard", label: "Dashboard", Icon: Home },
  { key: "users", label: "İstifadəçilər", Icon: Users },
  { key: "products", label: "Məhsullar", Icon: Package },
  { key: "orders", label: "Sifarişlər", Icon: ShoppingCart },
  { key: "campaigns", label: "Kampaniyalar", Icon: Percent },
  { key: "editor", label: "Editor", Icon: Edit },
  { key: "delivery", label: "Çatdırılma", Icon: Truck },
  { key: "analytics", label: "Məlumatlar", Icon: BarChart2 },
];

export default function Sidebar({ activeKey, onSelect }: SidebarProps) {
  return (
    <aside className="w-24 bg-[#0f172a] text-white min-h-screen border-r border-slate-800 flex flex-col items-center">
      <div className="py-6 text-base font-semibold">PM</div>

      <nav className="flex-1 flex flex-col gap-4">
        {items.map(({ key, label, Icon }) => {
          const active = activeKey === key;
          return (
            <button
              key={key}
              onClick={() => onSelect(key)}
              className={`group flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-colors duration-200
                ${active ? "bg-slate-700/60" : "hover:bg-slate-700/40"}`}
            >
              <Icon
                className={`h-6 w-6 transition-colors duration-200
                  ${
                    active
                      ? "text-green-400" // ✅ aktiv olanda green-500
                      : "text-slate-400 group-hover:text-green-600" // ✅ hover green-400
                  }`}
                strokeWidth={1.5}
              />
              <span
                className={`text-[11px] transition-colors duration-200
                  ${
                    active
                      ? "text-green-400"
                      : "text-slate-400 group-hover:text-green-600"
                  }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="py-4">{/* Logout və ya başqa button */}</div>
    </aside>
  );
}
