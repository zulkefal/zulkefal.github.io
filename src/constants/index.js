
import SC1 from "../assets/projects/SC1.png";
import SC2 from "../assets/projects/SC2.png";
import SC3 from "../assets/projects/SC3.png";
import SC4 from "../assets/projects/SC4.png";
import SC5 from "../assets/projects/SC5.png";
import SC6 from "../assets/projects/SC6.png";






export const HERO_CONTENT = `I am a Computer Science graduate (2024) with a strong passion for blockchain technology and decentralized systems. My experience includes building decentralized applications (dApps) on Ethereum and developing smart contracts. I also bring over a year of professional blockchain development experience, where I focused on designing and deploying secure, real-world blockchain solutions. I thrive in collaborative environments, enjoy tackling complex problems, and actively explore emerging technologies while contributing to open-source projects.`;


export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "September 2024 - Present ",
    role: "Blockchain Developer",
    company: "Quecko Inc",
    description: `Developed and deployed smart contracts with expertise in token swapping, bridging, and ERC-20/721 standards. Implemented advanced features such as buyback & burn, Merkle proofs, and ECDSA verification. Built and tested contracts using Foundry and Hardhat, ensuring security, efficiency, and reliability in DeFi and NFT applications.`,
    technologies: ["Solidity", "Foundry", "NodeJS" ,"UniSwap", "WormHole" ],
  },
  {
    year: "Aug 2022 - Aug 2023",
    role: "Technical Team Member",
    company: "DSC Air University AACK",
    description: `I was a part of the technical team of DSC Air University AACK. We had conducted multiple workshops and seminars on different technologies and tools like Flutter, Firebase, Blokchain and Google Cloud Platform. `,
    technologies: ["Blockhain", "Solidity", "Firebase"],
  },
  {
    year: "Jul 2022 - Aug 2022 ",
    role: "Smart Contract Developer Intern (Remote)",
    company: "Web3Learn",
    description: `During my remote internship as a Smart Contract Developer, I gained proficiency in Solidity and developed several smart contracts. I also studied NFT standards and successfully minted NFTs using the ERC-721 standard.`,
    technologies: ["Solidity", "Ethereum", "Blockchain"],
  }
];

export const PROJECTS = [
  {
    title: "Degree Issuance System",
    image: SC1,
    description:
      "This Dapp issue Degrees as NFT after approval from HEC of Pakistan. These degrees can be verified in seconds uisng this Dapp.",
    technologies: ["ReactJS", "NodeJS", "MySQL", "EtherJS", "Solidity","Pinata"],
    category: "Smart Contracts",
    github:"https://www.linkedin.com/posts/ethereumblockchaindeveloper_here-is-a-video-demonstration-of-our-final-activity-7205873213938053120-M8Fw?utm_source=share&utm_medium=member_desktop"

  },
  {
    title: "Rewards Contract",
    image: SC2,
    description:
      "Merkle proof-based rewards system for NFT holders with staking capabilities.",
      technologies: ["Solidity" ,"Foundry"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/MERKLE-PROOF"

  },
  
  {
    title: "ECO Token",
    image: SC3,
    description:
    "ERC20-based green incentive distribution with secure claim verification, reentrancy protection, and token management",
    technologies: ["Solidity" ,"Foundry"],
    category: "Smart Contracts",
      github:"https://github.com/zulkefal/Solar"
  },
  {
    title: "WormHole Token Bridge",
    image: SC4,
    description:
      "A cross-chain token bridge solution built on Ethereum using Wormhole protocol for seamless token transfers between different blockchain networks.",
      technologies: ["Solidity" ,"Foundry"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/WormHole-Token-Bridge"
  },

  {
    title: "PriceFeed Contract",
    image: SC5,
    description:
      "A simple Uniswap V3 price oracle contract for fetching token prices on-chain.",
      technologies: ["Solidity" ,"Foundry"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/PriceFeed"
  },
  {
    title: "BuyBackAndBurn",
    image: SC6,
    description:
      "Facilitate token swaps and burning mechanisms using the Uniswap V3 protocol.",
      technologies: ["Solidity"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/BuyBackAndBurn"
  }
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

export const degreeDetails = {
  uniName: "Air University Aerospace and Aviation Campus Kamra",
  degree:"Bachelor of Science in Computer Science",
  session: "2020-2024",
  cgpa: "3.47/4.00",
};