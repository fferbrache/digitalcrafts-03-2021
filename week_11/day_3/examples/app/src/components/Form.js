import React, { Component } from 'react'
import '../App.css';
// import {createclient} from @supabase/supabase-js
// const url = "https://mxakxhphctxa/"
// const apiKey

export class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptSuite: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    phone: ""
  }

  handleInputFormValues = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    // const {
    //   firstName,
    //   lastName,
    //   streetAddress,
    //   aptSuite,
    //   city,
    //   state,
    //   postalCode,
    //   country,
    //   phone,
    // } = this.state
    e.preventDefault();
    // const formSubmissionData = {
    //   username: firstName + lastName,
    //   address: streetAddress + " " + aptSuite + " " + city + " " + state + " " + postalCode + " " + country,
    //   phoneNumber: phone
    // };
    // const formSubmissionData = {
    //   restaurantName: firstName + lastName,
    // };
    // console.log({formSubmissionData});
    // const formSumbission = await fetch(url);
  };

  render() {
    return (
      <div>
          <h1 className="shipping-form-header">Forms React</h1>
      <div className="shipping-form-container">
      <form 
      action="" 
      className="shipping-form"
      onSubmit={this.handleSubmit}
      >
        <input 
        name="firstName" 
        className="shipping-input-text" 
        type="text" 
        placeholder="First Name" 
        value={this.state.firstName} 
        onChange={this.handleInputFormValues}
        />
        <input 
        name="lastName" 
        className="shipping-input-text" 
        type="text" 
        placeholder="Last Name"
        value={this.state.lastName} 
        onChange={this.handleInputFormValues}
        />
        <input 
        name="streetAddress" 
        className="shipping-input-text-street" 
        type="text" 
        placeholder="Street Address"
        value={this.state.streetAddress} 
        onChange={this.handleInputFormValues}
        />
        <input 
        name="aptSuite" 
        className="shipping-input-text-apt" 
        type="text" 
        placeholder="Apt, Suite"
        value={this.state.aptSuite} 
        onChange={this.handleInputFormValues}
        />
        <input 
        name="city" 
        className="shipping-input-text" 
        type="text" 
        placeholder="City"
        value={this.state.city} 
        onChange={this.handleInputFormValues}
        />
        <input 
        name="state" 
        className="shipping-input-text" 
        type="text" 
        placeholder="State"
        value={this.state.state} 
        onChange={this.handleInputFormValues}
        />
        <input 
        name="postalCode" 
        className="shipping-input-text" 
        type="text" 
        placeholder="Postal Code"
        value={this.state.postalCode} 
        onChange={this.handleInputFormValues}
        />
        <input 
        name="country" 
        className="shipping-input-text" 
        type="text" 
        placeholder="Country"
        value={this.state.country} 
        onChange={this.handleInputFormValues}
        />
        <input 
        name="phone" 
        className="shipping-input-text" 
        type="text" 
        placeholder="Phone"
        value={this.state.phone} 
        onChange={this.handleInputFormValues}
        />
        <input 
        name="submit"
        // disabled={this.state.loading}
        className="shipping-input-button" 
        type="submit" 
        placeholder="Submit"
        />
      </form>
      </div>
      </div>
    )
  }
}

export default Form;
