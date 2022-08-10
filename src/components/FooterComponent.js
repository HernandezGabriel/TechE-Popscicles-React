import React, { Component } from 'react';
import {
   Card, CardImg, CardImgOverlay, CardText, CardBody,
   CardTitle
} from 'reactstrap';


class Footer extends Component {


   render() {
      return (
         <div id='Footer' className="container">
            <footer>
               <div id="CC">
                  <p>&copy; Tech Elevator 2020</p>
               </div>
            </footer>
         </div>

      );
   }

}

export default Footer;