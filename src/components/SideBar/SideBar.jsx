import React from 'react'
import styled from 'styled-components'
import {
  FaConfluence,
  FaRegSun,
  FaAddressBook,
  FaStickyNote,
  FaShoppingBag,
  FaRegUser,
} from 'react-icons/fa'

import { Link as RouterLink } from 'react-router-dom'

function SideBar() {
  return (
    <Container>
      <TopBar>
        <IconContainer>
          <FaConfluence />
        </IconContainer>
        <TopBarTitle>AG INVOICE</TopBarTitle>
      </TopBar>

      <LinksContainer>
        <Links>
          <Link to="/">
            <IconContainer medium={true}>
              <FaStickyNote />
            </IconContainer>
            <LinkTitle>Invoices</LinkTitle>
          </Link>
          <Link to="/client">
            <IconContainer medium={true}>
              <FaAddressBook />
            </IconContainer>
            <LinkTitle>Contact</LinkTitle>
          </Link>
          <Link to="/product">
            <IconContainer medium={true}>
              <FaShoppingBag />
            </IconContainer>
            <LinkTitle>Product</LinkTitle>
          </Link>
          <Link to="/manager">
            <IconContainer medium={true}>
              <FaRegUser />
            </IconContainer>
            <LinkTitle>Manager</LinkTitle>
          </Link>
          <Link to="/setting">
            <IconContainer medium={true}>
              <FaRegSun />
            </IconContainer>
            <LinkTitle>Setting</LinkTitle>
          </Link>
        </Links>
      </LinksContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 15%;
  height: 100%;
  background-color: #373b53;
  border-top-right-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
`

const TopBar = styled.div`
  height: 20%;
  width: 100%;
  background-image: repeating-linear-gradient(
      157.5deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 10px,
      transparent 10px,
      transparent 11px
    ),
    repeating-linear-gradient(
      67.5deg,
      rgb(0, 0, 0) 0px,
      rgb(0, 0, 0) 10px,
      transparent 10px,
      transparent 11px
    ),
    linear-gradient(
      90deg,
      hsl(143, 33%, 50%),
      hsl(215, 33%, 50%),
      hsl(287, 33%, 50%),
      hsl(359, 33%, 50%),
      hsl(71, 33%, 50%)
    );
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled.div`
  margin-right: 1rem;
  svg {
    height: ${(props) => (props.medium ? '2rem' : '4rem')};
    width: ${(props) => (props.medium ? '2rem' : '4rem')};
    color: white;
  }
`

const TopBarTitle = styled.h2`
  color: white;
`

const LinksContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: -10rem;
`

const Link = styled(RouterLink)`
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`

const LinkTitle = styled.h3`
  color: white;
  font-weight: normal;
  font-size: 2rem;
`

export default SideBar
