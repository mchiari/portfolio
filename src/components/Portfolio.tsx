import { Box, Container, Divider, Heading, Image, Text } from '@chakra-ui/react'
import { PortfolioCard } from './PortfolioCard'
import { PortfolioCasesProps, projects } from '../data/portfolioCases'

const Portfolio = () => {

    return (
        <Container display={'flex'} py={'100px'} flexDirection={'column'} maxW={'80%'}>
            <Box pl={'100px'} display={'flex'}><Heading as="h2">Portfolio.</Heading></Box>
            <Box h={'auto'} maxW={'100%'} bgColor={'white'} display={'flex'} gap={'60px'} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>

                {projects.map((project: PortfolioCasesProps, index: number) => {
                    return <>
                        <PortfolioCard key={'project-'+project.title} image={project.image} link={project.link} title={project.title} description={project.description} tags={project.tags} />
                        <Divider key={'divider'+index} />
                    </>
                })}

            </Box>
        </Container>
    )
}

export default Portfolio