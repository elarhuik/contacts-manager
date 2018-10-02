// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactsView from './ContactsView';
import { fetchPersonsData } from './ContactsActions';
import {
	getPersonsData,
} from './ContactsSelectors';


const mapStateToProps = state => ({
	contactsList: getPersonsData(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPersonsData,
  //showUserModal,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);