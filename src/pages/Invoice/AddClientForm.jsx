import React, { useState } from 'react'
import AddClient from '../../components/Modal/AddClient'
import { AddClientButton } from './Styles'

function AddClientForm() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <AddClientButton
        type="button"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Add Client
      </AddClientButton>
      <AddClient
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false)
        }}
      />
    </>
  )
}

export default AddClientForm
