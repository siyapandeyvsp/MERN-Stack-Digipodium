import React from "react";
import classes from './login.module.css'
const Login = () => {
  return (
    <div>
      
      <h1>Login Page</h1>
      <input
       placeholder="enter name " />
       <input type="password"
       placeholder="enter password"/>
       <button className="my-btn">Submit global</button>
<button className={classes.myBtn}>Submit scoped</button>      
    </div>
  );
};

export default Login;
