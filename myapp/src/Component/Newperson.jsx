import React from 'react'
import Person from './Person'

function Newperson({Name, Age, Complexion}) {

  return (
    <div>
     My name is {Name}, I am {Age} years old, I am {Complexion} in Complexion
    </div>
  )
}

export default Newperson
