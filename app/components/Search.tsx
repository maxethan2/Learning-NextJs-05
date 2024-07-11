'use client'

import { useState, FormEvent } from "react"
// MAKE SURE THAT YOU ARE USING NEXT/NAVIGATION
// NOT NEXT/ROUTER
import { useRouter } from "next/navigation"

export default function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  // you can get the event type by putting an e => in front of onSubmit={handleSubmit} and using intellisense
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push(`/${search}/`)
    setSearch('')
  }

  return (
    <form className="w-50 flex justify-center md:justify-between" onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={search} 
        onChange={(event) => setSearch(event.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl"
        placeholder="Search"
      ></input>
      <button className="p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  )
}