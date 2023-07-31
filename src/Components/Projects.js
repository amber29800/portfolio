import { FolderKanban } from "lucide-react"
import Card from "./Card"
import Link from "next/link"

const Projects = () => {
  return (
    <section className="grid gap-4">
      <div className="flex gap-2 items-center text-xl font-bold text-highlight text-white">
        <FolderKanban color="#8b8a91" /> Projects
      </div>
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-col gap-3">
          <Card source="goFood.jpg" />
          <div className="flex flex-col">
            <div className="text-white font-bold">GoFood!!</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="bitcoin.png" srcLink="https://cryptocurrency-tracking-website-react.vercel.app/"/>
          <div className="flex flex-col">
            <div className="text-white font-bold">Cryptocoins tracking app</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card source="tesla.jfif" srcLink="https://tesla-clone-test-seven.vercel.app/"/>
          <div className="flex flex-col">
            <div className="text-white font-bold">Tesla clone</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects