import React, { useState, useEffect } from 'react'
import { getDoc, doc, setDoc } from 'firebase/firestore'
import db from '../firebaseConfig'

function useInvoice(invoiceId) {
  const [invoice, setInvoice] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)

  const updateInvoice = async (data) => {
    const docRef = doc(db, 'invoices', invoiceId)
    await setDoc(docRef, data)
  }

  useEffect(() => {
    const getInvoice = async () => {
      const docRef = doc(db, 'invoices', invoiceId)
      const docSnap = await getDoc(docRef)
      const data = docSnap.data()
      console.log(data)
      setInvoice(data)
      setIsLoaded(true)
      return
    }
    getInvoice()
  }, [])
  return { invoice, updateInvoice, isLoaded }
}

export default useInvoice
