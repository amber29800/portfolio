import Card from "./Card";
import { Monitor } from "lucide-react";
const Frontend = () => {
  return (
    <section className="">
      <div className="flex gap-2 text-xl font-bold text-highlight text-white">
        <Monitor color="#8b8a91" /> Frontend
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
        <div className="flex flex-col gap-3">
          <Card source="html5.png" srcLink="https://www.w3schools.com/html/" />
          <div className="flex flex-col">
            <div className="text-white font-bold">HTML5</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="css3.JPG" srcLink="https://developer.mozilla.org/en-US/docs/Web/CSS" />
          <div className="flex flex-col">
            <div className="text-white font-bold">CSS3</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="tailwind.jfif" srcLink="https://tailwindcss.com/docs/installation" />
          <div className="flex flex-col">
            <div className="text-white font-bold">Tailwind CSS</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="reactjs.png" srcLink="https://react.dev/learn"/>
          <div className="flex flex-col">
            <div className="text-white font-bold">React.js</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="reduxjs.png" srcLink="https://redux.js.org/introduction/getting-started" />
          <div className="flex flex-col">
            <div className="text-white font-bold">Redux</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="nextjs-logo.png" srcLink="https://nextjs.org/docs" />
          <div className="flex flex-col">
            <div className="text-white font-bold">Next.js</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontend;
