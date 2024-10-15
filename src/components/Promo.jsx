import React from "react";

const Promo = () => {
  return (
    <section className="bg-yellow-400 py-10">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-4">
          Special Discount for New Customers!
        </h3>
        <p className="text-lg mb-6">
          Get 20% off on your first purchase. Use code:{" "}
          <span className="font-bold">GROCERY20</span>
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-500 transition">
          Start Shopping
        </button>
      </div>
    </section>
  );
};

export default Promo;
