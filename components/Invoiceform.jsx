"use client";
import { useState } from "react";

export default function invoiceform() {
  const [formData, setFormData] = useState({
    clientName: "",
    invoiceId: "",
    date: "",
    orderType: "",
    amount: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Invoice created:", formData);
    // Here you can call Appwrite or API to store the invoice data
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Invoice</h2>

        {/* Client Name */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1 font-medium">
            Client Name
          </label>
          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            placeholder="Enter client name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Invoice ID */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1 font-medium">
            Invoice ID
          </label>
          <input
            type="text"
            name="invoiceId"
            value={formData.invoiceId}
            onChange={handleChange}
            placeholder="e.g. INV-12345"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Order Type */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1 font-medium">
            Order Type
          </label>
          <input
            type="text"
            name="orderType"
            value={formData.orderType}
            onChange={handleChange}
            placeholder="e.g. Subscription, Withdraw, etc."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1 font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="e.g. 200.00"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Status */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-1 font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
            <option value="Unpaid">Unpaid</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#C8EE44] hover:bg-[#C8EE55] text-white font-semibold py-2 rounded-lg transition-all duration-200"
        >
          Create Invoice
        </button>
      </form>
    </div>
  );
}
