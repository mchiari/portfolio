import { Box, Container, Heading } from "@chakra-ui/react";
import AboutSection from "./AboutSection";

const About = () => {
	return (
		<Container
			display={"flex"}
			flexDirection={"column"}
			maxW={"100%"}
			py={"60px"}
			boxShadow={"0 0 4px 4px rgba(0,0,0,0.2)"}
			id={"lifeExperience"}
		>
			<Box pl={"100px"} py={"50px"} display={"flex"}>
				<Heading as='h2'>Life Experience</Heading>
			</Box>

			<Box
				h={"auto"}
				maxW={"100%"}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				flexWrap={"wrap"}
				pb={"24px"}
			>
				<AboutSection
					date={"mar, 2022 until now"}
					title={"LINKTOU"}
					role={"Front-end Developer"}
					place={"São Paulo, Brazil"}
					description={
						"Acting as a front-end developer, works on creating and maintaining scallable web applications under agile methodology and Azure DevOps. Daily usage of Javascript, React, Redux, Styled-Components and other technologies in solo and pair programming."
					}
				/>
				{/* <AboutSection date={'sep, 2021'} title={`NOTARY'S OFFICE`} role={'Public Notary'} place={'São Vicente, Brazil'} description={'Responsible for costumer experience, business success and public service, worked as a Public Notary in 3º Tabelião de Notas de São Vicente, managing civil interests and real estate matters.'} /> */}
				{/* <AboutSection date={'dec, 2019'} title={'ATTORNEY'} role={'Independent Practice'} place={'São Paulo, Brazil'} description={'Due to acceptance on Brazilian State Bar (OAB) straight out of Law School, worked as an attorney for digital, corporate, labor and real estate law.'} /> */}
				<AboutSection
					date={"dec, 2019 to dec, 2021"}
					title={"ATTORNEY AND NOTARY"}
					role={"Independent Practice and Public Service"}
					place={"São Vicente, Brazil"}
					description={`Accepted on Brazilian State Bar (OAB), worked as an attorney for digital, corporate, labor and real estate law and as a Notary in a Public Notary's office.`}
				/>
				<AboutSection
					date={"dec, 2016 to dec, 2019"}
					title={"LAW SCHOOL"}
					role={"Santos Catholic Unniversity"}
					place={"Santos, Brazil"}
					description={
						"Graduated on local Law School. Studied civil interests and public and private real estate business."
					}
				/>
				<AboutSection
					date={"jan, 2010 to dec, 2014"}
					title={"SYSTEMS DEVELOPMENT"}
					role={"Federal Institute of Science and Technology"}
					place={"Cubatão, Brazil"}
					description={`In love with computer systems and it's development, studied computer architecture, networks, data structure, web and local development. Worked mostly with Javascript and C#, having had a few intership experiences.`}
				/>
			</Box>
		</Container>
	);
};

export default About;
