import { initialState } from './selectors'
import * as actions from './actions'
import reducer from './reducer'

it('returns the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

describe('IDEA_CREATE_SUCCESS', () => {
  it('adds the new data to the initial state', () => {
    expect(reducer(initialState, {
      type: actions.IDEA_CREATE_SUCCESS,
      detail: 1,
    })).toEqual({
      ...initialState,
      list: [1],
    })
  })

  it('prepends the new data to an existing state', () => {
    expect(reducer({
      ...initialState,
      list: [1, 2],
    }, {
      type: actions.IDEA_CREATE_SUCCESS,
      detail: 3,
    })).toEqual({
      ...initialState,
      list: [3, 1, 2],
    })
  })
})

describe('IDEA_LIST_READ_SUCCESS', () => {
  it('sets list in the initial state', () => {
    expect(reducer(initialState, {
      type: actions.IDEA_LIST_READ_SUCCESS,
      list: [1, 2, 3],
    })).toEqual({
      ...initialState,
      list: [1, 2, 3],
    })
  })

  it('overrides list in an existing state', () => {
    expect(reducer({
      ...initialState,
      list: [1, 2, 3],
    }, {
      type: actions.IDEA_LIST_READ_SUCCESS,
      list: [3, 2, 1],
    })).toEqual({
      ...initialState,
      list: [3, 2, 1],
    })
  })
})
