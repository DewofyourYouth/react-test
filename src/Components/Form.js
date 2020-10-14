import React, { Component } from "react";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    id: "",
    company: "",
  };
  changeForm = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = (e) => {
    e.preventDefault();
    this.props.addNewUser(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <h4 className="text-center mb-5">Add User</h4>
        <form onSubmit={this.submitForm}>
          <div className="form-row">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                aria-describedby="emailHelp"
                onChange={this.changeForm}
              />
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={this.changeForm}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={this.changeForm}
              />
            </div>{" "}
            <div className="col">
              <label htmlFor="phoneNum">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phoneNum"
                name="phoneNum"
                onChange={this.changeForm}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                className="form-control"
                id="id"
                name="id"
                onChange={this.changeForm}
              />
            </div>{" "}
            <div className="col">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                onChange={this.changeForm}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Sign in
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Form;
