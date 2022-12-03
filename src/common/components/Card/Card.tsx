import React from 'react'
import { Text, Title } from '../Typography/Typography'
import { CardContainer } from './Card.style'

export type ICardProps = {
  title?: string
  children?: React.ReactNode
}

const Card = (props: ICardProps): JSX.Element => {
  const { title, children } = props

  return (
    <>
      <CardContainer>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </CardContainer>
    </>
  )
}

export default Card
