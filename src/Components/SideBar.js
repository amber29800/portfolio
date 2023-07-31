import Logo from "./SideBar/Logo";
import Menu from "./SideBar/Menu";

const SideBar = () => {
  return (
    <aside className="hidden lg:flex flex-col bg-primary sm:w-[300px] h-[100vh] position-fixed items-center justify-center ">
      <div className="toggle h-full p-5">
        <Logo />
        <Menu />
      </div>
    </aside>
  );
};

export default SideBar;
