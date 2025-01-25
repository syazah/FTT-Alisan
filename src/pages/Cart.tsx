import { useRecoilValue } from "recoil";
import { cartState } from "../store/cart";
import Navbar from "../components/Navbar";
import { BiShoppingBag } from "react-icons/bi";

function Cart() {
  const cartData = useRecoilValue(cartState);
  return (
    <div className="w-full h-[100vh] flex flex-col justify-start items-start bg-black">
      <Navbar />
      <div className="w-full h-full flex flex-col">
        <div className="flex w-full justify-start items-center border-b-[1px] border-primary">
          <h1 className="text-white mt-12 font-semibold text-2xl p-2 flex gap-2">
            <BiShoppingBag className="text-primary text-3xl" />
            Your Cart
          </h1>
        </div>
        <div className="flex flex-col justify-start items-center">
          {cartData.length > 0 &&
            cartData.map((cart, index) => {
              return (
                <div
                  key={index}
                  className="w-full border-b-[1px] p-2 border-zinc-800 flex justify-between"
                >
                  <div className="flex gap-2">
                    <img className="w-[50px]" src={cart.img[0]} />
                    <div className="flex flex-col">
                      <h1 className="text-white text-lg">{cart.name}</h1>
                      <h1 className="text-white text-lg">x{cart.count}</h1>
                    </div>
                  </div>
                  <h2 className="text-primary text-xl font-semibold">
                    ₹{cart.price}
                  </h2>
                </div>
              );
            })}
          <div className="flex w-full p-4 justify-end items-center">
            <div className="bg-primary px-4 py-2 rounded-full text-white cursor-pointer hover:brightness-90 transition-all duration-500">
              Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
