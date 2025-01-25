import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { useRecoilValue } from "recoil";
import { cartState } from "./store/cart";
import { BiShoppingBag } from "react-icons/bi";
import Cart from "./pages/Cart";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";

function App() {
  const currentCart = useRecoilValue(cartState);
  console.log(currentCart);
  return (
    <BrowserRouter>
      {currentCart.length > 0 && (
        <Link
          to={"/cart"}
          className="w-12 h-12 rounded-full bg-primary fixed  bottom-2 right-2 flex justify-center items-center z-50 cursor-pointer hover:brightness-75 transition-all duration-300"
        >
          <BiShoppingBag className="text-3xl text-white" />
        </Link>
      )}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product/:id"} element={<Product />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"*"} element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
