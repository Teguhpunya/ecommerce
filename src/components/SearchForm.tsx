'use client'
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FilterByStatus from "./FilterByStatus";

export default function SearchForm() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  if (typeof window !== undefined) {
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      const filterByStatus = localStorage.getItem("filterByStatus")
      if (filterByStatus)
        router.push(`/page/1?title=${encodeURIComponent(searchQuery)}&status=${encodeURIComponent(filterByStatus)}`)
      else
        router.push(`/page/1?title=${encodeURIComponent(searchQuery)}`)
    }

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value)
    }

    return (
      <div className="w-full rounded-2xl  bg-stone-800/80">
        <form onSubmit={handleSubmit}
          className="flex flex-row p-4 space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleOnChange}
            placeholder="Search title..."
            className=" bg-white/10 text-white rounded-2xl px-4 py-2 " />
          <FilterByStatus />
          <button type="submit"
            className="flex bg-white/50 text-black items-center justify-center space-x-2 rounded-2xl px-4 py-2"
          >
            Search
          </button>
        </form>
      </div>
    )
  }
}
