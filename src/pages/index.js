import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Button, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text margin="0px 0 24px 0" text-align="center" font="--headline2" md-font="--headline3">
				Awesome Company
			</Text>
			<Menu
				display="flex"
				justify-content="center"
				font="--base"
				font-weight="700"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px" />
			</Menu>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				About Us
			</Text>
			<Text as="p" font="--lead" margin="20px 0 20px 0" text-align="center">
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake. I’m a great space for you to tell a story and let your site visitors know more about you. Talk about your business and what products and services you offer. Share how you came up with the idea for your company and what makes you different from your competitors. Make your business stand out and show your visitors who you are.
			</Text>
			<Button font="--lead" margin="20px">
				Button
			</Button>
		</Section>
		<Section background="--color-darkL2" padding="60px 0" sm-padding="40px 0">
			<Box
				margin="-16px -16px -16px -16px"
				padding="0px 0px 0px 0px"
				display="flex"
				width=" "
				flex-wrap="wrap"
			>
				<Box padding="16px 16px 16px 16px" display="flex" width="50%" lg-width="100%">
					<Box
						padding="98px 64px 98px 64px"
						display="flex"
						flex-direction="column"
						background="--color-light"
						color="--dark"
					>
						<Text
							as="h4"
							margin="12px 0"
							font="--base"
							color="--grey"
							letter-spacing="1px"
							text-transform="uppercase"
						>
							About Zanzibar
						</Text>
						<Text as="h2" margin="12px 0" font="--headline2" md-font="--headline3">
							This is one of the world's greatest cultural crossroads where Africa meets the Indian Ocean.
						</Text>
					</Box>
				</Box>
				<Box display="flex" width="50%" flex-wrap="wrap" lg-width="100%">
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="100%"
						lg-width="33.3333%"
						md-width="100%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 624px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="50%"
						lg-width="33.3333%"
						md-width="50%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 296px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://images.unsplash.com/photo-1577315734214-4b3dec92d9ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="50%"
						lg-width="33.3333%"
						md-width="50%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 296px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background="--color-darkL2" padding="60px 0" sm-padding="40px 0">
			<Box margin="-16px -16px -16px -16px" padding="16px 16px 16px 16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box
						background="url(https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80) 50% 15%/cover"
						padding="0px 0px 672px 0px"
						margin="0px -112px 0px 0px"
						lg-margin="0px 0px 0px 0px"
						sm-padding="0px 0px 400px 0px"
					/>
				</Box>
				<Box width="50%" display="flex" padding="16px 16px 0px 16px" lg-width="100%">
					<Box
						padding="98px 64px 98px 64px"
						mix-blend-mode="lighten"
						background="--color-red"
						margin="36px 0px -20px -112px"
						display="flex"
						flex-direction="column"
						color="--light"
						lg-margin="0px 0px 0px 0px"
						lg-width="100%"
						sm-padding="64px 32px 64px 32px"
					>
						<Text
							as="h4"
							margin="0"
							font="--base"
							letter-spacing="1px"
							text-transform="uppercase"
						>
							About me
						</Text>
						<Text as="h1" margin="0 0 16px 0" font="--headline1" lg-font="--headline2">
							Hey I’m David
						</Text>
						<Text as="p" margin="16px 0" font="--base" max-width="400px">
							My name is David R. Moore, born and raised in France, worked as a professional photographer and videographer for more than 10 years, awarded the CDS Documentary Essay Prize in 2018 and Best Photographer of The Year 2019 by Sony World Photography Awards.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Menu
				display="flex"
				justify-content="center"
				font="--lead"
				font-weight="700"
				margin="-6px 0 16px"
				md-flex-direction="column"
				md-align-items="center"
			>
				<Override slot="link" text-decoration="none" color="--light" padding="6px 12px" />
				<Override slot="link-active" color="--primary" />
				<Override slot="item" padding="6px 0px" />
			</Menu>
			<Link
				href="mailto:hello@company.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				hello@company.com
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"63349076855d39001fcc5f1b"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});