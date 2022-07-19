import { AtSignIcon, ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, keyframes, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Landing = () => {
	const titleKeyframes = keyframes`
	0% { opacity: 0; transform: translateX(-100px)  }
	100% { opacity: 1; transform: translateX(0)  }
	
	`;

	const animationTitle = `${titleKeyframes} 1000ms ease-in-out`;

	return (
		<Box
			position={"relative"}
			h={["150vh","100vh","95vh","90vh","85vh"]}
			boxShadow={"0 0 4px 4px rgba(0,0,0,0.2)"}
			display={"flex"}
			flexDirection={["column-reverse","column-reverse","row"]}
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
						<Button colorScheme={'blue'} rightIcon={<ExternalLinkIcon />}>
							LinkedIn
						</Button>
					</a>
					<a
						href={"https://github.com/mchiari"}
						target={"_blank"}
						rel={"noreferrer"}
					>
						<Button
							// variant={"outline"}
							colorScheme={"green"}
							rightIcon={<StarIcon />}
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
							// variant={"outline"}
							colorScheme={"orange"}
							rightIcon={<AtSignIcon />}
						>
							Insta
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
					h={"300px"}
					minW={'300px'}
					transform={"scaleX(-1) scale(1.3)"}
				/>
			</Box>
		</Box>
	);
};

export default Landing;
