import React from 'react'
import styled from 'styled-components'

import { LogoImage, PrimaryNavigation, Heading, Block, Link } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  align-items: center;
  padding: 1.6rem 1.79rem;
  border-bottom: 1px solid #ccc;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`
const StyledHeading = styled(Heading)`
margin: 1rem 1rem 0 0;
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
color: #333;
`

const StyledPrimaryNavigation = styled(PrimaryNavigation)`
  flex: 1
`

const Header = (props) => {
  return (
    <Wrapper opaque {...props}>
      <Link to="/">
        <StyledHeading level={2}>My Ideas</StyledHeading>
      </Link>
      <StyledPrimaryNavigation reverse />
    </Wrapper>
  )
}

export default Header
