import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./pages/cartContext";
import Navbar from "./pages/navbar";
import Footer from "./pages/footer";
import MenuPage from "./pages/menu";
import CartPage from "./pages/cart";
import Home from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={
          <>
          <Navbar />
          <Home />
          <Footer />
          </>
           } />
           
           <Route path="/about" element={
          <>
          <Navbar />
          <AboutPage />
          <Footer />
          </>
           } />
           
           <Route path="/contact" element={
          <>
          <Navbar />
          <ContactPage />
          <Footer />
          </>
           } />
           

          <Route path="/menu" element={
          <>
          <Navbar />
          <MenuPage />
          <Footer />
          </>
        } />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}