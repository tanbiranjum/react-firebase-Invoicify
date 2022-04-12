import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register() {
  const location = useLocation()
  const navigate = useNavigate()
  const { register } = useAuth()

  const handleRedirect = () => {
    return navigate('/dashboard', { replace: true })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value

    if (!email || !password) {
      toast.error('Email and password required!')
      return
    }

    register(email, password)
      .then((res) => {
        handleRedirect()
      })
      .catch((err) => {
        toast.error(err.message)
      })
  }
  return (
    <>
      <Container>
        <RegisterContainer>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel>Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                placeholder="johndoe@email.com"
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Password</FormLabel>
              <FormInput
                type="password"
                id="password"
                maxLength="11"
                placeholder="******"
                required
              />
            </FormGroup>
            <FormButton type="submit">Register</FormButton>
          </Form>
          <LoginTextContainer>
            Already have an account?
            <LoginText to="/login">Login</LoginText>
          </LoginTextContainer>
        </RegisterContainer>
      </Container>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RegisterContainer = styled.div`
  width: 40%;
  padding: 4rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
`

const Form = styled.form``

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
  letter-spacing: 1px;
`

const FormInput = styled.input`
  height: 3rem;
  padding: 0 1rem;
  font-weight: 600;
  letter-spacing: 1px;
  border: 1.5px solid black;
  border-radius: 0.5rem;
  &:focus {
    outline: none;
    border: 1.5px solid green;
  }
`

const FormButton = styled.button`
  border: none;
  background-color: blue;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 0.5rem;
  cursor: pointer;
  &:active {
    outline: none;
    transform: translateY(1px);
  }
`

const ForgotPasswordText = styled(Link)`
  font-size: 1.2rem;
  margin-top: -1rem;
  margin-bottom: 2rem;
  display: block;
  text-decoration: none;
  color: #2980b9;
`

const LoginTextContainer = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  text-align: center;
`

const LoginText = styled(Link)`
  text-decoration: none;
  color: #2980b9;
`

export default Register
