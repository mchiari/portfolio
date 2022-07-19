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

	return (
		<Box
			bgColor={!color ? "transparent" : "black"}
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
				<Square px={5}>
					<StarIcon />
				</Square>
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
			>
				<a href={"#home"}>
					<Text>Home</Text>
				</a>
				<a href={"#portfolio"}>
					<Text>Recent work</Text>
				</a>
				<a href={"#lifeExperience"}>
					<Text>Life Experience</Text>
				</a>

				<Button colorScheme={!color ? "navy" : "orange"} ml={"20px"}>
					Send me a message
				</Button>
			</Box>
		</Box>
	);
};

export default Header;
