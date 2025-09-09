import Link from "next/link";
import Links from "./Links";
import { TypeAnimation } from "react-type-animation";
import github from "/public/github.svg";
import google from "/public/google.svg";
import linkedin from "/public/linkedin.svg";

export default function Hero({ section }) {
  return (
    <div className="mb-6 sticky top-[7rem] mt-12 lg:mt-0">
      <h1 className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black">
        <TypeAnimation
          sequence={["Hi", 3000, "Hello", 3000, "Halo", 3000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ display: "inline-block" }}
        />
        <br />
        I&apos;m Helmi Febri Nandani<span className="text-brand">.</span>
      </h1>
      <div className="flex items-center justify-start my-8">
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://github.com/helmifnandani", "_blank");
            }}
            src={github.src}
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/helmifebrinandani/",
                "_blank"
              );
            }}
            src={linkedin.src}
          />
        </div>
        <div className="transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("mailto:helmifnandani@gmail.com");
            }}
            src={google.src}
            className="transition-opacity hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
      <div className="mb-8">
        <a
          href={`/resume.pdf`}
          download="helmifnandani.pdf"
          target="_blank"
          className="text-brand font-semibold hover:underline"
        >
          Download my Resume
        </a>
      </div>
      <p className="font-light leading-7">
        AI Product Specialist and Front End Developer based in Jakarta, Indonesia with proven experience in crafting responsive, user-centric designs and implementing AI-driven solutions. Currently focused on exploring, researching, and integrating AI technologies to enhance business operations while leveraging a strong front-end development background to create intuitive interfaces for AI solutions. Driven by a passion for innovation and emerging technologies, consistently expanding expertise in AI platforms, APIs, and modern development stacks. Dedicated to bridging the gap between complex AI concepts and practical business applications through technical skills, creativity, and strategic thinking. An enthusiasm for video games serves not only as a source of enjoyment but also sharpens problem-solving abilities and fuels a creative approach to both coding and AI implementation challenges.
      </p>
      <Links section={section} />
    </div>
  );
}
