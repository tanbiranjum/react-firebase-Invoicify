import React, { useState } from 'react'

function useForm() {
  let productDetails = {
    id: Date.now(),
    description: '',
    productColor: ''
  }
  let defaultValues = {
    docNo: '',
    clientName: '',
    clientMobile: '',
    clientAddress: '',
    deliveryDate: '',
    code: '',
    manager: '',
    productSize: '',
    productVariation: '',
    productQuantity: '',
    productRate: '',
    products: [productDetails],
  }
  const [formState, setFormState] = useState(defaultValues)

  const handleFormStateChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleDynamicFormStateChange = (e, index) => {
    const products = [...formState.products]
    products[index][e.target.name] = e.target.value
    setFormState((prev) => ({
      ...prev,
      products,
    }))
  }

  const handleAddField = (e) => {
    e.preventDefault()
    setFormState((prevState) => ({
      ...prevState,
      products: [...prevState.products, productDetails],
    }))
  }

  const handleRemoveField = (index) => {
    let data = [...formState.products]
    data.splice(index, 1)
    setFormState((prevState) => ({
      ...prevState,
      products: data,
    }))
  }

  return {
    formState,
    setFormState,
    handleAddField,
    handleRemoveField,
    handleFormStateChange,
    handleDynamicFormStateChange,
  }
}

export default useForm
