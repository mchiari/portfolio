import { Box, Text } from '@chakra-ui/react'

type aboutSectionProps = {
    date: string,
    title: string,
    place: string,
    role: string,
    description: string,
}

const AboutSection = (props : aboutSectionProps) => {
  return (
    <Box display={'flex'} gap={5} minH={'150px'}>
    <Box w={'5px'} borderLeft={'solid 2px #d3d3d3'}>
        <Box borderRadius={'60px'} w={'16px'} border={'solid 3px lightgray'} bgColor={'white'} transform={'translate(-9px,-4px)'}>
            <Box borderRadius={10} w={'2px'} border={'solid 5px #0077b6'} bgColor={'#0077b6'} transform={'translate(0,0px)'}></Box>
        </Box>
    </Box>
    <Box w={'350px'} display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'} transform={'translate(0,-6px)'}>
        <Text color={'dark'}><strong>{props.date}</strong></Text>
        <Text color={'dark'}><strong>{props.title}</strong></Text>
        <Text><small>{props.role}</small></Text>
        <Text><small>{props.place}</small></Text>
    </Box>
    <Box w={'600px'} display={'flex'} textAlign={'left'} transform={'translate(0,-6px)'} pb={'60px'}>
        <Text pb={5}>{props.description}</Text>
    </Box>
</Box>
  )
}

export default AboutSection