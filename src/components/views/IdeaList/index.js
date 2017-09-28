import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Idea } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const IdeaList = ({ list, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      {loading && <div>Loading</div>}
      {list.map(idea => <Idea key={idea.id} loading={loading} {...idea} />)}
    </Wrapper>
  )
}

IdeaList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
}

export default IdeaList
