import React, { useState, useEffect } from 'react'
import { FaPlus, FaTrash, FaCircleNotch } from 'react-icons/fa'
import dayjs from 'dayjs'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { invoiceFormSchema } from '../../validation/InvoiceFormValidation'

import { useNavigate, useParams } from 'react-router-dom'

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
  DynamicForm,
  IconContainer,
  Spinner,
} from './Styles'
import useForm from '../../hooks/useForm'
import InputField from '../../components/UI/InputField/InputField'
import ClientSearch from './ClientSearch'
import AddClientForm from './AddClientForm'
import { InvoiceService } from '../../services/DatabaseService'

/**
 * no form library is used, only raw logic
 * form validation is handled by yup library
 */
const code = ['8001', '8002', '8003', '8004', '8005', '8006', '8007']

const manager = ['Md. Shah Alam', 'John Smith', 'Jonas Tyron']

function Invoice({ values, products, editmode }) {
  const { id } = useParams()
  const [saveDoc, setSaveDoc] = useState(false)
  const {
    formState,
    setFormState,
    handleAddField,
    handleRemoveField,
    handleFormStateChange,
    handleDynamicFormStateChange,
  } = useForm()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (id) {
      handleUpdate()
      return
    }
    setSaveDoc(true)
    const totalPrice =
      formState.productQuantity * 1 * (formState.productRate * 1)
    const formData = {
      invoiceId: Date.now(),
      invoiceDate: dayjs(Date.now()).format('YYYY-MM-DD'),
      ...formState,
      totalPrice,
    }
    invoiceFormSchema
      .validate(formData)
      .then(async () => {
        const docRef = await InvoiceService.createDoc(formData)
        setSaveDoc(false)
        navigate(`/invoice-view/${docRef.id}`)
        return
      })
      .catch((err) => {
        toast.error(err.errors[0])
        return
      })
  }

  const handleUpdate = async () => {
    await InvoiceService.updateDoc(id, formState)
    navigate('/dashboard')
  }

  useEffect(() => {
    if (values) {
      setFormState(values)
    }
  }, [])

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <FormCol>
            <FormLeftCol>
              <FormGroup>
                <AddClientForm />
              </FormGroup>
              <ClientSearch setFormState={setFormState} />
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
                  required
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
              {editmode && (
                <SubmitButton type="submit">
                  Update
                  {saveDoc && (
                    <Spinner>
                      <FaCircleNotch />
                    </Spinner>
                  )}
                </SubmitButton>
              )}
              {!editmode && (
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
      </Container>
    </>
  )
}

export default Invoice
