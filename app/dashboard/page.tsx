"use client";
import { useState } from "react";

import Sidebar from "../../component/sidebar";
import { motion } from "framer-motion";
import {
  TrendingUp,
  TrendingDown,
  BookOpen,
  ShoppingCart,
  IndianRupee,
  AlertTriangle,
} from "lucide-react";

export default function Dashboard() {
    const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar open = {open} setOpen = {setOpen}/>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 space-y-10 overflow-y-auto">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-gray-400 mt-1">
            Store performance snapshot (demo data)
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Books"
            value="1,248"
            trend="+12%"
            icon={<BookOpen />}
            positive
          />
          <StatCard
            title="Total Sales"
            value="₹3,42,560"
            trend="+8.4%"
            icon={<IndianRupee />}
            positive
          />
          <StatCard
            title="Orders"
            value="482"
            trend="-2.1%"
            icon={<ShoppingCart />}
            positive={false}
          />
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales Analysis */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-2 bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">📈 Monthly Sales</h2>

            {/* Fake chart placeholder */}
            <div className="h-64 flex items-center justify-center text-gray-400 border border-dashed border-gray-600 rounded-xl">
              Sales Chart (Recharts coming soon)
            </div>
          </motion.div>

          {/* Alerts */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="text-yellow-400" /> Low Stock Alerts
            </h2>

            <ul className="space-y-3 text-sm">
              <li className="flex justify-between">
                <span>Atomic Habits</span>
                <span className="text-red-400">3 left</span>
              </li>
              <li className="flex justify-between">
                <span>Rich Dad Poor Dad</span>
                <span className="text-red-400">5 left</span>
              </li>
              <li className="flex justify-between">
                <span>Clean Code</span>
                <span className="text-yellow-400">8 left</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-gray-800 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">🕒 Recent Activity</h2>

          <table className="w-full text-sm">
            <thead className="text-gray-400">
              <tr>
                <th className="text-left py-2">Order</th>
                <th className="text-left">Customer</th>
                <th>Status</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td>#ORD1024</td>
                <td>Rahul Sharma</td>
                <td className="text-green-400">Completed</td>
                <td className="text-right">₹1,499</td>
              </tr>
              <tr>
                <td>#ORD1023</td>
                <td>Anjali Verma</td>
                <td className="text-yellow-400">Pending</td>
                <td className="text-right">₹799</td>
              </tr>
              <tr>
                <td>#ORD1022</td>
                <td>Arjun Singh</td>
                <td className="text-red-400">Cancelled</td>
                <td className="text-right">₹2,199</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </main>
    </div>
  );
}

/* ------------------- COMPONENT ------------------- */

function StatCard({
  title,
  value,
  trend,
  icon,
  positive,
}: {
  title: string;
  value: string;
  trend: string;
  icon: React.ReactNode;
  positive: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-2xl p-6 shadow-lg flex justify-between items-center"
    >
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p
          className={`text-sm mt-1 flex items-center gap-1 ${
            positive ? "text-green-400" : "text-red-400"
          }`}
        >
          {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {trend} from last month
        </p>
      </div>

      <div className="p-3 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600">
        {icon}
      </div>
    </motion.div>
  );
}