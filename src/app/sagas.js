import { put, takeEvery } from 'redux-saga/effects';

function* fetchRandomArticle(subreddit) {
    let response = yield fetch(`https://www.reddit.com/dev/api/r/${subreddit}/random`);
    yield response = response.json();
    console.log(response);

    yield put({ type: "ADD_AN_ARTICLE_LINK", link: response.articles, });
}

export function* watchFetchRandomArticle() {
    yield takeEvery('INCREMENT_ASYNC', fetchRandomArticle)
  }

export const rootSaga = {};