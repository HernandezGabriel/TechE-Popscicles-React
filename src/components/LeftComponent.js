import React, { Component } from 'react';
import {
   Card, CardImg, CardImgOverlay, CardText, CardBody,
   CardTitle
} from 'reactstrap';

import bluepop from '../images/blue-pop.png';


class Left extends Component {


   render() {
      return (
         <div id="Race" className='container'>

            <img src={bluepop} alt="blue pop" />

            <h2>Popsicle Race</h2>

            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laboriosam assumenda obcaecati odio
            </p>

         </div>
      );



   }

}

export default Left;