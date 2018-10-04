// @flow
import { connect } from 'react-redux';
import ModalWrapperView from './ModalWrapperView';
import { getModalData } from './ModalWrapperSelectors';

const mapStateToProps = state => ({
  modalData: getModalData(state),
});

export default connect(mapStateToProps)(ModalWrapperView);