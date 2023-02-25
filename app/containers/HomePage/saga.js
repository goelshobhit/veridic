import { call, put, takeLatest, delay} from 'redux-saga/effects';
import request from 'utils/request';
import { GET_TECH_CRUNCH_DATA } from './constants';
import { techCrunchDataSuccess, techCrunchDataFail } from './actions';

function* getData() {
  const options = {
    method: 'get',
    url: `https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed`,
  };
  try {
    yield delay(3000);
    const response = yield call(request, options);

    yield put(techCrunchDataSuccess(response));
  } catch (e) {
    yield put(techCrunchDataFail(e));
  }
}
// Individual exports for testing
export default function* homePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_TECH_CRUNCH_DATA, getData);
}
