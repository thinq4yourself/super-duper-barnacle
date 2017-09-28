import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

describe('createIdea', () => {
  const data = { title: 'test' }

  it('calls success', () => {
    const generator = sagas.createIdea(data)
    expect(generator.next().value).toEqual(call(api.post, '/posts', data))
    expect(generator.next(data).value).toEqual(put(actions.ideaCreateSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createIdea(data)
    expect(generator.next().value).toEqual(call(api.post, '/posts', data))
    expect(generator.throw('test').value).toEqual(put(actions.ideaCreateFailure('test')))
  })
})

describe('readIdeaList', () => {
  it('calls success', () => {
    const data = [1, 2, 3]
    const generator = sagas.readIdeaList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/posts', { params: { _limit: 1 } }))
    expect(generator.next(data).value).toEqual(put(actions.ideaListReadSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readIdeaList({ _limit: 1 })
    expect(generator.next().value).toEqual(call(api.get, '/posts', { params: { _limit: 1 } }))
    expect(generator.throw('test').value).toEqual(put(actions.ideaListReadFailure('test')))
  })
})

test('watchIdeaCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchIdeaCreateRequest()
  expect(generator.next().value).toEqual(take(actions.IDEA_CREATE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.createIdea, ...Object.values(payload)))
})

test('watchIdeaListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchIdeaListReadRequest()
  expect(generator.next().value).toEqual(take(actions.IDEA_LIST_READ_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.readIdeaList, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchIdeaCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchIdeaListReadRequest))
})
