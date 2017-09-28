import React, { PropTypes } from 'react'
import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import styled, { css, injectGlobal } from 'styled-components'
import { palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #00A843;
`

const LeftSidebar = styled.section`
width: 100%;
box-sizing: border-box;
margin: 0 auto 2rem auto;
max-width: 99%;
background-color: #00A843;
`

const Header = styled.header`
  position: absolute;
  top: 0;
  width: 82.3%;
  z-index: 999;
`

const Hero = styled.section``

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 6rem auto 2rem auto;
  max-width: 90%;
  background-color: #fff;
`

const Footer = styled.footer`
  margin-top: auto;
  background-color: #fff;
`

const PageTemplate = ({ sidebar, palette, header, hero, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Grid fluid>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2} style={{ paddingTop: '0' }}>
            <LeftSidebar>{sidebar}</LeftSidebar>
          </Col>
          <Col xs={10} sm={10} md={10} lg={10} style={{ backgroundColor: '#ffffff', paddingLeft: 0 }}>
            <Header>{header}</Header>
            {hero && <Hero>{hero}</Hero>}
            <Content>{children}</Content>
            <Footer>{footer}</Footer>
          </Col>
        </Row>
      </Grid>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  sidebar: PropTypes.node.isRequired,
  hero: PropTypes.node,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
  palette: PropTypes.string,
}

PageTemplate.defaultProps = {
  level: 1,
  palette: 'primary',
}

export default PageTemplate
