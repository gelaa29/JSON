import React from "react";
import data from './Academics.json';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './components/Navbar.css';
import './components/Footer.css';
import './App.css';

function Academics() {


  const undergrad = data.filter(item => item.id === "1" || item.id === "2" || item.id === "3" || item.id === "4" || item.id === "5" 
  || item.id === "6" || item.id === "7" || item.id === "8" || item.id === "9" || item.id === "10" || item.id === "11");

  const grad = data.filter(item => item.id === "12" || item.id === "13");


  return (
    <div className="body">
      <Navbar/>
    <div className="title"><h3>Academics</h3><hr></hr></div>
      <div className="l-container">
        <h1>Curricular Offerrings</h1>
        <div className="m-container">

          <h3>UNDERGRADUATE PROGRAMS</h3>
             <div className="s-container">
                {undergrad.map((item, i) => (
                  <div className="mm" key={i}>
                      <img src={item.image} alt={item.title} />
                      <h5>{item.title}</h5>
                  </div>
                 ))}
            </div>  
        </div>
        <div className="m-container">
          <h3>GRADUATE PROGRAMS</h3>
             <div className="s-container">
                {grad.map((item, i) => (
                  <div className="mm" key={i}>
                      <img src={item.image} alt={item.title}/>
                      <h5>{item.title}</h5>
                  </div>
                 ))}
            </div>  
        </div>
  </div>
<Footer/>
</div>
  );
}
export default Academics;