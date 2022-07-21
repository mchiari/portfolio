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
            bgColor={"white"}
            maxW={"100%"}
            py={'60px'}
            id={'portfolio'}
            position={"relative"}
			boxShadow={"0 0 4px 4px rgba(0,0,0,0.2)"}
        >
            <Box pl={"100px"} py={'50px'} display={"flex"}>
                <Heading as='h2'>Recent work</Heading>
            </Box>

            <Box
                h={"auto"}
                maxW={"100%"}
                display={"flex"}
                gap={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                pb={'24px'}
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
