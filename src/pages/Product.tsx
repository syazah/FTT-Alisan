import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ModuleProducts, ProductData, RetroFit } from "../data";
import { motion } from "framer-motion";
import { BiChevronLeft } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import AddToCart from "../components/AddToCart";
import Banner from "../components/Banner";

function Product() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(
    null
  );
  const [addCart, setAddCart] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(true);
  const { id } = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    const emailProvided = sessionStorage.getItem("email");
    console.log(emailProvided);
    if (!emailProvided) {
      setShowBanner(true);
    } else {
      setShowBanner(false);
    }
  }, []);
  useEffect(() => {
    if (ModuleProducts && RetroFit) {
      let product: ProductData | undefined;
      product = ModuleProducts.find((product) => product.id === id);
      if (product) {
        setCurrentProduct(product);
      } else {
        product = RetroFit.find((product) => product.id === id);
        if (product) {
          setCurrentProduct(product);
        }
      }
    }
  }, [id]);
  return (
    <div
      style={{
        background:
          "linear-gradient(250deg, rgba(146,52,196,1) 20%, rgba(61,44,220,1) 80%)",
      }}
      className="w-full md:h-[100vh] p-2 md:p-10 relative"
    >
      <div className="w-full h-full bg-zinc-100 rounded-xl relative flex flex-col md:flex-row justify-start items-center">
        <div
          onClick={() => {
            navigation("/");
          }}
          className="absolute w-10 h-10 md:w-16 md:h-16  bg-white cursor-pointer hover:shadow-none transition-all duration-500 rounded-full shadow-2xl top-0 left-0 md:-top-4 md:-left-4 flex justify-start items-center"
        >
          <BiChevronLeft className="text-6xl text-primary" />
        </div>
        <div className="w-full h-[200px]  md:w-1/2 md:h-full bg-zinc-300 flex justify-center items-center overflow-hidden">
          <motion.img
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 2 }}
            className="w-[60%] rounded-xl cursor-pointer"
            src={currentProduct?.img[0]}
          />
        </div>
        <div className="w-full md:w-1/2 h-full  p-8 flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="text-sm text-primary">Product</p>
            <h1 className="text-black font-normal text-2xl">
              {currentProduct?.name}
            </h1>
            <h3 className="font-semibold text-2xl text-black mt-2">
              ₹{currentProduct?.cost}.00
            </h3>

            <div className="flex flex-col justify-start items-start w-full ">
              <h1>Available Colors</h1>
              <div className="flex justify-start items-start gap-2">
                <div className="px-2 py-1 rounded-full text-white flex justify-center items-center bg-[#535150]">
                 Space Gray
                </div>
                <div className="px-2 py-1 rounded-full text-white flex justify-center items-center bg-[#000]">
                 Royal Black
                </div>
                <div className="px-2 py-1 rounded-full text-white flex justify-center items-center bg-[#ab936b]">
                  Champagne Gold
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-start items-center gap-2">
              <div
                onClick={() => setSelectedButton(0)}
                className={`py-2 px-4 ${
                  selectedButton === 0
                    ? "text-white bg-primary"
                    : "text-black bg-zinc-300"
                } rounded-full text-sm cursor-pointer`}
              >
                Description
              </div>
              <div
                onClick={() => setSelectedButton(1)}
                className={`py-2 px-4 ${
                  selectedButton !== 0
                    ? "text-white bg-primary"
                    : "text-black bg-zinc-300"
                } rounded-full text-sm cursor-pointer`}
              >
                Reviews
              </div>
            </div>
            {selectedButton === 0 ? (
              <p className="mt-4 text-sm text-zinc-600">
                {currentProduct?.description}
              </p>
            ) : (
              <div></div>
            )}
          </div>
          <div className="w-full flex justify-end items-center md:mt-0 mt-4">
            <div
              onClick={() => {
                setAddCart(true);
              }}
              className="px-4 py-2 bg-violet-600 rounded-full flex justify-center items-center gap-1 text-white cursor-pointer hover:bg-violet-900 transition-all duration-500"
            >
              <FaBagShopping /> Add To Cart
            </div>
          </div>
        </div>
      </div>
      {addCart && currentProduct && (
        <AddToCart product={currentProduct} setAddCart={setAddCart} />
      )}
      {showBanner && <Banner setShowBanner={setShowBanner} />}
    </div>
  );
}
export default Product;
