// // React-router start lec-1&2 
// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom';

//  function Home() {
//   const navigate = useNavigate(); 
//   const navToPage =(url )=>{
//     navigate(url)

//   }
    
//   return (
//     <div>
//         <h1>Home Page </h1>
//         <p> This is the home page of our Website </p>
//         <p> Our company name is iSoft </p>
//         <Link to="/about"> Go to About page </Link>
//         <br/>
//         <br/>
//         <button onClick={ ()=>  navToPage('/about')}> Go to About page </button> <br/>
//         <br/>
//         <button onClick={ ()=>  navToPage('/filter')}> Go to Filter page </button>
      
//     </div>
//   )
// }
// export default Home;

// Lec-5 to 9 including Nested Routing End. 

// / Lec-10 start useLocation hook just working on console.

import { Link, useLocation } from 'react-router-dom';

function Home() {
    const location  = useLocation();
    console.log(location)
  
    
      
    return (
      <div>
          <h1>Home Page </h1>
          <p> This is the home page of our Website </p>
          <p> Our company name is iSoft </p>
          <Link to="/about"> Go to About page </Link>
          <br/>
          <br/>
          
        
      </div>
    )
  }
  export default Home;


  
