import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDUKgdxTmE_GoZmFqksg3_j4PvGPMnRmG0',
  authDomain: 'react-invoice-application.firebaseapp.com',
  projectId: 'react-invoice-application',
  storageBucket: 'react-invoice-application.appspot.com',
  messagingSenderId: '744723925924',
  appId: '1:744723925924:web:4988d9cc24e1d46e0e4f31',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export default db
