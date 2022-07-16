import { Box } from '@chakra-ui/react'
import React from 'react'
import About from '../components/About'
import Landing from '../components/Landing'
import News from '../components/News'
import Portfolio from '../components/Portfolio'

const Main = () => {
  return (
    <Box>
      <Landing />
      <About />
      <Portfolio />
      <News />
    </Box>
  )
}

export default Main