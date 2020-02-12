import React from 'react'
import styled from 'styled-components'

import strings from './strings'

import Link from './components/Link'
import Section from './components/Section'
import Title from './components/Title'


const Container = styled.div`
  font-family: 'Lemon/Milk', Arial;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
  max-width: 768px;
`

const Content = styled.div`
  text-align: center;
  padding-top: .5em;
`

const App = () => (
  <Container>
    <Title />
    <Section title={strings.WHEN_TITLE}>
      <div>{strings.WHEN_BODY_1}</div>
      <div>{strings.WHEN_BODY_2}</div>
    </Section>
    <Section title={strings.WHERE_TITLE}>
      <div>{strings.WHERE_BODY_1}</div>
      <div>{strings.WHERE_BODY_2}</div>
      <div>{strings.WHERE_BODY_3}</div>
    </Section>
    <Section title={strings.HOTEL_TITLE}>
      <div>{strings.HOTEL_BODY_1}</div>
      <div>{strings.HOTEL_BODY_2}</div>
      <div>{strings.HOTEL_BODY_3}</div>
      <div>{strings.HOTEL_BODY_4}</div>
    </Section>
    <Section title={strings.REGISTRY_TITLE}>
      <div>{strings.REGISTRY_BODY_1}</div>
      <Link label={strings.REGISTRY_1_NAME} to={strings.REGISTRY_1_LINK} />
      <br />
      <Link label={strings.REGISTRY_2_NAME} to={strings.REGISTRY_2_LINK} />
      <br />
      <Link label={strings.REGISTRY_3_NAME} to={strings.REGISTRY_3_LINK} />
      <br />
      <Link label={strings.REGISTRY_4_NAME} to={strings.REGISTRY_4_LINK} />
    </Section>
  </Container>
)

export default App
