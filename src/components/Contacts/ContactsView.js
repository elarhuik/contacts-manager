// @flow
import React from 'react';
import ContactListItem from './ListItem';
import { fakeData } from './ContactsConstants';
import type { Person } from './ContactsTypes';


type ContactsViewProps = {
  contactsList: Array<Person>,
  fetchPersonsData: () => void,
};

type ContactsViewState = {
  isClickable: boolean,
};

class ContactsView extends React.Component<ContactsViewProps, ContactsViewState> {
  static state = {
    isClickable: true,
  }

  static defaultProps = {
    contactsList: [],
  }

  componentDidMount() {
    const { fetchPersonsData } = this.props;
    fetchPersonsData();
  }

  render() {
    const { contactsList } = this.props;

    return (
      <div className="contacts">
        <h1>People's List</h1>
        <div className="separator"/>
        <div className="list" onDragEnd={(e)=> console.log(e)}>
          {
            contactsList.map(
              (person: Person, index: number) => {
                return (<ContactListItem key={index} { ...person } />);
              }
            )
          }
        </div>
      </div>
    );
  }

  getPeople(pageNumber?: number) {
    //todo for pagination
  }


}

export default ContactsView;
