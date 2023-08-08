import { File, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="lg:hidden flex top-0 bg-primary w-full p-[20px] justify-between">
      {/* <div className="flex-row-reverse"> */}
      <div className="flex flex-col justify-center">
        <Menu width="18px" height="18px" color="#fff" />
      </div>
      <Link
        href="https://drive.google.com/file/d/1-fwrBxqqiQETUfo_j1e4kubUaqCDwvz-/view?usp=drive_link"
        target="_blank"
      >
        <div className="flex gap-2 items-center justify-center p-1 rounded-md h-max w-max text-xs text-slate-600 bg-amber-500">
          Resume <File width="18px" height="18px" color="#8B8A91" />
        </div>
      </Link>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
