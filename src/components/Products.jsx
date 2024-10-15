import React from "react";

// Data products dengan gambar masing-masing kategori
const products = [
  {
    category: "Fruits",
    image: "static/images/fruits.jpg",
  },
  {
    category: "Vegetables",
    image: "static/images/vegetable.jpg",
  },
  {
    category: "Dairy & Eggs",
    image: "static/images/egg.jpg",
  },
  {
    category: "Beverages",
    image: "static/images/minum.jpg",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-10">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-center shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-4">
                {product.category}
              </h4>
              {/* Menampilkan gambar kategori */}
              <img
                src={product.image}
                alt={product.category}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
