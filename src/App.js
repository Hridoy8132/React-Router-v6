// // React-router start lec-1 (Home & About page )
// // import {BrowserRouter, Routes, Route} from 'react-router-dom';
// // import Home from  './component/Home';
// // import About from  './component/About';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <BrowserRouter> 
// //       <Routes>
// //         <Route path="/" element={<Home/>} />
// //         <Route path="/about" element={<About/>} />
// //       </Routes>
// //       </BrowserRouter>
      
    
// //     </div>
// //   );
// // }

// // export default App;
// // React-router start lec-2 (Links,NabBar,Anchor Tag)


// // import {BrowserRouter, Routes, Route } from 'react-router-dom';
// // import Home from  './component/Home';
// // import About from  './component/About';
// // import './App.css';
// // import NavBar from './component/NavBar';


// // function App() {
// //   return (
// //     <div className="App">
// //       <BrowserRouter> 
// //       <NavBar/>
// //       <Routes>
// //         <Route path="/" element={<Home/>} />
// //         <Route path="/about" element={<About/>} />
        
// //       </Routes>
// //       </BrowserRouter>
      
// //     </div>
// //   );
// // }

// // export default App;


// // React-router end lec-2 (Links,NabBar,Anchor Tag)

// // lec-3 start (page not fount)
// import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from  './component/Home';
// import About from  './component/About';
// import NavBar from './component/NavBar';
// import Page404 from './component/Page404';
// import './App.css';
// import User from './component/lec-4-params';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter> 
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         {/* <Route path="/*" element={<Page404/>} /> */}
//         <Route path="/*" element={<Navigate to = "/" />} />
//         <Route path="/user" element={<lec-4-params/>} /> 
//       </Routes>
//       </BrowserRouter>
      
//     </div>
//   );
// }

// export default App;
// // lec-3 end (page not fount)

// Lec-4 start Dynamic routing with params

import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from  './component/Home';
import About from  './component/About';
import NavBar from './component/NavBar';
import Page404 from './component/Page404';
import './App.css';
import User from './component/lec-4-params';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/*" element={<Page404/>} /> */}
        <Route path="/user/:name" element={<lec-4-params/>} /> 
        <Route path="/*" element={<Navigate to = "/" />} />
        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
// lec-3 start (page not fount)


