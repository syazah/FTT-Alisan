import { Link } from "react-router-dom";

function CustomPanel() {
  return (
    <div className="w-full bg-black py-4 md:h-[80vh] flex gap-6 md:gap-0 flex-col md:flex-row">
      <div className="flex w-full md:w-1/2 h-full justify-center items-center flex-col gap-2">
        <h1 className="text-white font-semibold text-3xl text-center">
          Customise Your Panels
        </h1>
        <p className="text-zinc-200 text-center text-sm w-[80%]">
          Experience the power of our custom panel designer, crafted to give you
          unmatched flexibility and control. With an intuitive drag-and-drop
          interface, you can design panels tailored to your unique needs without
          any coding skills. Customize layouts, colors, and features to align
          perfectly with your vision while ensuring a seamless user experience.
        </p>
        <Link
          to="https://touch.alisan.co.in/"
          className="px-4 py-2 rounded-full bg-primary mt-4"
        >
          Experience
        </Link>
      </div>
      <div className="w-full md:w-1/2 h-full overflow-hidden">
        <img className="w-full h-full object-center object-contain rounded-xl" src={"/custom.png"} />
      </div>
    </div>
  );
}

export default CustomPanel;
