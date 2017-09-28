import React from 'react'
import styled from 'styled-components'

import { LogoImage, Block, Paragraph, Link } from 'components'

const Wrapper = styled(Block)`
  display: flex;
  align-items: center;
  background-color: transparent;
`

const Nav = styled.div`
padding-bottom: 3rem;
border-bottom: solid 1px #fff;
`

const Text = styled(Paragraph)`
color: #fff;
margin: .1rem auto;
text-align: center;
font-weight: 300;
font-size: 1rem;
line-height: 1.35em;
letter-spacing: 0.07em;
@media screen and (max-width: 640px) {
  font-size: 1rem;
}
`
const SideBar = (props) => {
  return (
    <Wrapper opaque {...props}>
      <Nav>
        <Link to="/">
          <LogoImage style={{ padding: '0 3.6rem' }} height={100} />
          <Text>The Idea Pool</Text>
        </Link>
      </Nav>
    </Wrapper>
  )
}

export default SideBar
