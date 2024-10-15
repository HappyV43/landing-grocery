const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Teks tentang */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h3 className="text-4xl font-bold mb-4">About Us</h3>
          <p className="text-lg text-gray-600 mb-6">
            We are passionate about providing fresh and high-quality groceries
            to our customers. Whether you're shopping for fruits, vegetables, or
            dairy, we've got you covered!
          </p>
        </div>
        {/* Gambar tentang */}
        <div className="w-full md:w-1/2">
          <img
            src={"static/images/about.jpg"}
            alt="About Us"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
