import React from 'react';
import { Route, Link } from 'react-router-dom'
import ContactsView from './components/Contacts/';
import 'normalize.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <header className="app-header">
          <Link to="/" className="app-title">pipedrive</Link>
        </header>
        <main>
          <Route path="/:pageNumber?" component={ContactsView} />
        
        </main>
      </div>
    );
  }
}

/* todo
<Route exact path="/add-contact" component={ContactsFormView} />
*/

export default App;
