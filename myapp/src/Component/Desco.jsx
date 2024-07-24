import React from 'react'


function Desco() {
  const myStyle={
    background:"Red",
    color:"white"
  }
  return (
    <div>
      <h1 style={myStyle}> This is my Desco Component</h1>
       {/* <p>Beginers journey</p> */}
{/* <NewHome/> */}



 {/* <h3>My name is </h3> */}
    </div> 
   
  )

}


const NewHome = () =>{
    return (
        <>
        <h2> This is a new Component</h2>
        </>
    )
}

export const NewAboutComponent= () =>{
    return(
        <h3>This is the new about Component
    
        </h3>

        
    )
}


export default Desco
