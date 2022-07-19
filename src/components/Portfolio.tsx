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
            bgColor={"lightestgray"}
            maxW={"100%"}
            py={'60px'}
            id={'portfolio'}
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
                        <>
                            <PortfolioCard
                                key={"project-" + project.title}
                                image={project.image}
                                link={project.link}
                                title={project.title}
                                description={project.description}
                                tags={project.tags}
                            />
                            {/* <Divider key={'divider'+index} /> */}
                        </>
                    );
                })}
            </Box>
        </Container>
    );
};

export default Portfolio;
