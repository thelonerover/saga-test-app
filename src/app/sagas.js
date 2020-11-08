import { put, takeEvery } from 'redux-saga/effects';

const domain = 'https://www.reddit.com';

function* fetchRandomArticle(action) {
  try {
    let data = yield fetch(`${domain}/r/${action.payload}/random.json?query=javascript`);
    data = yield data.json();
    const url = data[0].data.children[0].data.permalink
    console.log(domain + url);
    yield put({ type: "ticker/getRandomArticleSuccess", payload: url });
  } catch (error) {
    yield put({ type: "ticker/getRandomArticleFailure", error });
  }
}

export function* watchFetchRandomArticle() {
  yield takeEvery('ticker/getRandomArticle', fetchRandomArticle)
}