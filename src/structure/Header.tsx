import { StarIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, Square, Text } from '@chakra-ui/react'

const Header = () => {
    return (
        <Box
            position={'fixed'}
            borderBottom={'solid 1px lightgray'}
            zIndex={'sticky'} w={'100%'}
            h={'100px'}
            bgColor={'white'}
            color={'black'}
            display={'flex'}
            flexDir={'row'}
            justifyContent={'space-around'}
            alignItems={'center'}
        >
            <Box display={'flex'}>
                <Square px={5}>
                    <StarIcon />
                </Square>
                <Heading as={'h3'} color={'dark'} size={'md'}>@mchiaridev</Heading>
            </Box>
            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={5}>
                <Text>Home</Text>
                <Text>Portfolio</Text>
                <Text>About</Text>
                <Button ml={'20px'}>entrar em contato</Button>
            </Box>
        </Box>
    )
}

export default Header