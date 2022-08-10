import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
   CardTitle } from 'reactstrap';


class Right extends Component {


   render() {
      return (
         <div className="container">
            <footer className="App-footer">
              
               <p>
                  Edit <code>src/App.js</code> and save to reload.
               </p>
               <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  Learn React
               </a>
            </footer>
         </div>

      );
   }

}

export default Right;