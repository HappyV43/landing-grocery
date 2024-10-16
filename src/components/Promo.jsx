import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Promo = () => {
  return (
    <section className="bg-yellow-400 py-10">
      <div className="container mx-auto text-center px-4">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Special Discount for New Customers!
        </h3>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
          className="mb-6"
        >
          <SwiperSlide>
            <img
              src={"/static/images/discount.jpeg"}
              alt="Discount offer"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={"/static/images/discount2.jpg"}
              alt="Discount offer"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
        </Swiper>

        <button
          className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-500 transition mt-6"
          aria-label="Start shopping with discount"
        >
          Start Shopping
        </button>
      </div>
    </section>
  );
};

export default Promo;
