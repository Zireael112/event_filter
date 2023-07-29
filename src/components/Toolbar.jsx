import React from 'react'

export default function Toolbar({ selected, filters, onSelectFilter }) {
  return (
    <div className='toolbar'>
        {["All", ...filters].map((filter) => (
        <button
          className={'btn ' + selected}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
