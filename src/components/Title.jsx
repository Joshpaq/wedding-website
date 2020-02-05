import React from 'react'
import styled from 'styled-components'

import strings from '../strings'

const Content = styled.div`
  text-align: center;
  padding: .5em;
  font-size: 3em;
`

const Title = () => (
  <Content>{strings.TITLE}</Content>
)

export default Title
