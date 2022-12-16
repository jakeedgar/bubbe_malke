import React, { createRef, ForwardedRef, forwardRef, HTMLAttributeReferrerPolicy, MutableRefObject, RefObject, useState, useRef } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

const Input = styled.input`
  width: 100px;
`
export type RefProps = {
  name: string
  label: string
}

// eslint-disable-next-line react/display-name
const MyInput = forwardRef((props: RefProps, ref: ForwardedRef<HTMLInputElement>) => {
  const { name, label, ...rest } = props
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input name={name} placeholder="Enter your Rabbi Name" {...rest} ref={ref} />
    </>
  )
})

export type IInputProps = {
  onChange?: () => void
  label?: string
  onSubmit?: () => void
  name: string
}

const IInput = (props: IInputProps) => {
  const { name } = props
  const [submitted, setSubmitted] = useState()
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      label: '',
    },
  })
  const onSubmit = (data: any) => {
    setSubmitted(data)
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyInput label={name} {...register('name')} name={name} />
        <button type="submit">Begin</button>
      </form>
    </>
  )
}

export default IInput
