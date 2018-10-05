// @flow
import React from 'react';
import { Route, Link } from 'react-router-dom'
import PersonModal from './components/PersonModal';
import ModalWrapper from './components/ModalWrapper';
import ContactsView from './components/Contacts/';
import 'normalize.css';
import './App.css';

class App extends React.Component<any> {
  render() {
    return (
      <div className="app-wrapper">
        <header className="app-header">
          <Link to="/" className="app-title">pipedrive</Link>
        </header>
        <main>
          <Route path="/:pageNumber?" component={ContactsView} />
        </main>
        <ModalWrapper>
          <PersonModal />
        </ModalWrapper>
      </div>
    );
  }
}

/* todo
<Route exact path="/add-contact" component={ContactsFormView} />
*/

export default App;
