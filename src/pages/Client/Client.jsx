import React, { useState } from 'react'
import AddClient from '../../components/Modal/AddClient'
import {
  Container,
  ClientContainer,
  ClientHeading,
  ClientHeadingPrimary,
  ClientAddButton,
  ClientInput,
  ClientInputContainer,
  ClientListContainer,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
} from './Styles'

function Client({ clients }) {
  const [searchData, setSearchData] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [currentClient, setCurrentClient] = useState({
    clientName: '',
    clientMobile: '',
    clientAddress: '',
  })

  return (
    <Container>
      <ClientContainer>
        <ClientHeading>
          <ClientHeadingPrimary>Client</ClientHeadingPrimary>
          <ClientInputContainer>
            <ClientInput
              onChange={(e) => {
                setSearchData(e.target.value)
              }}
            />
          </ClientInputContainer>
          <ClientAddButton
            onClick={() => {
              // currentClient set to null to reset this state
              setCurrentClient({
                clientName: '',
                clientMobile: '',
                clientAddress: '',
              })
              setIsOpen(true)
            }}
          >
            Add Client
          </ClientAddButton>
        </ClientHeading>
        <ClientListContainer>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>No</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Mobile</TableHeader>
                  <TableHeader>Address</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {clients &&
                  clients
                    .filter((item) => {
                      if (item.clientMobile.includes(searchData)) {
                        return true
                      } else if (searchData === '') return true
                      return false
                    })
                    .map((item, index) => (
                      <TableRow
                        key={item.clientMobile}
                        onClick={() => {
                          setIsOpen(true)
                          setCurrentClient(item)
                        }}
                      >
                        <TableData>{index + 1}</TableData>
                        <TableData>{item.clientName}</TableData>
                        <TableData>{item.clientMobile}</TableData>
                        <TableData>{item.clientAddress}</TableData>
                      </TableRow>
                    ))}
              </tbody>
            </Table>
          </TableContainer>
        </ClientListContainer>
      </ClientContainer>
      <AddClient
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false)
        }}
        client={currentClient}
      />
    </Container>
  )
}

export default Client
