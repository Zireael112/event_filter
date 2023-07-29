import React from 'react'

export default function ProjectsList({projectItem}) {
  return (
    <div className='projects'>
      {projectItem.map(el => <img src={el.img}></img>)}
    </div>
  )
}
