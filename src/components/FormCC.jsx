import React, { Component } from "react";

class FormCC extends Component {
  state = {
    city: "",
    country: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.getWeather(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" onChange={this.handleChange} />
        <label htmlFor="country">Country:</label>
        <input type="text" id="country" onChange={this.handleChange} />
        <input type="submit" value="Get forecast" />
      </form>
    );
  }
}

export default FormCC;
