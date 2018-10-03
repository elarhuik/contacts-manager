// @flow
import React from 'react';
import ContactListItem from './ListItem';
import Loader from '../Loader';
import PersonModal from '../PersonModal';
//import { fakeData } from './ContactsConstants'; use as fallback
import type { Person } from './ContactsTypes';


type ContactsViewProps = {
  contactsList: Array<Person>,
  fetchPersonsData: () => void,
};

type ContactsViewState = {
  isLoading: boolean,
};

class ContactsView extends React.Component<ContactsViewProps, ContactsViewState> {
  state = {
    isLoading: true,
  }

  static defaultProps = {
    contactsList: [],
  }

  static getDerivedStateFromProps(nextProps: ContactsViewProps) {
    if (nextProps.contactsList.length > 0) {
      return { isLoading: false };
    }
    return null;
  }

  componentDidMount() {
    const { fetchPersonsData } = this.props;
    fetchPersonsData();
  }

  render() {
    const { contactsList } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }

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
    )
  }

  getPeople(pageNumber?: number) {
    //todo for pagination
  }

  renderModal(personData: Person) {
    return <PersonModal {...personData} />;
  }

}

export default ContactsView;
