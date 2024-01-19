import React from "react";
import AnimatedText from "../components/split/AnimatedText";

const About = () => {
  return (
    <section id="section02">
      <div className="about__wrap">
        <div className="small">about</div>
        <div className="about__text">
          <AnimatedText text="As a front-end developer, I aim for user-friendly web development. There are still many shortcomings, but I will work hard." />
        </div>
      </div>
      <div className="about__img__wrap">
        <div className="about__img">
          <div className="img"></div>
          <div className="img"></div>
          <div className="img"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
