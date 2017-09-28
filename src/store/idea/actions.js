export const IDEA_CREATE = 'IDEA_CREATE'
export const IDEA_CREATE_REQUEST = 'IDEA_CREATE_REQUEST'
export const IDEA_CREATE_SUCCESS = 'IDEA_CREATE_SUCCESS'
export const IDEA_CREATE_FAILURE = 'IDEA_CREATE_FAILURE'

export const ideaCreateRequest = (data, resolve, reject) => ({
  type: IDEA_CREATE_REQUEST,
  data,
  resolve,
  reject,
})

export const ideaCreateSuccess = detail => ({
  type: IDEA_CREATE_SUCCESS,
  detail,
})

export const ideaCreateFailure = error => ({
  type: IDEA_CREATE_FAILURE,
  error,
})

export const IDEA_LIST_READ = 'IDEA_LIST_READ'
export const IDEA_LIST_READ_REQUEST = 'IDEA_LIST_READ_REQUEST'
export const IDEA_LIST_READ_SUCCESS = 'IDEA_LIST_READ_SUCCESS'
export const IDEA_LIST_READ_FAILURE = 'IDEA_LIST_READ_FAILURE'

export const ideaListReadRequest = (params, resolve, reject) => ({
  type: IDEA_LIST_READ_REQUEST,
  params,
  resolve,
  reject,
})

export const ideaListReadSuccess = list => ({
  type: IDEA_LIST_READ_SUCCESS,
  list,
})

export const ideaListReadFailure = error => ({
  type: IDEA_LIST_READ_FAILURE,
  error,
})
