import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import About from '../components/About'
import Experience from '../components/Experience'
import Landing from '../components/Landing'
import News from '../components/News'
import Portfolio from '../components/Portfolio'

const Main = () => {
  return (
    <Box>
      <Landing />
      <About />
      <Portfolio />
      <Experience />
      <News />
    </Box>
  )
}

export default Main