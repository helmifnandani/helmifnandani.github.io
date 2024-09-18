import Link from "next/link";
import Links from "./Links";
import { TypeAnimation } from "react-type-animation";
import ResumePDF from "public/resume.pdf";

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
        <a href={ResumePDF} download="HelmiFNandani" target="_blank">
          <Button>Download my Resume</Button>
        </a>
      </div>
      <p className="font-light leading-7">
        I&apos;m a Front End Developer based in Jakarta, Indonesia.
        {/* I&apos;m a software engineer based in Orlando, Florida.
        Here&apos;s a sentence about{" "}
        <Link href="#" className="text-brand font-bold hover:underline">
          a cool thing that I built
        </Link>{" "}
        and the people it helps. This is about the type of person I am and what
        I like to do in my free time so you know I&apos;m not a robot.
        Here&apos;s one last interesting sentence so that you remember me a bit
        better. */}
      </p>
      <Links section={section} />
    </div>
  );
}
