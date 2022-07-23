import { Box, List, ListItem } from "@chakra-ui/react";
import React, { useState } from "react";
import {
	AgileMethodologySVG,
	ChakraUiSVG,
	CorelSVG,
	Css3SVG,
	FigmaSVG,
	Html5SVG,
	JavascriptSVG,
	MaterialUiSVG,
	ReactSVG,
	ReduxSVG,
	StyledComponentsSVG,
	TypescriptSVG,
} from "../theme/icons";
import SkillCard from "./SkillCard";

const Skills = () => {
    // const [content, setContent] = useState<string>("Drop Something Here");

    
    //   // This function will be triggered when dropping
    //   const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    //     event.preventDefault();
    //     const data = event.dataTransfer.getData("text");
    //     setContent(data);
    //   };
    
    //   // This makes the third box become droppable
    //   const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    //     event.preventDefault();
    //   };




	return (
		<Box
			display={"flex"}
            justifyContent={'center'}
            alignItems={'center'}
			w={"304px"}
			h={'auto'}
			flexWrap={"wrap"}
			gap={"32px"}
		>
			<SkillCard title={'HTML5'}>
				<Html5SVG />
			</SkillCard>
			<SkillCard title={'CSS3'}>
				<Css3SVG />
			</SkillCard>
			<SkillCard title={'Javascript'}>
				<JavascriptSVG />
			</SkillCard>
			<SkillCard title={'Typescript'}>
				<TypescriptSVG />
			</SkillCard>
			<SkillCard title={'React'}>
				<ReactSVG />
			</SkillCard>
			<SkillCard title={'Redux'}>
				<ReduxSVG />
			</SkillCard>
			<SkillCard title={'Styled'}>
				<StyledComponentsSVG />
			</SkillCard>
			<SkillCard title={'Figma'}>
				<FigmaSVG />
			</SkillCard>
			<SkillCard title={'Material UI'}>
				<MaterialUiSVG />
			</SkillCard>
			<SkillCard title={'Chakra UI'}>
				<ChakraUiSVG />
			</SkillCard>
			<SkillCard title={'DevOps'}>
				<AgileMethodologySVG />
			</SkillCard>
			<SkillCard title={'Corel Draw'}>
				<CorelSVG />
			</SkillCard>

			{/* <Box
            bgColor={"white"}
			boxSize={"80px"}
			display={"flex"}
			flexDir={"column-reverse"}
			justifyContent={"space-around"}
			alignItems={"center"}
			border={"solid 1px rgba(0,0,0,0.2)"}
			borderRadius={"4px"}
			boxShadow={"2px 2px 8px 0px rgba(0,0,0,0.2)"}
			_hover={{
				transition: "box-shadow .5s",
				boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.5)",
			}}
			draggable={'true'}
            onDragOver={allowDrop} onDrop={dropHandler}
            >
                {content.endsWith(".jpeg") ? <img src={content} /> : <h2>{content}</h2>}
            </Box> */}


		</Box>
	);
};

export default Skills;
