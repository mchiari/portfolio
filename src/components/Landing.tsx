import { AtSignIcon, ExternalLinkIcon, Icon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, keyframes, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LinkedinIconWhite, InstagramIconWhite, GithubIconWhite } from "../theme/icons";

const Landing = () => {


	const titleKeyframes = keyframes`
	0% { opacity: 0; transform: translateX(-100px)  }
	100% { opacity: 1; transform: translateX(0)  }
	
	`;

	const animationTitle = `${titleKeyframes} 1000ms ease-in-out`;

	return (
		<Box
			position={"relative"}
			bgColor={'white'}
			h={["150vh","100vh","140vh","85vh","70vh"]}
			boxShadow={"0 0 4px 4px rgba(0,0,0,0.2)"}
			display={"flex"}
			flexDirection={["column-reverse","column-reverse","column","row"]}
			justifyContent={"center"}
			alignItems={"center"}
			gap={32}
			w={'100%'}
			paddingTop={['300px','300px','0']}
			id={'home'}
		>
			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"left"}
				textAlign={"left"}
				alignItems={"left"}
			>
				<Box display={"flex"} flexDir={"column"} gap={5}>
					<Heading as={motion.h1} animation={animationTitle} w={'400px'}>
						Hello! My name is Matheus Chiari and I am a Front-End developer
					</Heading>
					<Text fontSize={"xl"} as={motion.p} animation={animationTitle}>Who is comitted to making complicated stuff simple.</Text>
					<Text fontSize={"sm"} as={motion.p} animation={animationTitle}>@mchiaridev</Text>
				</Box>

				<Box
					py={"20px"}
					display={"flex"}
					justifyContent={"left"}
					alignItems={"center"}
					gap={"20px"}
				>
					<a
						href={"https://www.linkedin.com/in/mchiaridev/"}
						target={"_blank"}
						rel={"noreferrer"}
					>
						<Button rightIcon={<LinkedinIconWhite />}>
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
					boxSize={'300px'}
					transform={"scaleX(-1) scale(1.3)"}
				/>
			</Box>

			
		</Box>
	);
};

export default Landing;
