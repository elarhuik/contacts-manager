// @flow
import React from 'react';
import Avatar from '../Avatar';

type PersonModalProps = any | {
  name: string,
  phone: string,
  email: string,
  assistant: string,
  organization: string,
  groups: string,
  location: string,
  hideModal: () => void,
};

class PersonModal extends React.Component<PersonModalProps> {
  render() {
    const {
      name,
      phone,
      email,
      assistant,
      organization,
      groups,
      location,
      hideModal,
    } = this.props;

    return (
      <div className="modal-container person-modal">
        <div className="header">
          <p>Personal Information</p>
          <div className="close-button" onClick={hideModal}></div>
        </div>
        <div className="body">
          <div className="preview">
            <Avatar name={name} />
            <p className="name">{name}</p>
            <p className="phone">{this.formatPhone(phone)}</p>
          </div>
          <div className="details">
            <dl>
              <dt>Email</dt>
              <dd><a href={`mailto:${email}`}>{email}</a></dd>
              <dt>Organization</dt>
              <dd>{organization}</dd>
              <dt>Assistant</dt>
              <dd>{assistant}</dd>
              <dt>Groups</dt>
              <dd>{groups}</dd>
              <dt>Location</dt>
              <dd>{location}</dd>
            </dl>
          </div>
        </div>
        <div className="footer">
          <button onClick={hideModal}>Back</button>
        </div>
      </div>
    );
  }

  formatPhone(phoneNumber: string): string {
    const number = phoneNumber.split(' ');
    const countryCode = number[0].replace(/\D/g, '');
    const digits = number[1].replace(/\D/g, ' ');

    return `+${countryCode} ${digits}`;
  }
};

export default PersonModal;