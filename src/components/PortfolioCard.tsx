import { ExternalLinkIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Button, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { PortfolioCasesProps } from '../data/portfolioCases'



export const PortfolioCard = ({image, link, title, description, tags} : PortfolioCasesProps) => {

  return (
    <Box h={'400px'} display={'flex'} w={'800px'} flexDirection={'row-reverse'} justifyContent={'center'} alignItems={'center'} >
        <a href={link} target={'_blank'} rel={'noreferrer'}><Box border={'solid 1px lightgray'} borderRadius={'10px'} h={'325px'} w={'460px'} backgroundImage={image} backgroundSize={'cover'} _hover={{ transform: "scale(1.025)", transition: 'transform .5s', cursor: "pointer"}} /></a>
        <Box pr={'100px'} maxW={'400px'} display={'flex'} flexDirection={'column'} justifyContent={'center'} textAlign={'left'}>
            <Text><strong>{title}</strong></Text>
            <Text py={5}>{description}</Text>
            <Text><em>{tags.map((tag)=>{return tag}).join(' - ')}</em></Text>
            <Box display={'flex'} gap={'10px'}>

            <Button aria-label='visit website' rightIcon={<ExternalLinkIcon />} mt={5}>Visit</Button> <Button aria-label='github' rightIcon={<StarIcon />} colorScheme='teal' variant={'outline'} mt={5}>Repo</Button>
            </Box>
        </Box>
    </Box>
  )
}
