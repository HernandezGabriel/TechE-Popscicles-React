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
               <li>The earliest known popsicles date as far back as 1872. Back then, a popsicle was called a Hokey-Pokey.</li>
               <li>Popsicles are also known as freezer pops, ice lollies, and ice pops.</li>
               <li>The world's largest popsicle was made in 1997 and was 21 feet tall.</li>
               <li>Popsicles have become so popular that a popular arts and craft item is called a popsicle stick.</li>
            </ul>


         </div>
      )
   }

}

export default Top;