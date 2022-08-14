
import './App.css';
import './contact.css';
import Header from './components/HeaderComponent';
import Main from './components/MainComponent'
import Footer from './components/FooterComponent';
import Contact from './components/ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Component } from 'react';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import { render } from '@testing-library/react';


export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

const Home = ()=> {
  return (
    <div className="container">
    <Header/>
    <Main/>
    <Footer/>
    </div>
  );

}
function ContactPage() {
  return (
    <div className="container">
    <Header/>
    <Contact/>
    <Footer/>
    </div>
  );
}
