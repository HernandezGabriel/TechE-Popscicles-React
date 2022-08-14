import React, { Component } from 'react';


class Contact extends Component {
   render() {
      return (



         <form method="post" action="/api/info">
            <h2>Contact Us</h2>
            <p>
               <label for="name">Name: </label>
               <input id="name" name="name" type="text" required="required" />
            </p>
            <p>
               <label for="referral">How did you hear of us?</label>
               <select id="referral" name="referral">
                  <option value="Magazine">Popsicle Monthly</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Google">Google</option>
                  <option value="TV ad">TV ad</option>
               </select>
            </p>
            <p>
               <label for="favorite-color">What color is your favorite popsicle? </label>
               <input id="favorite-color" name="favorite-color" type="color" />
            </p>
            <p>
               <label for="comments">Please let us know any comments you have: </label>
               <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
            </p>
            <p>
               <button type="button" onclick="alert('Thank you for your response!')">Submit</button>
            </p>
         </form >

      );
   }
}

export default Contact;