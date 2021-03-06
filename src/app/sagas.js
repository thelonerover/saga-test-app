import { put, takeEvery, select } from 'redux-saga/effects';
import { domain } from '../constants';

function* fetchRandomPost(action) {
  try {
    let data = yield fetch(`${domain}/r/${action.payload}/random.json?query=javascript`);
    data = yield data.json();
    const postData = {
      url: domain + data[0].data.children[0].data.permalink,
      id: data[0].data.children[0].data.id,
      title: data[0].data.children[0].data.title
    }

    yield put({ type: 'ticker/getRandomPostsSuccess', payload: postData });
  } catch (error) {
    yield put({ type: 'ticker/getRandomPostsFailure', error });
  }
}

export function* watchfetchRandomPost() {
  yield takeEvery('ticker/getRandomPosts', fetchRandomPost);
}