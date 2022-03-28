import React from 'react'
import styled from 'styled-components'
import { FaPlusCircle } from 'react-icons/fa'

function Nav() {
  return (
    <NavContainer>
      <ColumnOne>
        <NavHeader>
          <NavHeaderPrimary>Invoices</NavHeaderPrimary>
          <NavHeaderSubtitle>There are total 7 invoices</NavHeaderSubtitle>
        </NavHeader>
      </ColumnOne>
      <ColumnTwo>
        <FilterContainer>
          <FilterSelect>
            <option value="" hidden>
              Type
            </option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="draft">Draft</option>
          </FilterSelect>
        </FilterContainer>
        <CreateButton>
          <FaPlusCircle /> New Invoice
        </CreateButton>
      </ColumnTwo>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const ColumnOne = styled.div``

const NavHeader = styled.div``

const NavHeaderPrimary = styled.h2`
  font-size: 3rem;
  letter-spacing: 1px;
  font-weight: 500;
`

const NavHeaderSubtitle = styled.p`
  font-size: 1.3rem;
  color: #444444;
`

const ColumnTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

const FilterContainer = styled.div``

const FilterSelect = styled.select`
  padding: 0.5rem 2rem;
  background-color: #f8f8fb;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  option {
    background-color: white;
    font-weight: normal;
  }
`

const CreateButton = styled.button`
  border: none;
  padding: 1rem 1rem;
  border-radius: .5rem;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #9277ff;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    margin-right: 1rem;
    font-size: 2.5rem;
  }
  &:active {
    transform: translateY(0.1rem);
  }
`

export default Nav
