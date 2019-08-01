import { takeEvery, put, select } from 'redux-saga/effects';

function* initApp(action) {
    const location = yield select(state => state.router.location);
    const params = new URLSearchParams(location.search.split("?")[1]);
    const items = Array.from(params.entries()).filter(item => item[0] === 'item').map(item => item[1]);
    yield put({type: "ADD_ITEMS", data: items});
    return;
}


function* mySaga() {
    yield takeEvery("INIT_APP", initApp);
}

export default mySaga;