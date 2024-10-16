import React from "react";

// Data products dengan gambar masing-masing kategori (12 produk)
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
  {
    category: "Snacks",
    image:
      "https://img.freepik.com/free-photo/top-view-assortment-chips-with-copy-space_23-2148562667.jpg?w=1800&t=st=1729090060~exp=1729090660~hmac=06620a77a6824914bd285ff2ed89c001a2d7bdc5236295cec7117d8e486cf5e0",
  },
  {
    category: "Meat",
    image: "static/images/meat.jpg",
  },
  {
    category: "Seafood",
    image: "static/images/seafood.jpg",
  },
  {
    category: "Bakery",
    image:
      "https://blog.dubailocal.ae/wp-content/uploads/2024/06/The-best-Bakeries-in-Dubai-for-enjoying-everything-from-luxury-cakes-to-sourdough.webp",
  },
  {
    category: "Frozen Food",
    image: "static/images/frozen.jpg",
  },
  {
    category: "Canned Goods",
    image:
      "https://st4.depositphotos.com/10614052/29370/i/450/depositphotos_293708768-stock-photo-tin-cans-with-different-food.jpg",
  },
  {
    category: "Personal Care",
    image:
      "https://st.depositphotos.com/1063437/4879/i/600/depositphotos_48798139-stock-photo-wire-shopping-basket-with-body.jpg",
  },
  {
    category: "Household Items",
    image:
      "https://t3.ftcdn.net/jpg/01/91/32/34/360_F_191323402_W2ATUPr8dGHALHrvyX4WVlEDz4qXmmd9.jpg",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-center mb-10">Our Products</h3>
        {/* Mengatur grid dengan 6 kolom di layar besar */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
