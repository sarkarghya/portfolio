import AboutMe from "../about/AboutMe.js";
import Stack from "../about/Stack.js";
import { React } from 'react';

const AboutPreview = () => {
  return (
    <article className="landing__about">
      <AboutMe />
      {/* <Stack /> */}
    </article>
  );
};

export default AboutPreview;
