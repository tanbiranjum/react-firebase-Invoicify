import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from '../firebaseConfig'

function useInvoices() {
  const [invoices, setInvoices] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function getInvoices() {
      const invoices = []
      const docsRef = collection(db, 'invoices')
      const docSnapShot = await getDocs(docsRef)
      docSnapShot.forEach((doc) => {
        const id = doc.id
        invoices.push({ id, ...doc.data() })
      })
      setInvoices(invoices)
      setIsLoaded(true)
    }
    return getInvoices()
  })
  return { invoices, isLoaded }
}

export default useInvoices
