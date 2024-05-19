import React from 'react'
import { Link, Outlet } from 'react-router-dom';

 function Contact() {
  return (
    <div>
        <h1> This is Contact page </h1>
        <h2> Here we have some other bussiness </h2>
        <Link to = "company"> Company</Link>
        <Link to = "chennel"> Chennel</Link>
        <Link to = "other"> Other </Link>
        <Outlet/>
      
    </div>
  )
}

export default Contact;
