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
			flexDirection={["column-reverse", "column-reverse", "column-reverse", "column-reverse", "row-reverse"]}
			justifyContent={"space-between"}
			border={"solid 1px rgba(0,0,0,0.2)"}
			borderRadius={"4px"}
			boxShadow={"2px 2px 8px 0px rgba(0,0,0,0.2)"}
			_hover={{
				transition: "box-shadow .5s",
				boxShadow: "4px 4px 8px 0px rgba(0,0,0,0.5)",
			}}
			width={['300px','600px']}
			height={['500px','500px','500px','500px','300px']}
		>
			<Box padding={'16px'} w={['100%']} h={['100%']}>
				<a href={link} target={"_blank"} rel={"noreferrer"}>
					<Box
						borderRadius={"4px"}
						h={"100%"}
						w={'100%'}
						backgroundImage={image}
						backgroundSize={"cover"}
						backgroundPosition={'center'}
					/>
				</a>
			</Box>

			<Box
				display={"flex"}
				flexDirection={"column"}
				justifyContent={"space-between"}
				textAlign={"left"}
				// h={"250px"}
				p={'16px'}
			>
				<Text>
					<strong>{title}</strong>
				</Text>

				<Text py={5}>{description}</Text>

				<Text>
					<em>
						{tags
							.map((tag) => {
								return tag;
							})
							.join(" - ")}
					</em>
				</Text>

				<Box display={"flex"} gap={"8px"}>
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
	);
};
