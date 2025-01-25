import { useNavigate } from "react-router-dom";
import { CircleElement } from "./Header";
import { RetroFit } from "../data";
import { motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useState } from "react";

function SectionFive() {
  const [multiplier, setMultiplier] = useState(0);
  return (
    <div className="w-full h-[60vh] bg-black flex flex-col justify-start items-start  p-8 gap-10 relative overflow-hidden">
      <div className="w-10 h-10 rounded-full bg-white absolute bottom-4 left-2 z-40 shadow-2xl  flex justify-center items-center cursor-pointer ">
        <BiChevronLeft
          onClick={() => {
            if (multiplier > 0) setMultiplier((prev) => prev - 2);
            else setMultiplier(0);
          }}
          className="text-3xl"
        />
      </div>
      <div
        onClick={() => {
          if (multiplier < 12) setMultiplier((prev) => prev + 3);
          else setMultiplier(0);
        }}
        className="w-10 h-10 rounded-full bg-white absolute bottom-4 cursor-pointer right-2 z-40 shadow-2xl  flex justify-center items-center"
      >
        <BiChevronRight className="text-3xl" />
      </div>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-3xl text-white"
      >
        Retro Fit
      </motion.h1>
      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: -multiplier * 100,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
        className="flex justify-start items-center gap-4 md:gap-16 w-full"
      >
        {RetroFit.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </motion.div>
    </div>
  );
}
function Product({
  data,
}: {
  data: { id: string; name: string; img: string[] };
}) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${data.id}`)}
      className="flex flex-col justify-center items-center gap-2 relative cursor-pointer"
    >
      <CircleElement
        animVal={0}
        customStyles={"relative w-[200px] h-[200px]"}
        secondCircleStyle={"w-[150px] h-[150px] bg-black"}
        gradient={
          "linear-gradient(190deg, rgba(146,52,196,1) 0%, rgba(61,44,220,1) 70%) "
        }
      />
      <img
        src={data.img[0]}
        className="scale-90 top-[45%] rounded-xl shadow-[0px_10px_20px_0px_#000] -translate-y-[50%] bg-zinc-50 absolute"
      />
    </div>
  );
}

export default SectionFive;
