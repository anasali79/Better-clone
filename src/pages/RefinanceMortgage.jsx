const RefinanceMortgage = () => {
    return (
      <div className="min-h-screen bg-[#fafaf3] flex flex-col items-center justify-center text-center px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900">What are your refinance goals?</h1>
        <p className="text-lg text-gray-700 max-w-xl mt-2">
          We can help you save money, pay off debts, even take cash out to pay
          for things like home renovations or college tuition.
        </p>
  
        {/* Buttons */}
        <div className="mt-6 space-y-4 w-full max-w-md">
          <button className="w-full px-6 py-3 border rounded-lg text-lg font-semibold hover:bg-gray-100">
            Lower my monthly payment
          </button>
          <button className="w-full px-6 py-3 border rounded-lg text-lg font-semibold hover:bg-gray-100">
            Take cash out
          </button>
        </div>
  
        {/* Bottom Info */}
        <div className="mt-12 flex justify-center gap-16 text-gray-700">
          <div className="text-center">
            <p className="text-2xl font-bold">3 mins</p>
            <p className="text-sm">Apply online in as little as 3 mins</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">24/7</p>
            <p className="text-sm">Lock your rate at any time, on your schedule</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default RefinanceMortgage;
  