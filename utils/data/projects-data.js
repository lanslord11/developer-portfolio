import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Crab-Cart',
        description: "Conceptualized, programmed, and tested a responsive E-Commerce platform with intricate multi-tiered authorization.Utilized React.js, Node.js, and Cloudinary to facilitate the development of both frontend and backend components.Incorporated Redux for enhanced state management resulting in a 25% reduction in state-related bugs, employed MongoDB as the database solution.",
        tools: ['Express', 'MongoDB', 'Node.js', 'React.js', 'Javascript', 'Node Mailer'],
        code: 'https://github.com/lanslord11/Crab-Cart',
        demo: 'https://crab-cart.onrender.com',
        image: crefin,
    },
    {
        id: 2,
        name: 'Block-Connect',
        description: 'Crafted a userfriendly Decentralized Social Media on Ethereum Polygon, emphasizing security and transparency.Implemented IPFS for comprehensive decentralization of data storage managing over 10,000 pieces of content leveraging Fleek for decentralized deployment, thereby enhancing the platform’s resilience and sustainability.',
        tools: ['React.js', 'Solidity', "Ethers", "Graph", "Pinata", "Hardhat", "IPFS"],
        // role: 'Full Stack Developer',
        code: 'https://github.com/lanslord11/Block-Connect',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'YT Scrapper',
        description: 'Built a web scraper with Playwright and Crawlee to extract video data (titles, views, thumbnails) from YouTube playlists and generate visual analytics. Implemented dynamic scroll handling and retries for efficient, robust data extraction from large playlists.',
        tools: ['Next.js', 'Playwright', 'Crawlee', 'Node.js', 'TypeScript' ],
        code: 'https://github.com/lanslord11/ytscrapper',
        // role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Web3 G-Drive',
        description: 'Created a decentralized storage system using IPFS and blockchain, enhancing data resilience and security. Efficiently decentralized frontend deployment using Fleek for enhanced resilience and distributed accessibility.',
        tools: ['React', 'Solidity', 'Ethers', 'Pinata', 'Harddhat', 'IPFS'],
        code: 'https://github.com/lanslord11/web3-G-Drive',
        // role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },