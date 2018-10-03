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

  getInitials(name: string): string {
    const names = name.split(' ');
    return (names[0][0] + names.reverse()[0][0]).toUpperCase();
  }
};

export default ContactListItem;
