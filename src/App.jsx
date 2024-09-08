import "./App.css";
import "./index.css";
import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
import Footer from "./component/Footer";
import About from "./component/pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./component/pages/Blog";
import Contact from "./component/pages/Contact";
import Accessories from "./component/Products/Accessories";
import EarBuds from "./component/Products/Earbuds";
import Headphones from "./component/Products/Headphones";
import Speaker from "./component/Products/Speaker";
import SingleProduct from "./component/pages/SingleProduct";
import OurProducts from "./component/pages/OurProducts";
import Banner from "./component/pages/Banner";
import LearnMore from "./component/pages/LearnMore";
import FeaturedProducts from "./component/pages/FeaturedProducts";
import ProductCategory from "./component/pages/ProductCategory";
import Blog_Post from "./component/pages/Blog_Post";
import Shoping from "./component/pages/Shoping";
import Policies from "./component/pages/Policies";
import Why from "./component/pages/Why";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./component/pages/CheckOutForm";
const stripePromise = loadStripe("your-publishable-key-here");

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Pages" element={<Blog />} />
          <Route path="/" element={<Home />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/Earbuds" element={<EarBuds />} />
          <Route path="/Headphones" element={<Headphones />} />
          <Route path="/Speaker" element={<Speaker />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/OurProducts" element={<OurProducts />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/Home" element={<Home />} />
          <Route path="ProductCategory" element={<ProductCategory />} />
          <Route path="/FeaturedProduct" element={<FeaturedProducts />} />
          <Route path="/LearnMore" element={<LearnMore />} />
          <Route path="/Blog_Post" element={<Blog_Post />} />
          <Route path="/Shoping" element={<Shoping />} />
          <Route path="/Policies" element={<Policies />} />
          <Route path="/Why" element={<Why />} />
        </Routes>
        <Footer />
      </Router>
    </Elements>
  );
}

export default App;
