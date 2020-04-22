import React, { Component } from "react";

class AddContact extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
    };
    console.log(contact);
  };
  constructor() {
    super();
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  static defaultProps = {
    name: "Default Name",
    email: "Default Email",
    phone: "Defualt Phone",
  };
  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                defaultValue={phone}
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                ref={this.phoneInput}
              />
            </div>
            <input
              type="submit"
              value="submit"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
