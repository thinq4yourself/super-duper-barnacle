import React from 'react'

import { Grid, Col, Row } from 'react-styled-flexboxgrid'
import { PageTemplate, SideBar, Header, Footer, Heading, Paragraph, Button } from 'components'
import Paper from 'material-ui/Paper'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon'
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward'
import { PostList } from 'containers'

import YouTube from 'react-youtube'
import styled, { css, injectGlobal } from 'styled-components'
import { palette } from 'styled-theme'

const paperStyle = {
  flex: 1,
  padding: '.2rem .7rem .9rem .7rem',
}
const paperStyle2 = {
  flex: 1,
  padding: '.5rem .7rem .9rem 4.2rem',
  marginTop: '2rem',
}
const cardTextStyle = {
  minHeight: '150px',
}

const StyledHeading = styled(Heading)`
  margin: 1rem 1rem 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
const StyledHeading2 = styled(Heading)`
  color: #222;
  margin: 1rem 1rem 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const Text = styled(Paragraph)`
  color: #222;
  margin: 1rem auto;
  max-width: 800px;
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.35em;
  letter-spacing: 0.07em;
  @media screen and (max-width: 640px) {
    font-size: 1rem;
  }
`

const WelcomePage = () => {
  return (
    <PageTemplate sidebar={<SideBar />} header={<Header />} footer={<Footer />}>
      <Grid fluid>
        <Row>
          <Col md={12}>
            <Row style={{padding: '2rem 0'}}>
              <Col xs={12} sm={12} md={12} lg={12}>
                <StyledHeading2 level={1}>Latest Ideas</StyledHeading2>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Card>
                  <CardText>
                    <PostList limit={15} />
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </PageTemplate>
  )
}

export default WelcomePage
