import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full md:h-[60vh] flex flex-col md:flex-row gap-10 bg-black p-16 px-10">
      <div className="w-full md:w-1/3 flex flex-col justify-start  items-center p-4 gap-4">
        <img src="/logo.png" className="w-[30%]" />
        <p className="text-xs text-justify text-zinc-200">
          Alisan Smart Homes is a growing company that is recognized as a
          premier automation service provider. We are highly competent system
          integrators with a one-stop shop for all of your smart home
          requirements.
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-2/3 justify-start items-start">
        <div className="w-full md:w-1/4 flex flex-col ">
          <h1 className="mt-4 text-white">Solutions</h1>
          <h1 className="text-sm mt-6 text-zinc-300">Smart Hotels</h1>
          <h1 className="text-sm text-zinc-300">Smart Agriculture</h1>
          <h1 className="text-sm text-zinc-300">Smart Street Lightings</h1>
          <h1 className="text-sm text-zinc-300">Packages</h1>
          <h1 className="text-sm text-zinc-300">Updates</h1>
        </div>
        <div className="w-full md:w-1/4 flex flex-col ">
          <h1 className="mt-4 text-white">Fetaures</h1>
          <h1 className="text-sm mt-6 text-zinc-300">Overview</h1>
          <h1 className="text-sm text-zinc-300">Collaborate</h1>
        </div>
        <div className="w-full md:w-1/4 flex flex-col ">
          <h1 className="mt-4 text-white">Get Started</h1>
          <Link to={"/privacy-policy"} className="text-sm mt-6 text-zinc-300">
            Privacy Policy
          </Link>
          <Link to={"/terms"} className="text-sm text-zinc-300">
            Terms and Conditions
          </Link>
          <h1 className="text-sm text-zinc-300">Refund and Returns</h1>
        </div>
        <div className="w-full md:w-1/4 flex flex-col ">
          <h1 className="mt-4 text-white">About</h1>
          <h1 className="text-sm mt-6 text-zinc-300">Stories</h1>
          <h1 className="text-sm text-zinc-300">Communities</h1>
          <h1 className="text-sm text-zinc-300">Blogs</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
