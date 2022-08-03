import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Square, Text } from "@chakra-ui/react";
import { useState } from "react";

const Header = () => {
	const [color, setColor] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			if (!color) {
				setColor(true);
			}
		} else {
			if (color) {
				setColor(false);
			}
		}
	};

	window.addEventListener("scroll", handleScroll);

	const handleAnchorClick = (target: string) => {
		document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<Box
			bgColor={!color ? "transparent" : "darkgray"}
			position={"fixed"}
			zIndex={"sticky"}
			w={"100%"}
			h={"100px"}
			color={!color ? "black" : "white"}
			display={"flex"}
			flexDir={"row"}
			justifyContent={"space-around"}
			alignItems={"center"}
			transition={"ease-in-out 500ms"}
		>
			<Box display={"flex"}>
				{/* <Square px={5}>
					<StarIcon color={'yellow'} />
				</Square> */}
				<Heading
					as={"h3"}
					color={!color ? "black" : "white"}
					size={"lg"}
				>
					@mchiaridev
				</Heading>
			</Box>
			<Box
				display={"flex"}
				flexDirection={"row"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={5}
				fontWeight={"bold"}
				userSelect={'none'}
			>
				<Text cursor={'pointer'}  onClick={() => handleAnchorClick("home")}>Home</Text>

				<Text cursor={'pointer'}  onClick={() => handleAnchorClick("portfolio")}>
					Recent work
				</Text>

				<Text cursor={'pointer'} onClick={() => handleAnchorClick("lifeExperience")}>
					Life Experience
				</Text>

				<a
					href='https://api.whatsapp.com/send/?phone=551399886882229'
					target={"_blank"}
					rel={"noreferrer"}
				>
					<Button variant={!color ? "none" : "secondary"} ml={"20px"}>
						Send me a message
					</Button>
				</a>
			</Box>
		</Box>
	);
};

export default Header;
