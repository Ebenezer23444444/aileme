import React from 'react'

function Loops() {
    const LINKS =[
        { id: 1, url: "Home"},
        { id: 2, url: "About"},
        { id: 3, url: "Services"},
        { id: 4, url: "Contact Us"},
        { id: 5, url: "Register"},
        { id: 6, url: "Login"}
    ];
  return (
    <div>
      {LINKS.map((item)=>{
        return(
          <>
          <div key={item.id} >
<li>
  {item.url}
</li>
          </div>
          </>
        )
      } )}
    </div>
  )
}

export default Loops
