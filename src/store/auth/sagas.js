import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

export function* refreshToken(refresh_token) {
  try {
    const data = yield call(api.post, '/access-tokens/refresh', refresh_token)
    yield put(actions.tokenRefreshSucccess(data))
  } catch (e) {
    yield put(actions.vFailure(e))
  }
}

export function* createToken(params) {
  try {
    const data = yield call(api.post, '/access-tokens', { params })
    yield put(actions.tokenCreateSuccess(data))
  } catch (e) {
    yield put(actions.tokenCreateFailure(e))
  }
}

export function* getToken() {
  try {
    const data = yield call(api.post, '/access-tokens')
    yield put(actions.tokenCreateSuccess(data))
  } catch (e) {
    yield put(actions.tokenCreateFailure(e))
  }
}

export function* watchRefreshTokenRequest() {
  while (true) {
    const { data } = yield take(actions.TOKEN_REFRESH_REQUEST)
    yield call(refreshToken, data)
  }
}

export function* watchCreateTokenRequest() {
  while (true) {
    const { params } = yield take(actions.CREATE_TOKEN_REQUEST)
    yield call(createToken, params)
  }
}

export default function* () {
  yield fork(watchRefreshTokenRequest)
  yield fork(watchCreateTokenRequest)
}
