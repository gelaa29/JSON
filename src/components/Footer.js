import React from "react";

const Footer = () => {
    return (
        <div>

<div className="contactbody">
<div className="container-contact">
        <div className="logo-contact">
            <h1>Contact Us</h1>
            <img src="https://ispsc.edu.ph/file-manager/images/ispsc_logo_small.png" alt="Logo"></img>
        </div>
        <div className="contact-info">
            <div className="office">
                <h4>Office of the President</h4>
                <p>Telefax: (077) 732-5512</p>
                <p>Email: ispsc_2705@yahoo.com</p>
            </div>
            <div className="office">
                <h4>Registrar</h4>
                <p>Telephone No.: (077) 604-1422</p>
                <p>Email: registrarispsc@yahoo.com.com</p>
                <p>Facebook: <a href="https://web.facebook.com/people/ISPSC-Tagudin-Campus-Registrars-Office/100076145913135/?mibextid=ZbWKwL">Registrar's Office Page</a></p>
            </div>
        </div>
        <div className="campuses">
            <h4>Campuses</h4>
            <ul>
                <li>Tagudin</li>
                <li>Sta. Maria</li>
                <li>Santiago</li>
                <li>Narvacan</li>
                <li>Candon City</li>
                <li>Cervantes</li>
            </ul>
        </div>
    </div>
  </div>

            
            <footer>
                <p>@Ilocos Sur Polytechnic State College</p>
            </footer>
        </div>
    );
};

export default Footer;
