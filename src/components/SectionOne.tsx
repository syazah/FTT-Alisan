import { motion } from "framer-motion";
import { CircleElement } from "./Header";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SectionOne() {
  return (
    <div className="w-full bg-black h-[120vh] md:h-[90vh] flex flex-col md:flex-row justify-start items-center relative">
      <div className="w-full md:w-1/2 flex justify-center items-center h-full relative">
        <CircleElement
          animVal={0}
          customStyles={"relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"}
          secondCircleStyle={"w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-black"}
          gradient={
            "linear-gradient(190deg, rgba(146,52,196,1) 0%, rgba(61,44,220,1) 70%) "
          }
        />
        <motion.img
          initial={{ x: 0, y: 0, scale: 1 }}
          whileHover={{ scale: 1.1, x: -130, y: 100 }}
          src={
            "https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          className="absolute md:top-12 md:right-12 w-[200px] h-[200px] md:w-[250px] rounded-xl md:h-[250px] object-cover cursor-pointer"
        />
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-start md:justify-center items-center md:items-start flex-col gap-3 md:ml-10">
        <div className="w-10 h-10 rounded-full bg-primary flex flex-col justify-center items-center">
          <BsStarFill className="text-xl text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl  font-semibold text-white">
            Modular Flexibility{" "}
          </h1>
          <h1 className="text-3xl font-semibold text-white">
            with Color Options{" "}
          </h1>
        </div>
        <p className="w-[90%] text-center md:text-start md:w-1/2 text-sm text-zinc-400">
          Available in standard Indian modular sizes (2M, 4M, 6M, 8M, 12M) and
          You can Choose from Royal Black, Champagne Gold, and Space Grey.
        </p>
        <Link to="/contact" className="px-4 py-2 bg-primary rounded-full flex justify-center items-center mt-4 text-white cursor-pointer">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default SectionOne;
