import "regenerator-runtime/runtime";
import { all } from "redux-saga/effects";
import apiCallsSaga from '../helpers/request/watchRequest';
// import getUsersSaga from '../pages/SagaPage/sagas/githubUsersSaga';

// function* rootSaga() {
//   yield all([getUsersSaga()]);
// }

// export default rootSaga;

function* rootSaga() {
  yield all([apiCallsSaga()]);
}

export default rootSaga;