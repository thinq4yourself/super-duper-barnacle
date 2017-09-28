import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

export function* createIdea(newData) {
  try {
    const data = yield call(api.post, '/posts', newData)
    yield put(actions.ideaCreateSuccess(data))
  } catch (e) {
    yield put(actions.ideaCreateFailure(e))
  }
}

export function* readIdeaList(params) {
  try {
    const data = yield call(api.get, '/posts', { params })
    yield put(actions.ideaListReadSuccess(data))
  } catch (e) {
    yield put(actions.ideaListReadFailure(e))
  }
}

export function* watchIdeaCreateRequest() {
  while (true) {
    const { data } = yield take(actions.IDEA_CREATE_REQUEST)
    yield call(createIdea, data)
  }
}

export function* watchIdeaListReadRequest() {
  while (true) {
    const { params } = yield take(actions.IDEA_LIST_READ_REQUEST)
    yield call(readIdeaList, params)
  }
}

export default function* () {
  yield fork(watchIdeaCreateRequest)
  yield fork(watchIdeaListReadRequest)
}
