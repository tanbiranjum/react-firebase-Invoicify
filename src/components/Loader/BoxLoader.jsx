import { BoxesLoader } from 'react-awesome-loaders'
import styled from 'styled-components'

export const BoxLoader = () => {
  return (
    <>
      <LoadingAnimation>
        <BoxesLoader
          boxColor={'#6366F1'}
          style={{ marginBottom: '20px' }}
          desktopSize={'100px'}
          mobileSize={'80px'}
        />
      </LoadingAnimation>
    </>
  )
}

const LoadingAnimation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
