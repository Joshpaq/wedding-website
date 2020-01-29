import React from 'react'
import styled from 'styled-components'

import Title from './Title'

const Container = styled.div`
  font-family: 'Lemon/Milk', Arial;
  text-transform: uppercase;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1em;
  padding-right: 1em;
  max-width: 768px;
`

const Section = styled.div`
  padding: 1em;
`

const Header = styled.div`
  font-size: 2em;
`

const Content = styled.div`
  padding: 1em;
`

const App = () => (
  <Container>
    <Title />
    <Section>
      <Header>
        When
      </Header>
      <Content>
        Saturday, June 13, 2020
      </Content>
    </Section>
    <Section>
      <Header>
        Where
      </Header>
      <Content>
        Exploration Place, 300 McClean Boulevard, Wichita, KS
      </Content>
    </Section>
  </Container>
)

export default App
