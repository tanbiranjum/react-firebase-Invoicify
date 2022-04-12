import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import db from '../firebaseConfig'

function useProducts() {
  const [products, setProducts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    async function getProducts() {
      const productsData = []
      const productRef = collection(db, 'products')
      const q = query(productRef)
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        const { product_code, product_rate } = doc.data()
        const doc_id = doc.id
        productsData.push({ doc_id, product_code, product_rate })
      })
      setProducts(productsData)
      setIsLoaded(true)
    }
    getProducts()
  })
}

export default useProducts
