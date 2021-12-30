import * as React from 'react'
import GlobalStyles from '@/styles/global'
import { hot } from 'react-hot-loader/root'
import { Commerce } from './pages/Commerce'

function App() {
  
  return (
    <>
      <GlobalStyles />
      <Commerce/>
    </>
  )
}

export default hot(App)
