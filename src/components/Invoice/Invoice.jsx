import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { FaPlus, FaTrash, FaCircleNotch } from 'react-icons/fa'
import * as Yup from 'yup'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import db from '../../firebaseConfig'
import { collection, query, where, getDocs } from 'firebase/firestore'
import AddClient from '../Modal/AddClient'

/**
 * no form library is used, only raw logic
 * form validation is handled by yup library
 */
const code = ['8001', '8002', '8003', '8004', '8005', '8006', '8007']

const manager = ['Md. Shah Alam', 'John Smith', 'Jonas Tyron']

const formSchema = Yup.object({
  clientName: Yup.string().required('Client name is required!'),
  clientAddress: Yup.string().required('Client address is required!'),
  clientMobile: Yup.string().required('Client mobile number is required!'),
  deliveryDate: Yup.date().required('Delivery date is required'),
  code: Yup.string().required('Code is required!'),
  manager: Yup.string().required('Manager is required!'),
  products: Yup.array().of(
    Yup.object().shape({
      id: Yup.number().required('id is required!'),
      description: Yup.string().required('Product description is required!'),
      product_code: Yup.string().required('Product code is required!'),
      product_color: Yup.string().required('Product color is required!'),
      product_size: Yup.string().required('Product size is required!'),
      product_quantity: Yup.string().required('Product quantity is required!'),
      product_price: Yup.string().required('Product price is required!'),
    })
  ),
})

