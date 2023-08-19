'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';

const FilterByStatus = () => {
  const options = [
    { value: 'RELEASING', label: 'Releasing' },
    { value: 'FINISHED', label: 'Finished' },
  ]
  const [selectedOption, setSelectedOption] = useState<string>(
    () => {
      const savedOption = localStorage.getItem('filterByStatus')
      return savedOption || options[0].value
    }
  )

  useEffect(() => {
    localStorage.setItem('filterByStatus', selectedOption)
  }, [selectedOption])

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div className="flex items-center justify-center space-x-2">
      <p>Status: </p>
      <div className="relative inline-flex">
        <select
          className="block appearance-none w-full px-4 py-2 pr-8  bg-white/50 text-black items-center justify-center rounded space-x-2 p-4
           hover:border-gray-500  hover:cursor-pointer"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M6 8l4 4 4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default FilterByStatus
