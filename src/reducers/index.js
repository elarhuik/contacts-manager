import { combineReducers } from 'redux';
import ContactsReducer from '../components/Contacts/ContactsReducer';
import ModalWrapper from '../components/ModalWrapperHOC/ModalWrapperReducer';

export default combineReducers({
  ContactsReducer,
  ModalWrapper,
});