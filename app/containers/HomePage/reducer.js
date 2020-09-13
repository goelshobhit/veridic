/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { concat } from 'lodash';
import {
  GET_ANIME_DATA,
  ANIME_DATA_SUCCESS,
  ANIME_DATA_FAIL,
} from './constants';

export const initialState = {
  hasMore: true,
  loading: false,
  data: [],
  error: {},
  offset: 1,
  skip: 16,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_ANIME_DATA:
        draft.loading = true;
        break;
      case ANIME_DATA_SUCCESS:
        if (action.payload.results.length < 16) {
          draft.hasMore = false;
        }
        draft.loading = false;
        draft.data = concat(state.data, action.payload.results);
        draft.offset += 1;
        break;
      case ANIME_DATA_FAIL:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default homePageReducer;
