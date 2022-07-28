import { Box } from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectSkills } from "../app/skillsSlice";

import SkillCard from "./SkillCard";

const Skills = () => {
	const skills = useAppSelector(selectSkills).skills

	return (
		<Box
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			w={["300px","500px","650px","750px","350px","350px"]}
			h={"auto"}
			flexWrap={"wrap"}
			gap={"32px"}
			padding={"16px"}
		>
			
				{skills.map((skill, index) => {	
					return <SkillCard key={index} title={skill} />
				})}
		</Box>
	);
};

export default Skills;
