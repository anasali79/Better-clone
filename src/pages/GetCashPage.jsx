import React from "react";

const GetCashPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF3] text-center px-4">
      <h1 className="text-4xl md:text-5xl  mt-40 font-bold text-[#1F2937]">
        Cash from your couch.
      </h1>
      <p className="text-lg md:text-xl text-[#4B5563] mt-2">
        Check your eligibility in as little as 3 minutes.
      </p>

      <p className="text-md text-[#6B7280] mt-4">What makes Better’s home equity products great?</p>

      <div className="mt-4 space-y-3 text-left">
        <p className="flex items-center gap-2 text-[#374151]">
          ✅ Fast application, fully online
        </p>
        <p className="flex items-center gap-2 text-[#374151]">
          ✅ Get between $50k-$500k
        </p>
        <p className="flex items-center gap-2 text-[#374151]">
          ✅ Cash in as little as 7 days with your HELOC
        </p>
        <p className="flex items-center gap-2 text-[#374151]">
          ✅ Pay off high interest debt, fund down payments, college funds, and
          even renovations
        </p>
      </div>

      <a href="#" className="mt-4 text-green-700 font-semibold underline">
        What is home equity and how do I tap into it for cash?
      </a>

      <button
        className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-800 transition"
      >
        Let's go
      </button>

      <p className="text-sm text-gray-500 mt-2">Tap into 90% of your home’s equity</p>

      <div className="mt-10 p-6 bg-white rounded-lg shadow-md">
        <p className="text-lg font-semibold text-green-700 flex items-center gap-2">
          ✅ Award-winning lender
        </p>
        <p className="mt-2 font-semibold">THE WALL STREET JOURNAL</p>
        <p className="text-sm text-gray-600">Best Mortgage Lender for Affordability (2024)</p>

        <p className="mt-4 font-semibold">Yahoo! Finance</p>
        <p className="text-sm text-gray-600">Best Lender for Quick Loan Approval (2025)</p>

        <p className="mt-4 font-semibold">Money</p>
        <p className="text-sm text-gray-600">Best for Fast Closing Time (2024)</p>
      </div>
    </div>
  );
};

export default GetCashPage;
