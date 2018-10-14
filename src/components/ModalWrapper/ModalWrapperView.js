// @flow
import React from 'react';

class ModalWrapper extends React.Component<any> {
  render() {
    const { modalData, children, hideModal } = this.props;

    const childWitModalData = React.Children.map(children, child =>
      React.cloneElement(child, { ...modalData, hideModal }));

    if (modalData) {
      return (
        <div className="modal-wrapper">
          {childWitModalData}
        </div>
      );
    }

    return null;
  }
};

export default ModalWrapper;