import { ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Button, IconButton, Image, Text } from "@chakra-ui/react";
import React from "react";
import { PortfolioCasesProps } from "../data/portfolioCases";
import { GithubIconBlack, GithubIconWhite } from "../theme/icons";

export const PortfolioCard = ({
	image,
	link,
	title,
	description,
	tags,
}: PortfolioCasesProps) => {
	return (
		<Box
			backgroundColor={"ice"}
			position={"relative"}
			display={"flex"}
			alignItems={"center"}
			flexDirection={"row-reverse"}
			justifyContent={"space-between"}
			w={"600px"}
			// minH={"320px"}
			p={"16px"}
			border={"solid 1px rgba(0,0,0,0.2)"}
			borderRadius={"4px"}
			boxShadow={"2px 2px 8px 0px rgba(0,0,0,0.2)"}
			_hover={{
				transition: "box-shadow .5s",
				boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.5)",
			}}
		>
			<a href={link} target={"_blank"} rel={"noreferrer"}>
				<Box
					p={"8px"}
					borderRadius={"4px"}
					h={"250px"}
					w={"250px"}
					backgroundImage={image}
					backgroundSize={"cover"}
				/>
			</a>

			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				textAlign={"left"}
				pr={"16px"}
				h={"250px"}
			>
				<Text>
					<strong>{title}</strong>
				</Text>

				<Text py={5}>{description}</Text>

				<Box>
					<Text>
						<em>
							{tags
								.map((tag) => {
									return tag;
								})
								.join(" - ")}
						</em>
					</Text>

					<Box display={"flex"} gap={"10px"}>
						<a href={link} target={"_blank"} rel={"noreferrer"}>
							<Button
								aria-label='visit website'
								rightIcon={<ExternalLinkIcon />}
								mt={5}
							>
								Visit
							</Button>
						</a>
						<Button
							aria-label='github'
							rightIcon={<GithubIconWhite />}
							variant={"dark"}
							mt={5}
						>
							Repo
						</Button>
					</Box>
				</Box>

			</Box>
		</Box>
	);
};
