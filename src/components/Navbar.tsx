import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 40 }}
      className="w-full p-2 text-white flex justify-between items-center fixed z-50 bg-transparent backdrop-blur-sm"
    >
      <div className="flex">
        <motion.a
          initial={{ scale: 1 }}
          animate={{ scale: [1.2, 1] }}
          transition={{ delay: 3, duration: 2, type: "spring", stiffness: 40 }}
          className="text-base font-semibold"
          href="/"
        >
          <img src="/logo.png" className="w-[30px] h-[30px] rounded-full" />
        </motion.a>
      </div>
      <div className="flex justify-start items-center gap-2"></div>
    </motion.div>
  );
}

export default Navbar;
