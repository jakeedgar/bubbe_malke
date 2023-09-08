import { useState, useRef, ChangeEventHandler, ChangeEvent } from 'react'
import styled from 'styled-components'
import Card from '../common/components/Card/Card'
import IInput from '../common/components/Input/Input'
import { paragraphOne, paragraphTwo, paragraphThree } from '../common/constants/story'
import { Header } from '../common/Header/Header'
import { Container, Main } from '../styles/layout'

export const Home = () => {
  return (
    <Container>
      <Main>
        <Header />
        <Card title="Chapter 1">{paragraphOne}</Card>
        <br />
        <Card title="Chapter 2">{paragraphTwo}</Card>
        <br />
        <Card title="Chapter 3">{paragraphThree}</Card>
        <br />
      </Main>
    </Container>
  )
}

export default Home
