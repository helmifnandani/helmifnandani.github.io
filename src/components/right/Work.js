import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Work({ setSection }) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("work");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="work">
      <h2 className="font-bold text-3xl mb-2">Work</h2>

      <Card>
        <h3 className="font-bold text-2xl">AI Product Specialist</h3>
        <p className="font-light text-white/80">
          <a
            href="https://www.leverategroup.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            Leverate Group
          </a>{" "}
          • Full-Time • Mar 2025 - Present
        </p>
        <p className="font-light mb-4 text-white/80">Jakarta</p>
        <p className="font-light leading-7 mb-4">
          Explore, research, and implement AI solutions to enhance business operations and client projects. Design and develop AI-powered tools, workflows, and prototypes that integrate with existing systems and deliver scalable solutions.
        </p>
        <p className="font-light leading-7 mb-2">
          Key responsibilities and achievements:
        </p>
        <p className="ms-4 font-light leading-7 mb-4">
          - Lead the development of Leverate's internal enterprise AI platform, integrating APIs (e.g., OpenAI) to deliver scalable AI solutions without building proprietary models.
        </p>
        <p className="ms-4 font-light leading-7 mb-4">
          - Collaborate with cross-functional teams to translate business requirements into AI-driven solutions, ensuring alignment with strategic goals.
        </p>
        <p className="ms-4 font-light leading-7 mb-4">
          - Conduct AI adoption workshops and training sessions for clients and internal teams to accelerate practical understanding and usage of AI.
        </p>
        <p className="ms-4 font-light leading-7 mb-4">
          - Leverage a front-end development background to shape intuitive, user-friendly interfaces for AI solutions.
        </p>
        <p className="ms-4 font-light leading-7">
          - Act as a liaison between technical experts and business stakeholders, simplifying complex AI concepts into actionable strategies.
        </p>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl">Front End Developer</h3>
        <p className="font-light text-white/80">
          <a
            href="https://www.isellercommerce.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            iSeller
          </a>{" "}
          • Full-Time • Sep 2021 - Aug 2024
        </p>
        <p className="font-light mb-4 text-white/80">North Jakarta</p>
        <p className="font-light leading-7 mb-4">
          Implement responsive website and web applications as a Front End
          Developer that worked with Back End Developer team to ensure the
          website interacted smoothly. Give support to client by doing bugfixing
          and implementing feature request.
        </p>
        <p className="font-light leading-7 mb-2">
          Some of the key projects that I did:
        </p>
        <p className="ms-4 font-light leading-7 mb-4">
          - Contributed in revamp UI/UX of the company website.
        </p>
        <p className="ms-4 font-light leading-7 mb-4">
          - Contributed in revamp UI/UX of the WebApp into modern view.
        </p>
        <p className="ms-4 font-light leading-7">
          - Contributed in development of Livin Mandiri commerce.
        </p>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl">Software Engineer</h3>
        <p className="font-light text-white/80">
          PT Sahabat Safari Semesta • Full-Time • Jan 2019 — Jul 2020
        </p>
        <p className="font-light mb-4 text-white/80">South Jakarta</p>

        <p className="font-light leading-7">
          Develop ERP Sytem for both internal and work partner. Design UI/UX for
          mobile based application for Umrah and Hajj
        </p>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl">Lead Software Developer</h3>

        <p className="font-light text-white/80">
          PT Biz Infosistem • Full-Time • May 2017 — Dec 2018
        </p>
        <p className="font-light mb-4 text-white/80">Cibubur</p>

        <p className="font-light leading-7">
          Develop ERP System that is tailored based on the client business
          model. Assisted and give support to client with about software issues
          and concerns.
        </p>
      </Card>
    </section>
  );
}
