import {
    Box,
    Container,
    Divider,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import { PortfolioCard } from "./PortfolioCard";
import { PortfolioCasesProps, projects } from "../data/portfolioCases";

const Portfolio = () => {
    return (
        <Container
            display={"flex"}
            flexDirection={"column"}
            justifyContent={'center'}
            alignItems={'center'}
            bgColor={"white"}
            maxW={"100%"}
            id={'portfolio'}
            position={"relative"}
			boxShadow={"0 0 4px 4px rgba(0,0,0,0.2)"}
            pb={'48px'}
        >
            <Box py={'50px'} display={"flex"}>
                <Heading as='h2'>Recent study projects</Heading>
            </Box>

            <Box
                h={"auto"}
                maxW={"1300px"}
                display={"flex"}
                gap={"32px"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
            >
                {projects.map((project: PortfolioCasesProps, index: number) => {
                    return (

                            <PortfolioCard
                                key={"project-" + project.title}
                                image={project.image}
                                link={project.link}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                            />

                    );
                })}
            </Box>
        </Container>
    );
};

export default Portfolio;
