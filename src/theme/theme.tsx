import { extendTheme } from "@chakra-ui/react";
import * as ReactDOM from 'react-dom/client'


export const theme = extendTheme({
    colors: {
        
        blue: "#0984e3",
        blue2: "#74b9ff",

        orange:"#e17055",
        orange2: "#fab1a0",

        red:"#d63031",
        red2: "#ff7675",

        yellow: "#fdcb6e",
        yellow2: "#ffeaa7",

        
        //global colors
        black: "#0b090a",
        darkgray: "#2d3436",
        gray: "#636e72",
        lightgray: "#b2bec3",
        lightestgray: "#dfe6e9",
        ice: "#f0f0f0",
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
                color: 'white',
                backgroundColor: 'blue',
                _hover: {
                    color: 'white',
                    backgroundColor: 'blue2',
                }
            },
            variants:{
                secondary:{
                    color: 'white',
                backgroundColor: 'red',
                _hover: {
                    color: 'white',
                    backgroundColor: 'red2',
                }
                },
                dark:{
                    color: 'white',
                backgroundColor: 'darkgray',
                _hover: {
                    color: 'white',
                    backgroundColor: 'gray',
                }
                }
            }
        }
    }
})