import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import makeSelectHomePage from './selectors';
import { GET_ANIME_DATA } from './constants';
import { animeDataSuccess, animeDataFail } from './actions';

function* getData({ params }) {
  const homePage = yield select(makeSelectHomePage());
  const { skip, offset } = homePage;
  const options = {
    method: 'get',
    url: `https://api.jikan.moe/v3/search/anime?q=${params}&limit=${skip}&page=${offset}`,
  };
  try {
    const response = yield call(request, options);
    yield put(animeDataSuccess(response));
  } catch (e) {
    yield put(animeDataFail(e));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_ANIME_DATA, getData);
}
