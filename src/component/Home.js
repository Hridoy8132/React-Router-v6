// React-router start lec-1&2 
import React from 'react'
import { Link } from 'react-router-dom';

 function Home() {
  return (
    <div>
        <h1> Home Page </h1>
        <p> This is the home page of our Website </p>
        <p> Our company name is iSoft </p>
        <Link to="/about"> Go to About page </Link>
      
    </div>
  )
}
export default Home;
