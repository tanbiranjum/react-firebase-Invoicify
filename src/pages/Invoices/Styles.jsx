import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  /* height: 90%; */
  margin: 5% auto 0 auto;
`

export const ListContainer = styled.div`
  margin-top: 4rem;
`

export const Items = styled.ul``

export const Item = styled.li`
  list-style: none;
  background-color: white;
  margin-bottom: 2rem;
  border: 1px solid transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  padding: 2rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  transition: border 0.2s;
  &:hover {
    border: 1px solid blue;
  }
`

export const LeftCol = styled.div`
  display: flex;
  gap: 3rem;
  font-size: 1.3rem;
`

export const RightCol = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`

export const InvoiceId = styled.p`
  font-weight: 600;
  span {
    color: #2980b9;
  }
`

export const DeliveryDate = styled.p`
  color: #7f8c8d;
`

export const ClientName = styled.p`
  color: #7f8c8d;
`

export const TotalPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
`

export const IconContainer = styled.div`
  svg {
    font-size: 1.5rem;
    color: #2980b9;
  }
`
