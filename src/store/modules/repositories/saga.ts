import { takeLatest, all, put, call } from 'redux-saga/effects';

import api from "../../../services/api";
import * as Types from './types';
import * as Actions from './actions';

export function* requestRepositories (action: any): any {
    try {
        const response = yield call(api.get, `/search/repositories?q=${action.payload}`);
        yield put(Actions.repositoriesRequestSuccess(response.data.items));
    } catch (error) {
        yield put(Actions.repositoriesRequestFailure(error));
    }
}

export default all([
    takeLatest(Types.REPOSITORIES_REQUEST, requestRepositories),
]);