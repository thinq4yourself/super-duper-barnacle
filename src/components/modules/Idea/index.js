import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Paragraph, Link } from 'components'

const Article = styled.article``

const Idea = ({ title, body, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>{title} </Heading>
      <Paragraph>{body}</Paragraph>
    </Article>
  )
}

Idea.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Idea
