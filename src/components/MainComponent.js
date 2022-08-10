import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
   CardTitle } from 'reactstrap';
import Left from './LeftComponent';
import Top from './TopComponent';
import Right from './RightComponent';
class Main extends Component {
   // <Left/>
   // <Right/>

render(){
   return(
      <div id="main" className="container">
         <Top/>


      <div id="row-line"></div>

          <Left/>
         {/*<Right/> */}

      </div>

   );
}

}

export default Main;