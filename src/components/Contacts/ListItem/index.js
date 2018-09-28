// @flow
import React from 'react';
import type { Person } from '../ContactsTypes';

type ContactListItemProps = $Shape<Person>;

class ContactListItem extends React.PureComponent<ContactListItemProps> {
  render() {
    const { name, organization } = this.props;

    return (
      <div className="contact-list-item" >
        <div className="details">
          <p className="name">{name}</p>
          <span className="organization">{organization}</span>
        </div>
        <div className="avatar">
          <span className="initials">
            {this.getInitials(name)}
          </span>
        </div>
      </div>
    )
  }

  getInitials(name: string): string {
    const names = name.split(' ');
    return names[0][0] + names.reverse()[0][0];
  }
};

export default ContactListItem;
