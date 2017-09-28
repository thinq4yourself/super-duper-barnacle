import React, { PropTypes } from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { ReduxField, Heading, Button } from 'components'

let min = 100
let max = 300
let rand = min + (Math.random() * (max - min))

const Form = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
`

const IdeaForm = ({ handleSubmit, submitting }) => {
  return (
    <Form onSubmit={handleSubmit} initialValues={{id: rand}}>
      <Heading level={2}>Create a idea</Heading>
      <Field name="title" label="Title" component={ReduxField} />
      <Field name="body" label="Body" type="textarea" component={ReduxField} />
      <Button type="submit" disabled={submitting}>Create</Button>
    </Form>
  )
}

IdeaForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
}

export default IdeaForm
