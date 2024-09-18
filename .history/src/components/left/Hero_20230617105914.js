import Link from "next/link";
import Links from "./Links";

export default function Hero({ section }) {
  return (
    <div className="mb-6 sticky top-[7rem] mt-12 lg:mt-0">
      <h1 className="text-5xl lg:text-6xl leading-tight lg:leading-tight font-black">
        Hey, I&apos;m
        <br />
        TomIsLoading<span className="text-brand">.</span>
      </h1>
      <div className="flex items-center justify-start my-8">
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://github.com/", "_blank");
            }}
            src="/github.svg"
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://www.linkedin.com/", "_blank");
            }}
            src="/linkedin.svg"
          />
        </div>
        <div className="mr-4 transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("https://twitter.com/", "_blank");
            }}
            src="/twitter.svg"
          />
        </div>
        <div className="transition-opacity hover:opacity-70 cursor-pointer">
          <img
            alt=""
            onClick={() => {
              window.open("mailto:youremail@gmail.com");
            }}
            src="/google.svg"
            className="transition-opacity hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
      <p className="font-light leading-7">
        I&apos;m a software engineer based in Orlando, Florida. Here&apos;s a
        sentence about{" "}
        <Link href="#" className="text-brand font-bold hover:underline">
          a cool thing that I built
        </Link>{" "}
        and the people it helps. This is about the type of person I am and what
        I like to do in my free time so you know I&apos;m not a robot.
        Here&apos;s one last interesting sentence so that you remember me a bit
        better.
      </p>
      <Links section={section} />
    </div>
  );
}
