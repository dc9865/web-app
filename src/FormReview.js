import React, {Component} from 'react';
import './index.css';

class FormReview extends Component {
 constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }

  mySubmitHandler = (event) => {
      event.preventDefault();

      if (window.confirm("Are you sure? Would you like to register?")){
          alert("Registration has been successfully completed. Thanks.");
      }
      else return

      }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  myBackButtonHandler = (event) =>{
      event.preventDefault();

      this.props.history.push({
           pathname: '/Register',
      });
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
      <div className = "FormReview">
       <form onSubmit={this.mySubmitHandler}>
            <h1>Review Form</h1>
            <h3>Welcome! {f_name} {l_name}</h3>
            <label for="f_name">First name:   </label><br/>
            <input type="text" value={f_name} name="f_name" disabled="true"/><br/>
            <label for="l_name">Last name:   </label><br/>
            <input type="text" value={l_name} name="l_name" disabled="true"/><br/>
            <label for="street">Street Address:</label><br/>
            <input type="text" value={street} id="street" name="street" disabled="true"/><br/>
            <label for="city">City:</label><br/>
            <input type="text" value={city} id="city" name="city" disabled="true"/><br/>
            <label for="state">State:</label><br/>
            <input type="text" value={state} id="state" name="state" disabled="true"/><br/>
            <label for="zip">Zip:</label><br/>
            <input type="number" value={zip} id="zip" name="zip" disabled="true"/><br/>
            <label for="country">Country:</label><br/>
            <input type="text" value={country} id="country" name="country" disabled="true"/><br/>
            <label for="email">Email:   </label><br/>
            <input type="text" value={email} name="email" disabled="true"/><br/>
            <label for="phone">Phone:</label><br/>
            <input type="tel" value={phone} name="phone" disabled="true"/><br/><br/>
            <label for="school">School/Company:</label><br/>
            <input type="text" value={school} id="school" name="school" disabled="true"/><br/>
            <label for="date">Date:</label><br/>
            <input type="date" value={date} id="date" name="date" disabled="true"/><br/>
            <label for="status">Status:</label><br/>
            <input type="text" value={status} name="status" disabled="true"/><br/>
            <label for="payment">Payment:</label><br/>
            <input type="text" value={payment} name="payment" disabled="true"/><br/>
            <br/><br/>

         <input class="button" onClick = {this.myBackButtonHandler} type="button" value="Back"/>
         <input class="button" type="submit" value="Submit"/>

        </form>
      </div>
      );
     }
  }

export default FormReview;