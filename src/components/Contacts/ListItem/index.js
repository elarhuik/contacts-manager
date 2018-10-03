// @flow
import React from 'react';
import Avatar from '../../Avatar';
import type { Person } from '../ContactsTypes';

type ContactListItemProps = $Shape<Person>;

class ContactListItem extends React.PureComponent<ContactListItemProps> {
  render() {
    const { name, organization } = this.props;

    return (
      <div className="contact-item" draggable>
        <div className="details">
          <span className="name">{name}</span>
          <span className="organization">{organization}</span>
        </div>
        <Avatar name={name} />
      </div>
    );
  }


};

export default ContactListItem;
