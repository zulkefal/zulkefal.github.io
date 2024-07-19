import Dapp1 from "../assets/projects/Dapp1.png";
import Dapp2 from "../assets/projects/Dapp2.png";
import Dapp3 from "../assets/projects/Dapp3.png";
import Dapp4 from "../assets/projects/Dapp4.png";
import React_1 from "../assets/projects/React_1.png";
import React1 from "../assets/projects/React1.png";
import React2 from "../assets/projects/React2.png";
import React3 from "../assets/projects/React3.png";
import React4 from "../assets/projects/React4.png";
import React5 from "../assets/projects/React5.png";
import React6 from "../assets/projects/React6.png";
import React7 from "../assets/projects/React7.png";
import React8 from "../assets/projects/React8.png";
import React9 from "../assets/projects/React9.png";
import React10 from "../assets/projects/React10.png";
import React11 from "../assets/projects/React11.png";
import React12 from "../assets/projects/React12.png";
import SC1 from "../assets/projects/SC1.png";
import SC2 from "../assets/projects/SC2.png";
import SC3 from "../assets/projects/SC3.png";
import SC4 from "../assets/projects/SC4.png";
import SC5 from "../assets/projects/SC5.png";
import SC6 from "../assets/projects/SC6.png";
import SC7 from "../assets/projects/SC7.png";






