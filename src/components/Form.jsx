import React from "react";
export default class Form extends React.Component {
  state = {
    email: "",
    isAgreeWithTerms: false,
  };
  changeHandler = (e) => {
    this.setState({ email: e.target.value });
  };
  checkedHandler = (e) => {
    this.setState({ isAgreeWithTerms: e.target.checked });
  };
  handleSubmit = () => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const isValidEmail = re.test(this.state.email)
      const isValidChecked = this.state.isAgreeWithTerms
    if (!isValidEmail) {
      alert("Email is not valid");
    }
    if (!isValidChecked) {
      alert("You should accept all terms");
      return
    }
    this.setState({email : "", isAgreeWithTerms : false})
    alert("Thanks for subscription")

  };
  render() {
    const { email, isAgreeWithTerms } = this.state;
    return (
      <>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h1>Form</h1>
          <input
            type="email"
            placeholder="Enter email"
            className="form-control my-2"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
          <label>
            <input
              type="checkbox"
              className="mx-1"
              name="isAgreeWithTerms"
              checked={isAgreeWithTerms}
              value={isAgreeWithTerms}
              id=""
              onChange={this.checkedHandler}
            />
            I agree with terms and all conditions
          </label>
          <br />
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary my-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}
