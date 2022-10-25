import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

  let navigate = useNavigate();
  
  const [creds, setCreds] = useState({email:"",password:""})

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email:creds.email, password:creds.password })
    });
    const json = await response.json();
    console.log(json);
    if(json.success){
      //redirect
      localStorage.setItem("token",json.authToken);
      navigate("/");
    }else{
      alert("Invalid Credentials!");
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" onChange={onChange} id="password" name="password" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Login