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
        <p className="font-semibold leading-7 mb-3">
          Artisanal Wooden Cutlery E-commerce Platform:
        </p>
        <ul className="font-light leading-7 mb-3 list-disc mx-6">
          <li>
            Engineered Next.js storefront featuring dynamic product catalog and
            fluid Framer Motion animations
          </li>
          <li>
            Built React admin dashboard with real-time inventory management
            using React Query
          </li>
          <li>
            Implemented efficient form handling with React Hook Form for product
            management
          </li>
          <li>
            Created seamless data synchronization between storefront and admin
            panel using Supabase
          </li>
          <li>
            Designed responsive UI with Tailwind CSS ensuring consistent
            experience across devices
          </li>
        </ul>
        <p className="font-semibold leading-7 mb-3">Key Features:</p>
        <ul className="font-light leading-7 mb-6 list-disc mx-6">
          <li>Dynamic product catalog with advanced filtering</li>
          <li>Real-time inventory tracking</li>
          <li>Admin dashboard for product management</li>
          <li>Optimized product image showcases</li>
          <li>Mobile-responsive design</li>
        </ul>

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
          <h3 className="font-bold text-2xl">The Wild Oasis</h3>
          <div>
            <a
              href="https://the-wild-oasis-website-hfn.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-brand font-semibold hover:underline"
            >
              The Wild Oasis
            </a>
          </div>
        </div>
        <p className="font-light leading-7 mb-3">
          Built a full-featured accommodation booking platform inspired by
          Airbnb:
        </p>
        <ul className="font-light leading-7 mb-6 list-disc mx-6">
          <li>
            Engineered responsive Next.js frontend with dynamic search,
            filtering, and booking capabilities
          </li>
          <li>
            Developed interactive property listings with image galleries and map
            integration
          </li>
          <li>
            Created secure user authentication system with booking management
            dashboard
          </li>
          <li>
            Implemented real-time availability calendar and reservation system
          </li>
          <li>
            Built admin dashboard for property management and booking oversight
          </li>
          <li>
            Optimized performance with server-side rendering and image
            optimization
          </li>
        </ul>
        <p className="font-semibold leading-7 mb-3">Key Features:</p>
        <ul className="font-light leading-7 mb-6 list-disc mx-6">
          <li>Property listing management for hosts</li>
          <li>Booking system with availability tracking</li>
          <li>User profiles and booking history</li>
          <li>Advanced search with multiple filter options</li>
        </ul>
        {renderTags([
          "ReactJS",
          "Next.Js",
          "Tailwind",
          "React Query",
          "Context API",
        ])}
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
