import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ProductData } from "../data";
import { BiMinus, BiPlus, BiX } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { cartState, CartType } from "../store/cart";

function AddToCart({
  product,
  setAddCart,
}: {
  product: ProductData;
  setAddCart: Dispatch<SetStateAction<boolean>>;
}) {
  const [currentCount, setCurrentCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(product.cost);
  const [cartValue, setCartValue] = useRecoilState<CartType[]>(cartState);
  useEffect(() => {
    if (currentCount && product.cost) {
      setPrice(product.cost * currentCount);
    }
  }, [currentCount, product.cost]);
  console.log(cartValue);
  return (
    <div className="w-full h-full p-2 backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center rounded-xl absolute top-0 left-0 z-10">
      <div className="w-[95%] md:w-1/2 p-2 bg-zinc-100 rounded-xl flex flex-col gap-4">
        <div className="flex justify-between items-center border-b-[1px] border-zinc-300 p-1">
          <h1 className="text-xl flex justify-start items-center gap-1">
            <FaShoppingBag className="text-primary" /> Cart
          </h1>
          <div
            onClick={() => setAddCart(false)}
            className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center cursor-pointer hover:bg-red-800 transition-all duration-300"
          >
            <BiX className="text-2xl text-white" />
          </div>
        </div>
        <img src={product.img[0]} className="w-[100px] h-[100px]" />
        <h2>{product.name}</h2>
        <div className="w-full flex justify-start items-center gap-2">
          <h2 className="text-xl">₹{price}</h2>
          <div
            onClick={() =>
              setCurrentCount((prev: number) => {
                if (prev >= 2) {
                  prev = prev - 1;
                }
                return prev;
              })
            }
            className="w-8 h-8 hover:bg-blue-900 hover:scale-90 transition-all duration-200 rounded-full bg-primary flex justify-center items-center cursor-pointer"
          >
            <BiMinus className="text-2xl text-white" />
          </div>
          <h1>{currentCount}</h1>
          <div
            onClick={() =>
              setCurrentCount((prev: number) => {
                if (prev >= 1) {
                  prev = prev + 1;
                }
                return prev;
              })
            }
            className="w-8 h-8 hover:bg-blue-900 hover:scale-90 transition-all duration-200 rounded-full bg-primary flex justify-center items-center cursor-pointer"
          >
            <BiPlus className="text-2xl text-white" />
          </div>
        </div>
        <div className="flex w-full justify-end items-center">
          <div
            onClick={() => {
              setCartValue([
                ...cartValue,
                { ...product, count: currentCount, price: price },
              ]);
              setAddCart(false);
            }}
            className="px-4 py-2 bg-primary rounded-full text-white hover:bg-indigo-900 cursor-pointer"
          >
            Add
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
