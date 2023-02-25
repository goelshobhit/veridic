/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import {
  GET_TECH_CRUNCH_DATA,
  TECH_CRUNCH_DATA_SUCCESS,
  TECH_CRUNCH_DATA_FAIL,
} from './constants';

export const initialState = {
  data: [],
  error: {},
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_TECH_CRUNCH_DATA:
        draft.loading = true;
        break;
      case TECH_CRUNCH_DATA_SUCCESS:
        draft.data = action.payload;
        draft.loading = false;
        break;
      case TECH_CRUNCH_DATA_FAIL:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default homePageReducer;
