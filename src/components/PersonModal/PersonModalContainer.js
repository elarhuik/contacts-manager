// @flow
import { connect } from 'react-redux';
import { getModalData } from './PersonModalSelectors';
import PersonModalView from './PersonModalView';

const mapStateToProps = state => {
  const modalData = getModalData(state);
  
  return { ...modalData };
};


export default connect(mapStateToProps)(PersonModalView);