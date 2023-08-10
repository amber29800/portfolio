import Card from "./Card";
import { Code2 } from "lucide-react";

const Programming = () => {
  return (
    <section className="grid gap-4">
      <div className=" flex gap-2 items-center text-xl font-bold text-highlight text-white">
        <Code2 color="#8b8a91" /> Programming Languages
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
        <div className="flex flex-col gap-3" >
          <Card source="cplusplus.jpg" srcLink="https://en.cppreference.com/w/"/>
          <div className="flex flex-col">
            <div className="text-white font-bold">C++</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="javascript.webp" srcLink="https://developer.mozilla.org/en-US/docs/Web/javascript" />
          <div className="flex flex-col">
            <div className="text-white font-bold">Javascript</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="sql-1.png" srcLink="https://dev.mysql.com/doc/" />
          <div className="flex flex-col">
            <div className="text-white font-bold">SQL</div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Programming;

{
  /* <section className="grid gap-4">
      <div className="text-xl font-bold text-highlight text-white">
        Programming Languages
      </div>
      <div className="flex flex-wrap gap-6">
        <div className="flex flex-col gap-3">
          <Card source="cplusplus.jpg" />
          <div className="flex flex-col">
            <div className="text-white font-bold">C++</div>
            <div className="text-[#4f4f52]"><Code/>See code on github</div>
          </div>
        </div>
        <Card source="javascript.webp" />
        <Card source="th.jfif" />
      </div>
    </section> */
}
