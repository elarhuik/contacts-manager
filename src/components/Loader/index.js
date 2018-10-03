// @flow
import React from 'react';

class Loader extends React.Component<any> {
  render() {
    return (
    <div className="spinner-container">
      {this.renderSpinner()}
    </div>
    )
  }

  renderSpinner() {
    return (
      <div className="spinner">
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle className="length" fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
        </svg>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
        </svg>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
        </svg>
        <svg viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
          <circle fill="none" strokeWidth="8" strokeLinecap="round" cx="33" cy="33" r="28"></circle>
        </svg>
    </div> 
    )
  }
};

export default Loader;