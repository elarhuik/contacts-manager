// @flow
import React from 'react';
import ContactListItem from './ListItem';
import type { Person } from './ContactsTypes';

type ContactsViewProps = {
  page?: number,
  contactsList: Array<Person>,
};

type ContactsViewState = {
  isClickable: boolean,
};

class ContactsView extends React.Component<ContactsViewProps, ContactsViewState> {
  static state = {
    isClickable: true,
  }

  static defaultProps = {
    page: 0,
    contactsList: [],
  }

  render() {
    const { contactsList } = this.props;
    return (
      <div className="contacts-list-container">
        {
          contactsList.map(
            (person: Person) => {
              return (<ContactListItem { ...person } />);
            }
          )
        }
      </div>
    );
  }

  getPeople(pageNumber?: number) {
    //todo for pagination
  }


}

export default ContactsView;
