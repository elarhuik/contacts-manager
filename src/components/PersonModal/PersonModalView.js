// @flow
import React from 'react';
import Avatar from '../Avatar';

type PersonModalProps = {
  name: string,
  phone: string,
  email: string,
  organization: string,
  assistant: string,
  groups: string,
  location: string,
};

export default class PersonModalView extends React.PureComponent<PersonModalProps> {
  render() {
    const {
      name,
      phone,
      email,
      organization,
      assistant,
      groups,
      location,
    } = this.props;

    return (
      <div className="person-modal">
        <div className="title">
          <p>Personal Information</p>
          <p>X</p>
        </div>
        <div className="avatar">
          <Avatar name={name} />
          <p className="person-name">{name}</p>
          <p className="phone">{phone}</p>
        </div>
        <dl className="details">
          <dt>Email</dt>
          <dd>{`<a href="mailto:${email}">${email}</a>`}</dd>
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
    );
  }
}