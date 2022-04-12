import * as Yup from 'yup'

export const invoiceFormSchema = Yup.object({
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
