// @flow
import type { Values } from '../../api/types';

export type Person = {
  id: number,
  name: string,
  organization: string,
  assistant: string,
  email: string,
  phone: string,
  groups: string,
  location: string,
  order: number,
};

export type ContactsState = {
  personsData: Array<Person>,
};

export type StoreState = {
  ContactsReducer: ContactsState,
};