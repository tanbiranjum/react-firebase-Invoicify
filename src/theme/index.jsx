import { ThemeProvider as Provider } from 'styled-components'

const theme = {
    fontPrimary: '#0C0E16',
    fontSecondary: '#707591',
    appDefaultBackground: '#F8F8FB'
}

export default function Theme({ children }) {
  return <Provider theme={theme}>{children}</Provider>
}
