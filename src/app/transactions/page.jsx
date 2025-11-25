import React from "react";
import { TransactionsHeader } from "/components/header";
import Sidebar from "/components/sidebar";
const page = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <TransactionsHeader />
      </div>
    </div>
  );
};

export default page;
