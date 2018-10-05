// @flow
import React from 'react';
import ContactListItem from './ListItem';
import Loader from '../Loader';
import type { Person } from './ContactsTypes';


type ContactsViewProps = {
  contactsList: Array<Person>,
  fetchPersonsData: () => void,
  showModal: (data: Person) => void,
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
    const { contactsList, showModal } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div className="contacts">
        <h1>People's List</h1>
        <div className="separator"/>
        <div className="list">
          {
            contactsList.map(
              (person: Person, index: number) => {
                return (<ContactListItem key={index} data={person} showModal={showModal} />);
              }
            )
          }
        </div>
      </div>
    )
  }
}

export default ContactsView;
