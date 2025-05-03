import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const imageData = [
  "/header/1.png",
  "/header/2.png",
  "/header/3.png",
  "/header/4.png",
  "/header/5.png",
  "/header/6.png",
];
function Header() {
  const [imgIndex, setImgIndex] = useState(1);
  useEffect(() => {
    if (imgIndex === 6) {
      setImgIndex(0);
    } else {
      const interval = setInterval(() => {
        setImgIndex(imgIndex + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [imgIndex]);
  const imageVariants = {
    initial: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      style={{
        background:
          "linear-gradient(250deg, rgba(146,52,196,1) 20%, rgba(61,44,220,1) 80%)",
      }}
      className="w-full h-[80vh] md:h-[100vh] flex justify-start items-center p-4 relative overflow-hidden"
    >
      <CircleElement
        animVal={-1}
        customStyles={
          "top-20 left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-75"
        }
        secondCircleStyle={
          "w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[rgba(61,44,220,1)]"
        }
        gradient={
          "linear-gradient(190deg, rgba(146,52,196,1) 0%, rgba(61,44,220,1) 70%) "
        }
      />
      <CircleElement
        animVal={1}
        customStyles={
          "top-10 right-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-75"
        }
        secondCircleStyle={
          "w-[220px] h-[220px] md:w-[320px] md:h-[320px] bg-[rgba(146,52,196,1)]"
        }
        gradient={
          "linear-gradient(120deg, rgba(61,44,220,1) 0%,rgba(146,52,196,1)  60%) "
        }
      />

      <div className="w-full flex md:flex-row flex-col justify-center items-center h-full z-10">
        <div className="w-full h-[50vh] md:w-1/2 flex flex-col justify-end md:justify-center items-center md:h-full p-4">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="text-2xl md:text-6xl text-white font-semibold"
          >
            Introducing Our Full
          </motion.h1>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
            className="text-2xl md:text-6xl text-white font-semibold"
          >
            Glass Touch Panels
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 1, ease: "easeInOut" }}
            className="text-base text-zinc-200 w-[100%] text-center"
          >
            Experience the future of smart living with our cutting-edge touch
            panel, designed to simplify and elevate your home's functionality.
          </motion.p>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full bg-white mt-4 cursor-pointer hover:bg-zinc-900 hover:text-white transition-all duration-500"
          >
            Know More
          </Link>
        </div>

        <div className="md:w-1/2 h-[30vh] md:h-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex}
              src={imageData[imgIndex]}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-2/3 object-cover object-center"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function CircleElement({
  customStyles,
  gradient,
  secondCircleStyle,
  animVal,
}: {
  customStyles: string;
  gradient: string;
  secondCircleStyle?: string;
  animVal: number;
}) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: animVal * 20 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      style={{
        background: gradient,
      }}
      className={`${customStyles} rounded-full absolute flex justify-center items-center`}
    >
      <div className={`${secondCircleStyle} rounded-full`}></div>
    </motion.div>
  );
}
export { CircleElement };
export default Header;
