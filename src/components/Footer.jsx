import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="font-bold mb-4">About Us</h4>
          <p>
            We provide fresh and organic groceries directly to your door. Enjoy
            healthy living with Belanja Murah.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p>Email: support@belanja-murah.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <ul className="flex justify-center md:justify-start space-x-4">
            <li>
              <a href="https://facebook.com" className="hover:text-gray-300">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="hover:text-gray-300">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="hover:text-gray-300">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>&copy; 2024 GroceryLand. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
