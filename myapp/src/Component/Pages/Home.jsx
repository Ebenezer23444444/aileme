import React from 'react'
// import "../StyleSheet/Styles.css"
function Home() {
  const user=localStorage.getItem('email')

  const logoutHandler=()=>{
    localStorage.removeItem('auth')
    window.location.href='Register'
  }

  const deleteUser=()=>{
    localStorage.clear()
    window.location.reload ()
  }
  return (
    <div className='b'>
      Welcome {user}
      <button className='btn btn-danger' onClick={logoutHandler}>Log out</button>
      <button className='btn btn-info text-white mx-2'>DeActivate Account</button>


      {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Delete Account
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Dear {user}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Are you sure you want to delete your account
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={deleteUser}>Delete</button>
      </div>
    </div>
  </div>
</div>
      


    </div>
  )
}

export default Home
