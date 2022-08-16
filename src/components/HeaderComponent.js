import React, { Component } from 'react';
import {
   Card, CardImg, CardImgOverlay, CardText, CardBody,
   CardTitle
} from 'reactstrap';

import Contact from './ContactComponent';
import {Link} from 'react-router-dom'




import TEpops from '../images/te-pops.png';



class Header extends Component {


   render() {
      return (
         <div className="container">
            <header className="app-header">
               <img src={TEpops} alt="logo" />
               <h1>Tech Elevator Popsicles</h1>

               <nav>
                  <ul>
                     <li><Link to="/homepage">HOME</Link></li>
                     <li><Link to="#">STORE</Link></li>
                     <li><Link to="/contact">CONTACT US</Link></li>
                  </ul>
               </nav>

            </header>
         </div>

      );
   }

}

export default Header;