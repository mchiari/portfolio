export type PortfolioCasesProps = {
    image: string,
    link: string,
    title: string,
    description: string,
    tags: string[],
}

export const projects = [
    {
        image: '../imgs/shopping-cart-ts.jpg',
        link: 'https://shopping-cart-ts-react.vercel.app/',
        title: 'Shopping Cart TS',
        description: 'Front-end study project - Simple shopping cart, introducing typescript to my skillset.',
        tags: ['Typescript', 'React', 'Vite']
    },
    {
        image: '../imgs/next-amazona.jpg',
        link: 'https://next-amazona-bay.vercel.app/',
        title: 'Next Amazona',
        description: 'Fullstack study project. Implemented admin panel with mongoDB and integrated PayPal API to allow online payments.',
        tags: ['Javascript', 'React', 'MongoDB', 'PayPal', 'Material UI', 'Next.js']
    },
    {
        image: '../imgs/redux-movie.jpg',
        link: 'https://reduxmovie.vercel.app/',
        title: 'Redux movie database',
        description: 'Study project made using',
        tags: ['Javascript', 'React', 'Redux']
    },
    {
        image: '../imgs/react-styled.jpg',
        link: 'https://react-website-styled-components.vercel.app/',
        title: 'Styled-Components',
        description: 'Study project - Simple styled website, introducing styled-components to my skillset.',
        tags: ['Javascript', 'React', 'Styled-Components']
    },
    {
        image: '../imgs/placeholder.jpg',
        link: 'https://placeholder-plum.vercel.app/',
        title: 'App made for an internship interview',
        description: 'Study project made using',
        tags: ['Javascript', 'React']
    },
    {
        image: '../imgs/cryptoverse.jpg',
        link: 'https://cryptoverse-jade.vercel.app/',
        title: 'Cryptoverse',
        description: 'Study project - Simple crypto website created to train REST API data manipulation.',
        tags: ['Javascript', 'React', 'Axios', 'REST API']
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