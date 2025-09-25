"use client";
import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

interface SubmenuItem {
  key: string;
  label: string;
  children?: { key: string; label: string }[];
}

interface SubmenuPanelProps {
  activeKey: string;
  submenu: SubmenuItem[];
  activeSubmenu: string | null;
  onSubSelect: (key: string) => void;
}

export default function SubmenuPanel({
  activeKey,
  submenu,
  activeSubmenu,
  onSubSelect,
}: SubmenuPanelProps) {
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const toggleOpen = (key: string) => {
    setOpenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  return (
    <aside className="w-64 bg-[#1a2234] text-slate-200 min-h-screen border-r border-slate-800 p-4">
      <h2 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
        {activeKey.toUpperCase()} MENU
      </h2>

      <nav>
        {submenu.map((item) => {
          const isOpen = openKeys.includes(item.key);
          return (
            <div key={item.key} className="mb-2">
              {/* Submenu düyməsi */}
              <button
                onClick={() =>
                  item.children ? toggleOpen(item.key) : onSubSelect(item.key)
                }
                className={`flex items-center justify-between w-full px-3 py-2 rounded-md transition ${
                  activeSubmenu === item.key
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {item.children &&
                  (isOpen ? (
                    <ChevronDown size={16} className="text-slate-400" />
                  ) : (
                    <ChevronRight size={16} className="text-slate-400" />
                  ))}
              </button>

              {/* Alt menyular */}
              {isOpen && item.children && (
                <div className="ml-6 mt-2 space-y-3 relative ">
                  {item.children.map((child, i) => (
                    <div key={child.key} className="relative pl-6">
                      {/* Dairə */}
                      <span className="absolute left-1 top-2 w-2 h-2 rounded-full border border-slate-400"></span>

                      {/* Xətt → sağa çəkdik (left-[6px]), qısaltdıq (h-5) */}
                      {i !== item.children!.length - 1 && (
                        <span className="absolute top-4 left-[7.55px] w-px h-7 bg-slate-500"></span>
                      )}

                      <button
                        onClick={() => onSubSelect(child.key)}
                        className={`text-sm transition ${
                          activeSubmenu === child.key
                            ? "text-white font-medium"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        {child.label}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
