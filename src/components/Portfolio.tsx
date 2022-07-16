import { Box, Image, Text } from '@chakra-ui/react'
import { PortfolioCard } from './PortfolioCard'

const Portfolio = () => {
    
    const projects = [
        {
            image: '../imgs/shopping-cart-ts.jpg',
            link: 'https://shopping-cart-ts-react.vercel.app/',
            title: 'Shopping Cart TS',
            description: 'Front-end study project - introducing typescript to my skillset.',
            tags: ['typescript', 'react', 'vite']
        },
        {
            image: '../imgs/next-amazona.jpg',
            link: 'https://next-amazona-bay.vercel.app/',
            title: 'Next Amazona',
            description: 'Fullstack study project. Implemented admin panel with mongoDB and integrated PayPal API to allow online payments.',
            tags: ['Javascript', 'React', 'MongoDB', 'PayPal', 'Material UI']
        },
        {
            image: '../imgs/redux-movie.jpg',
            link: 'https://reduxmovie.vercel.app/',
            title: 'Redux movie database',
            description: 'Study project made using',
            tags: ['javascript', 'react']
        },
        {
            image: '../imgs/react-styled.jpg',
            link: 'https://react-website-styled-components.vercel.app/',
            title: 'Redux movie database',
            description: 'Study project made using',
            tags: ['javascript', 'react']
        },
        {
            image: '../imgs/placeholder.jpg',
            link: 'https://placeholder-plum.vercel.app/',
            title: 'App made for an internship interview',
            description: 'Study project made using',
            tags: ['javascript', 'react']
        },
        {
            image: '../imgs/cryptoverse.jpg',
            link: 'https://cryptoverse-jade.vercel.app/',
            title: 'Cryptoverse',
            description: 'Study project made using',
            tags: ['javascript', 'react']
        },
        {
            image: '../imgs/letreco.jpg',
            link: 'https://letreco-snowy.vercel.app/',
            title: 'Letreco',
            description: 'Study project made using',
            tags: ['javascript', 'react']
        },
        {
            image: '../imgs/pokedex.jpg',
            link: 'https://pokedex-five-gray.vercel.app/',
            title: 'Pokédex',
            description: 'Study project made using',
            tags: ['javascript', 'react']
        },
    ]

    return (
        <Box h={'auto'} py={'100px'} bgColor={'white'} display={'flex'} gap={10} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
            
            {projects.map((project,index) =>{
                return <PortfolioCard image={project.image} link={project.link} title={project.title} description={project.description} tags={project.tags} />
            })}
            
        </Box>
    )
}

export default Portfolio