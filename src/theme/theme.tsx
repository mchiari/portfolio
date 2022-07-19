import { extendTheme } from "@chakra-ui/react";
import * as ReactDOM from 'react-dom/client'


export const theme = extendTheme({
    colors: {
        black: "#0b090a",
        darkest: "#03045e",
        darker: "#023e8a",
        dark: "#0077b6",
        default: "#00b4d8",
        light: "#48cae4",
        lighter:"#90e0ef",
        lightest:"#ade8f4",
        darkgray: "#161a1d",
        gray: "#b1a7a6",
        lightgray: "#d3d3d3",
        lightestgray: "#f1f1f1",
        ice: "#f5f3f4",
        white: "#FFFFFF",
    },
    styles: {
		global: {
			"html, body, h1": {
				fontFamily: 'San Francisco, Merriweather, serif',
			},
		},
	},
    components:{
        Heading:{
            baseStyle:{
                fontFamily: 'San Francisco, Merriweather, serif',
            }
        },
        Button: {
            baseStyle:{
                color: 'lightest',
                backgroundColor: 'darker',
            }
        }
    }
})