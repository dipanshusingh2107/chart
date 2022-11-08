import React, { Component } from "react";

class ErrorAlert extends Component {
   
  render() {

    const {errorMessage} = this.props; 


    return (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Error! </strong> 
        {errorMessage}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    );
  }
}

export default ErrorAlert;
