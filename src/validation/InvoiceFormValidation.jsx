import * as Yup from 'yup'

export const invoiceFormSchema = Yup.object({
  clientName: Yup.string().required('Client name is required!'),
  clientAddress: Yup.string().required('Client address is required!'),
  clientMobile: Yup.string().required('Client mobile number is required!'),
  deliveryDate: Yup.date().required('Delivery date is required'),
  code: Yup.string().required('Code is required!'),
  manager: Yup.string().required('Manager is required!'),
  productSize: Yup.string().required('Product size is required!'),
  productQuantity: Yup.string().required('Product quantity is required!'),
  productRate: Yup.string()
    .required('Product price is required!')
    .matches(/^[0-9]*$/, 'Only number!'),
  productVariation: Yup.string().required('Product variation is required!'),
  products: Yup.array().of(
    Yup.object().shape({
      id: Yup.number().required('id is required!'),
      description: Yup.string().required('Product description is required!'),
      productColor: Yup.string().required('Product color is required!'),
    })
  ),
})
