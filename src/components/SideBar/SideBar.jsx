import React, { useContext } from 'react'
import styled from 'styled-components'
import {
  FaConfluence,
  FaRegSun,
  FaAddressBook,
  FaStickyNote,
  FaShoppingBag,
  FaRegUser,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserPlus,
} from 'react-icons/fa'

import { Link as RouterLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function SideBar() {
  const { currentUser, logout } = useAuth()
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
          {currentUser && (
            <Link to="/">
              <IconContainer medium={true}>
                <FaStickyNote />
              </IconContainer>
              <LinkTitle>Invoices</LinkTitle>
            </Link>
          )}
          {currentUser && (
            <Link to="/client">
              <IconContainer medium={true}>
                <FaAddressBook />
              </IconContainer>
              <LinkTitle>Contact</LinkTitle>
            </Link>
          )}
          {currentUser && (
            <Link to="/product">
              <IconContainer medium={true}>
                <FaShoppingBag />
              </IconContainer>
              <LinkTitle>Product</LinkTitle>
            </Link>
          )}
          {currentUser && (
            <Link to="/manager">
              <IconContainer medium={true}>
                <FaRegUser />
              </IconContainer>
              <LinkTitle>Manager</LinkTitle>
            </Link>
          )}
          {currentUser && (
            <Link to="/setting">
              <IconContainer medium={true}>
                <FaRegSun />
              </IconContainer>
              <LinkTitle>Setting</LinkTitle>
            </Link>
          )}
          {!currentUser && (
            <Link to="/login">
              <IconContainer medium={true}>
                <FaSignInAlt />
              </IconContainer>
              <LinkTitle>Login</LinkTitle>
            </Link>
          )}
          {!currentUser && (
            <Link to="/register">
              <IconContainer medium={true}>
                <FaUserPlus />
              </IconContainer>
              <LinkTitle>Register</LinkTitle>
            </Link>
          )}
          {currentUser && (
            <Link
              to="/logout"
              onClick={async (e) => {
                e.preventDefault()
                await logout()
              }}
            >
              <IconContainer medium={true}>
                <FaSignOutAlt />
              </IconContainer>
              <LinkTitle>Logout</LinkTitle>
            </Link>
          )}
        </Links>
      </LinksContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 15%;
  height: 100%;
  background-color: #2c3e50;
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
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 2rem;
  padding: 1rem 2rem;
  transition: all .2s ease-in-out;
  &:hover {
    background-color: #2980b9;
    color: #ffffff;
  }
`

const LinkTitle = styled.h3`
  color: #ecf0f1;
  font-weight: normal;
  font-size: 1.8rem;
`

export default SideBar
