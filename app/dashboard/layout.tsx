"use client";

import { useState } from "react";
import Sidebar from "@/component/sidebar";
import { motion } from "framer-motion";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-900">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main content */}
      <motion.main
        animate={{
          width: open ? "calc(100% - 288px)" : "100%",
        }}
        transition={{ type: "spring", stiffness: 80, damping: 18 }}
        className="p-10 overflow-y-auto"
      >
        {children}
      </motion.main>
    </div>
  );
}