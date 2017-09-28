import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Paragraph, Link, Icon } from 'components'

const Wrapper = styled.div`
  background-color: ${palette('white', 1, true)};
  padding: 2rem;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        <Icon icon="heart" /> <Link href="https://github.com/thinq4yourself">Me</Link>
      </Credits>
    </Wrapper>
  )
}

export default Footer
