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
        <h3 className="font-bold text-2xl">IT Specialist</h3>
        <p className="font-light text-white/80">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-brand hover:underline"
          >
            PT Sahabat Safari Semesta
          </a>{" "}
          • Full-Time • Jan 2019 — Jul 2020
        </p>
        <p className="font-light mb-4 text-white/80">South Jakarta</p>

        <p className="font-light leading-7">
          Develop ERP Sytem for both internal and work partner. Design UI/UX for
          mobile based application for Umrah and Hajj
        </p>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl">Unrelated experience</h3>

        <p className="font-light text-white/80">
          Various Companies • Full-Time • Aug 2015 - Nov 2018
        </p>
        <p className="font-light mb-4 text-white/80">Various Locations</p>

        <p className="font-light leading-7">
          If you&apos;ve got unrelated experience, you can separate them out as
          you wish. I tend to lump my less relevant experience into one place
          like this. I worked in construction before I became a developer, so I
          might say something like &quot;lead teams of welders and fitters to
          build projects on a tight deadline&quot;. You get the idea {":)"}
        </p>
      </Card>
    </section>
  );
}
