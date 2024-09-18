import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Card from "../utilities/Card";

export default function Education({ setSection }) {
  const [ref, inView] = useInView({});

  useEffect(() => {
    inView && setSection("education");
  }, [inView, setSection]);

  return (
    <section ref={ref} className="mb-16" id="education">
      <h2 className="font-bold text-3xl mb-2">Education</h2>

      <Card>
        <h3 className="font-bold text-2xl mb-2">MSc in Software Engineering</h3>
        <p className="font-light text-white/80 mb-4">
          Staffordshire University • Feb 2015 — Nov 2016
        </p>

        <div className="mt-6">
          <a
            href="https://www.staffs.ac.uk/"
            target="_blank"
            rel="noreferrer"
            className="text-brand text-sm underline"
          >
            Staffordshire University
          </a>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-2">MSc in Software Engineering</h3>
        <p className="font-light text-white/80 mb-4">
          Staffordshire University • Feb 2015 — Nov 2016
        </p>

        <div className="mt-6">
          <a
            href="https://www.apu.edu.my/"
            target="_blank"
            rel="noreferrer"
            className="text-brand text-sm underline"
          >
            Asia Pacific University of Technology &amp; Innovation
          </a>
        </div>
      </Card>
    </section>
  );
}
