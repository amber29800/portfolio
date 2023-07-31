import NamePhoto from "./NamePhoto";
import Navbar from "./Navbar";
import Skills from "./Skills";

const Hero = () => {
  return (
    <main className="bg-primary w-full h-[100vh] overflow-y-auto md:p-5 sm:p-2">
        <Navbar/>
        <NamePhoto/>
        <Skills/>
    </main>
  )
}

export default Hero;