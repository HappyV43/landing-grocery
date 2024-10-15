const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Gambar hero */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            src={"/static/images/hero.jpg"}
            alt="Hero"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        {/* Teks hero */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">
            Fresh Grocery Delivered to Your Door
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Get the freshest fruits, vegetables, dairy, and beverages delivered
            right at your doorstep.
          </p>
          <a
            href="#products"
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
