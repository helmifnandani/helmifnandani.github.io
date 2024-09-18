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
          <h3 className="font-bold text-2xl">Thekoreandaily</h3>
          <div>
            <a
              href="https://thekoreandaily.co.id/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Thekoreandaily.co.id
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          This project is fashioin online store catalogue that has a Web Admin
          to update and customize the catalogue list. This project is for
          potential customer that is interested in purchasing korean style
          fashion. I worked on a team of 2 as the Front End Developer. I mainly
          design and develop the UI of the online store and the Web Admin.
        </p>
        {renderTags(["ReactJS", "Tailwind"])}
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">Forkify</h3>
          <div>
            <a
              href="https://forkify-ndn.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              Forkify
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          This project is recipe finder website. It helps people who like to try
          recipe complete with the ingredients and way to adjust the ingredients
          amount according to the portion that user want to cook.
        </p>
        {renderTags(["ReactJS", "Tailwind"])}
      </Card>
    </section>
  );
}
