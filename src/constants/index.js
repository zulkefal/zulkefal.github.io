import SC1 from "../assets/projects/SC1.png";
import SC2 from "../assets/projects/SC2.png";
import SC3 from "../assets/projects/SC3.png";
import SC4 from "../assets/projects/SC4.png";
import SC5 from "../assets/projects/SC5.png";
import SC6 from "../assets/projects/SC6.png";
import TOMIPAY from "../assets/projects/tomipay.png";
import ORACLE from "../assets/projects/oracle.png";
import GOVTOKEN from "../assets/projects/govtoken.png";
import PRESALE from "../assets/projects/presale.png";
import MONEYCOURTZ from "../assets/projects/moneycourtz.png";
import SMARTATTENDANCE from "../assets/projects/smartattendance.png";
import FAKENEWS from "../assets/projects/fakenews.png";
import SCRAPER from "../assets/projects/scraper.png";

export const HERO_TITLE = "Blockchain & Backend Developer";

export const HERO_CONTENT = `Blockchain and backend developer building secure, gas-optimized, production-grade systems for EVM networks. My work spans cross-chain payment protocols, multi-token fee routing and stablecoin swaps, oracle and dispute-resolution systems, governance tokens and upgradeable architectures, with mainnet deployments across EVM chains and two protocols audited by Hacken. I am comfortable on both sides of the stack: Solidity contracts and Foundry test suites, signature-verification flows, and Node.js/NestJS services with ethers.js, The Graph indexing and scheduled jobs. I am also an active contributor to Cyfrin CodeHawks audit competitions.`;

export const HERO_HIGHLIGHTS = [
  "2 protocols audited by Hacken",
  "Mainnet deployments across EVM chains",
  "Solidity + Node.js/NestJS",
  "Cyfrin CodeHawks auditor",
];

export const ABOUT_TEXT = HERO_CONTENT;

export const EXPERIENCES = [
  {
    year: "Sep 2024 - Present",
    role: "Blockchain & Backend Developer",
    company: "Quecko Inc · Islamabad",
    description: `Design, test and deploy production smart contracts and the backend services that connect applications to them.`,
    highlights: [
      "Built and maintained upgradeable smart contracts using UUPS, Transparent Proxy, Beacon Proxy and Diamond Proxy (EIP-2535), ensuring secure upgrade flows and storage-layout compatibility.",
      "Deployed contracts across multiple EVM-compatible blockchains, including a production protocol that currently holds $97.5 in total value locked (TVL).",
      "Integrated Uniswap for on-chain token swapping and liquidity operations.",
      "Implemented ECDSA signatures and Merkle proofs for secure user whitelisting and validation.",
      "Built cross-chain functionality to bridge tokens between different blockchains.",
      "Developed backend services in Node.js and NestJS (TypeScript) that connect applications to the deployed smart contracts, including APIs that generate and serve ECDSA signatures and Merkle proofs for whitelisting and claims.",
      "Used ethers.js in backend services to read on-chain state, send transactions and listen for contract events across multiple EVM chains.",
      "Built and deployed subgraphs on The Graph to index contract events and serve on-chain data to applications through GraphQL.",
      "Implemented scheduled cron jobs in Node.js to monitor on-chain state and run recurring backend tasks.",
    ],
    technologies: [
      "Solidity",
      "Foundry",
      "Node.js",
      "NestJS",
      "TypeScript",
      "ethers.js",
      "The Graph",
      "Uniswap",
      "Wormhole",
    ],
  },
  {
    year: "2022 - 2024",
    role: "Freelance AI & Smart Contract Developer",
    company: "Self-Employed · Remote",
    description: `Delivered AI and smart-contract solutions for clients end-to-end, from requirements through deployment and security review.`,
    technologies: ["Solidity", "Hardhat", "Python", "Node.js"],
  },
  {
    year: "Aug 2022 - Aug 2023",
    role: "Technical Team Member",
    company: "DSC Air University AACK",
    description: `I was a part of the technical team of DSC Air University AACK. We conducted multiple workshops and seminars on different technologies and tools like Flutter, Firebase, Blockchain and Google Cloud Platform.`,
    technologies: ["Blockchain", "Solidity", "Firebase"],
  },
  {
    year: "Jul 2022 - Aug 2022",
    role: "Smart Contract Developer Intern (Remote)",
    company: "Web3Learn",
    description: `During my remote internship as a Smart Contract Developer, I gained proficiency in Solidity and developed several smart contracts. I also studied NFT standards and successfully minted NFTs using the ERC-721 standard.`,
    technologies: ["Solidity", "Ethereum", "Blockchain"],
  },
];

