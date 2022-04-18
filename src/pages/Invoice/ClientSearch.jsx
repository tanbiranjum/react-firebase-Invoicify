import React, { useState } from 'react'
import { FaCircleNotch } from 'react-icons/fa'
import { ClientService } from '../../services/DatabaseService'
import { FormGroup, FormLabel, FormInput, Spinner } from './Styles'

function ClientSearch({ setFormState }) {
  const [isLoading, setIsLoading] = useState(false)
  const handleClientSearch = async (e) => {
    if (e.target.value.length < 11) {
      return
    }
    setIsLoading(true)
    const data = await ClientService.queryData('clientMobile', e.target.value)
    if (data.length > 0) {
      setFormState((prev) => ({
        ...prev,
        clientName: data[0]?.clientName,
        clientMobile: data[0]?.clientMobile,
        clientAddress: data[0]?.clientAddress,
      }))
      setIsLoading(false)
      return
    }
    setFormState((prev) => ({
      ...prev,
      clientName: '',
      clientMobile: '',
      clientAddress: '',
    }))
    setIsLoading(false)
  }
  return (
    <>
      <FormGroup>
        <FormLabel htmlFor="client_name">
          Search client
          {isLoading && (
            <Spinner>
              <FaCircleNotch />
            </Spinner>
          )}
        </FormLabel>
        <FormInput
          type="text"
          id="mobile"
          placeholder="enter phone no here..."
          onChange={handleClientSearch}
          maxLength="11"
        />
      </FormGroup>
    </>
  )
}

export default ClientSearch
