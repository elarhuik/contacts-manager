// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ContactsView from './ContactsView';
import { fetchPersonsData } from './ContactsActions';
import { showModal } from '../ModalWrapper/ModalWrapperActions';
import { getPersonsData } from './ContactsSelectors';


const mapStateToProps = state => ({
	contactsList: getPersonsData(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPersonsData,
  showModal,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);