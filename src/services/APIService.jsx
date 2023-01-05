class APIService {
  collection
  constructor(collectionName) {
    this.collection = `http://localhost:8000/api/v1/${collectionName}`
  }

  getAll = async (pageNumber) => {
    const res = await fetch(`${this.collection}?page=${pageNumber}`, {
      headers: {
        Authorization: window.localStorage.getItem('authToken'),
      },
    })
    return await res.json()
  }

  getOne = async ({ queryKey }) => {
    const { id } = queryKey[1]
    const res = await fetch(`${this.collection}/${id}`, {
      headers: {
        Authorization: window.localStorage.getItem('authToken'),
      },
    })
    return await res.json()
  }

  createDoc = async (data) => {
    const res = await fetch(`${this.collection}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('authToken'),
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  }

  updateDoc = async (id, data) => {
    console.log(id)
    const res = await fetch(`${this.collection}/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        Authorization: window.localStorage.getItem('authToken'),
      },
      body: JSON.stringify(data),
    })
    return await res.json()
  }

  removeDoc = async (id) => {
    await fetch(`${this.collection}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: window.localStorage.getItem('authToken'),
      },
    })
  }
}

export const InvoiceService = new APIService('invoice')

export const ProductService = new APIService('product')

export const ClientService = new APIService('client')

export const ManagerService = new APIService('manager')
