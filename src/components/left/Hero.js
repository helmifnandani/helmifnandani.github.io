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
        Front End Developer based in Jakarta, Indonesia who is dedicated web
        developer with proven experience in crafting responsive and user-centric
        designs. Driven by a passion for innovation, this professional
        consistently expands expertise in emerging technology stacks, ensuring
        currency with industry trends. Seeking to leverage technical skills and
        creativity within a forward-thinking company, the goal is to contribute
        significantly to a dynamic development team while building a rewarding
        long-term career in IT. An enthusiasm for video games serves not only as
        a source of enjoyment but also sharpens problem-solving abilities and
        fuels a creative approach to coding challenges.
      </p>
      <Links section={section} />
    </div>
  );
}
