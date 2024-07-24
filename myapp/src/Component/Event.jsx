import React from 'react'

function Event() {
    const takeAshot = () =>{
        alert("He scored the goal");
    };
    const takeAshotWithTheParenthisis = () =>{
        alert(" He took the shot")
    }

  return (
    <div>
      <button onClick={takeAshot}>
shoot
      </button>
      <button onClick={takeAshotWithTheParenthisis ()}>
take a shot with the parenthisis
      </button>

    </div>
  )
}

export default Event
