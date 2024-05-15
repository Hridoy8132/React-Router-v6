// 
import React from 'react'
import { Link } from "react-router-dom";

 function Page404() {
  return (
    <div>
      <h1> 404 page </h1>
      <p> This page is not found </p>
      <Link to="/"> Go to Home  page </Link>
    </div>
  )
}
export default Page404;