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
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-6">
          <h3 className="font-bold text-2xl">Hout Cutlery</h3>
          <div>
            <a
              href="https://hout-cutlery.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              HoutCutlery
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-6">
          E-commerce Platform for Artisanal Wooden Cutlery. Developed a
          full-stack e-commerce solution with a dynamic product catalog and
          administrative dashboard. Built a responsive admin panel using React,
          implementing real-time data management with React Query and efficient
          form handling through React Hook Form. Engineered a high-performance
          customer-facing storefront using Next.js, enhanced with fluid
          animations via Framer Motion. Implemented a modern tech stack
          including Supabase for backend services and Tailwind CSS for
          consistent styling across both platforms. Streamlined inventory
          management and product showcase capabilities for artisanal wooden
          cutlery business.
        </p>
        {renderTags([
          "ReactJS",
          "React Query",
          "NextJS",
          "React Hook Form",
          "Tailwind",
          "Framer motion",
          "Supabase",
        ])}
      </Card>
      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-6">
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
          This project is fashion online store catalogue that has a Web Admin to
          update and customize the catalogue list. This project is for potential
          customer that is interested in purchasing korean style fashion. I
          worked on a team of 2 as the Front End Developer. I mainly design and
          develop the UI of the online store and the Web Admin.
        </p>
        {renderTags(["ReactJS", "Tailwind"])}
      </Card>

      <Card>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between mb-6">
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
          This project is a recipe finder website build with ReactJS. It helps
          people who like to try recipe. Complete with adjustment of the
          ingredients according to the portion that user want to cook.
        </p>
        {renderTags(["ReactJS"])}
      </Card>
    </section>
  );
}
