import { ExternalLinkIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react'

const Landing = () => {
  return (


    <Box h={'700px'} display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={10}>

      <Box display={'flex'} flexDirection={'column'} justifyContent={'left'} textAlign={'left'} alignItems={'left'}>
        <Heading as="h1">Front-end <span style={{ color: '#0077b6' }}>development</span>.</Heading>
        <Text fontSize={'xl'}>Making stuff simple.</Text>

        <Box py={'20px'} display={'flex'} justifyContent={'left'} alignItems={'center'} gap={'20px'}>
          <a href={'https://www.linkedin.com/in/mchiaridev/'} target={'_blank'} rel={'noreferrer'}><Button rightIcon={<ExternalLinkIcon />}>LinkedIn.</Button></a>
          <a href={'https://github.com/mchiari'} target={'_blank'} rel={'noreferrer'}><Button variant={'outline'} colorScheme={'orange'} rightIcon={<StarIcon />}>Github</Button></a>
        </Box>
      </Box>

      <Box>
        <Image src={'/imgs/notebook.png'} h={'300px'} transform={'scaleX(-1)'} />
      </Box>
    </Box>

  )
}

export default Landing