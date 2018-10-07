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
};

class ContactsView extends React.Component<ContactsViewProps, ContactsViewState> {
  state = {
    isLoading: true,
    contactsList: [],
  }

  static defaultProps = {
    contactsList: [],
  }

  static getDerivedStateFromProps(nextProps: ContactsViewProps, nextState: ContactsViewState) {
    if (nextState && nextState.contactsList.length > 0) {
      return {
        contactsList: nextState.contactsList,
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

  componentDidMount() {
    const { fetchPersonsData } = this.props;
    fetchPersonsData();
  }

  render() {
    const { showModal } = this.props;
    const { isLoading, contactsList } = this.state;

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

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div className="contacts">
        <h1>People's List</h1>
        <div className="separator"/>
        <div className="list">
          <SortableList contactsList={contactsList} pressDelay={100} onSortEnd={this.onSortEnd}/>
        </div>
      </div>
    )
  }

  onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number, newIndex: number} ) => {
    const { contactsList } = this.state;
    this.setState({
      contactsList: arrayMove(contactsList, oldIndex, newIndex),
    });
  };

}

export default ContactsView;
