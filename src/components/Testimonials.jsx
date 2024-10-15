const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl font-bold mb-10">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src="https://github.com/shadcn.png"
              alt="Customer 1"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="text-lg italic">"Great quality and fast delivery!"</p>
            <h4 className="font-bold mt-4">Jane Doe</h4>
          </div>
          {/* Testimonial 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src="https://github.com/HappyV43.png"
              alt="Customer 2"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="text-lg italic">
              "The freshest fruits I've ever bought online!"
            </p>
            <h4 className="font-bold mt-4">John Smith</h4>
          </div>
          {/* Testimonial 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img
              src="https://github.com/ArdineJ.png"
              alt="Customer 3"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <p className="text-lg italic">
              "Reliable service and great selection."
            </p>
            <h4 className="font-bold mt-4">Emily Johnson</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
