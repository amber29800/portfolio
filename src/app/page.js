import Hero from "@/Components/Hero";
import SideBar from "@/Components/SideBar";
import "./globals.css";

const Home = () => {
  return (
    <div className="flex h-screen font-mono">
      <SideBar/>
      <Hero/>
    </div>
  )
}

export default Home;