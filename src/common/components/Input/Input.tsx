import styled from 'styled-components'

const Input = styled.input`
  width: 100px;
`

export type IInputProps = {
  onChange?: void
  label?: string
  onSubmit?: void
}

const CustomInput = (props: IInputProps) => {
  const { onChange, label, onSubmit } = props
  return <Input>{label}</Input>
}

export default CustomInput
