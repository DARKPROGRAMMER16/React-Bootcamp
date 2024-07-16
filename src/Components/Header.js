import React from 'react'
import "./header.css";

const Header = (parameters) => {
  return (
    <div className="header">
        <h3>Welcome to MoviesJoy! {parameters.user.name} your age is : {parameters.user.age}</h3> 
    </div>
  )
}

export default Header


