import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Promo from "./components/Promo";
import About from "./components/About";

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
