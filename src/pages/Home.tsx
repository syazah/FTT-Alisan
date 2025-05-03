import CustomPanel from "../components/CustomPanel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SectionEight from "../components/SectionEight";
import SectionFive from "../components/SectionFive";
import SectionFour from "../components/SectionFour";
import SectionNine from "../components/SectionNine";
import SectionOne from "../components/SectionOne";
import SectionSeven from "../components/SectionSeven";
import SectionSix from "../components/SectionSix";
import SectionThree from "../components/SectionThree";
import SectionTwo from "../components/SectionTwo";

function Home() {
  return (
    <div className="w-full min-h-[100vh]">
      <Navbar />
      <Header />
      <SectionThree />
      <CustomPanel />
      <SectionTwo />
      <SectionFive />
      <SectionSeven />
      <SectionOne />
      <SectionFour />
      <SectionEight />
      <SectionNine />
      <SectionSix />
      <Footer />
    </div>
  );
}

export default Home;
