import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

type PortFolioCardProps = {
    image: string,
    link: string,
    title: string,
    description: string,
    tags: string[]
}


export const PortfolioCard = ({image, link, title, description, tags} : PortFolioCardProps) => {

  return (
    <Box h={'400px'} display={'flex'} w={'600px'} flexDirection={'row-reverse'} justifyContent={'center'} alignItems={'center'} >
        <Box h={'225px'} w={'360px'} backgroundImage={image} backgroundSize={'cover'} _hover={{ transform: "scale(1.025)", cursor: "pointer"}} >
            
        </Box>
        <Box pr={'20px'} maxW={'240px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'left'}>
            <Text><strong>{title}</strong></Text>
            <Text>{description}</Text>
            <Text><em>{tags.map((tag)=>{return tag}).join(' - ')}</em></Text>
        </Box>
    </Box>
  )
}
