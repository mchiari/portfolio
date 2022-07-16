import { Box, Heading, Image, Text } from '@chakra-ui/react'

const Landing = () => {
  return (
    <Box h={'700px'} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={10}>
      <Box>
        <Heading as="h1">Front-end <span style={{ color: '#0077b6' }}>development</span>.</Heading>
        <Text fontSize={'xl'}>Making stuff simple.</Text>
      </Box>

      <Box>
        <Image src={'/imgs/notebook.png'} h={'300px'} transform={'scaleX(-1)'} />
      </Box>
    </Box>
  )
}

export default Landing