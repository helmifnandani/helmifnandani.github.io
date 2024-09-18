import Link from "next/link";
import Links from "./Links";
import { TypeAnimation } from "react-type-animation";

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
            src="/github.svg"
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
            src="/linkedin.svg"
          />
        </div>
        <div className="transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("mailto:helmifnandani@gmail.com");
            }}
            src="/google.svg"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
      <div className="mb-8">
        <a
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          download="HelmiFNandani.pdf"
          target="_blank"
          className="text-brand font-semibold hover:underline"
        >
          Download my Resume
        </a>
      </div>
      <p className="font-light leading-7">
        I&apos;m a Front End Developer based in Jakarta, Indonesia. A
        well-organized and committed individual with a couple of years of
        experience in implementing responsive web design. Passionate about
        continuous learning, I enjoy expanding my knowledge of new technology
        stacks in my free time. I am eager to contribute to a dynamic
        development team within an ambitious company and forge a long-term
        career in the IT industry. Outside of work, I’m an avid video game
        enthusiast, which further fuels my creativity and problem-solving
        skills.
      </p>
      <Links section={section} />
    </div>
  );
}
