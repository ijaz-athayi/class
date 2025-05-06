import React, {useState} from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();

 
  // const showerror = document.getElementById("errors")
  const handlesubmit = (e) =>{
    e.preventDefault();
    var validerror = {};
    if(name.length < 5 ){
      // showerror.innerHTML = ("*name must have 5 letters or more");
      validerror.name = "enter a valid name ";
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ){
      // showerror.innerHTML = ("please enter a valid email");
      validerror.email = "enter a valid email "

    }else if(password.length = 6 ){
      // showerror.innerHTML = ("password must have 6 letters");
      validerror.password = "enter a valid password "
    }
    setErrors(validerror);
      console.log("name =", name); 
      console.log("email =", email);
      console.log("password =", password); 
  }
  // const handlecrtacnt = () =>{
  //   navigate('/signup', { state: { from: 'login' } });
  // }
  return (
    <div id='wrapper'>
      <form action="" id='loginform'>
        <div id='logoin'>
        <h2>LOGIN</h2>
        </div>
        <div>
            <input type="text" placeholder='username'     id='nameinp'     className='logininp' 
            onChange={(e) => setName(e.target.value)} />
            {errors.name && <p className='errorp'>{errors.name}</p>}
            <input type="email" placeholder='email'       id='emailinp'    className='logininp'
            onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <p className='errorp'>{errors.email}</p>}
            <input type="password" placeholder='password' id='passwordinp' className='logininp'
            onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <p className='errorp'>{errors.password}</p>}

        <button type='submit' id='submitlogin'
        onClick={handlesubmit}
        >submit</button>
        {/* <p id='errors'></p> */}
        <p id='crtacnt'>if not a user? 
          {/* <button onClick={handlecrtacnt}> create account</button> */}
          <a href={"/signup"}> create account</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
