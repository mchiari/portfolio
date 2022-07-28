import { Box } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { changeOrder, selectSkills } from "../app/skillsSlice";

import { iconPicker} from "../utils";

type Props = {
	title: string;
};

const SkillCard: React.FC<Props> = ({ title }) => {
	const skills = useAppSelector(selectSkills).skills
	const dispatch = useAppDispatch()

	const changePlaces = (dropTarget: string) => {
		const current = window.localStorage.getItem("currentCard") || "";
		const target = dropTarget;
		skillOrderChanger(current, target);
	};

	const dragStartHandler = (
		event: React.DragEvent<HTMLDivElement>,
		data: string
	) => {
		window.localStorage.setItem("currentCard", data);
	};

	const dragOverHandler = (
		event: React.DragEvent<HTMLDivElement>,
		data: string
	) => {
		event.preventDefault();
		event.stopPropagation();
	};

	const dropHandler = (
		event: React.DragEvent<HTMLDivElement>,
		data: string
	) => {
		const dropTarget =
			event.currentTarget.firstElementChild?.innerHTML || "";
		changePlaces(dropTarget);
	};


	const skillOrderChanger = (current: string,target: string) =>{
		let skillsArray = [...skills]
		let a = skillsArray.indexOf(current)
		let b = skillsArray.indexOf(target)		
		let c = skillsArray[a]
		skillsArray[a] = skillsArray[b]
		skillsArray[b] = c
		dispatch(changeOrder(skillsArray))
	}




	return (
		<Box
			bgColor={"ice"}
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
			draggable={true}
			onDragStart={(event) => dragStartHandler(event, title)}
			onDragOver={(event) => dragOverHandler(event, title)}
			onDrop={(event) => dropHandler(event, title)}
		>
			<Box fontSize={"small"} color={"black"}>
				{title}
			</Box>
			<Box pt={"5px"} fill={"black"} color={"black"}>
				{iconPicker(title)}
			</Box>
		</Box>
	);
};

export default SkillCard;
