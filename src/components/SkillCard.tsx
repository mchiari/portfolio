import { Box } from "@chakra-ui/react";
import React, { ReactComponentElement } from "react";
import { Html5SVG } from "../theme/icons";

type Props = {
	title: string;
	children: React.ReactNode;
};

const SkillCard: React.FC<Props> = ({ title, children }) => {
	
    // const dragStartHandler = (
    //     event: React.DragEvent<HTMLDivElement>,
    //     data: React.ReactNode
    //   ) => {
    //     event.dataTransfer.setData("text", data);
    //   };

	return (
		<Box
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
			// onDragStart={(event) => dragStartHandler(event, children)}
		>
			<Box fontSize={"small"}>{title}</Box>
			<Box pt={"5px"}>{children}</Box>
		</Box>
	);
};

export default SkillCard;
