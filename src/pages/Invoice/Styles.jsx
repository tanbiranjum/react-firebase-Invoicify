import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 95%;
  margin: 4rem auto 0 auto;
  height: 100%;
`

export const Form = styled.form`
  /* padding-bottom: 2rem; */
  background-color: #ffffff;
  padding: 2rem;
`

export const FormCol = styled.div`
  display: flex;
  gap: 2rem;
`

export const FormLeftCol = styled.div`
  /* border: 1px solid gray; */
  padding: 2rem;
  flex: 1;
`

export const FormRightCol = styled.div`
  /* border: 1px solid gray; */
  padding: 2rem;
  width: 40%;
`

export const FormSection = styled.h4`
  color: blue;
  font-weight: 500;
  font-size: 1.5rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bolder;
  margin-bottom: 1.5rem;
`
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  ${(props) => (props.col === 2 ? 'width: 50%' : 'width: 100%')}
`

export const FormGroupFour = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  width: 23%;
`

export const FormLabel = styled.label`
  letter-spacing: 1px;
  font-size: 1.1rem;
`

export const FormInput = styled.input`
  height: 4rem;
  padding: 0 0.5rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  &:focus {
    border: 1px solid blue;
    outline: none;
  }
`

export const FormGroupRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`

export const Select = styled.select`
  border: 1px solid gray;
  height: 4rem;
  padding: 1rem;
  background-color: transparent;
  letter-spacing: 1px;
  option {
    background-color: transparent;
  }
`

export const FormItem = styled.div`
  width: 100%;
`

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  margin-top: 15%;
  cursor: pointer;
`

export const AddFieldButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding: 1rem 0;
  border: none;
  background-color: #373b53;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  cursor: pointer;
  &:active {
    outline: none;
  }
`

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  border: none;
  background-color: #373b53;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  cursor: pointer;
  &:active {
    outline: none;
  }
`

export const AddClientButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  padding: 1rem 0;
  border: none;
  background-color: #373b53;
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:active {
    outline: none;
  }
`

export const IconContainer = styled.div`
  svg {
    font-size: 1.2rem;
  }
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  svg {
    font-size: 1.5rem;
    color: blue;
    animation: ${rotate} 2s linear infinite;
  }
`

export const DynamicForm = styled.div``
