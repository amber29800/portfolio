import { Server } from "lucide-react";
import Card from "./Card";

const Backend = () => {
  return (
    <section className="grid gap-4">
      <div className="flex gap-2 items-center text-xl font-bold text-highlight text-white">
        <Server color="#8b8a91" /> Backend
      </div>
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-col gap-3">
          <Card source="node.webp" srcLink="https://nodejs.org/en/docs" />
          <div className="flex flex-col">
            <div className="text-white font-bold">Node.js</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card
            source="expressjs.jpeg"
            srcLink="https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs"
          />
          <div className="flex flex-col">
            <div className="text-white font-bold">Express.js</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Backend;
