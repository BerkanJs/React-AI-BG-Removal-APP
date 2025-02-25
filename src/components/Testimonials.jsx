import { testimonialsData } from "../assets/assets";
const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden bg-gray-100 py-10">
    <h1 className="text-4xl sm:text-5xl font-bold text-slate-600 mb-8">
      Customer Testimonials
    </h1>

    <div className="relative w-full overflow-hidden">
      {/* Sonsuz kaydırma alanı */}
      <div className="flex space-x-12 animate-marquee">
        {/* Kutuları sonsuz döngü için tekrar ettiriyoruz */}
        {[...testimonialsData, ...testimonialsData, ...testimonialsData].map(
          (data, index) => (
            <div
              className="flex items-center sm:justify-center p-6 sm:w-[500px] sm:h-[200px] h-[400px] w-[300px] bg-white shadow-lg rounded-lg mx-6"
              key={index}
            >
              <div className="flex flex-col space-y-5">
                <p className="text-start font-light">{data.text}</p>

                <div className="flex space-x-6 mt-2">
                  <img
                    className="w-[70px] h-[70px] rounded-full"
                    src={data.image}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <h3 className="font-bold text-lg">{data.author}</h3>
                    <h4 className="font-extralight text-sm">
                      {data.jobTitle}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>

    {/* Sonsuz kaydırma için animasyon */}
    <style>
      {`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); } /* 3 set olduğu için %33 kaydırıyoruz */
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
          width: max-content;
        }
      `}
    </style>
  </div>
  );
};

export default Testimonials;
