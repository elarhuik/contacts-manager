// @flow
import { createAction } from 'redux-actions';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);

export function showModal(dataToShow: any) {
  return (dispatch: Function) => {
    dispatch(openModal(dataToShow));
  }
}

export function hideModal() {
  return (dispatch: Function) => {
    dispatch(closeModal());
  }
}