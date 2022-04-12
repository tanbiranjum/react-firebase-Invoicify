import React, { useState, useEffect } from 'react'
import { FaPlus, FaTrash, FaCircleNotch } from 'react-icons/fa'
import dayjs from 'dayjs'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { invoiceFormSchema } from '../../validation/InvoiceFormValidation'

import db from '../../firebaseConfig'
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import AddClient from '../../components/Modal/AddClient'
import { useNavigate, useParams } from 'react-router-dom'
import { BoxLoader } from '../../components/Loader/BoxLoader'

import {
  Container,
  Form,
  FormCol,
  FormLeftCol,
  FormRightCol,
  FormSection,
  FormGroup,
  FormGroupFour,
  FormLabel,
  FormInput,
  FormGroupRow,
  Select,
  FormItem,
  DeleteButton,
  AddFieldButton,
  SubmitButton,
  AddClientButton,
  DynamicForm,
  IconContainer,
  Spinner,
} from './Styles'
import useForm from '../../hooks/useForm'
import InputField from '../../components/UI/InputField/InputField'

/**
 * no form library is used, only raw logic
 * form validation is handled by yup library
 */
const code = ['8001', '8002', '8003', '8004', '8005', '8006', '8007']

const manager = ['Md. Shah Alam', 'John Smith', 'Jonas Tyron']

