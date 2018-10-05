// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ModalWrapperView from './ModalWrapperView';
import { getModalData } from './ModalWrapperSelectors';
import { hideModal } from './ModalWrapperActions';

const mapStateToProps = state => ({
  modalData: getModalData(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  hideModal,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapperView)