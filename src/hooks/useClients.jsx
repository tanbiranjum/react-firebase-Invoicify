import React from 'react'
import { ClientService } from '../services/DatabaseService'
import { useQuery } from 'react-query'

async function getAllClients() {
  return await ClientService.getAll()
}

function useClients() {
  const { data: clients, isLoading } = useQuery('clients', getAllClients)
  return { clients, isLoading }
}

export default useClients
