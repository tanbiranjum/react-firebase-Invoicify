import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where
} from 'firebase/firestore'
import db from '../firebaseConfig'

class DatabaseService {
  collection
  constructor(collectionName) {
    this.collection = collection(db, collectionName)
  }

  getAll = async () => {
    const querySnapShot = await getDocs(this.collection)
    return querySnapShot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
  }

  getOne = async ({ queryKey }) => {
    const {id} = queryKey[1]
    const docRef = doc(this.collection, id)
    const docSnap = await getDoc(docRef)
    return docSnap.data()
  }

  queryData = async (queryField, queryValue) => {
    const q = query(this.collection, where(queryField, '==', queryValue))
    const querySnapShot = await getDocs(q)
    return querySnapShot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      }
    })
  }

  createDoc = async (data) => {
    return await addDoc(this.collection, data)
  }

  updateDoc = async (id, data) => {
    const docRef = doc(this.collection, id)
    return await updateDoc(docRef, data)
  }

  removeDoc = async (id) => {
    const docRef = doc(this.collection, id)
    return await deleteDoc(docRef)
  }
}

export const InvoiceService = new DatabaseService('invoices')

export const ProductService = new DatabaseService('products')

export const ClientService = new DatabaseService('clients')
