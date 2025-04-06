import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-gray-100 p-8 shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Moliyaviy yangi yangiliklar va foydali maslahatlar uchun obuna bo‘ling
      </h2>
      <p className="text-gray-600 mb-6">
        Hisob-kitoblaringizni yanada samarali yuritish uchun eng so‘nggi
        buxgalteriya yangiliklari va ekspert tavsiyalaridan xabardor bo‘ling.
      </p>
      <form className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
        <input
          type="email"
          className="p-3 border border-gray-300 bg-white rounded-full sm:rounded-l-full sm:rounded-r-none text-black w-full sm:w-[350px] transition"
          placeholder="Email manzilingizni kiriting"
          required
        />
        <button
          type="submit"
          className="bg-[#002F6C] text-white px-12 py-3 rounded-full sm:rounded-r-full sm:rounded-l-none hover:bg-[#0951B0] transition w-full sm:w-auto"
        >
          Obuna bo‘lish
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
