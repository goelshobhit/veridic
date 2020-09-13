/*
 *
 * HomePage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_ANIME_DATA,
  ANIME_DATA_SUCCESS,
  ANIME_DATA_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const getAnimeData = params => ({
  type: GET_ANIME_DATA,
  params,
});

export const animeDataSuccess = payload => ({
  type: ANIME_DATA_SUCCESS,
  payload,
});

export const animeDataFail = error => ({
  type: ANIME_DATA_FAIL,
  error,
});
