import { Box, Heading, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import Skills from "./Skills";

const About = () => {
	return (
		<Box
			bgColor={"ice"}
			pb={"64px"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Box
				display={"flex"}
				justifyContent={"space-around"}
				alignItems={"center"}
				w={["350px","600px","800px","1000px","1200px","1300px"]}
				bgColor={'white'}
				border={"solid 1px rgba(0,0,0,0.2)"}
				borderRadius={"4px"}
				boxShadow={"2px 2px 8px 0px rgba(0,0,0,0.5)"}
				padding={'32px'}
				flexDir={['column','column','column','column','row']}
			>
				<Box
					bgImage={"/imgs/perfil.jpg"}
					minH={'250px'}
					minW={'250px'}
					backgroundPosition={'center'}
					backgroundSize={"cover"}
					borderRadius={"50%"}
				/>
				<Box
					maxW={["100%","80%","80%","90%","80%","40%"]}
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"center"}
					textAlign={'justify'}
					gap={'16px'}
					sx={{textIndent: '32px'}}
					padding={'32px'}

				>
					<Heading as={'h3'} size={'lg'} sx={{textIndent: '0px'}}>Who am I?</Heading>

					<Text>
						I am a brazilian <strong>Front-End Developer</strong> based in Santos - São Paulo that is focused on
						the user experience and on solving dificult problems
						using <strong>simple methods.</strong>
					</Text>
					<Text>
						I can work solo or with a team and collaborate with UI/UX solutions and design systems and I believe that <strong>clean code</strong>, <strong>pragmatism</strong> and <strong>ownership</strong> are the keys to development.
					</Text>
					<Text>
						I bring with me the experience acquired in over 4 years
						acting as lawyer and public notary, having focused on
						<strong>business solutions</strong> to my former and new clients.
					</Text>
					<Text>
						In my spare time I like to <strong>study</strong> (a lot), to <strong>travel</strong> (also a lot!) and to be with my <strong>family and friends</strong> enjoying their company.
					</Text>
				</Box>
				<Box>
					<Skills />
					<Text fontSize={'12px'} color={'lightgray'}><em>Try to drag the skills and change their order</em></Text>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