export const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["Solidity", "TypeScript", "Node.js", "Python", "C#", "SQL"],
  },
  {
    title: "Backend & Data",
    items: [
      "NestJS",
      "REST APIs",
      "GraphQL",
      "ethers.js",
      "The Graph (subgraph indexing)",
      "OAuth 2.0",
      "Cron jobs",
      "Microsoft SQL Server",
    ],
  },
  {
    title: "Smart Contract Tooling",
    items: [
      "Foundry (forge/cast)",
      "Hardhat",
      "OpenZeppelin",
      "Unit & mainnet-fork testing",
      "Gas optimization",
    ],
  },
  {
    title: "Standards & Patterns",
    items: [
      "ERC-20 / ERC-721 / ERC-1155",
      "EIP-2535 Diamonds",
      "UUPS / Transparent / Beacon proxies",
      "ECDSA signatures",
      "Merkle proofs",
    ],
  },
  {
    title: "DeFi & Cross-Chain",
    items: [
      "Uniswap V2 / V3 / V4",
      "Universal Router",
      "Permit2",
      "AMM / CPMM design",
      "On-chain order books",
      "LayerZero",
      "Wormhole",
    ],
  },
  {
    title: "AI & Agents",
    items: [
      "LangChain",
      "LangGraph",
      "RAG pipelines",
      "Tool / function calling",
      "Human-in-the-loop & guardrails",
      "OpenAI / Anthropic / Gemini APIs",
      "scikit-learn",
      "OpenCV",
    ],
  },
];

export const CERTIFICATES = [
  {
    date: "2026",
    name: "Uniswap V4",
    organization: "Cyfrin Updraft",
    link: "https://profiles.cyfrin.io/u/0xzulkefal/achievements/uniswap-v4",
  },
  {
    date: "2025",
    name: "Claude 101 (AI fluency, prompting, Claude capabilities)",
    organization: "Anthropic",
  },
  {
    date: "31 July, 2023",
    name: "Decentralized Applications (Dapps)",
    organization: "Coursera",
    link: "https://www.coursera.org/verify/PD58DQ9J4AWH",
  },
  {
    date: "13 Feb, 2023",
    name: "Smart Contracts",
    organization: "Coursera",
    link: "https://www.coursera.org/verify/WWV9X448KFLU",
  },
  {
    date: "21 August, 2022",
    name: "Blockchain Basics",
    organization: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/verify/GNVY35MQ7GFN",
  },
  {
    date: "01 April, 2022",
    name: "Blockchain Essentials",
    organization: "IBM",
    link: "https://courses.cognitiveclass.ai/certificates/4fb1518c26d84a97b1ad32961ad61bd7",
  },
];

export const HONORS_AND_AWARDS = [
  {
    date: "8 October, 2022",
    title: "Business Idea Winner ",
    institute: "Air University Aerospace and Aviation Campus Kamra",
    description:
      "Proposed and presented a blockchain-based framework for managing university financial operations, focusing on transparency and automation. Awarded 1st position for demonstrating innovation and real-world feasibility.",
  },
  {
    date: "21 September, 2022",
    title: "Academic Excellence",
    institute: "Air University Aerospace and Aviation Campus Kamra",
    description:
      "Awarded Air University Kamra Merit Scholarship twice for securing 2nd position during Bachelor’s program.",
  },
];

