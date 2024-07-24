import React, { useState } from 'react'
import "./StyleSheet/Styles.css"
import { FaEye,  FaEyeSlash } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function Myform() {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [pass, setPass]= useState("")
const [cpass, setCpass]=useState('')
    
    const [isVisiblePwd, setIsVisiblePwd]=useState(false)
    const [isVisiblePwdII, setIsVisiblePwdII]=useState(false)
    

const [checkForName, setCheckForName]=useState('')
const [checkForEmail, setCheckForEmail]=useState('')

const [isLoggedin, setIsLoggedin]=useState(false)



const [err, setErr]=useState('')

    
    const subMitHandler= (e) =>{
    e.preventDefault();
   
if (name=="") {
    toast.error('The Name Field is required')

}else if(email==''){

  toast.error('The Email Field is required')
}else if(pass ==''){
  toast.error('The Password Field is required')

}else if(cpass ==''){
  toast.error('The Confirm Password Field is required')

}else if (cpass != pass){
  toast.warn('Password mixmatch')
}else{
localStorage.setItem('name', name)
localStorage.setItem('email', email)
localStorage.setItem('pwd', pass)
localStorage.setItem('auth', email)
window.location.href='/'
  toast.success('Registration completed')
}

}

const toggleLogin=()=>{
  setIsLoggedin((prev)=>!prev)
}


const togglePwdVisibility=()=>{
setIsVisiblePwd((r)=>!r)
}

const togglePwdVisibilityII=()=>{
  setIsVisiblePwdII((r)=>!r)
  }


  const loginHandler=(e)=>{
e.preventDefault()
if (email=="") {
  toast.error('The Email Field is required')
}else if(pass ==""){
  toast.error('The Password Field is required')

}else{
  const local_email=localStorage.getItem('email')
  const local_pwd=localStorage.getItem('pwd')

  if (local_email !== email) {
  toast.error('Invalid credentials')
  }else if(local_pwd != pass){
  toast.error('user does not exist or wrong password')
  }else{
    localStorage.setItem('auth', email)
    toast.success('You are logged in')
    window.location.href='/'
  }
}
  }

  return (
    <div className='form'>
      <h2>{isLoggedin? 'Login Form with React':"Registration Form"}</h2>
      <form  >
      {isLoggedin? "":  <input className='inp1' type="text" placeholder='Enter your FullName'
        name=''
        id=''
        onChange={(e) => setName(e.target.value)}
        

/>} 
       {isLoggedin? "" :<> <br /> <br />
        <input className='inp' type="text" placeholder='Enter UserName' />
        <br /> <br /></>}

        <input className='inp2' type="Email" placeholder='Enter your Email'
        onChange={(f) => setEmail(f.target.value)}
        name=''
        id=''
        /> 
        <br /> <br />

<div className="icc">
<input className='inp3' type={isVisiblePwd? 'text':'password'} placeholder='Enter your Password'
onChange={(p) => setPass(p.target.value)}
/> 
{isVisiblePwd ? <FaEye className='ic'  onClick={togglePwdVisibility}/>: <FaEyeSlash className='ic' onClick={togglePwdVisibility}/>}
</div>

{isLoggedin? "":<><br /> <br />
<div className="icc">

<input className='inp4' onChange={(e)=>setCpass(e.target.value)} type={isVisiblePwdII? 'text':'password'}placeholder='confirm password' />

{isVisiblePwdII ? <FaEye onClick={togglePwdVisibilityII} className='ic'/>: <FaEyeSlash onClick={togglePwdVisibilityII} className='ic'/>}

</div></>}

<br /> <br />
       <center> {isLoggedin?<button className='btn btn-primary'onClick={loginHandler}>Login</button>:<button className='btn btn-primary'onClick={subMitHandler}>Register</button>}</center> 
       {isLoggedin ? <><small>Create an Account <a href="#" onClick={toggleLogin}>Here</a></small></>:
       <small>Already have an account? login <a href="#" onClick={toggleLogin}>Here</a></small>
       
       }
      </form>

    </div>
  )
}

export default Myform
