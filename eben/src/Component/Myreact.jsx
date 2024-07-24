import React from 'react'

function Myreact() {
  return (
    <div>
      <h1>hello world</h1>
      <NewhHome/>
      <Newperson/>
    </div>
  )
}

const NewhHome =() =>{
    return (
        <>
    <h2>this is a new home component inside of the home component</h2>
        </>
    )
}

export default Myreact
