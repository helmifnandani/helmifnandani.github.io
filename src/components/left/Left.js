import Hero from "./Hero";

export default function Left({ section }) {
  return (
    <div className="grid-span-1 z-10 relative">
      <Hero section={section} />
    </div>
  );
}
