import { all, call, takeEvery, put } from "redux-saga/effects";
import { GET_POSTS, getPostsSuccess, getPostsFailed } from "./Posts.actions";
import { getPosts } from "../../utils/api";

function* getPostsSaga() {
  try {
    const data = yield call(getPosts);
    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsFailed(error.message));
  }
}

// ! Function will wait for certain action to be dispatched
function* getPostWatcher() {
  // ! yield pause generator function
  yield takeEvery(GET_POSTS, getPostsSaga);
}

export default function* postsSaga() {
  yield all([getPostWatcher()]);
}
