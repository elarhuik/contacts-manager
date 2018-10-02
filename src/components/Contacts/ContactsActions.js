// @flow
import { createAction } from 'redux-actions';
import api from '../../api';
import type { Person as PersonData } from '../../api/types';
import type { Person } from './ContactsTypes';

export const UPDATE_PERSONS = 'UPDATE_PERSONS';

export const updatePersons = createAction(UPDATE_PERSONS);

const normalizePersonData = (contacts: Array<PersonData>): Array<Person> => {
  const normalizedPeople = contacts.reduce(
    (accumulator: Array<Person>, currentPerson: PersonData) => {
      const simplifiedPerson: Person = {
        id: currentPerson.id,
        name: currentPerson.name,
        organization: currentPerson.org_name,
        email: currentPerson.email,
        phone: currentPerson.phone,
        groups: currentPerson.d91f23abedf6a3dec70ebe7191eb55c590dc4c27,
        location: currentPerson['030afe8bdb9f4b19f74febafa2d5eaba05ad21de'],
        order: currentPerson.aef882f746fafeba45f6456fedb2cece208d94a5,
      };

      return [...accumulator, simplifiedPerson];
    },
    []
  );
  
  return normalizedPeople;
};


export function fetchPersonsData() {
  return async (dispatch: Function) => {
    const fetchedContacts = await api.getContacts();
    const normalizedContacts = normalizePersonData(fetchedContacts.data);
    dispatch(updatePersons(normalizedContacts));
  }
}