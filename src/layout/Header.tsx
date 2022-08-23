import { ChevronDownIcon, HamburgerIcon, StarIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Heading,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Square,
	Text,
} from "@chakra-ui/react";
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
			h={"60px"}
			color={!color ? "black" : "white"}
			display={"flex"}
			flexDir={"row"}
			justifyContent={"space-around"}
			alignItems={"center"}
			transition={"ease-in-out 500ms"}
		>
			<Box display={["block", "block", "none"]}>
				<Menu>
					<MenuButton
						as={Button}
						w={"fit-content"}
						color={!color ? "black" : "white"}
						bgColor={"transparent"}
					>
						<HamburgerIcon />
					</MenuButton>
					<MenuList
						color={!color ? "black" : "white"}
						bgColor={!color ? "white" : "darkgray"}
						border={color ? "none" : "solid 1px lightgray"}
					>
						<MenuItem
							cursor={"pointer"}
							onClick={() => handleAnchorClick("home")}
						>
							<Text>Home</Text>
						</MenuItem>
						<MenuItem
							cursor={"pointer"}
							onClick={() => handleAnchorClick("portfolio")}
						>
							<Text>Recent work</Text>
						</MenuItem>
						<MenuItem
							cursor={"pointer"}
							onClick={() => handleAnchorClick("lifeExperience")}
						>
							<Text>Life Experience</Text>
						</MenuItem>
					</MenuList>
				</Menu>
			</Box>

			<Box display={"flex"}>
				{/* <Square px={5}>
					<StarIcon color={'yellow'} />
				</Square> */}
				<Heading
					as={"h3"}
					color={!color ? "black" : "white"}
					size={"md"}
				>
					@mchiaridev
				</Heading>
			</Box>
			<Box
				display={["none", "none", "flex"]}
				flexDirection={"row"}
				justifyContent={"center"}
				alignItems={"center"}
				gap={5}
				fontWeight={"bold"}
				userSelect={"none"}
			>
				<Text
					cursor={"pointer"}
					onClick={() => handleAnchorClick("home")}
				>
					Home
				</Text>

				<Text
					cursor={"pointer"}
					onClick={() => handleAnchorClick("portfolio")}
				>
					Recent work
				</Text>

				<Text
					cursor={"pointer"}
					onClick={() => handleAnchorClick("lifeExperience")}
				>
					Life Experience
				</Text>
			</Box>
			<Box>
				<a
					href='https://api.whatsapp.com/send/?phone=551399886882229'
					target={"_blank"}
					rel={"noreferrer"}
				>
					<Button ml={"20px"} w={["150px"]}>
						Contact me
					</Button>
				</a>
			</Box>
		</Box>
	);
};

export default Header;
