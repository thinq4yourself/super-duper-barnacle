import { initialState } from './selectors'
import { IDEA_CREATE_SUCCESS, IDEA_LIST_READ_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case IDEA_CREATE_SUCCESS:
      return {
        ...state,
        list: [action.detail, ...state.list],
      }
    case IDEA_LIST_READ_SUCCESS:
      return {
        ...state,
        list: action.list,
      }
    default:
      return state
  }
}
