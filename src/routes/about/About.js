import "./About.sass";
import { useEffect, React } from "react";
import { Footer } from "../../components/index.js";
import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import DownloadResume from "./DownloadResume.js";
import AboutWrap from "./AboutWrap.js";
import ScrollButton from "../../components/ScrollButton";

const About = () => {
  useEffect(() => {
    document.title = "About | Arghya Sarkar";
    window.scrollTo(0, 0);
  })
  return (
    <main className="about">
      <AboutWrap />
      {/* <Stack /> */}
      {/* <DownloadResume /> */}
      {/* <Experience /> */}
      {/* <Education /> */}
      {/* <Languages /> */}
      {/* <DownloadResume /> */}
      {/* <Certifications /> */}
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default About;