export const HERO_CONTENT = `I am passionate about blockchain technology and web development, with a strong focus on creating cutting-edge solutions that drive innovation. I have developed understanding of blockchain principles and their integration into web applications. I have created a few decentralized applications (dApps) using the Ethereum blockchain.I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.

`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jul 2023 - Aug 2023 ",
    role: "Web Development Intern (Remote)",
    company: "CodeClause",
    description: `During my rewarding internship at CodeClause, I honed my expertise in essential web development languages, including CSS, HTML, and JavaScript, React.js, and Node.js. I also Implemented RESTful APIs and integrated with MongoDB databases. `,
    technologies: ["Javascript", "React.js", "NodeJs", "mongoDB"],
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
    title: "NFT Based Degree Issuance System",
    image: Dapp1,
    description:
      "This Dapp issue Degrees as NFT after approval from HEC of Pakistan. These degrees can be verified in seconds uisng this Dapp.",
    technologies: ["ReactJS", "NodeJS", "MySQL", "EtherJS", "Solidity","Pinata"],
    category: "Dapps",
    github:"https://www.linkedin.com/posts/ethereumblockchaindeveloper_here-is-a-video-demonstration-of-our-final-activity-7205873213938053120-M8Fw?utm_source=share&utm_medium=member_desktop"

  },
  {
    title: "MERN based NFT Ticketing System",
    image: Dapp2,
    description:
      "It is a decentralized ticketing system where tickets are issued as NFTs. It also keep track of the number of tickets sold.",
      technologies: ["ReactJS", "MongoDB","Solidity" ,"NodeJS","IPFS"],
      category: "Dapps",
      github:"https://github.com/zulkefal/mernNFTApp"

  },
  {
    title: "Decentralized GDrive",
    image: Dapp3,
    description:
      "A Decentralized GDrive app lets users store and access files via ID. It stores file hashes on  blockchain, retrieves  hash using  file ID, and fetches file from IPFS using the hash.",
      technologies: ["ReactJS",  "Solidity", "EtherJS","IPFS"],
      category: "Dapps",
      github:"https://github.com/zulkefal/Storing-files-hash-blockchain"

  },
  {
    title: "Tickets as ERC721 Tokens",
    image: Dapp4,
    description:
      "A Dapp that mints tickets as ERC721 tokens. ",
      technologies: ["ReactJS", "EtherJS","IPFS"],
      category: "Dapps",
      github:"https://github.com/zulkefal/Nft-Ticket"

  },
  {
    title: "NFT Market Place",
    image: React_1,
    description:
      "This App is a NFT Market Place where users can buy and sell NFTs. ",
      technologies: ["ReactJS", "Tailwind","Routing"],
      category: "ReactJS",
      github:"https://github.com/zulkefal/nft-site-frontend"
  },
  {
    title: "GYM Registration Form",
    image: React1,
    description:
      "A Simple Registration Form for GYM registration. ",
      technologies: ["ReactJS", "CSS"],
      category: "ReactJS",
      git:"https://github.com/zulkefal/GYM"
  },
  {
    title: "BMI Calculator",
    image: React3,
    description:
      "A Calculator that calculate Body Mass Index of users.",
      technologies: ["ReactJS", "CSS"],
      category: "ReactJS",
      github:"https://github.com/zulkefal?tab=repositories"
  },{
    title: "ToDo App",
    image: React4,
    description:
      "ToDo App is a simple app that lets users add and delete tasks.",
      technologies: ["ReactJS", "JS"],
      category: "ReactJS",
      github:"https://github.com/zulkefal/toDO"
  },{
    title: "Weather App",
    image: React5,
    description:
      "Weather App is a simple app that shows the weather of any city.",
      technologies: ["ReactJS", "APIs"],
      category: "ReactJS",
      github:"https://github.com/zulkefal/weather"
  },{
    title: "Digital Clock",
    image: React6,
    description:
    "Digital Clock is a simple app that shows how much time is left for website Launch.",
    technologies: ["ReactJS", "JS","CSS"],
      category: "ReactJS",
      github:"https://github.com/zulkefal/countdown_timer"
  },{
    title: "GYM App",
    image: React7,
    description:
    "GYM App is a simple app that shows the GYM plans and their prices.",
    technologies: ["ReactJS", "JS","CSS"],
      category: "ReactJS",
      github:"https://github.com/zulkefal"
  },{
    title: "Restaurant App",
    image: React8,
    description:
      "Restaurant App is a simple app that shows the menu of a restaurant.",
      technologies: ["ReactJS", "JS","CSS"],
      category: "ReactJS",
      github:"https://github.com/zulkefal/Resataurant"
  },{
    title: "Crypto App",
    image: React9,
    description:
      "Crypto App is a app that shows real prices of different cryptocurrencies. It allows users to search specific currency.",
      technologies: ["ReactJS", "APIs","JS"],
      category: "ReactJS",
      github:"https://github.com/zulkefal"

  },{
    title: "Expense Tracker",
    image: React11,
    description:
      "Expense Tracker is an advanced app that lets users add and delete expenses. It also shows the total expenses.",
      technologies: ["ReactJS", "JS"],
      category: "ReactJS",
      github:"https://github.com/zulkefal"

  },{
    title: "Login Signup Page",
    image: React12,
    description:
      "Login Signup Page is a simple webpage where users can login or signup. It also allows users to conenct their metamask for signup.",
      technologies: ["ReactJS", "JS"],
      category: "ReactJS"
  },
  
  {
    title: "ERC-721A Token",
    image: SC3,
    description:
      "Following ERC-721A Standard, minted NFT in batches, ERC-721A is helpful in minting batch of NFTS .",
      technologies: ["Solidity"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/solidityprograms"
  },
  {
    title: "Event Contract",
    image: SC4,
    description:
      "This contract allows users to create events. It also allows users to buy tickets and transfer tickets to other accounts.",
      technologies: ["Solidity"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/solidityprograms"
  },
  {
    title: "Voting Contract",
    image: SC7,
    description:
      "Voting Contract allows users to vote. They can vote in particulary time only. Votes will also pay fee for voting.",
      technologies: ["Solidity"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/solidityprograms"
  },
  {
    title: "Ecommerce Contract",
    image: SC6,
    description:
      "This contract allows to create and store details of products, it also allows visitor to buy products.",
      technologies: ["Solidity"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/solidityprograms"
  },
  {
    title: "Price Converter",
    image: SC5,
    description:
      "This contract uses Chainlink Oracle for conversion of currency.",
      technologies: ["Solidity"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/solidityprograms"
  },
  {
    title: "ERC-20 Token",
    image: SC1,
    description:
      "ERC-20 Token is a simple smart contract that mints tokens.",
      technologies: ["Solidity"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/solidityprograms"
  },
  {
    title: "ERC-721 Token",
    image: SC2,
    description:
      "MYNFT is a contract that uses ERC-721 standard for minting NFTs.",
      technologies: ["Solidity"],
      category: "Smart Contracts",
      github:"https://github.com/zulkefal/solidityprograms"
  },
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
  cgpa: "3.44/4.00",
};