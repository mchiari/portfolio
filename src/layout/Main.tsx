import { Box, Button, Container, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Landing from "../components/Landing";
import News from "../components/News";
import Portfolio from "../components/Portfolio";
import WorkInProgress from "../components/WorkInProgress";

const Main = () => {
	return (
		<Box bgColor={"ice"}>
			<Landing />
			<WorkInProgress />
			<About />
			<Portfolio />
			<Experience />
			{/* <News /> */}
		</Box>
	);
};

export default Main;
