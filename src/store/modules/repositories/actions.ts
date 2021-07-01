import * as Types from './types';

export const repositoriesRequest = (data: any) => ({
  type: Types.REPOSITORIES_REQUEST,
  payload: data,
});

export const repositoriesRequestSuccess = (data: any) => ({
  type: Types.REPOSITORIES_REQUEST_SUCCESS,
  payload: data,
});

export const repositoriesRequestFailure = (data: any) => ({
  type: Types.REPOSITORIES_REQUEST_FAILURE,
  payload: data,
});
