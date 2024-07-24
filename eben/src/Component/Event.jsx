import React from 'react'

function Event() {
    const takeAshot = () => {
        alert("He scored the goal")
    };
    const takeAshotWithTheParenthisis = () => {
        alert("he took the shot, but missed the goal");
    };
  return (
    <div>
      <button onClick={takeAshot}>shoot</button>
      <button onClick={() =>takeAshotWithTheParenthisis()}>take a shot with the parathesis</button>
      <h4>i am a boy</h4>
      <h3>i am a girl</h3>

    </div>
  )
}

export default Event
