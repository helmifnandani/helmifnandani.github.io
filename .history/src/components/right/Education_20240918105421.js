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
            https://www.staffs.ac.uk/
          </a>
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-2xl mb-6">Another School</h3>
        <p className="font-light leading-7 mb-6">
          If you&apos;ve got more than one education to list, dope! Add it.
          Don&apos;t feel like you have to add your high school if you
          don&apos;t feel it&apos;s relevant, but it doesn&apos;t hurt if
          you&apos;ve got some other cool stuff (captain of a team etc) to show
          off.
        </p>

        <div className="mt-6">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-brand text-sm underline"
          >
            Website
          </a>
        </div>
      </Card>
    </section>
  );
}