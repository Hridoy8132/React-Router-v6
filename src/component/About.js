// React-router start lec-1 & 2
// Lec-5 Navbar style working on this page and Navbar page.
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
        <Link to="/User/haider"> This is Haider page </Link>
         <br />
        <Link to="/User/preter">This is Preter page </Link>
        <br />
        <Link to="/filter">Filter Page </Link>
    </div>
  )
}
export default About;
