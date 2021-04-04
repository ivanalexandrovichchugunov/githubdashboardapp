// import { put, takeEvery, call} from 'redux-saga/effects';
// import * as actions from '../actions';
// import * as apiCalls from '../api';

// export function* getUserSagaWorker() {
//     try {
//         const response = yield call(apiCalls.getAllUsers);
//         const { data } = response;
//         yield put(actions.GET_GITHUB_USERS_SUCCES(data));

//     } catch (error) {
//         yield put(actions.GET_GITHUB_USERS_FAIL(error.message));
//     }
// }

// function* getUsersSagaWatcher() {
//     yield takeEvery(actions.GET_GITHUB_USERS, getUserSagaWorker);
// }

// export default getUsersSagaWatcher;
