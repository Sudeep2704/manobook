"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  ShoppingCart,
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Books", path: "/dashboard/books", icon: BookOpen },
  { name: "Orders", path: "/dashboard/orders", icon: ShoppingCart },
];

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <motion.aside
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      animate={{ width: open ? 288 : 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className="
        h-full
        bg-gradient-to-b from-gray-900 via-black to-gray-900
        border-r border-white/10
        backdrop-blur-xl
        overflow-hidden
        shadow-2xl
      "
    >
      {/* Content wrapper */}
      <div className="w-72 p-6">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
            📚
          </div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            BookStore
          </h1>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.path;

            return (
              <Link key={item.path} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl
                    ${
                      active
                        ? "bg-gradient-to-r from-blue-600/40 to-purple-600/40"
                        : "hover:bg-white/5"
                    }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      active
                        ? "bg-gradient-to-tr from-blue-500 to-purple-600"
                        : "bg-white/10"
                    }`}
                  >
                    <Icon size={20} />
                  </div>
                  <span className="font-semibold">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}