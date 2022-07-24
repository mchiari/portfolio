import { Box } from "@chakra-ui/react";
import React, { ReactComponentElement, useState } from "react";
import { skillTitles } from "../data/skills";
import { Css3SVG, Html5SVG } from "../theme/icons";
import { iconPicker, skillOrderChanger } from "../utils";

type Props = {
	title: string;
};

const SkillCard: React.FC<Props> = ({ title }) => {
	const [content, setContent] = useState<string>(title);
	const [currentCard, setCurrentCard] = useState<string>('');
	
	
	const changePlaces = (dropTarget: string) =>{
		const current = window.localStorage.getItem('currentCard') || ''
		const target = dropTarget
			skillOrderChanger(current,target)
	}


	const dragStartHandler = (
		event: React.DragEvent<HTMLDivElement>,
		data: string
	) => {
		// console.log(skillTitles.filter((skill,index) =>{
		// 	return skill === data
		// })[0])
		setCurrentCard(data)
		window.localStorage.setItem('currentCard',data)
		// setCurrentCard(skillTitles.filter((skill,index) =>{
		// 	return skill === data
		// })[0])
	};

	
	// This makes the box become droppable
	const dragOverHandler = (event: React.DragEvent<HTMLDivElement>,
		data: string) => {
			event.preventDefault();
			event.stopPropagation();
		};
		
		// This function will be triggered when dropping
		const dropHandler = (event: React.DragEvent<HTMLDivElement>,
			data: string) => {
				// event.preventDefault();
				// event.stopPropagation();
				const dropTarget = event.currentTarget.firstElementChild?.innerHTML || ''
				// if(typeof dropTarget === "string")
				changePlaces(dropTarget)
				
		};

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
			onDragOver={(event) => dragOverHandler(event,title)}
			onDrop={(event) => dropHandler(event,title)}
		>
			<Box fontSize={"small"} color={"black"}>
				{content}
			</Box>
			<Box pt={"5px"} fill={"black"} color={"black"}>
				{iconPicker(content)}
			</Box>
		</Box>
	);
};

export default SkillCard;
