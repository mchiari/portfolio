import { Box, Heading } from '@chakra-ui/react'
import AboutSection from './AboutSection'

const About = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} pl={'300px'} justifyContent={'center'} bgColor={'ice'} py={10}>
            <Box display={'flex'} py={10}>
                <Heading>Experience</Heading>
            </Box>
            <Box>
                <AboutSection date={'mar, 2022'} title={'LINKTOU'} role={'Front-end Developer'} place={'São Paulo, Brazil'} description={'Acting as a front-end developer, working on creating and maintaining scallable web applications under agile methodology and Azure DevOps. Daily usage of Javascript, React, Redux, Styled-Components and other technologies in solo and pair programming.'} />
                <AboutSection date={'sep, 2021'} title={`NOTARY'S OFFICE`} role={'Public Notary'} place={'São Vicente, Brazil'} description={'Responsible for costumer experience, business success and public service, worked as a Public Notary in 3º Tabelião de Notas de São Vicente, managing civil interests and real estate matters.'} />
                <AboutSection date={'dec, 2019'} title={'ATTORNEY'} role={'Independent Practice'} place={'São Paulo, Brazil'} description={'Due to acceptance on Brazilian State Bar (OAB) straight out of Law School, worked as an attorney for digital, corporate, labor and real estate law.'} />
                <AboutSection date={'dec, 2016'} title={'LAW SCHOOL'} role={'Santos Catholic Unniversity'} place={'Santos, Brazil'} description={'Graduated on Law School.'} />
                <AboutSection date={'dec, 2014'} title={'COMPUTER SYSTEMS DEVELOPMENT'} role={'Federal Institute of Science and Technology'} place={'Cubatão, Brazil'} description={`In love with computer systems and it's development, studied computer architecture, networks, data structure, web and local development, working mostly with Javascript and C#.`} />
            </Box>

        </Box>
    )
}

export default About