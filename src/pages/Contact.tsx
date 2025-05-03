import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";

function Contact() {
  return (
    <div
      style={{
        background:
          "linear-gradient(250deg, rgba(146,52,196,1) 20%, rgba(61,44,220,1) 80%)",
      }}
      className="w-full md:h-[100vh] p-2 md:p-10"
    >
      <div className="w-full h-full flex md:flex-row flex-col bg-zinc-50 rounded-xl md:p-10 gap-6">
        <div className="w-full md:w-1/2 h-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.1723493234927!2d77.0473564!3d28.534538899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6af4959952f12bf3%3A0x7d9396fa66940f6f!2sFTT%20Innovations!5e0!3m2!1sen!2sin!4v1737691257305!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col p-4 pb-6">
          <h1 className="text-3xl font-normal text-primary">Contact Us</h1>
          <p className="text-xs md:text-sm font-normal text-zinc-800 text-justify">
            Have questions about our smart home panels? Contact us today! Our
            expert team is here to assist with product inquiries, support, or
            customization needs. Reach out via phone, email, or our online form,
            and we'll ensure your home gets smarter with ease. We’re here to
            help!
          </p>
          <div className="w-full flex mt-10 gap-2">
            <BiPhoneCall className="text-lg md:text-2xl text-primary" />
            <p className="text-xs md:text-base">+919999720930,</p>
            <p className="text-xs md:text-base">+918810508718</p>
          </div>
          <div className="w-full flex mt-4 gap-2">
            <CiMail className="text-lg md:text-2xl text-primary" />
            <div className="flex flex-col md:flex-row">
              <p className="text-xs md:text-base">
                fttinnovationsproduction@gmail.com,
              </p>
              <p className="text-xs md:text-base">connecthubapp@gmail.com</p>
            </div>
          </div>
          <div className="flex mt-4 gap-2">
            <GrLocation className="text-lg md:text-2xl text-primary" />
            <p className="w-2/3 md:text-base text-xs">
              FTT innovations Peregrine building Pole 253, village bijwasan
              railway crossing, New Delhi 110077
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
