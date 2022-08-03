import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Box
			w={"100%"}
			h={"200px"}
			bgColor={"darkgray"}
			color={"white"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
            flexDirection={'column'}
            gap={'24px'}
		>
			

            <Text>
            Contact me: mchiaridev@gmail.com
            </Text>
            <Text>
            Made with Typescript in Chakra UI <br/>
            Copyright © 2022 - Matheus Chiari
            </Text>
		</Box>
	);
};

export default Footer;
