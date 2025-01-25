import { BiHome } from "react-icons/bi";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="w-full flex flex-col bg-black md:h-[100vh] p-2 md:p-10 relative overflow-hidden">
      <div className="w-full h-full bg-zinc-100">
        <div className="flex justify-between items-center p-2">
          <h1 className="font-semibold text-2xl border-b-[2px] border-primary">
            Privacy Policy
          </h1>
          <Link
            to={"/"}
            className="w-10 h-10 rounded-full bg-primary flex justify-center items-center"
          >
            <BiHome className="text-3xl text-white" />
          </Link>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <p className="text-sm font-normal text-zinc-800 text-justify">
            The company's name is FTT Innovation, and its brand name is Connect
            Hub - FTT Smart Homes., (collectively “FTT”) are committed to
            protecting your privacy and providing you with a positive experience
            on our websites and in using our products and services (“Solution”
            or “Solutions”). This Privacy Statement applies to FTT websites and
            Solutions that link to or reference this Statement and describes how
            we handle personal information and the choices available to you
            regarding collection, use, access, and how to update and correct
            your personal information. Additional information on our personal
            information practices may be provided in offer descriptions,
            supplemental privacy statements, or notices provided prior to or at
            the time of data collection. Certain FTT parent or subsidiary
            websites may have their own privacy statement that describes how we
            handle personal information for those websites specifically. To the
            extent a notice provided at the time of collection or a website or
            Solution specific privacy statement conflict with this Privacy
            Statement, such specific notice or supplemental privacy statement
            will control.
          </p>
          <h2 className="font-semibold text-base">
            Collection of Your Personal Information
          </h2>
          <p className="text-sm font-normal text-zinc-800 text-justify">
            We may collect data, including personal, device information, about
            you as you use our websites and Solutions and interact with us.
            “Personal information” is any information that can be used to
            identify an individual, and may include name, address, email
            address, phone number, login information (account number, password),
            marketing preferences, social media account information, or payment
            card number. If we link other data with your personal information,
            we will treat that linked data as personal information.
          </p>
          <p className="text-base font-semibold text-zinc-800 text-justify">
            Our Connect Hub Mobile APP
          </p>
          <p className="text-sm font-normal text-zinc-800 text-justify">
            At ConnectHub, we prioritize your privacy and the security of your
            data. ConnectHub is a smart home control mobile application designed
            to seamlessly integrate with your smart devices, enabling efficient
            home automation and control. The app may require access to certain
            personal data, including device identifiers, Wi-Fi information, and
            usage patterns, to deliver tailored experiences and ensure
            compatibility with connected devices. We ensure that all collected
            data is used strictly for improving app performance, providing
            personalized features, and maintaining system security. Your data is
            safeguarded through advanced encryption protocols and is never
            shared with third parties without your explicit consent. By using
            ConnectHub, you agree to the collection and use of information in
            compliance with this privacy policy to enhance your smart home
            experience.
          </p>
        </div>
        <div className="w-full flex justify-end items-center p-2">
          <a
            download
            href={"/privacy.docx  "}
            className="px-4 py-2 text-sm  bg-primary rounded-full text-white hover:brightness-75  cursor-pointer"
          >
            Download Complete Document
          </a>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
