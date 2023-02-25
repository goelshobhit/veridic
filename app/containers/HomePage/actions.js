/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_TECH_CRUNCH_DATA,
  TECH_CRUNCH_DATA_SUCCESS,
  TECH_CRUNCH_DATA_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const getAnimeData = params => ({
  type: GET_TECH_CRUNCH_DATA,
  params,
});

export const techCrunchDataSuccess = payload => ({
  type: TECH_CRUNCH_DATA_SUCCESS,
  payload,
});

export const techCrunchDataFail = error => ({
  type: TECH_CRUNCH_DATA_FAIL,
  error,
});
