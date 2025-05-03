import { motion } from "framer-motion";
const productData = [
  [
    {
      name: "2 Module",
      description:
        "The 2 Module Touch Switch operates at 230V AC and supports capacitive, inductive, and resistive loads. Designed with auto-calibration and wet-hand proof touch, it ensures reliable performance and safety. With RGB LED indicators for on/off status and customizable 2-way operation, it blends functionality with modern aesthetics. Ideal for compact spaces, it is available in Black, Grey, and Champagne Gold finishes.",
      img: "/two.png",
    },
    {
      name: "4 Module",
      description:
        "The 4 Module Touch Switch offers smart control for various appliances with a load capacity of 10A per load and 25A for heavy-duty devices. Featuring dual-phase surge-protected power, RGB LED indicators, and wet-hand proof touch, it is stylish and safe. Available in elegant Black, Grey, and Champagne Gold finishes, it suits modern homes.",
      img: "/four.png",
    },
  ],
  [
    {
      name: "6 Module",
      description:
        "The 6 Module Touch Switch combines advanced technology with user convenience, supporting diverse loads, including high-power appliances up to 25A. It features auto-calibration, RGB LED indicators, customizable 2-way operation, and wet-hand proof touch. Available in premium Black, Grey, and Champagne Gold, it adds sophistication to larger spaces.",
      img: "/six.png",
    },
    {
      name: "8 Module",
      description:
        "The 8 Module Touch Switch is a high-capacity solution for managing multiple appliances, supporting loads up to 25A for heavy devices. With features like auto-calibration, RGB LED indicators, wet-hand proof touch, and dual-phase power supply, it offers unmatched functionality and style. Available in Black, Grey, and Champagne Gold, it suits expansive setups perfectly.",
      img: "/eight.png",
    },
  ],
];
function SectionTwo() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(146,52,196,1) 10%, rgba(61,44,220,1) 100%)",
      }}
      className="w-full min-h-[110vh]  text-white flex flex-col justify-start p-2 md:p-6 items-center "
    >
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-white text-5xl"
        >
          Categories
        </motion.h1>
      </div>
      <div className="flex flex-col gap-4 mt-20 w-full h-full">
        {productData.map((product, index) => {
          return (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              key={index}
              className="w-full h-full flex flex-col md:flex-row gap-2"
            >
              <Product product={product[0]} />
              <Product product={product[1]} />
            </motion.div>
          );
        })}

        <Product
          product={{
            name: "12 Module",
            description:
              "The 12 Module Touch Switch is a high-capacity solution for managing multiple appliances, supporting loads up to 25A for heavy devices. With features like auto-calibration, RGB LED indicators, wet-hand proof touch, and dual-phase power supply, it offers unmatched functionality and style. Available in Black, Grey, and Champagne Gold, it suits expansive setups perfectly.",
            img: "/twelve.png",
          }}
        />
      </div>
    </div>
  );
}
function Product({
  product,
}: {
  product: { name: string; description: string; img: string };
}) {
  return (
    <div className="flex flex-col md:flex-row md:h-[200px] border-[1px] border-zinc-900  justify-start items-center md:w-1/2 rounded-xl overflow-hidden gap-2 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
      <img
        src={product.img}
        className="w-full h-[150px] md:w-[200px] md:h-[200px] bg-zinc-400  object-cover"
      />
      <div className="w-full flex flex-col items-start p-2 h-full justify-between ">
        <div className="flex flex-col">
          <h1 className="text-2xl text-white">{product.name}</h1>
          <p className="text-zinc-300 text-xs">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
