import React, { Component } from 'react';
import {
   Card, CardImg, CardImgOverlay, CardText, CardBody,
   CardTitle
} from 'reactstrap';

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
                     <li><a href="#">HOME</a></li>
                     <li><a href="#">STORE</a></li>
                     <li><a href="#">CONTACT US</a></li>
                  </ul>
               </nav>

            </header>
         </div>

      );
   }

}

export default Header;