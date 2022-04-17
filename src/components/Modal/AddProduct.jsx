import {
  collection,    
  query,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  where,
} from 'firebase/firestore'
import React from 'react'
import reactDOM from 'react-dom'
import styled from 'styled-components'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import db from '../../firebaseConfig'

function FormSubmitButton({ product }) {
  return (
    <FormButton type="submit">
      {product.product_code === '' ? 'Create' : 'Update'}
    </FormButton>
  )
}

function AddProduct({ isOpen, closeModal, product }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const product_code = e.target.elements.product_code.value
    const product_rate = e.target.elements.product_rate.value

    try {
      const productsRef = collection(db, 'products')
      if (product.product_code === '') {
        createProduct({ product_code, product_rate }, productsRef)
        return
      }
      updatetProduct(product, { product_code, product_rate })
    } catch (error) {
      toast.error('Something went wrong! Please try again.')
    }
  }

  const createProduct = async (product, productsRef) => {
    const q = query(
      productsRef,
      where('product_code', '==', product.product_code)
    )
    const querySnapshot = await getDocs(q)
    if (querySnapshot.size > 0) {
      toast.error('There is a product already exist with this code!')
      return true
    }
    await addDoc(productsRef, product)
      .then(() => {
        toast.success('Product created!')
        setTimeout(() => {
          closeModal()
        }, 3000)
      })
      .catch(() => {
        toast.error(
          'There is an error on saving products! Please check your internet connection.'
        )
      })
    toast.success('Product saved!')
  }
  const updatetProduct = async (product, updatedProduct) => {
    const docRef = doc(db, 'products', product.doc_id)
    if (product.product_code !== updatedProduct.product_code) {
      toast.error('You can not change product code!')
      return
    }
    await updateDoc(docRef, {
      product_code: updatedProduct.product_code,
      product_rate: updatedProduct.product_rate,
    }).then(() => {
      toast.success('Product updated!')
      setTimeout(() => {
        closeModal()
      }, 3000)
    })
  }

  if (isOpen === false) return null
  return reactDOM.createPortal(
    <>
      <Overlay />
      <ModalContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Product Code</FormLabel>
            <FormInput
              type="text"
              id="product_code"
              defaultValue={product.product_code}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Product Rate</FormLabel>
            <FormInput
              type="text"
              id="product_rate"
              maxLength="11"
              defaultValue={product.product_rate}
            />
          </FormGroup>
          <FormSubmitButton product={product} />
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

// This will create blurry effect other than modal
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
