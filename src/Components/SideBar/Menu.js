import { Home, User2, Instagram,Github, Linkedin, Code, Utensils, Bitcoin, Car, File } from "lucide-react";
import Link from "next/link"

const Menu = () => {
  return (
    <div className="w-[260px] h-[597px] p-5 bg-sideBarContentBg rounded-lg overflow-y-scroll scrollbar-thick scrollbar-thumb-blue-200">
      <Link href = "/" target="_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><Home className="text-menuContent"/>Home</Link>
      <Link href = "/" target="_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><User2 className="text-menuContent"/>Contact Me</Link>
      <Link href = "https://drive.google.com/file/d/1-fwrBxqqiQETUfo_j1e4kubUaqCDwvz-/view?usp=drive_link" target="_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><File className="text-menuContent"/>Resume</Link>
      <div className="text-menuContent mt-5">Socials</div>
      <Link href = "https://github.com/amber29800" target="_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><Github className="text-emerald-600"/>Github</Link>
      <Link href = "https://leetcode.com/amber290800/" target="_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><Code className="text-orange-600"/>LeetCode</Link>
      <Link href = "https://www.linkedin.com/in/amber2908/" target="_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><Linkedin className="text-[#0077b5]"/>LinkedIn</Link>
      <Link href = "https://www.instagram.com/_amber_srivastava_/?next=%2F" target="_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><Instagram className="text-[#C13584]"/>Instagram</Link>

      <div className="text-menuContent mt-5">Projects</div>
      <Link href = "https://github.com/amber29800/Food-delivery-app" target = "_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><Utensils className="text-[#a7422b]"/>Food ordering website</Link>
      <Link href = "https://cryptocurrency-tracking-website-react.vercel.app/" target = "_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><Bitcoin className="text-amber-600"/>Crypto currency website</Link>
      <Link href = "https://tesla-clone-test-seven.vercel.app/" target = "_blank" className="flex gap-4 text-menuContent text-sm items-center transform transition-transform duration-300 hover:-translate-y-1 p-4"><Car className="text-red-600"/>Tesla website clone</Link>
    </div>
  );
};

export default Menu;
