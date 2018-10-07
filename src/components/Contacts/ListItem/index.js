// @flow
import React from 'react';
import Avatar from '../../Avatar';
import type { Person } from '../ContactsTypes';

type ContactListItemProps = {
  key?: number,
  data: $Shape<Person>,
  showModal: Function,
};

class ContactListItem extends React.PureComponent<ContactListItemProps> {
  render() {
    const { 
      data: {
        name,
        organization,
      },
    } = this.props;

    return (
      <div className="contact-item" onClick={this.renderModal}>
        <div className="details">
          <span className="name">{name}</span>
          <span className="organization">{organization}</span>
        </div>
        <Avatar name={name} />
      </div>
    )
  }

  renderModal = (e: any) => {
    e.preventDefault();
    const { showModal, data } = this.props;
    showModal(data);
  }

};

export default ContactListItem;