export const VOLUNTEERING = [
  {
    title: "Smart Contract Security Reviewer • Cyfrin CodeHawks",
    date: "Aug 2024 - Present",
    highlights: [
      "Review production-grade Solidity codebases in competitive audit contests, analysing access control, state integrity, reward accounting, input validation and re-entrancy; submit technical reports with proof-of-concept and mitigation.",
      "Dating App Audit: Identified four valid vulnerabilities affecting contract state integrity and authorization logic; mitigation strategies adopted by project maintainers.",
      "Christmas Dinner Audit: Detected a critical flaw exposing re-entrancy and data-validation issues; proposed hardened control-flow patterns and validation checks.",
      "BriVault Audit: Identified three high- and medium-impact issues, including DoS attacks, improper reward validation and faulty incentive logic; recommended stricter state checks and access controls.",
    ],
    link: "https://profiles.cyfrin.io/u/0xzulkefal",
  },
  {
    title: "Slotchain • BaseChain Hackathon",
    date: "Oct 2023",
    highlights: [
      "Built an appointment booking dApp that mints NFTs as proof of scheduled sessions.",
      "Implemented on-chain payments with smart contracts and persisted booking metadata via IPFS.",
      "Enabled NFT-gated access to meetings for verified participants.",
    ],
    link: "https://slotchain-app.vercel.app/",
  },
  {
    title: "President • Air University Freelancing Society (AUFS)",
    date: "Sep 2021 - Jun 2023",
    highlights: [
      "Founded a student community focused on freelancing skill development and collaboration.",
      "Organized workshops, knowledge-sharing circles, and mentorship programs to uplift members.",
      "Scaled membership and operational processes to support recurring events and partnerships.",
    ],
  },
  {
    title: "Technical Team Member • Google Developer Student Clubs",
    date: "Aug 2022 - Aug 2023",
    highlights: [
      "Coordinated technical workshops and campus events covering web, and blockchain topics.",
      "Managed event logistics, demos, and post-session resources to drive continued learning.",
    ],
  },
];

export const PUBLICATIONS = [
  {
    title:
      "A Blockchain-Based Framework for Issuance and Verification of Degrees as Non-Fungible Tokens (Manuscript in preparation, sole author, 2025)",
    description:
      "Proposed a blockchain framework for issuing and verifying academic degrees as NFTs to eliminate manual verification by the Higher Education Commission (HEC). The system ensures tamper-proof, transparent, and instantly verifiable academic records, reducing administrative costs and preventing counterfeit degrees.",
    link: "https://www.overleaf.com/read/rbbnmpwgnndx#a1bd5b",
  },
];

export const PROJECT_CATEGORIES = ["All", "Smart Contracts", "AI & Automation", "Software"];