function Invoice() {
  const [invoiceId, setInvoiceId] = useState(Date.now())
  const [loaded, setLoaded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [searchFound, setSearchFound] = useState(false)
  const [products, setProducts] = useState([])
  const [formState, setFormState] = useState({
    docNo: '',
    clientName: '',
    clientMobile: '',
    clientAddress: '',
    deliveryDate: '',
    code: '',
    manager: '',
  })
  const [formFields, setFormFields] = useState([
    {
      id: Date.now(),
      description: '',
      product_code: '',
      product_color: '',
      product_size: '',
      product_quantity: '',
      product_price: '',
    },
  ])

  const handleFormChange = (event, index) => {
    const data = [...formFields]
    if (event.target.name === 'product_code') {
      data[index][event.target.name] = event.target.value
      console.log(event.target.value, products)
      data[index]['product_price'] = products.filter(
        (item) => event.target.value === item.product_code
      )[0].product_rate
    }
    data[index][event.target.name] = event.target.value
    setFormFields(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      invoiceId,
      ...formState,
      products: formFields,
    }
    console.log(formData)
    formSchema.validate(formData).catch((err) => {
      // console.log(err.name)
      console.log(err.errors[0])
      toast(err.errors[0])
    })
  }

  const handleAddField = () => {
    let fieldObject = {
      id: Date.now(),
      description: '',
      product_code: '',
      product_color: '',
      product_size: '',
      product_quantity: '',
      product_price: '',
    }
    setFormFields([...formFields, fieldObject])
  }

  const handleRemoveField = (index) => {
    let data = [...formFields]
    data.splice(index, 1)
    setFormFields(data)
  }

  const handleClientSearch = async (e) => {
    if (e.target.value.length < 11) {
      return
    }
    setSearchFound(true)
    const clientRef = collection(db, 'clients')
    const q = query(clientRef, where('clientMobile', '==', e.target.value))
    const querySnapshot = await getDocs(q)
    // console.log(querySnapshot)
    querySnapshot.forEach((doc) => {
      const { clientName, clientAddress, clientMobile } = doc.data()
      setFormState({ ...formState, clientName, clientAddress, clientMobile })
    })
    setSearchFound(false)
  }

  useEffect(() => {
    async function getProducts() {
      const productsData = []
      const productRef = collection(db, 'products')
      const q = query(productRef)
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        const { product_code, product_rate } = doc.data()
        productsData.push({ product_code, product_rate })
      })
      setProducts(productsData)
      setLoaded(true)
    }
    getProducts()
  }, [])

  return (
    <>
      {loaded && (
        <Container>
          <Form onSubmit={handleSubmit}>
            <FormSection>Bill to</FormSection>
            <FormGroup>
              <TestSubmitButton
                type="button"
                onClick={() => {
                  setIsOpen(true)
                }}
              >
                Add Client
              </TestSubmitButton>
              <FormLabel htmlFor="client_name">Invoice Id</FormLabel>
              <FormInput
                type="text"
                id="invoice_id"
                value={invoiceId}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="client_name">
                Search client{' '}
                {searchFound && (
                  <Spinner>
                    <FaCircleNotch />
                  </Spinner>
                )}
              </FormLabel>
              <FormInput
                type="text"
                id="mobile"
                placeholder="enter phone no here..."
                onChange={handleClientSearch}
                maxLength="11"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="client_name">Doc SL No</FormLabel>
              <FormInput
                type="text"
                id="doc_no"
                onChange={(e) =>
                  setFormState({ ...formState, docNo: e.target.value })
                }
                value={formState.docNo}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="client_name">Client Name</FormLabel>
              <FormInput
                type="text"
                id="client_name"
                onChange={(e) =>
                  setFormState({ ...formState, clientName: e.target.value })
                }
                value={formState.clientName}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="client_mobile">Client Mobile</FormLabel>
              <FormInput
                type="text"
                id="client_mobile"
                onChange={(e) =>
                  setFormState({ ...formState, clientMobile: e.target.value })
                }
                value={formState.clientMobile}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="client_address">Client Address</FormLabel>
              <FormInput
                type="text"
                id="client_address"
                onChange={(e) =>
                  setFormState({ ...formState, clientAddress: e.target.value })
                }
                value={formState.clientAddress}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="delivery_date">Delivery Date</FormLabel>
              <FormInput
                type="date"
                id="delivery_date"
                onChange={(e) =>
                  setFormState({ ...formState, deliveryDate: e.target.value })
                }
              />
            </FormGroup>
            <FormGroupRow>
              <FormGroup col={2}>
                <FormLabel htmlFor="code">Product code</FormLabel>
                <Select
                  id="code"
                  onChange={(e) =>
                    setFormState({ ...formState, code: e.target.value })
                  }
                >
                  <option value="" hidden>
                    Select Product Code
                  </option>
                  {code.map((item) => (
                    <option value="item" key={item}>
                      {item}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              <FormGroup col={2}>
                <FormLabel htmlFor="manager">Manager</FormLabel>
                <Select
                  id="manager"
                  onChange={(e) =>
                    setFormState({ ...formState, manager: e.target.value })
                  }
                >
                  <option value="" hidden>
                    Select Manager
                  </option>
                  {manager.map((item) => (
                    <option value="item" key={item}>
                      {item}
                    </option>
                  ))}
                </Select>
              </FormGroup>
            </FormGroupRow>
            <DynamicForm>
              {formFields.map((form, index) => (
                <FormItem key={form.id}>
                  <FormGroup>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <FormInput
                      type="text"
                      name="description"
                      onChange={(e) => handleFormChange(event, index)}
                    />
                  </FormGroup>
                  <FormGroupRow>
                    <FormGroup>
                      <FormLabel htmlFor="product_code">Product Code</FormLabel>
                      <Select
                        type="text"
                        name="product_code"
                        onChange={(e) => handleFormChange(event, index)}
                      >
                        <option value="" hidden>
                          Select product code
                        </option>
                        {products.map((item, index) => (
                          <option
                            value={item.product_code}
                            key={item.product_code}
                          >
                            {item.product_code}
                          </option>
                        ))}
                      </Select>
                    </FormGroup>
                    <FormGroup>
                      <FormLabel htmlFor="product_color">
                        Product Color
                      </FormLabel>
                      <FormInput
                        type="text"
                        name="product_color"
                        onChange={(e) => handleFormChange(event, index)}
                      />
                    </FormGroup>
                  </FormGroupRow>
                  <FormGroupRow>
                    <FormGroupFour>
                      <FormLabel htmlFor="product_size">Product Size</FormLabel>
                      <FormInput
                        type="text"
                        name="product_size"
                        onChange={(e) => handleFormChange(event, index)}
                      />
                    </FormGroupFour>
                    <FormGroupFour>
                      <FormLabel htmlFor="product_quantity">
                        Product Quantity
                      </FormLabel>
                      <FormInput
                        type="text"
                        name="product_quantity"
                        onChange={(e) => handleFormChange(event, index)}
                      />
                    </FormGroupFour>
                    <FormGroupFour>
                      <FormLabel htmlFor="product_price">
                        Product Price
                      </FormLabel>
                      <FormInput
                        type="text"
                        name="product_price"
                        onChange={(e) => handleFormChange(event, index)}
                        defaultValue={form.product_price}
                      />
                    </FormGroupFour>
                    <FormGroupFour>
                      <DeleteButton
                        type="button"
                        onClick={() => handleRemoveField(index)}
                      >
                        <FaTrash />
                      </DeleteButton>
                    </FormGroupFour>
                  </FormGroupRow>
                </FormItem>
              ))}
            </DynamicForm>
            <TestSubmitButton type="submit">Submit</TestSubmitButton>
            <TestSubmitButton type="button" onClick={handleAddField}>
              Add Field
            </TestSubmitButton>
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
          <AddClient
            isOpen={isOpen}
            closeModal={() => {
              setIsOpen(false)
            }}
          />
        </Container>
      )}
    </>
  )
}

const Container = styled.div`
  position: relative;
  width: 40%;
  margin: 4rem auto 0 auto;
  height: 100%;
`

const Form = styled.form``

const FormSection = styled.h4`
  color: blue;
  font-weight: 500;
  font-size: 1.5rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  font-weight: bolder;
  margin-bottom: 1.5rem;
`
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  ${(props) => (props.col === 2 ? 'width: 50%' : 'width: 100%')}
`

const FormGroupFour = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  width: 23%;
`

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

const FormGroupRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`

const Select = styled.select`
  border: 1px solid gray;
  height: 4rem;
  padding: 1rem;
  background-color: transparent;
  letter-spacing: 1px;
  option {
    background-color: transparent;
  }
`

const DynamicForm = styled.div``

const FormItem = styled.div`
  width: 100%;
`

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  margin-top: 15%;
  cursor: pointer;
`

const TestSubmitButton = styled.button`
  width: 100%;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  svg {
    font-size: 1.5rem;
    color: blue;
    animation: ${rotate} 2s linear infinite;
  }
`

export default Invoice
