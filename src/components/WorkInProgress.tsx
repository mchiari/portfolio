import { Box, Button, Container, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const WorkInProgress = () => {
	// const toast = useToast();
	// const [once, setOnce] = useState(false);

	// const handleScroll = () => {
	// 	if (!once && !toast.isActive("001")) {
	// 		setOnce(true);
	// 		toast({
	// 			title: `Hey! This is a work in progress! Beware of bugs!`,
	// 			description:
	// 				"Beware of bugs! 🦗 I'm aware of them and working on it!",
	// 			status: "warning",
	// 			variant: "toast",
	// 			isClosable: true,
	// 			duration: 9000,
	// 			id: "001",
	// 		});
	// 	}
	// };
	// window.addEventListener("animationend", handleScroll);

	return (
		<Container
			my={"32px"}
			display={"flex"}
			alignItems={"center"}
			bgColor={"white"}
			border={"solid 1px rgba(0,0,0,0.2)"}
			borderRadius={"4px"}
			boxShadow={"2px 2px 8px 0px rgba(0,0,0,0.5)"}
			padding={"32px"}
			flexDir={["column", "column", "column", "column", "row"]}
		>
			<Box transform={"scale(2)"} p={"16px"}>
				<svg
					width='24'
					height='24'
					xmlns='http://www.w3.org/2000/svg'
					aria-labelledby='dangerIconTitle'
					stroke='#0984e3'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
					fill='none'
					color='#000'
				>
					<path d='M12 10v3M12 16h0M12.8619342 4.4652882l8.2515834 14.0276917c.2800195.4760331.121119 1.0889348-.3549141 1.3689543-.1536767.090398-.3287274.1380658-.5070201.1380658H3.7484166c-.5522847 0-1-.4477153-1-1 0-.1782928.0476678-.3533435.1380658-.5070201l8.2515834-14.0276917c.2800195-.4760332.8929212-.6349336 1.3689543-.3549141.1465537.086208.2687061.2083604.3549141.354914Z' />
				</svg>
			</Box>
			<Text color={"blue"}>
				Please advise: all of this is a work in progress! Don't worry. I'm
				working on it!
			</Text>
		</Container>
	);
};

export default WorkInProgress;
