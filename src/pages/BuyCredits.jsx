import { plans } from "../assets/assets";
import { PiExcludeSquareFill } from "react-icons/pi";

const BuyCredits = () => {
  return (
    <div className="min-h-[90vh] w-full flex flex-col items-center justify-around px-4 sm:px-8">
      <h4 className="py-2 px-12 text-xl tracking-wider font-semibold border-1 rounded-full hover:bg-slate-900 hover:text-white transition duration-300">
        Our Plans
      </h4>
      <h1 className="text-4xl py-4 font-bold tracking-widest bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent text-center">
        Choose your best payment plan!
      </h1>

      {/* Boxes */}
      <div className="flex flex-wrap justify-center gap-5 md:gap-8 lg:space-x-5">
        {plans.map((data) => (
          <div
            className="flex flex-col items-start justify-around w-full sm:w-[300px] h-[350px] p-5 bg-white rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            key={data.id}
          >
            <PiExcludeSquareFill className="text-4xl text-slate-900 hover:text-slate-500 transition duration-300" />
            <h3 className="text-3xl font-bold tracking-wide hover:text-slate-500 transition duration-300">
              {data.id}
            </h3>
            <p className="text-lg font-extralight tracking-wider hover:text-slate-500 transition duration-300">
              {data.desc}
            </p>
            <div className="flex items-center w-full p-1">
              <h3 className="font-bold text-3xl mr-2 hover:text-slate-500 transition duration-300">
                {data.price}$
              </h3>
              <span className="m-1 text-lg">/</span>
              <h4 className="font-extralight ml-1 hover:text-slate-500 transition duration-300">
                {data.credits} credits.
              </h4>
            </div>
            <button className="px-4 py-2 w-full text-white bg-slate-900 rounded-xl hover:bg-slate-500 transition duration-300">
              Get started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredits;
