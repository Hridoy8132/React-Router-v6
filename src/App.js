// React-router start lec-1 (Home & About page )
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from  './component/Home';
// import About from  './component/About';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter> 
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//       </Routes>
//       </BrowserRouter>
      
    
//     </div>
//   );
// }

// export default App;
// React-router end lec-2 (Links,NabBar,Anchor Tag)

import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  './component/Home';
import About from  './component/About';
import './App.css';
import NavBar from './component/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
