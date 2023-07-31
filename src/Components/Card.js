import Image from "next/image";
import Link from "next/link";

const Card = ({ source, srcLink }) => {
  return (
    <div className="shadow hover:shadow-slate-300 rounded-xl box-border">
      <Link href={`${srcLink}`} target="_blank">
        <Image
          className="w-[200px] h-[120px] rounded-xl object-center"
          src={"/" + source}
          width={200}
          height={120}
        />
      </Link>
    </div>
  );
};

export default Card;
