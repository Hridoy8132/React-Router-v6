// React-router start lec-1 & 2
import React from 'react'
import { Link } from 'react-router-dom';

 function About() {
  return (
    <div>
        <h1> About Page </h1>
        <p> This is the about page</p>
        <p> Here we learning web development </p>
        <Link to="/"> Go to Home  page </Link>
        <br />
        <Link to="/user/haider"> This is Haider page </Link>
         <br />
        <Link to="/user/preter">This is Peter page </Link>
    </div>
  )
}
export default About;
