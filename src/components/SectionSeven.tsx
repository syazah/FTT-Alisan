import { motion } from "framer-motion";

function SectionSeven() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(146,52,196,1) 10%, rgba(61,44,220,1) 100%)",
      }}
      className="w-full md:h-[100vh] flex flex-col-reverse md:flex-row justify-start items-center"
    >
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start p-2 md:p-10 gap-2">
        <h3 className="text-lg text-zinc-300">
          Our Innovative Mobile Application
        </h3>
        <h1 className="text-5xl text-white">Connecthub App</h1>
        <p className="text-zinc-200">
          At ConnectHub, we prioritize your privacy and the security of your
          data. ConnectHub is a smart home control mobile application designed
          to seamlessly integrate with your smart devices, enabling efficient
          home automation and control. The app may require access to certain
          personal data, including device identifiers, Wi-Fi information, and
          usage patterns, to deliver tailored experiences and ensure
          compatibility with connected devices
        </p>
        <div className="px-4 py-2 bg-white rounded-full mt-4 hover:bg-zinc-300 cursor-pointer">
          Get Now
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <motion.img
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
          className="w-1/2 "
          src="/connecthub/phoneConnect.png"
        />
      </div>
    </div>
  );
}

export default SectionSeven;
