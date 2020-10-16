import React, {Component} from 'react';
import './index.css';

class RegisterForm extends Component {
    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);

        // Set the state directly. Use props if necessary.
          this.state = {
              f_name: " ",
              l_name: " ",
           }

        this.myChangeHandler = this.myChangeHandler.bind(this);
        this.mySubmitHandler = this.mySubmitHandler.bind(this);

      }

    mySubmitHandler = (event) => {
        event.preventDefault();
        this.props.history.push({
            pathname: "/FormReview",
         });
    }



    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({nam:val});
        localStorage.setItem(nam, val);
    }

  render() {

      let f_name = localStorage.getItem("f_name");
      let l_name = localStorage.getItem("l_name");
      let street = localStorage.getItem("street");
      let city = localStorage.getItem("city");
      let state = localStorage.getItem("state");
      let zip = localStorage.getItem("zip");
      let country = localStorage.getItem("country");
      let email  = localStorage.getItem("email");
      let phone = localStorage.getItem("phone");
      let school = localStorage.getItem("school");
      let date = localStorage.getItem("date");
      let status = localStorage.getItem("status");
      let payment = localStorage.getItem("payment");

      return (
      <div class = "container">
         <form id = "form" onSubmit={this.mySubmitHandler}>
             <h1>Register Form</h1>
             <p>Please fill in this form to create an account.</p>
             <hr/>
             <label for="f_name">First name:</label><br/>
             <input type="text" name = "f_name" value = {f_name} maxlength="20" onChange={this.myChangeHandler} required/><br/>
             <label for="l_name">Last name:</label><br/>
    		 <input type="text" id="l_name" name="l_name" value = {l_name} onChange={this.myChangeHandler} maxlength="20" required/><br/><br/>
  		     <label for="street">Street Address:</label><br/>
    		 <input type="text" id="street" name="street" value = {street} maxlength="30" onChange={this.myChangeHandler} required/><br/>
  		     <label for="city">City:</label><br/>
    	     <input type="text" id="city" name="city" value = {city} maxlength="20" onChange={this.myChangeHandler} required/><br/>
      		 <label for="state">State/Province:</label><br/>
             <input type="text" id="state" name="state" value = {state} maxlength="20" onChange={this.myChangeHandler} required/><br/>
      		 <label for="zip">Postal/Zip Code:</label><br/>
             <input type="number" id="zip" name="zip" value = {zip} maxlength="5" placeholder="12345" pattern="[0-9]{5}" onChange={this.myChangeHandler} required/><br/>
      		 <label for="country">Country:</label><br/>
        	 <input type="text" id="country" name="country" value = {country} maxlength="25" onChange={this.myChangeHandler} required/><br/><br/>

      		 <label for="email">Email:</label><br/>
        	 <input type="email" id="email" name="email" value = {email} onChange={this.myChangeHandler} maxlength="30" required/><br/>
      		 <label for="phone">Phone:</label><br/>
      		 <input type="tel" id="phone" name="phone" value= {phone} onChange={this.myChangeHandler} maxlength="12" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/><br/><br/>

      		 <label for="school">School/Company:</label><br/>
        	 <input type="text" id="school" name="school" value = {school} maxlength="30" onChange={this.myChangeHandler} required/><br/>
      		 <label for="date">Date:</label><br/>
        	 <input type="date" id="date" name="date" value = {date} maxlength="15" onChange={this.myChangeHandler} required/><br/>
             <label for="status">Status:</label><br/>
             <select value={status} onChange={this.myChangeHandler} name="status" id="status" required>
                   <option disabled selected value=""></option>
                   <option value="undergraduate student">Undergraduate Student</option>
                   <option value="graduate student">Graduate Student</option>
                   <option value="professor">Professor</option>
                   <option value="industry employee">Industry employee</option>
             </select>
             <br/><br/>

             <label for="payment">Payment Method:</label><br/>
             <select value={payment} onChange={this.myChangeHandler} name="payment" id="payment" required>
                    <option disabled selected value=""></option>
                    <option value="credit/debit">Credit/Debit Card</option>
                  	<option value="paypal">PayPal</option>
              </select>
              <br/><br/>

              <input class="button" type="submit" value="Next" />



         </form>
        </div>
      );    }
  }

export default RegisterForm;