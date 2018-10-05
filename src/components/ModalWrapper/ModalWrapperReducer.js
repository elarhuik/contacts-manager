// @flow
import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from './ModalWrapperActions';
import type { ModalState } from './ModalWrapperTypes';


const initialState = {
	modalData: null,
};


export default (state: ModalState = initialState, action: any) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalData: action.payload,
      }

    case CLOSE_MODAL:
      return {
        ...state,
        modalData: null,
      }

    default:
      return state
  }
}