// @flow
import React from 'react';

class ModalWrapper extends React.Component<any> {
  render() {
    const { modalData, children } = this.props;
    const childWitModalData = React.Children.map(children, child =>
      React.cloneElement(child, { ...modalData }));

    if (modalData) {
      return (
        <div className="modal-overlay">
          {childWitModalData}
        </div>
      );
    }

    return null;
  }
};

export default ModalWrapper;