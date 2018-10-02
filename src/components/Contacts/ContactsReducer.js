// @flow
import {
  UPDATE_PERSONS,
} from './ContactsActions';
import type { ContactsState } from './ContactsTypes';


const initialState = {
	personsData: [],
};


export default (state: ContactsState = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_PERSONS:
      return {
        ...state,
        personsData: action.payload,
      }

    default:
      return state
  }
}