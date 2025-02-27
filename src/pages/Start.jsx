import { useNavigate } from "react-router-dom";

const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fafaf3] flex flex-col items-center justify-center text-center px-4">
      <div className="mb-4">
        <img
          src="betty1.jpg"
          alt="Betsy"
          className="w-12 h-12 rounded-full mx-auto"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-800">Hi, I'm Betsy!</h1>
      <p className="text-lg text-gray-700">What can I help you with?</p>



      <div className="mt-6 space-y-4 w-full max-w-md">
        <button
          onClick={() => navigate("/buying-home")}
          className="w-full flex items-center gap-3 px-6 py-3 border rounded-lg text-left hover:bg-gray-100"
        >
          <span>🏡</span> Buying a home
        </button>




        <button
          onClick={() => navigate("/refinance-mortgage")}
          className="w-full flex items-center gap-3 px-6 py-3 border rounded-lg text-left hover:bg-gray-100"
        >
          <span>💰</span> Refinance my mortgage
        </button>


        <button
        onClick={() => navigate("/get-cash")}
         className="w-full flex items-center gap-3 px-6 py-3 border rounded-lg text-left hover:bg-gray-100">
          <span>📈</span> Get cash from my home
        </button>
      </div>

      <div className="mt-8 text-gray-700">
        <p className="text-xl font-bold">$100B</p>
        <p className="text-sm">home loans funded entirely online</p>
        <p className="text-xl font-bold mt-4">400K</p>
        <p className="text-sm">customers who chose a Better Mortgage</p>
      </div>
    </div>
  );
};

export default StartPage;
