import React from 'react'
import { ClientService } from '../services/APIService'
import { useQuery } from 'react-query'

async function getAllClients() {
  const { data } = await ClientService.getAll()
  // console.log('hello')
  return data
}

function useClients() {
  const { data: clients, isLoading } = useQuery('clients', getAllClients)
  return { clients, isLoading }
}

export default useClients
