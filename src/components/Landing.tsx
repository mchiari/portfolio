import { AtSignIcon, ExternalLinkIcon, Icon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, keyframes, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
	LinkedinIconWhite,
	InstagramIconWhite,
	GithubIconWhite,
} from "../theme/icons";

const Landing = () => {
	const titleKeyframes = keyframes`
	0% { opacity: 0; transform: translateX(-100px)  }
	100% { opacity: 1; transform: translateX(0)  }
	
	`;

	const animationTitle = `${titleKeyframes} 1000ms ease-in-out`;

	return (
		<Box
			position={"relative"}
			bgColor={"white"}
			h={["100vh", "100vh", "90vh", "70vh", "70vh"]}
			boxShadow={"0 0 4px 4px rgba(0,0,0,0.2)"}
			display={"flex"}
			flexDirection={[
				"column-reverse",
				"column-reverse",
				"column",
				"row",
			]}
			justifyContent={"center"}
			alignItems={"center"}
			w={"100%"}
			paddingTop={["50px", "100px", "0"]}
			id={"home"}
			gap={['32px','64px', '32px']}
		>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"left"}
				textAlign={"left"}
				alignItems={"left"}
				width={['320px','400px','600px','600px','800px','800px']}
			>
				<Box
					display={"flex"}
					flexDir={"column"}
					gap={5}
					padding={"16px"}
				>
					<Heading as={motion.h1} animation={animationTitle}>
						Hello! My name is Matheus Chiari and I am a Front-End
						developer
					</Heading>
					<Text
						fontSize={"xl"}
						as={motion.p}
						animation={animationTitle}
					>
						Who is comitted to making complicated stuff simple.
					</Text>
					{/* <Text fontSize={"sm"} as={motion.p} animation={animationTitle}>@mchiaridev</Text> */}
				</Box>

				<Box
					display={"flex"}
					flexDirection={["column","column", "row"]}
					justifyContent={"left"}
					alignItems={"center"}
					gap={"20px"}
					padding={"16px"}
				>
					<a
						href={"https://www.linkedin.com/in/mchiaridev/"}
						target={"_blank"}
						rel={"noreferrer"}
					>
						<Button rightIcon={<LinkedinIconWhite />} w={"150px"}>
							LinkedIn
						</Button>
					</a>
					<a
						href={"https://github.com/mchiari"}
						target={"_blank"}
						rel={"noreferrer"}
					>
						<Button
							variant={"dark"}
							rightIcon={<GithubIconWhite />}
							w={"150px"}
						>
							Github
						</Button>
					</a>
					<a
						href={"https://instagram/chiarimatheus"}
						target={"_blank"}
						rel={"noreferrer"}
					>
						<Button
							variant={"dark"}
							rightIcon={<InstagramIconWhite />}
							w={"150px"}
						>
							Instagram
						</Button>
					</a>
				</Box>
			</Box>

			<Box>
				<Box className='wrapper'>
					<span className='typing'>Hello, world!</span>
				</Box>
				<Image
					src={"/imgs/notebook.png"}
					boxSize={["250px"]}
					transform={"scaleX(-1) scale(1.3)"}
				/>
			</Box>
		</Box>
	);
};

export default Landing;
