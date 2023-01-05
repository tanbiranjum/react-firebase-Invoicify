import React from 'react'
import styled from 'styled-components'
import { FaRegPaperPlane } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Nav({ count }) {
  const navigate = useNavigate()
  return (
    <NavContainer>
      <ColumnOne>
        <NavHeader>
          <NavHeaderPrimary>Order</NavHeaderPrimary>
          <NavHeaderSubtitle>
            There are total {count} {count > 1 ? 'orders' : 'order'}.
          </NavHeaderSubtitle>
        </NavHeader>
      </ColumnOne>
      <ColumnTwo>
        {/* <FilterContainer>
          <FilterSelect>
            <option value="" hidden>
              Type
            </option>
            <option value="paid">Paid</option>
            <option value="pending">Pending</option>
            <option value="draft">Draft</option>
          </FilterSelect>
        </FilterContainer> */}
        <CreateButton
          onClick={() => {
            navigate('/invoice')
          }}
        >
          <FaRegPaperPlane /> New Order
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
  font-weight: 700;
`

const NavHeaderSubtitle = styled.p`
  font-size: 1.3rem;
  color: #7f8c8d;
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
  padding: 1.5rem 2rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  background-color: #2980b9;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  svg {
    font-size: 1.5rem;
  }
  &:active {
    transform: translateY(0.1rem);
  }
`

export default Nav
