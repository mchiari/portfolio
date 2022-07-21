import { Box, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
	return (
		<Box
			bgColor={"lightestgray"}
			py={"100px"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Box
				display={"flex"}
				justifyContent={"space-around"}
				alignItems={"center"}
				w={"1500px"}
				border={"1px solid red"}
			>
				<Box
					bgImage={"/imgs/perfil.jpg"}
					boxSize={"300px"}
					minH={'300px'}
					minW={'300px'}
					backgroundPosition={'center'}
					backgroundSize={"cover"}
					borderRadius={"50%"}
				/>
				<Box
					maxW={"800px"}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					textAlign={'left'}
					gap={10}
				>
					<Text>
						I am a Front-End development professional, focused on
						the user experience and on solving dificult problems
						using simple methods.
					</Text>
					<Text>
						I believe that usability, security, pragmatism and clean
						code are the ways to achieve the application objectives.
						Team work, continuous studying and daily learning are
						essential to any excelling professional.
					</Text>
					<Text>
						I Bring with me the experience acquired in over 4 years
						acting as lawyer and public notary, having focused on
						business solutions to my former and new clients.
					</Text>
				</Box>
				<Box minW={"200px"} border={"solid 1px lightgray"} borderRadius={'40px'} my={'40px'} bgColor={'ice'}>
					<List>
						<ListItem>HTML</ListItem>
						<ListItem>CSS</ListItem>
						<ListItem>Javascript</ListItem>
						<ListItem>Typescript</ListItem>
						<ListItem>Next.js</ListItem>
						<ListItem>Git</ListItem>
						<ListItem>React</ListItem>
						<ListItem>Redux</ListItem>
						<ListItem>Styled Components</ListItem>
						<ListItem>Material UI</ListItem>
						<ListItem>ChakraUI</ListItem>
						<ListItem>Agile methodology</ListItem>
						<ListItem>Corel Draw</ListItem>
						<ListItem>UI/UX notions</ListItem>
						<ListItem>Figma</ListItem>
					</List>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
