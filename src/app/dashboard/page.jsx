"use client";

import Image from "next/image";
import { Wallet as WalletIcon, DollarSign, Clock } from "lucide-react";
import Sidebar from "/components/sidebar";
import {DashboardHeader} from "/components/header";
import { Card, CardContent, CardHeader } from "/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Vector from "/assets/vector.png";
import wallet from "/assets/wallet.png";

const chartData = [
  { date: "Apr 14", income: 4500, expenses: 3200 },
  { date: "Apr 15", income: 5200, expenses: 3800 },
  { date: "Apr 16", income: 5800, expenses: 4000 },
  { date: "Apr 17", income: 5500, expenses: 4200 },
  { date: "Apr 18", income: 6000, expenses: 4500 },
  { date: "Apr 19", income: 5200, expenses: 4300 },
  { date: "Apr 20", income: 5700, expenses: 4100 },
];

const invoices = [
  {
    id: "INV_MGL524874",
    client: "Gadget Gallery LTD",
    date: "14 Apr 2022",
    time: "at 8:00 PM",
    type: 20,
    amount: 420.84,
    status: "Pending",
  },
  {
    id: "INV_MGL524875",
    client: "Figma Subscription",
    date: "12 Apr 2022",
    time: "at 8:00 PM",
    type: 1,
    amount: 244.8,
    status: "Paid",
  },
  {
    id: "INV_MGL524876",
    client: "Jack Dawson Eric",
    date: "12 Apr 2022",
    time: "at 9:00 AM",
    type: 2,
    amount: 200.0,
    status: "Unpaid",
  },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* <Header/> */}
        <DashboardHeader/>

        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          {/* ===== Cards Section ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 justify-items-center">
            {[
              { icon: WalletIcon, title: "Total Invoice", amount: "$5240.21" },
              { icon: DollarSign, title: "Amount Paid", amount: "$250.80" },
              { icon: Clock, title: "Pending Payment", amount: "$550.25" },
            ].map((card, idx) => (
              <div key={idx} className="w-[95%] sm:w-full max-w-xs sm:max-w-none">
                <Card className="border-0 shadow-sm bg-[#F8F8F8] hover:bg-[#363A3F] group transition-all duration-300">
                  <div className="p-4 sm:p-5">
                    <div className="grid grid-cols-[32px_1fr] gap-y-2.5 items-start gap-3 sm:gap-[15px]">
                      <div className="row-span-2 self-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#EBE8E8] group-hover:bg-[#4E5257] rounded-full flex items-center justify-center">
                          <card.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#363A3F] group-hover:text-[#C8EE44]" />
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-[#929EAE] m-0">{card.title}</p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-[#FFFFFF] m-0">
                        {card.amount}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* ===== Working Capital Chart ===== */}
          <Card className="mb-8 border-0 shadow-sm hidden sm:block">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-gray-900">Working Capital</h2>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>Income
                  </span>
                  <span className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>Expenses
                  </span>
                  <select className="text-sm border border-gray-300 rounded px-2 py-1">
                    <option>Last 7 days</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64 sm:h-72 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="expenses" stroke="#f59e0b" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* ===== Recent Invoices Section ===== */}
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Recent Invoice</h2>
                <a href="#" className="text-sm text-[#29A073] hover:underline mt-2 sm:mt-0">
                  View All {">"}
                </a>
              </div>
            </CardHeader>
            <CardContent>
              {/* Desktop Table */}
              <div className="hidden sm:overflow-x-auto sm:block">
                <table className="w-full text-sm min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200 text-left text-[#929EAE]">
                      <th className="pb-3 font-medium">NAME/CLIENT</th>
                      <th className="pb-3 font-medium">DATE</th>
                      <th className="pb-3 font-medium">ORDERS/TYPE</th>
                      <th className="pb-3 font-medium">AMOUNT</th>
                      <th className="pb-3 font-medium">STATUS</th>
                      <th className="pb-3 font-medium">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-100 hover:bg-gray-50 transition"
                      >
                        <td className="py-4 flex items-center space-x-3">
                          <div className="w-8 h-8 bg-linear-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                            {invoice.client.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{invoice.client}</p>
                            <p className="text-xs text-[#929EAE]">{invoice.id}</p>
                          </div>
                        </td>
                        <td>
                          <div className="flex flex-col">
                            <span className="text-[#1B212D]">{invoice.date}</span>
                            <span className="text-sm text-[#929EAE]">{invoice.time}</span>
                          </div>
                        </td>
                        <td className="text-[#929EAE]">{invoice.type}</td>
                        <td className="font-medium text-gray-900">${invoice.amount.toFixed(2)}</td>
                        <td>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              invoice.status === "Paid"
                                ? "bg-green-100 text-green-700"
                                : invoice.status === "Unpaid"
                                ? "bg-red-100 text-red-700"
                                : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </td>
                        <td>
                          <button className="text-gray-400 hover:text-gray-600">⋯</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Version */}
              <div className="sm:hidden space-y-4">
                {invoices.map((invoice, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-linear-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                          {invoice.client.charAt(0)}
                        </div>
                        <p className="font-medium text-gray-900">{invoice.client}</p>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          invoice.status === "Paid"
                            ? "bg-green-100 text-green-700"
                            : invoice.status === "Unpaid"
                            ? "bg-red-100 text-red-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>
                        <span className="font-semibold">Invoice ID:</span> {invoice.id}
                      </p>
                      <p>
                        <span className="font-semibold">Date:</span> {invoice.date} {invoice.time}
                      </p>
                      <p>
                        <span className="font-semibold">Orders/Type:</span> {invoice.type}
                      </p>
                      <p>
                        <span className="font-semibold">Amount:</span> ${invoice.amount.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
