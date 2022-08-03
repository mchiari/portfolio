import { Box, Container, Heading, Text } from "@chakra-ui/react";
import ExperienceSection from "./ExperienceSection";

const Experience = () => {
	return (
		<Container
			display={"flex"}
			alignContent={'center'}
			justifyContent={'center'}
			maxW={"100%"}
			py={"60px"}
			boxShadow={"0 0 4px 4px rgba(0,0,0,0.2)"}
			id={"lifeExperience"}
			bgColor={"blue2"}
		>
			<Box
				display={"flex"}
				w={["350px", "600px", "800px", "1000px", "1200px", "1300px"]}
				bgColor={"white"}
				border={"solid 1px rgba(0,0,0,0.2)"}
				borderRadius={"4px"}
				boxShadow={"2px 2px 8px 0px rgba(0,0,0,0.5)"}
				padding={"32px"}
				flexDir={["column"]}
			>
				<Box pl={"100px"} py={"50px"} display={"flex"}>
					<Heading as='h2'>Life Experience</Heading>
				</Box>
				<Box>

				<Box
					h={"auto"}
					maxW={"100%"}
					display={"flex"}
					flexDir={"column"}
					justifyContent={"center"}
					alignItems={"center"}
					pb={"24px"}
					>
					<ExperienceSection
						date={"mar, 2022 until now"}
						title={"LINKTOU"}
						role={"Front-end Developer"}
						place={"São Paulo, Brazil"}
						description={
							"Acting as a front-end developer, works on creating and maintaining scallable web applications under agile methodology and Azure DevOps. Daily usage of Javascript, React, Redux, Styled-Components and other technologies in solo and pair programming."
						}
						/>
					<ExperienceSection
						date={"dec, 2019 to dec, 2021"}
						title={"ATTORNEY AND NOTARY"}
						role={"Independent Practice and Public Service"}
						place={"São Vicente, Brazil"}
						description={`Accepted on Brazilian State Bar (OAB), worked as an attorney for digital, corporate, labor and real estate law and as a Notary in a Public Notary's office.`}
					/>
					<ExperienceSection
						date={"dec, 2016 to dec, 2019"}
						title={"LAW SCHOOL"}
						role={"Santos Catholic Unniversity"}
						place={"Santos, Brazil"}
						description={
							"Graduated on local Law School. Studied civil interests and public and private real estate business."
						}
						/>
					<ExperienceSection
						date={"jan, 2010 to dec, 2014"}
						title={"SYSTEMS DEVELOPMENT"}
						role={"Federal Institute of Science and Technology"}
						place={"Cubatão, Brazil"}
						description={`In love with computer systems and it's development, studied computer architecture, networks, data structure, web and local development. Worked mostly with Javascript and C#, having had a few intership experiences.`}
						/>
						<Text>[...]</Text>
				</Box>
						</Box>
			</Box>
		</Container>
	);
};

export default Experience;
