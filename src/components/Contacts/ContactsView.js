// @flow
import React from 'react';
import ContactListItem from './ListItem';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import Loader from '../Loader';
import type { Person } from './ContactsTypes';


type ContactsViewProps = {
  contactsList: Array<Person>,
  fetchPersonsData: () => void,
  showModal: (data: Person) => void,
  dragged: any,
  over: any,
};

type ContactsViewState = {
  isLoading: boolean,
  contactsList: Array<Person>;
  search: string,
};

class ContactsView extends React.Component<ContactsViewProps, ContactsViewState> {
  state = {
    isLoading: true,
    contactsList: [],
    search: '',
  }

  static defaultProps = {
    contactsList: [],
  }

  static getDerivedStateFromProps(nextProps: ContactsViewProps, nextState: ContactsViewState) {
    if (nextState && nextState.contactsList.length > 0) {
      const search = nextState.search;
      const contactsList: Array<Person> = nextState.contactsList
        .map((person: Person, index: number): Person => ({
          ...person,
          order: index,
        }));

      return {
        contactsList,
        search,
      }
    }
    if (nextProps.contactsList.length > 0) {
      return {
        isLoading: false,
        contactsList: nextProps.contactsList,
      };
    }
    return null;
  }

  static mapOrder = (contactsList: Array<Person>): Array<Person> => {
    return contactsList.map((person: Person, index: number) => (
      {
        ...person,
        order: index,
      }
    ));
  }

  componentDidMount() {
    const { fetchPersonsData } = this.props;
    fetchPersonsData();
  }

  render() {
    const { showModal } = this.props;
    const { isLoading, contactsList, search } = this.state;

    const SortableItem = SortableElement(
      ({index, person}) => <ContactListItem key={index} data={person} showModal={showModal} />
    );

    const SortableList = SortableContainer(({ contactsList }) => {
      return (
        <div className="list">
          {
            contactsList.map((person: Person, index: number) => (
              <SortableItem key={index} index={index} person={person} />
            ))
          }
        </div>
      );
    });

    const searchedContacts = contactsList.filter((person: Person) => {
      const name = person.name.toString().toLowerCase();
      return name.includes(search);
    });

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div className="contacts">
        <div className="header">
          <h1>People's List</h1>
          <input type="text" placeholder="Search" className="search" onChange={this.handleSearch}/>
        </div>
        <div className="separator"/>
        <SortableList contactsList={searchedContacts} pressDelay={100} onSortEnd={this.onSortEnd}/>
      </div>
    )
  }

  onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number} ) => {
    const { contactsList } = this.state;
    this.setState({
      contactsList: arrayMove(contactsList, oldIndex, newIndex),
    });
  }

  handleSearch = ({ target }: any) => {
    const search = target.value.toString()
    this.setState({ search });
  }

}

export default ContactsView;
