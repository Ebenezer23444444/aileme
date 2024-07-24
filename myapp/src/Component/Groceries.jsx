import React from 'react'
import Newgroceries from './Newgroceries'

function Groceries() {
    let groceries= {
       R: "Rice",
       Y: "Yam",
       O:  "Oil",
       B: "Beans"
    }
  return (
    <div>
      <Newgroceries
     R= {groceries.R}
     Y= {groceries.Y}
     O= {groceries.O}
     B= {groceries.B} />
    </div>
  )
}

export default Groceries
