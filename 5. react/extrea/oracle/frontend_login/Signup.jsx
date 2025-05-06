import React, { useState } from 'react';
import '../css/signup.css'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handlesignup = (e) => {
    e.preventDefault();
    const validerror = {};

    if (name.trim().length <= 5) {
      validerror.name = "Name must be more than 5 characters.";
    }else if (!email.includes('@')) {
      validerror.email = "Enter a valid email address.";
    }else if (password.length < 6) {
      validerror.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(validerror).length > 0) {
      setErrors(validerror);
      return;
    }

    setErrors({});
    console.log("Signup successful");
    console.log({ name, email, password });
    // Reset form or proceed with actual signup logic
  };

  return (
    <div id='signupwrapper'>
      <form id='signupform'>
        <h2>SIGN UP</h2>
        <div id='signupformcontent'>
          <input type="text" placeholder='Name' className='signupinps' value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className='errorp'>{errors.name}</p>}

          <input type="email" placeholder='Email' className='signupinps' value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p  className='errorp'>{errors.email}</p>}

          <input type="password" placeholder='Password' className='signupinps' value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p  className='errorp'>{errors.password}</p>}

          <button onClick={handlesignup} className='signupinps'>Submit</button>
          <p>Already a user? <a href="/login">Login</a></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
