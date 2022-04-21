import { all, call, takeEvery } from "redux-saga/effects";
import { GET_POSTS } from "./Posts.actions";
import { getPosts } from "../../utils/api";

function* getPostsSaga() {
  const data = yield call(getPosts);
  console.log(
    "🚀 ~ file: Posts.saga.js ~ line 7 ~ function*getPostsSaga ~ data",
    data
  );
}

// ! Function will wait for certain action to be dispatched
function* getPostWatcher() {
  // ! yield pause generator function
  yield takeEvery(GET_POSTS, getPostsSaga);
}

export default function* postsSaga() {
  yield all([getPostWatcher]);
}
