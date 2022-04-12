import React from 'react'
import styled from 'styled-components'

function TextArea(props) {
  return <TextAreaInput {...props} />
}

function InputField({
  label,
  type = 'text',
  name,
  placeholder = '',
  onChange,
  value,
  textarea = false,
  ...others
}) {
  return (
    <>
      <FormLabel htmlFor={name}>
        {label}
        {/* {searchFound && (
          <Spinner>
            <FaCircleNotch />
          </Spinner>
        )} */}
      </FormLabel>
      {!textarea ? (
        <FormInput
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...others}
        />
      ) : (
        <TextArea
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...others}
          resize="none"
          rows="3"
        />
      )}
    </>
  )
}

const FormLabel = styled.label`
  letter-spacing: 1px;
  font-size: 1.1rem;
`

const FormInput = styled.input`
  height: 4rem;
  padding: 0 0.5rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  &:focus {
    border: 1px solid blue;
    outline: none;
  }
`

const TextAreaInput = styled.textarea`
  padding: 0.5rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  &:focus {
    border: 1px solid blue;
    outline: none;
  }
  resize: none;
`

export default InputField
