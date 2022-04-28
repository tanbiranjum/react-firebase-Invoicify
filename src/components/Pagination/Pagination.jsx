import React from 'react'
import styled from 'styled-components'

function Pagination({ page, pages, changePage }) {
  return (
    pages > 0 && (
      <PaginationContainer>
        <PaginationLeft
          onClick={() => {
            changePage((page) => page * 1 - 1)
          }}
          disabled={page == 1}
        >
          &#60;
        </PaginationLeft>
        <PaginationRight
          onClick={() => {
            changePage((page) => page * 1 + 1)
          }}
          disabled={page == pages}
        >
          &#62;
        </PaginationRight>
      </PaginationContainer>
    )
  )
}

const PaginationContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const PaginationButton = styled.button`
  border: none;
  background-color: blue;
  padding: 7px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  &:disabled {
      color: #444444;
  }
`

const PaginationLeft = styled(PaginationButton)``
const PaginationRight = styled(PaginationButton)``

export default Pagination
