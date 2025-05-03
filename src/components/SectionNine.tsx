import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
type DescData = {
  title: string;
  desc: string;
  img: string;
};
const features: DescData[] = [
  {
    title: "Faster Release, Lower Cost",
    desc: "Accelerate your product launch with streamlined processes and cutting-edge tools.",
    img: "https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=600", // Image representing speed or progress
  },
  {
    title: "Enterprise Grade Solution",
    desc: "Deliver robust and secure solutions built for high performance at scale.",
    img: "https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=600", // Image showing security or enterprise-scale infrastructure
  },
  {
    title: "Rapid Time To Market",
    desc: "Shorten development cycles and launch your products quickly with confidence.",
    img: "https://images.pexels.com/photos/745365/pexels-photo-745365.jpeg?auto=compress&cs=tinysrgb&w=600", // Image showing urgency or quick progress
  },
  {
    title: "No Coding Needed",
    desc: "Empower users to create and manage without requiring technical expertise.",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600", // Image of user-friendly interfaces or no-code tools
  },
  {
    title: "Scalable And Reliable",
    desc: "Ensure your solution grows effortlessly and operates seamlessly under heavy loads.",
    img: "https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg?auto=compress&cs=tinysrgb&w=600", // Image representing reliability or scaling systems
  },
];
function SectionNine() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="w-full md:h-[80vh] bg-zinc-950 flex md:flex-row flex-col-reverse justify-start items-center">
      <div className="w-full md:w-1/2 h-full flex flex-col md:p-10 gap-4 justify-center items-center">
        <div
          onClick={() => setCurrent(0)}
          className={`w-full ${
            current === 0 ? "bg-primary" : ""
          } border-[2px] border-black hover:border-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center`}
        >
          <h1 className="text-white text-xl">Faster Release, Lower Cost</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
        <div
          onClick={() => setCurrent(1)}
          className={`w-full ${
            current === 1 ? "bg-primary" : ""
          } border-[2px] border-black hover:border-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center`}
        >
          <h1 className="text-white text-xl">Enterprise Grade Solution</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
        <div
          onClick={() => setCurrent(2)}
          className={`w-full ${
            current === 2 ? "bg-primary" : ""
          } border-[2px] border-black hover:border-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center`}
        >
          <h1 className="text-white text-xl">Rapid Time To Market</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
        <div
          onClick={() => setCurrent(3)}
          className={`w-full ${
            current === 3 ? "bg-primary" : ""
          } border-[2px] border-black hover:border-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center`}
        >
          <h1 className="text-white text-xl">No Coding Needed</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
        <div
          onClick={() => setCurrent(4)}
          className={`w-full ${
            current === 4 ? "bg-primary" : ""
          } border-[2px] border-black hover:border-primary cursor-pointer transition-all duration-300 p-2 flex justify-between items-center`}
        >
          <h1 className="text-white text-xl">Scalable And Reliable</h1>
          <BiRightArrow className="text-3xl text-primary" />
        </div>
      </div>

      <Describe current={current} />
    </div>
  );
}

function Describe({ current }: { current: number }) {
  return (
    <div className="w-full md:w-1/2 p-2 md:p-10 py-16 h-full flex flex-col gap-2">
      <img
        src={features[current].img}
        className="w-full h-[200px] object-cover object-center"
      />
      <h1 className="text-white text-xl">{features[current].title}</h1>
      <p className="text-zinc-200">{features[current].desc}</p>
    </div>
  );
}

export default SectionNine;
