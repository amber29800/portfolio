import React from 'react'

import { Database } from 'lucide-react'
import Card from './Card'

const DB = () => {
  return (
    <section className="grid gap-4">
      <div className="flex gap-2 items-center text-xl font-bold text-highlight text-white">
        <Database color="#8b8a91" /> Database
      </div>
      <div className="flex flex-wrap gap-10">
        <div className="flex flex-col gap-3">
          <Card source="mysql.jpg" srcLink="https://dev.mysql.com/doc/" />
          <div className="flex flex-col">
            <div className="text-white font-bold">MySQL</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DB;