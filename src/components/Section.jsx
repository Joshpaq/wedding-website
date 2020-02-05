import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
padding: 1em;
`

const Header = styled.div`
  font-size: 2em;
`

const Content = styled.div`
  padding: 1em;
`

const Section = ({ title, children }) => {
    return (
        <Container>
            <Header>{title}</Header>
            <Content>{children}</Content>
        </Container>
    )
}

export default Section