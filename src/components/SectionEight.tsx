import { FaIndustry } from "react-icons/fa6";
import { GrMultiple } from "react-icons/gr";
import { MdHighQuality } from "react-icons/md";
import { PiMathOperationsBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function SectionEight() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(146,52,196,1) 10%, rgba(61,44,220,1) 100%)",
      }}
      className="w-full md:h-[80vh] flex flex-col-reverse md:flex-row justify-start items-center p-2 gap-2"
    >
      <div className="w-full md:w-1/3 bg-white flex flex-col justify-evenly items-center h-full rounded-xl p-2">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-2xl">Our Innovation</h1>
          <p className="text-sm text-zinc-800 w-2/3 text-center">
            A technology used for smart glass and smart films
          </p>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="flex justify-center items-center gap-2 text-zinc-800">
            <GrMultiple /> Multiple Usecases{" "}
          </h1>
          <h1 className="flex justify-center items-center gap-2 text-zinc-800">
            <PiMathOperationsBold /> Operation Control{" "}
          </h1>
          <h1 className="flex justify-center items-center gap-2 text-zinc-800">
            <MdHighQuality /> Best in Class Tech{" "}
          </h1>
          <h1 className="flex justify-center items-center gap-2 text-zinc-800">
            <FaIndustry /> Trusted By Industry{" "}
          </h1>
        </div>
        <Link
          to="/contact"
          className="rounded-full bg-black py-2 px-4 text-white mt-8"
        >
          Know More
        </Link>
      </div>
      <div className="w-full md:w-2/3 p-2 relative">
        <div className="absolute bottom-4 right-4 w-[120px] h-[60px] md:w-[200px] md:h-[100px] bg-primary rounded-lg flex justify-center items-center p-2 ">
          <h1 className="text-white text-center text-[10px] md:text-base">
            India's Largest PDLC Project Completed by FTT Innovations
          </h1>
        </div>
        <video
          muted
          loop
          autoPlay
          src="/pdlc.mp4"
          className="h-full rounded-xl w-full"
        />
      </div>
    </div>
  );
}

export default SectionEight;
