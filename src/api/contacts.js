// @flow
import {
  persons,
 } from './config';
import request from 'request-promise-native';

export const getContacts = () => request(persons);
