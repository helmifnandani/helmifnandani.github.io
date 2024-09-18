import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";
import { useState } from "react";

export default function Projects({ setSection }) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("projects");
  }, [inView, setSection]);

  const renderTags = (tech) => {
    return (
      <div className="flex flex-wrap items-center justify-start -mb-2">
        {tech.map((tag) => {
          return (
            <span
              className="px-2 text-sm mr-2 mb-2 py-1 rounded-full bg-brand"
              key={tag}
            >
              {tag}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section ref={ref} className="mb-16" id="projects">
      <h2 className="font-bold text-3xl mb-2">Projects</h2>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">First Project</h3>
          <div>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          Here I&apos;ll describe in a paragraph or so what my project is, what
          it does, and most importantly WHO IT SERVES! Describe the problem it
          fixes and for who it fixes it for. If you worked on a team, say which
          parts that you built. I like to add a video of how it works like the
          one below so people don&apos;t have to sign up if they don&apos;t want
          to.
        </p>
        {renderTags(["ReactJS", "Tailwind"])}
      </Card>
    </section>
  );
}
