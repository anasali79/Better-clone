const BuyingHome = () => {
    return (
      <div className="min-h-screen bg-[#fafaf3] flex flex-col items-center justify-center text-center px-4">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">
          Where are you in the home buying process?
        </h1>
  
        {/* Options */}
        <div className="mt-6 space-y-4 w-full max-w-md">
          <button className="w-full flex items-center gap-3 px-6 py-3 border rounded-lg text-left hover:bg-gray-100">
            <span>✍️</span> Signed a purchase agreement
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 border rounded-lg text-left hover:bg-gray-100">
            <span>🏠</span> Making offers
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 border rounded-lg text-left hover:bg-gray-100">
            <span>🔍</span> Going to open houses
          </button>
          <button className="w-full flex items-center gap-3 px-6 py-3 border rounded-lg text-left hover:bg-gray-100">
            <span>📚</span> Just researching
          </button>
        </div>
      </div>
    );
  };
  
  export default BuyingHome;
  