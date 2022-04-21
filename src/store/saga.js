// ! function* -> new type of function
// export default function* () {
//   console.log("test redux-saga");
// }

import { all } from "redux-saga/effects";
import postsSaga from "../modules/posts/Posts.saga";

export default function* () {
  yield all([postsSaga()]);
}
