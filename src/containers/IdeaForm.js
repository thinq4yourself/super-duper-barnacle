import React from 'react'
import { reduxForm } from 'redux-form'
import { ideaCreateRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { IdeaForm } from 'components'

const IdeaFormContainer = props => <IdeaForm {...props} />

const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  dispatch(ideaCreateRequest(data, resolve, reject))
})

const validate = createValidator({
  title: [required],
  body: [required],
})

export default reduxForm({
  form: 'IdeaForm',
  destroyOnUnmount: false,
  onSubmit,
  validate,
})(IdeaFormContainer)
