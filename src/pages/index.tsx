import { useState, useRef, ChangeEventHandler, ChangeEvent } from 'react'
import styled from 'styled-components'
import Card from '../common/components/Card/Card'
import IInput from '../common/components/Input/Input'
import { paragraphOne, paragraphTwo, paragraphThree } from '../common/constants/story'
import { Container, Main } from '../styles/layout'

export default function Home() {
  return (
    <Container>
      <Main>
        <Card title="Chapter 1">{paragraphOne}</Card>
        <br />
      </Main>
    </Container>
  )
}
