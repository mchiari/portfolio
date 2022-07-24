import { skillTitles } from "./data/skills";
import { AgileMethodologySVG, ChakraUiSVG, CorelSVG, Css3SVG, FigmaSVG, Html5SVG, JavascriptSVG, MaterialUiSVG, ReactSVG, ReduxSVG, StyledComponentsSVG, TypescriptSVG } from "./theme/icons";

export const iconPicker = (title: string) =>{
    switch (title) {
        case "HTML5":
            return <Html5SVG />
        case "CSS3":
            return <Css3SVG />
        case "Javascript":
            return <JavascriptSVG />
        case "Typescript":
            return <TypescriptSVG />
        case "React":
            return <ReactSVG />
        case "Redux":
            return <ReduxSVG />
        case "Styled":
            return <StyledComponentsSVG />
        case "Figma":
            return <FigmaSVG />
        case "Material UI":
            return <MaterialUiSVG />
        case "Chakra UI":
            return <ChakraUiSVG />
        case "Azure":
            return <AgileMethodologySVG />
        case "Corel Draw":
            return <CorelSVG />
            default:
                break;
            }
        }



        export const skillOrderChanger = (current: string,target: string) =>{
            let a = skillTitles.indexOf(current)
            let b = skillTitles.indexOf(target)
            // console.log(current, skillTitles.indexOf(current))
            // console.log(target, skillTitles.indexOf(target))
            
            let c = skillTitles[a]
            skillTitles[a] = skillTitles[b]
            skillTitles[b] = c
            // console.log(skillTitles)
        }

