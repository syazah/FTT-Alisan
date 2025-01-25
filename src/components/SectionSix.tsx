
import { BsDeviceSsd } from "react-icons/bs";
import { CiGlass, CiSettings } from "react-icons/ci";

import { GiCircuitry, GiIndianPalace, GiMultipleTargets } from "react-icons/gi";

import { TbAutomation, TbColorSwatch } from "react-icons/tb";

function SectionSix() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(146,52,196,1) 10%, rgba(61,44,220,1) 100%)",
      }}
      className="w-full h-[130vh] md:h-[90vh]  text-white flex flex-col md:flex-row justify-start items-center"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-4">
        <h1 className="text-3xl md:text-5xl text-center md:text-start">Our Impressive</h1>
        <h1 className="text-3xl md:text-5xl text-center md:text-start">Features List</h1>
        <p className="w-full md:w-1/2 text-sm text-center md:text-start text-zinc-200">
          We have a wide range of impressive features that are enough to beat
          any of the market standards
        </p>
        <div className="flex flex-col md:flex-row justify-start md:gap-10 mt-6 items-start md:items-center">
          <div className="flex flex-col">
            <h1 className="text-white font-normal text-base mt-4 flex justify-start items-center gap-1">
              <GiMultipleTargets className="text-sm " /> Multi-Operational
            </h1>
            <h1 className="text-white font-normal text-base mt-4 flex justify-start items-center gap-1">
              <TbColorSwatch className="text-sm " /> RGB Customization
            </h1>
            <h1 className="text-white font-normal text-base mt-4 flex justify-start items-center gap-1">
              <GiCircuitry className="text-sm " />
              Customizable Switches
            </h1>
            <h1 className="text-white font-normal text-base mt-4 flex justify-start items-center gap-1">
              <BsDeviceSsd className="text-sm " />
              Modular Accessories
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white font-normal text-base mt-4 flex justify-start items-center gap-1">
              <CiGlass className="text-sm " />
              Glass Interface
            </h1>
            <h1 className="text-white font-normal text-base mt-4 flex justify-start items-center gap-1">
              <TbAutomation className="text-sm " />
              Automation Features
            </h1>
            <h1 className="text-white font-normal text-base mt-4 flex justify-start items-center gap-1">
              <GiIndianPalace className="text-sm " />
              Made in India
            </h1>
            <h1 className="text-white font-normal text-base mt-4 flex justify-start items-center gap-1">
              <CiSettings className="text-sm " />
              Dimming and Tuning
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full bg-center bg-cover bg-[url('https://cdn.pixabay.com/photo/2018/10/28/17/35/smart-home-3779361_1280.jpg')]"></div>
    </div>
  );
}

export default SectionSix;
