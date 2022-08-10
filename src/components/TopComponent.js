import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
   CardTitle } from 'reactstrap';

import popRainbow from '../images/popsicle-rainbow.jpg';
class Top extends Component {


   render() {
      return (
         <div id="DYK" className="container">
         <img src={popRainbow} alt="Popsicles"/>

            <h2>Did You Know?</h2>

            <ul>
               <li>point1</li>
               <li>point2</li>
               <li>point3</li>
               <li>point4</li>
            </ul>


         </div>
      )
   }

}

export default Top;