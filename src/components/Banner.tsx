import emailjs from "emailjs-com";
import { useState } from "react";

import { BiX } from "react-icons/bi";
emailjs.init("6-pyYm9C6-e1vTvi3");
type mail = {
  name: string;
  email: string;
  phone: string;
};
function Banner({
  setShowBanner,
}: {
  setShowBanner: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [mail, setMail] = useState<mail>({ name: "", email: "", phone: "" });
  async function sendMail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    console.log(form);
    try {
      await emailjs.sendForm(
        "service_4u8mmbw",
        "template_usgx60x",
        form,
        "6-pyYm9C6-e1vTvi3"
      );

      // Store the email in sessionStorage
      const email = (form.elements.namedItem("email") as HTMLInputElement)
        ?.value;
      if (email) {
        sessionStorage.setItem("email", email);
        setShowBanner(false);
      }
      // Optionally, you can reset the form after successful submission
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again later.");
    }
  }
  return (
    <div className="w-full fixed flex justify-center items-center top-0 left-0 ">
      <div className="w-[300px] md:w-[400px] py-2 flex flex-col justify-end items-end">
        <div
          onClick={() => setShowBanner(false)}
          className="w-full flex cursor-pointer justify-end items-end"
        >
          <BiX className="text-2xl text-red-400 hover:text-red-600" />
        </div>
        <div className="flex flex-col w-full rounded-xl overflow-hidden">
          <img className="w-full h-[300px] object-center object-cover" src="/banner.png" />
          <form
            onSubmit={sendMail}
            className="w-full p-2 bg-white flex flex-col gap-2"
          >
            <input
              onChange={(e) => setMail({ ...mail, name: e.target.value })}
              value={mail.name}
              name="name"
              placeholder="Your Name"
              className="w-full bg-zinc-100 rounded-xl px-2"
            />
            <input
              onChange={(e) => setMail({ ...mail, email: e.target.value })}
              value={mail.email}
              name="email"
              placeholder="Your Email"
              className="w-full bg-zinc-100 rounded-xl px-2"
            />
            <input
              onChange={(e) => setMail({ ...mail, phone: e.target.value })}
              value={mail.phone}
              name="phone"
              placeholder="Phone Number"
              className="w-full bg-zinc-100 rounded-xl px-2"
            />
            <button
              type="submit"
              className="w-full self-end bg-zinc-700 text-white flex justify-center items-center py-2 rounded-full"
            >
              APPLY
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Banner;
