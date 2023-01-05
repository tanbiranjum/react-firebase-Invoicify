import React from 'react'
import useClients from '../../hooks/useClients'
import Client from './Client'

function ClientLogic() {
  const { clients, isLoading } = useClients()
  return <>{!isLoading && <Client clients={clients} />}</>
}

export default ClientLogic
