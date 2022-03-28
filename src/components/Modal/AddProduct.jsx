import React from 'react'
import reactDOM from 'react-dom'

function AddProduct() {
  return (
    <>
      <Overlay />
      <ModalContainer>
        <Form>
          <FormGroup>
            <FormLabel>Product Id</FormLabel>
            <FormInput type="text" id="product_id" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Product Price</FormLabel>
            <FormInput type="text" id="product_price" maxLength="11" />
          </FormGroup>
          <FormButton type="submit">Create</FormButton>
        </Form>
      </ModalContainer>
    </>
  )
}

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 2rem;
  z-index: 1000;
  border-radius: 1rem;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(248, 248, 251, 0.7);
  z-index: 1000;
`

const Form = styled.form``

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
  letter-spacing: 1px;
`

const FormInput = styled.input`
  height: 3rem;
  padding: 0 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  border: 1.5px solid black;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    border: 1.5px solid green;
  }
`

const FormButton = styled.button`
  border: none;
  background-color: blue;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 0.5rem;
  cursor: pointer;
  &:active {
    outline: none;
    transform: translateY(1px);
  }
`

const ModalCloseButton = styled.button`
  border: none;
  background-color: red;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 0.5rem;
  margin-left: 1rem;
  cursor: pointer;
  &:active {
    outline: none;
    transform: translateY(1px);
  }
`

export default AddProduct
