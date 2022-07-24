import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { skillTitles } from "../data/skills";
import { iconPicker } from "../utils";
import SkillCard from "./SkillCard";

const Skills = () => {

	//have to implement redux
	useEffect(()=>{
		console.log(skillTitles)
	},[skillTitles])

	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			w={"304px"}
			h={"auto"}
			flexWrap={"wrap"}
			gap={"32px"}
		>
			
				{skillTitles.map((skill, index) => {	
					return <SkillCard key={index} title={skill} />
				})}

			{/* <Box
				bgColor={"white"}
				boxSize={"80px"}
				display={"flex"}
				flexDir={"column-reverse"}
				justifyContent={"space-around"}
				alignItems={"center"}
				border={"dashed 1px rgba(0,0,0,0.2)"}
				borderRadius={"4px"}
				boxShadow={"2px 2px 8px 0px rgba(0,0,0,0.2)"}
				_hover={{
					transition: "box-shadow .5s",
					boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.5)",
				}}
				onDragOver={allowDrop}
				onDrop={dropHandler}
				color={"lightgray"}
			>
				{<h2>{content}</h2>}
			</Box> */}
		</Box>
	);
};

export default Skills;
