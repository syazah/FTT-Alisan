import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";

function SectionNine() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-full h-[80vh] bg-zinc-950 flex justify-start items-center">
      <div className="w-1/2 h-full flex flex-col p-10 gap-4 justify-center items-center">
        <div
          onClick={() => setCurrent(0)}
          className="w-full hover:bg-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center "
        >
          <h1 className="text-white text-xl">Faster Release, Lower Cost</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
        <div
          onClick={() => setCurrent(1)}
          className="w-full hover:bg-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center"
        >
          <h1 className="text-white text-xl">Enterprise Grade Solution</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
        <div
          onClick={() => setCurrent(2)}
          className="w-full hover:bg-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center"
        >
          <h1 className="text-white text-xl">Rapid Time To Market</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
        <div
          onClick={() => setCurrent(3)}
          className="w-full hover:bg-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center"
        >
          <h1 className="text-white text-xl">No Coding Needed</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
        <div
          onClick={() => setCurrent(4)}
          className="w-full hover:bg-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center"
        >
          <h1 className="text-white text-xl">Scalable And Reliable</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
      </div>
    </div>
  );
}

function Describe() {
  return <div className=""></div>;
}

export default SectionNine;
