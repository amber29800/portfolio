import Card from "./Card";
import { Monitor } from "lucide-react";
const Frontend = () => {
  return (
    <section className="grid gap-4">
      <div className="flex gap-2 items-center text-xl font-bold text-highlight text-white">
        <Monitor color="#8b8a91" /> Frontend
      </div>
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-col gap-3">
          <Card source="html5.png" />
          <div className="flex flex-col">
            <div className="text-white font-bold">HTML5</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="css3.JPG" />
          <div className="flex flex-col">
            <div className="text-white font-bold">CSS3</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="tailwind.jfif" />
          <div className="flex flex-col">
            <div className="text-white font-bold">Tailwind CSS</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="reactjs.png" />
          <div className="flex flex-col">
            <div className="text-white font-bold">React.js</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="reduxjs.png" />
          <div className="flex flex-col">
            <div className="text-white font-bold">Redux</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="nextjs-logo.png" />
          <div className="flex flex-col">
            <div className="text-white font-bold">Next.js</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frontend;
