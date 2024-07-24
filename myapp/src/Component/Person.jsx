import React from 'react'
import Newperson from './Newperson'

function Person() {
    let Human ={ 
        Name : "Destiny",
        Age : 27,
        Complexion : "fair"
    }
  return (
    <div>
      <Newperson
       Name={Human.Name}
       Age={Human.Age}
        Complexion={Human.Complexion}/>  
    </div>
  )
}

export default Person
