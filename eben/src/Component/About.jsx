import React from 'react'

function About() {
    const name ="kelvin"
  return (
    <div>
      <h1>my name is {name}</h1>
      <NewAboutComponent name ={name} />
      

    </div>
  )
}

export const NewAboutComponent = (c) => {
    return (
        <>
        <h1>my new name is {c.name}  newabout component</h1>
        </>
    )
}


export default About
