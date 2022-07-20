import { Box, keyframes, Text } from '@chakra-ui/react'

type experienceSectionProps = {
    date: string,
    title: string,
    place: string,
    role: string,
    description: string,
}

const ExperienceSection = (props : experienceSectionProps) => {

	const animationKeyframes = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 rgba(9, 132, 227, 0.4);
    box-shadow: 0 0 0 0 rgba(9, 132, 227, 0.4);
  }
  70% {
      -moz-box-shadow: 0 0 0 10px rgba(9, 132, 227, 0);
      box-shadow: 0 0 0 10px rgba(9, 132, 227, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(9, 132, 227, 0);
      box-shadow: 0 0 0 0 rgba(9, 132, 227, 0);
  }
`;

	const animation = `${animationKeyframes} 2s ease-in-out infinite`;

  return (
    <Box display={'flex'} gap={5} minH={'150px'}>
    <Box w={'5px'} borderLeft={'solid 4px #d3d3d3'}>
        <Box animation={animation} borderRadius={'60px'} w={'20px'} h={'20px'} border={'solid 3px #74b9ff'} bgColor={'white'} transform={'translate(-12px,-4px)'}>
            <Box borderRadius={10} w={'8px'} backgroundColor={'#0984e3'} border={'solid 7px #0984e3'} transform={'translate(0px,0px)'}></Box>
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

export default ExperienceSection