function Invoice() {
  const { id } = useParams()
  const [invoiceId, setInvoiceId] = useState(Date.now())
  const [loaded, setLoaded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [searchFound, setSearchFound] = useState(false)
  const [saveDoc, setSaveDoc] = useState(false)
  const [products, setProducts] = useState([])
  const {
    formState,
    setFormState,
    handleAddField,
    handleRemoveField,
    handleFormStateChange,
    handleDynamicFormStateChange,
  } = useForm()

  const navigate = useNavigate()

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formState)
    return
    setSaveDoc(true)
    console.log(formFields)
    if (id) {
      const docRef = doc(db, 'invoices', id)
      const docSnap = await getDoc(docRef)
      const invoice = docSnap.data()
      await updateDoc(docRef, {
        ...invoice,
        products: formFields,
        ...formState,
      })
      navigate('/dashboard')
      return
    }
    const totalPrice = formFields.reduce((sum, current) => {
      return sum + current.product_price * 1 * current.product_quantity
    }, 0)
    const formData = {
      invoiceId,
      invoiceDate: dayjs(Date.now()).format('YYYY-MM-DD'),
      ...formState,
      products: formFields,
      totalPrice,
    }
    console.log(formData)
    invoiceFormSchema.validate(formData).catch((err) => {
      // console.log(err.name)
      // console.log(err.errors[0])
      toast(err.errors[0])
      return
    })
    const invoicesRef = collection(db, 'invoices')
    const docRef = await addDoc(invoicesRef, formData)
    setSaveDoc(false)
    navigate(`/invoice-view/${docRef.id}`)
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

  useEffect(() => {
    async function getInvoice(id) {
      const docRef = doc(db, 'invoices', id)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        navigate('/invoice')
        return
      }
      const invoice = docSnap.data()
      console.log(invoice)
      const data = {
        docNo: invoice.docNo,
        clientName: invoice.clientName,
        clientMobile: invoice.clientMobile,
        clientAddress: invoice.clientAddress,
        deliveryDate: invoice.deliveryDate,
        code: invoice.code,
        manager: invoice.manager,
      }
      setFormFields(invoice.products)
      setFormState(data)
    }
    if (id !== undefined) {
      getInvoice(id)
    }
  }, [])

  return (
    <>
      {loaded && (
        <Container>
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormCol>
              <FormLeftCol>
                <FormGroup>
                  <AddClientButton
                    type="button"
                    onClick={() => {
                      setIsOpen(true)
                    }}
                  >
                    Add Client
                  </AddClientButton>
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
                    name="docNo"
                    onChange={handleFormStateChange}
                    value={formState.docNo}
                  />
                </FormGroup>
                <FormGroup>
                  <FormSection>Bill to</FormSection>
                  <InputField
                    type="text"
                    label="Client Name"
                    name="clientName"
                    onChange={handleFormStateChange}
                    value={formState.clientName}
                  />
                </FormGroup>
                <FormGroup>
                  <InputField
                    type="text"
                    label="Client Mobile"
                    name="clientMobile"
                    onChange={handleFormStateChange}
                    value={formState.clientMobile}
                  />
                </FormGroup>
                <FormGroup>
                  <InputField
                    type="text"
                    label="Client Address"
                    name="clientAddress"
                    textarea={true}
                    onChange={handleFormStateChange}
                    value={formState.clientAddress}
                  />
                </FormGroup>
                <FormGroup>
                  <InputField
                    type="date"
                    label="Delivery Date"
                    name="deliveryDate"
                    onChange={handleFormStateChange}
                    value={formState.deliveryDate}
                  />
                </FormGroup>
                <FormGroupRow>
                  <FormGroup col={2}>
                    <FormLabel htmlFor="code">Product code</FormLabel>
                    <Select
                      id="code"
                      name="code"
                      onChange={handleFormStateChange}
                      value={formState.code}
                    >
                      <option value="" hidden>
                        Select Product Code
                      </option>
                      {code.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>
                  <FormGroup col={2}>
                    <FormLabel htmlFor="manager">Manager</FormLabel>
                    <Select
                      id="manager"
                      name="manager"
                      onChange={handleFormStateChange}
                      value={formState.manager}
                    >
                      <option value="" hidden>
                        Select Manager
                      </option>
                      {manager.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </Select>
                  </FormGroup>
                </FormGroupRow>
                <FormGroup>
                  <FormSection>Product</FormSection>
                  <InputField
                    type="text"
                    label="Product Size"
                    name="productSize"
                    list="size"
                    onChange={handleFormStateChange}
                    value={formState.productSize}
                  />
                  <datalist id="size">
                    <option value="08 X 12" />
                    <option value="12 X 12" />
                    <option value="10 X 13" />
                    <option value="10 X 16" />
                    <option value="12 X 18" />
                    <option value="12 X 20" />
                    <option value="12 X 24" />
                  </datalist>
                </FormGroup>
                <FormGroup>
                  <InputField
                    type="text"
                    label="Product Variation"
                    name="productVariation"
                    list="variation"
                    onChange={handleFormStateChange}
                    value={formState.productVariation}
                  />
                  <datalist id="variation">
                    <option value="আড়া" />
                    <option value="খাড়া" />
                  </datalist>
                </FormGroup>
                <FormGroup>
                  <InputField
                    type="text"
                    label="Product Quantity"
                    name="productQuantity"
                    onChange={handleFormStateChange}
                    value={formState.productQuantity}
                  />
                </FormGroup>
                <FormGroup>
                  <InputField
                    type="text"
                    label="Product Rate"
                    name="productRate"
                    onChange={handleFormStateChange}
                    value={formState.productRate}
                  />
                </FormGroup>
                {id && (
                  <SubmitButton type="submit">
                    Update
                    {saveDoc && (
                      <Spinner>
                        <FaCircleNotch />
                      </Spinner>
                    )}
                  </SubmitButton>
                )}
                {!id && (
                  <SubmitButton type="submit">
                    Submit
                    {saveDoc && (
                      <Spinner>
                        <FaCircleNotch />
                      </Spinner>
                    )}
                  </SubmitButton>
                )}
              </FormLeftCol>
              <FormRightCol>
                <DynamicForm>
                  {formState.products &&
                    formState.products.map((form, index) => (
                      <FormItem key={form.id}>
                        <FormGroup>
                          <InputField
                            type="text"
                            label="Description"
                            name="description"
                            textarea={true}
                            onChange={(e) =>
                              handleDynamicFormStateChange(e, index)
                            }
                            value={form.description}
                          />
                        </FormGroup>
                        <FormGroupRow>
                          <FormGroup>
                            <FormLabel htmlFor="product_color">
                              Product Color
                            </FormLabel>
                            <FormInput
                              type="text"
                              name="productColor"
                              id="productColor"
                              list="color"
                              onChange={(e) =>
                                handleDynamicFormStateChange(e, index)
                              }
                              value={form.productColor}
                            />
                            <datalist id="color">
                              <option value="Green" />
                              <option value="Red" />
                              <option value="Blue" />
                              <option value="Yellow" />
                              <option value="Meroon" />
                            </datalist>
                          </FormGroup>
                        </FormGroupRow>
                        <FormGroupRow>
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
                <AddFieldButton
                  type="button"
                  onClick={(e) => {
                    handleAddField(e)
                  }}
                >
                  <IconContainer>
                    <FaPlus />
                  </IconContainer>
                  Add Field
                </AddFieldButton>
              </FormRightCol>
            </FormCol>
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
      {!loaded && <BoxLoader />}
    </>
  )
}

export default Invoice
