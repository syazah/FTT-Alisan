import { motion } from "framer-motion";
import { CircleElement } from "./Header";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SectionFour() {
  return (
    <div className="w-full bg-black h-[120vh] md:h-[90vh] flex flex-col md:flex-row justify-start items-center relative px-2 py-10 md:p-0">
      <div className="w-full md:w-1/2 h-full flex justify-center items-center md:items-end flex-col gap-3 md:ml-10">
        <div className="w-10 h-10 rounded-full bg-primary flex flex-col justify-center items-center">
          <BsStarFill className="text-xl text-white" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-white text-center md:text-end">
            Appliance Control{" "}
          </h1>
          <h1 className="text-3xl font-semibold text-center md:text-end text-white">
            with Energy Monitoring{" "}
          </h1>
        </div>
        <p className="w-full md:w-1/2 text-sm text-zinc-400 text-center md:text-end">
          Seamlessly integrate heavy appliances like ACs and geysers. You can
          also Track your energy consumption in real-time with mobile app
          alerts.
        </p>
        <Link to="/contact" className="px-4 py-2 bg-primary rounded-full flex justify-center items-center mt-4 hover:brightness-90 transition-all duration-300 cursor-pointer text-white">
          Contact Us
        </Link>
      </div>
      <div className="md:w-1/2 flex justify-center items-center h-full relative">
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
          whileHover={{ scale: 1.1, x: 130, y: 100 }}
          src={
            "https://images.pexels.com/photos/2207894/pexels-photo-2207894.jpeg?auto=compress&cs=tinysrgb&w=600 "
          }
          className="absolute md:top-12 top-17 left-12 w-[200px] h-[200px] md:w-[250px] rounded-xl md:h-[250px] object-cover cursor-pointer"
        />
      </div>
    </div>
  );
}

export default SectionFour;
