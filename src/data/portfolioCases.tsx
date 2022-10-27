export type PortfolioCasesProps = {
    image: string,
    link: string,
    githubLink?: string,
    title: string,
    description: string,
    tags: string[],
}

export const projects = [
    {
        image: '../imgs/lab-ds.jpg',
        link: 'https://lab-ds-mchiari.vercel.app/',
        githubLink: 'https://github.com/mchiari/lab-ds',
        title: 'Login page - Design System',
        description: 'Front-end study project - Implementing a tiny design system created on Storybook. Integrated tests.',
        tags: ['Typescript', 'React', 'Tailwind', 'Figma', 'Vite', 'Storybook', 'Jest']
    },
    {
        image: '../imgs/shopping-cart-ts.jpg',
        link: 'https://shopping-cart-ts-react.vercel.app/',
        githubLink: 'https://github.com/mchiari/shopping-cart-ts-react',
        title: 'Shopping Cart TS',
        description: 'Front-end study project - Simple shopping cart, introducing typescript to my skillset.',
        tags: ['Typescript', 'React', 'Vite']
    },
    {
        image: '../imgs/next-amazona.jpg',
        link: 'https://next-amazona-bay.vercel.app/',
        githubLink: 'https://github.com/mchiari/next-amazona',
        title: 'Next Amazona',
        description: 'Fullstack study project. Implemented admin panel with mongoDB and integrated PayPal API to allow online payments.',
        tags: ['Javascript', 'React', 'MongoDB', 'PayPal', 'Material UI', 'Next.js']
    },
    {
        image: '../imgs/redux-movie.jpg',
        link: 'https://reduxmovie.vercel.app/',
        githubLink: 'https://github.com/mchiari/reduxmovie',
        title: 'Redux movie database',
        description: 'Study project - Coded alongside with youtube video. The idea was to create a React app that could fetch and display movies data on demand.',
        tags: ['Javascript', 'React', 'Redux']
    },
    {
        image: '../imgs/react-styled.jpg',
        link: 'https://react-website-styled-components.vercel.app/',
        githubLink: 'https://github.com/mchiari/react-website-styled-components',
        title: 'Styled-Components',
        description: 'Study project - Simple styled website, introducing Styled-Components to my skillset. Made some customizations for a job interview.',
        tags: ['Javascript', 'React', 'Styled-Components']
    },
    {
        image: '../imgs/placeholder.jpg',
        link: 'https://placeholder-plum.vercel.app/',
        githubLink: 'https://github.com/mchiari/placeholder',
        title: 'Placeholder timeline',
        description: 'App made for an internship interview. The idea was to use a mock placeholder API to fetch and display organized data from multiple endpoints.',
        tags: ['Javascript', 'React', 'Redux', 'Axios']
    },
    {
        image: '../imgs/cryptoverse.jpg',
        link: 'https://cryptoverse-jade.vercel.app/',
        githubLink: 'https://github.com/mchiari/Cryptoverse',
        title: 'Cryptoverse',
        description: 'Study project - Simple crypto website created to practice REST API data manipulation.',
        tags: ['Javascript', 'React', 'Axios']
    },
    {
        image: '../imgs/letreco.jpg',
        link: 'https://letreco-snowy.vercel.app/',
        githubLink: 'https://github.com/mchiari/letreco-do-pasqua',
        title: 'Letreco',
        description: 'Study project - Simple remake of a popular wordle game. Mostly logic and minial design.',
        tags: ['Javascript', 'React', 'HTML', 'CSS']
    },
    {
        image: '../imgs/pokedex.jpg',
        link: 'https://pokedex-five-gray.vercel.app/',
        githubLink: 'https://github.com/mchiari/pokedex',
        title: 'Pokédex',
        description: 'Study project - Coded following Youtube instructions. Fetching data and using React context.',
        tags: ['Javascript', 'React', 'Context', 'Fetch']
    },
]