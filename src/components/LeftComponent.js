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

            <p>Don't forget to sign up for the race! Each attendee will receive their own box
                        of popsicles when they reach the end.
            </p>

         </div>
      );



   }

}

export default Left;