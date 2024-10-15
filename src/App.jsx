import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Promo from "./components/Promo";
import About from "./components/About";
import Hero from "./components/Hero.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <About />
      <Hero />
      <Promo />
      <Products />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
