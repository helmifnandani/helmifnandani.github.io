import Card from "../../utilities/Card";

export default function Tech() {
  return (
    <Card>
      <h3 className="font-bold text-2xl mb-6">Tech I Love</h3>
      <p className="font-light leading-7 mb-2">
        My choice tech stack GENERALLY (but not always):
      </p>
      <ul className="mb-4 grid grid-cols-2 gap-x-2">
        <li className="font-light leading-7">• HTML</li>
        <li className="font-light leading-7">• CSS</li>
        <li className="font-light leading-7">• JavaScript</li>
        <li className="font-light leading-7">• TypeScript</li>
        <li className="font-light leading-7">• React</li>
        <li className="font-light leading-7">• Redux</li>
        <li className="font-light leading-7">• Redux Tool Kit</li>
        <li className="font-light leading-7">• React Query</li>
        <li className="font-light leading-7">• Next JS</li>
        <li className="font-light leading-7">• Tailwind</li>
        <li className="font-light leading-7">• Axios</li>
        <li className="font-light leading-7">• jQuery</li>
        <li className="font-light leading-7">• Bootstrap</li>
        <li className="font-light leading-7">• Rivets JS</li>
      </ul>
      <p className="font-light leading-7 mb-2">
        Some other tech that have used before:
      </p>
      <ul className="grid grid-cols-2 gap-x-2">
        <li className="font-light leading-7">• MS Sql Server</li>
        <li className="font-light leading-7">• C#</li>
        <li className="font-light leading-7">• .Net</li>
      </ul>
      <p className="font-light leading-7 mb-2">Tools that I familiar with:</p>
      <ul className="grid grid-cols-2 gap-x-2">
        <li className="font-light leading-7">• Git</li>
        <li className="font-light leading-7">• Figma</li>
        <li className="font-light leading-7">• Notion</li>
        <li className="font-light leading-7">• Azure</li>
        <li className="font-light leading-7">• Supabase</li>
      </ul>
    </Card>
  );
}
