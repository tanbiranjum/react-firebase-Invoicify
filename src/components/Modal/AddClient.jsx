import { collection, where, getDocs, query, addDoc } from 'firebase/firestore'
import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import * as Yup from 'yup'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import db from '../../firebaseConfig'

function AddClient({ isOpen, closeModal }) {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const clientName = e.target.elements.client_name.value
    const clientMobile = e.target.elements.client_mobile.value
    const clientAddress = e.target.elements.client_address.value

    try {
      // Check if client already exist on this number
      const clientRef = collection(db, 'clients')
      const q = query(clientRef, where('clientMobile', '==', clientMobile))
      const querySnapshot = await getDocs(q)
      if (querySnapshot.size > 0) {
        alert('You already have a client on this number!')
      }

      await addDoc(clientRef, {
        clientName,
        clientMobile,
        clientAddress,
      }).catch(() => {
        toast.error(
          'There is an error on saving clients! Please check your internet connection.'
        )
      })
      alert('Doc Added')
    } catch (error) {
      toast.error('Something went wrong! Please try again.')
    }
  }

  if (isOpen === false) return null
  return ReactDOM.createPortal(
    <>
      <Overlay />
      <ModalContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Client Name</FormLabel>
            <FormInput type="text" id="client_name" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Client Mobile</FormLabel>
            <FormInput type="text" id="client_mobile" maxLength="11" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Client Address</FormLabel>
            <FormInput type="text" id="client_address" />
          </FormGroup>
          <FormButton type="submit">Create</FormButton>
          <ModalCloseButton type="button" onClick={closeModal}>
            Close
          </ModalCloseButton>
        </Form>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ModalContainer>
    </>,
    document.getElementById('modal')
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

export default AddClient
