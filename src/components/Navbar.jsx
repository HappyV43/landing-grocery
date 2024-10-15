const Navbar = () => {
  return (
    <nav className="bg-green-200 shadow-md relative">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo dan nama */}
        <a href="/" className="flex items-center relative z-10">
          <img
            src={"/static/images/Logo.png"}
            alt="logo"
            className="w-32 h-30" // Ukuran logo yang lebih besar
          />
          <h1 className="text-3xl font-bold text-green-600 ml-2">
            BelanjaMudah
          </h1>
        </a>
        {/* Menu Navbar */}
        <div className="hidden md:flex space-x-4">
          <a href="#products" className="text-gray-700 hover:text-green-500">
            Products
          </a>
          <a href="#about" className="text-gray-700 hover:text-green-500">
            About Us
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-green-500"
          >
            Testimonials
          </a>
          <a href="#contact" className="text-gray-700 hover:text-green-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