export const PROJECTS = [
  {
    title: "Tomi Pay — Cross-Chain Payment & Tokenomics Protocol",
    image: TOMIPAY,
    badge: "Production · Mainnet",
    description:
      "Multi-chain payment protocol in Solidity that accepts any ERC-20 token, deducts configurable fees and routes payments across BSC, Arbitrum, Avalanche and Celo.",
    highlights: [
      "Wormhole cross-chain messaging bridges tokens and triggers threshold-based burn/mint actions, coordinating a deflationary tokenomics model via dedicated sender/receiver contracts.",
      "Automated swap routing through Uniswap V2/V3 Universal Router with Permit2 approval delegation, converting heterogeneous fee tokens into USDT and the governance token (TOMI) in a single batched transaction.",
      "ECDSA signature-based token claiming with deadline validation and replay protection for secure referral/incentive distribution.",
      "Foundry test suite with mainnet-fork testing; multi-chain deployment pipeline with per-chain RPC config and Etherscan verification.",
    ],
    technologies: ["Solidity", "Foundry", "Wormhole", "Uniswap Universal Router", "Permit2"],
    category: "Smart Contracts",
    links: [
      {
        label: "Contract on Etherscan",
        url: "https://etherscan.io/address/0x3428b58096e30de8Bb914a83B23A2618b4afD61f",
      },
    ],
  },
  {
    title: "Decentralized Oracle & Dispute Resolution Protocol",
    image: ORACLE,
    badge: "Audited by Hacken · Arbitrum Mainnet",
    description:
      "Fully on-chain oracle voting protocol with time-bound questions, majority-quorum (N/2 + 1) finalization and automatic on-chain time extension when quorum is not met.",
    highlights: [
      "Survey module: users create surveys and fund rewards; participants submit responses and receive payouts trustlessly on-chain.",
      "Question Resolution module: questions finalized via oracle voting with on-chain time-extension logic.",
      "Dispute Resolution module: multi-party disputes with proof submission, resolved via oracle-based adjudication.",
      "Multi-token fee payment with Uniswap V3 token-to-ETH conversion to fund automated time-extension functions.",
      "UUPS upgradeable proxies, ECDSA signature-based voting and gas optimisation across storage layout, voting logic and fee handling.",
      "Comprehensive Foundry test suites covering core logic, edge cases and upgrade safety.",
    ],
    technologies: ["Solidity", "Foundry", "UUPS", "Uniswap V3", "Arbitrum"],
    category: "Smart Contracts",
    links: [
      {
        label: "Survey Contract",
        url: "https://arbiscan.io/address/0x2f431986D68088CeF1D0d9aE6a1A2EBD42336662",
      },
      {
        label: "Question Resolution",
        url: "https://arbiscan.io/address/0xdDFCb822fd5115674bAa9c8e2884431A7a0Cafa5",
      },
      {
        label: "Dispute Resolution",
        url: "https://arbiscan.io/address/0xFe3c07EA8889dB629523E6a8562Fb8D3449660AA",
      },
    ],
  },
  {
    title: "Governance Token Smart Contract",
    image: GOVTOKEN,
    badge: "Audited by Hacken · Aug 2025",
    description:
      "ERC-20 governance token with burnable and mintable functionality and a custom tokenomics rule that permits re-minting 10% of burned supply after a 24-hour cooldown.",
    highlights: [
      "Secure access control and safeguards around minting logic to prevent abuse and unauthorized inflation.",
      "Comprehensive Foundry tests covering minting, burning, time-based constraints and edge cases.",
    ],
    technologies: ["Solidity", "Foundry", "OpenZeppelin"],
    category: "Smart Contracts",
    links: [],
  },
  {
    title: "WormHole Token Bridge",
    image: SC4,
    badge: "Jun 2025",
    description:
      "Cross-chain token bridge built with Solidity and the Wormhole protocol to transfer tokens between blockchains.",
    highlights: [
      "Smart contracts for message relaying and token distribution.",
      "Foundry for contract testing, deployment scripting and environment setup with RPC endpoints.",
      "Solely responsible for architecture, development and deployment across multiple blockchains.",
    ],
    technologies: ["Solidity", "Foundry", "Wormhole"],
    category: "Smart Contracts",
    links: [{ label: "GitHub", url: "https://github.com/zulkefal/WormHole-Token-Bridge" }],
  },
  {
    title: "Token Presale & Vesting Smart Contract",
    image: PRESALE,
    badge: "Feb 2023 – Jun 2024",
    description:
      "Presale contract with partial token distribution at TGE and time-based vesting for the remaining allocation, plus a referral rewards mechanism to incentivize participation.",
    highlights: [
      "Secure claim logic and time-based vesting, validated with comprehensive Hardhat tests.",
    ],
    technologies: ["Solidity", "Hardhat"],
    category: "Smart Contracts",
    links: [],
  },
  {
    title: "NFT-Based Degree Issuance & Verification System",
    image: SC1,
    badge: "Final Year Project",
    description:
      "Universities and the Higher Education Commission (HEC) issue degrees as NFTs, making credentials tamper-evident and verifiable in seconds without manual attestation.",
    technologies: ["ReactJS", "NodeJS", "MySQL", "EtherJS", "Solidity", "Pinata"],
    category: "Smart Contracts",
    links: [
      {
        label: "Demo Video",
        url: "https://www.linkedin.com/posts/ethereumblockchaindeveloper_here-is-a-video-demonstration-of-our-final-activity-7205873213938053120-M8Fw?utm_source=share&utm_medium=member_desktop",
      },
      { label: "Manuscript", url: "https://www.overleaf.com/read/rbbnmpwgnndx#a1bd5b" },
    ],
  },
  {
    title: "Rewards Contract",
    image: SC2,
    description:
      "Merkle proof-based rewards system for NFT holders with staking capabilities.",
    technologies: ["Solidity", "Foundry"],
    category: "Smart Contracts",
    links: [{ label: "GitHub", url: "https://github.com/zulkefal/MERKLE-PROOF" }],
  },
  {
    title: "ECO Token",
    image: SC3,
    description:
      "ERC20-based green incentive distribution with secure claim verification, reentrancy protection, and token management.",
    technologies: ["Solidity", "Foundry"],
    category: "Smart Contracts",
    links: [{ label: "GitHub", url: "https://github.com/zulkefal/Solar" }],
  },
  {
    title: "PriceFeed Contract",
    image: SC5,
    description:
      "A simple Uniswap V3 price oracle contract for fetching token prices on-chain.",
    technologies: ["Solidity", "Foundry"],
    category: "Smart Contracts",
    links: [{ label: "GitHub", url: "https://github.com/zulkefal/PriceFeed" }],
  },
  {
    title: "BuyBackAndBurn",
    image: SC6,
    description:
      "Facilitate token swaps and burning mechanisms using the Uniswap V3 protocol.",
    technologies: ["Solidity"],
    category: "Smart Contracts",
    links: [{ label: "GitHub", url: "https://github.com/zulkefal/BuyBackAndBurn" }],
  },
  {
    title: "Money Courtz — Autonomous AI Video Generation Pipeline",
    image: MONEYCOURTZ,
    badge: "Production · 4 videos/day",
    description:
      "End-to-end generative pipeline that scripts, renders and publishes four videos per day with no manual input, running on scheduled GitHub Actions CI.",
    highlights: [
      "Schema-constrained LLM output drives text-to-image and neural TTS; word-level timing auto-generates synchronized captions and SRT tracks.",
      "Automated distribution to YouTube, Facebook and Instagram via OAuth refresh-token flows and scheduled publishing.",
      "Generalized into a reusable engine and forked into a second production channel in a different niche with no core changes.",
    ],
    technologies: [
      "Python",
      "Claude API",
      "Flux (Pollinations)",
      "edge-tts",
      "FFmpeg",
      "YouTube Data API",
      "GitHub Actions",
    ],
    category: "AI & Automation",
    links: [],
  },
  {
    title: "Fake News Classifier",
    image: FAKENEWS,
    description:
      "Text classifier using TF-IDF features with logistic regression, including preprocessing, hyperparameter tuning, evaluation metrics, confusion-matrix visualisation and reproducibility controls.",
    technologies: ["Python", "scikit-learn"],
    category: "AI & Automation",
    links: [],
  },
  {
    title: "SmartAttendance — Face Recognition Attendance System",
    image: SMARTATTENDANCE,
    badge: "Dec 2023",
    description:
      "Desktop application that automates student attendance by detecting and recognizing faces from a live camera feed in real time, eliminating manual entry and proxy attendance.",
    highlights: [
      "Face detection with Haar Cascade classifiers and recognition via EMGU CV (OpenCV).",
      "Registration, login, attendance logging and reporting modules backed by Microsoft SQL Server with timestamped records.",
    ],
    technologies: ["C#", "EMGU CV (OpenCV)", "Haar Cascade", "Microsoft SQL Server"],
    category: "Software",
    links: [],
  },
  {
    title: "Research Scraper — Academic Metadata Extraction Tool",
    image: SCRAPER,
    badge: "Oct 2023",
    description:
      "Desktop tool that queries the ACM Digital Library and Google Scholar and exports paper metadata to CSV.",
    technologies: ["Python", "Tkinter", "BeautifulSoup"],
    category: "Software",
    links: [],
  },
];

export const CONTACT = {
  phoneNo: "+92 332 8947817",
  email: "zulkefal.khan705@gmail.com",
};

export const degreeDetails = {
  uniName: "Air University Aerospace and Aviation Campus Kamra",
  degree: "Bachelor of Science in Computer Science",
  session: "Sep 2020 - May 2024",
  cgpa: "3.47/4.00",
  fyp: "Final Year Project: NFT-Based Degree Issuance and Verification System (Feb 2023 – Jun 2024), supervised by Dr. Muhammad Kamran.",
  english: "IELTS Academic: overall band 7.0",
};
