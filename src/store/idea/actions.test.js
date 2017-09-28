import * as actions from './actions'

test('ideaCreateRequest', () => {
  expect(actions.ideaCreateRequest({ title: 'test' })).toEqual({
    type: actions.IDEA_CREATE_REQUEST,
    data: { title: 'test' },
  })
})

test('ideaCreateSuccess', () => {
  expect(actions.ideaCreateSuccess({ id: 1, title: 'test' })).toEqual({
    type: actions.IDEA_CREATE_SUCCESS,
    detail: { id: 1, title: 'test' },
  })
})

test('ideaCreateFailure', () => {
  expect(actions.ideaCreateFailure('error')).toEqual({
    type: actions.IDEA_CREATE_FAILURE,
    error: 'error',
  })
})

test('ideaListReadRequest', () => {
  expect(actions.ideaListReadRequest({ fields: 'test' })).toEqual({
    type: actions.IDEA_LIST_READ_REQUEST,
    params: { fields: 'test' },
  })
})

test('ideaListReadSuccess', () => {
  expect(actions.ideaListReadSuccess([1, 2, 3])).toEqual({
    type: actions.IDEA_LIST_READ_SUCCESS,
    list: [1, 2, 3],
  })
})

test('ideaListReadFailure', () => {
  expect(actions.ideaListReadFailure('error')).toEqual({
    type: actions.IDEA_LIST_READ_FAILURE,
    error: 'error',
  })
})
