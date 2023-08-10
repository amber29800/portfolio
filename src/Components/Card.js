import Image from "next/image";
import Link from "next/link";

const Card = ({ source, srcLink }) => {
  return (
    <div className="shadow hover:shadow-slate-300 rounded-xl box-border">
      <Link href={`${srcLink}`} target="_blank">
        <div className="relative aspect-video rounded-lg overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={"/" + source}
          width={200}
          height={120}
          alt="card-image"
        />
        </div>
      </Link>
    </div>
  );
};

export default Card;
