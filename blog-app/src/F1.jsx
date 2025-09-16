// import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
// import Home from "./Home.jsx";
// import About from "./About.jsx";
// import Contact from "./Contact.jsx";

// function F1(){
//     return(<Router>
//     <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//     </Routes>
//     </Router>)
// }
// export default F1;










import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function F1() {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav style={{
        padding: "15px",
        background: "#333",
        color: "white",
        display: "flex",
        justifyContent: "center",
        gap: "20px"
      }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default F1;