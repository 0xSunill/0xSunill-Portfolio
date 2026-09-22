export type Project = {
    id: string;
    type: "web3" | "web";
    title: string;
    blurb: string;
    tags: string[];
    image: string;   // public/assets/projects/...
    live?: string;
    repo?: string;
    featured?: boolean;
};

export const projects: Project[] = [
    // --- Web3 Projects ---
    {
        id: "01",
        type: "web3",
        title: "AMM",
        blurb: "Automated Market Maker with token swaps, liquidity pools & real-time pool analytics on Solana",
        tags: ["Solana", "Rust", "Anchor", "DeFi", "Next.js"],
        image: "/assets/projects/amm.png",
        live: "https://amm-three.vercel.app/",
        repo: "https://github.com/0xSunill/AMM",
        featured: true,
    }, {
        id: "02",
        type: "web3",
        title: "Higher",
        blurb: "King-of-the-hill bidding game with multiplier mechanics & prize pot distribution on Solana",
        tags: ["Solana", "Rust", "Anchor", "Gaming", "Next.js"],
        image: "/assets/projects/higher.png",
        live: "https://higher-coral.vercel.app/",
        repo: "https://github.com/0xSunill/higher",
        featured: true,
    }, {
        id: "03",
        type: "web3",
        title: "Prediction Market",
        blurb: "Decentralized prediction market for creating & resolving YES/NO outcome markets on Solana",
        tags: ["Solana", "Rust", "Anchor", "DeFi", "Next.js"],
        image: "/assets/projects/prediction-market.png",
        live: "https://prediction-market-solana.vercel.app/",
        repo: "https://github.com/0xSunill/prediction-market-solana",
        featured: true,
    }, {
        id: "04",
        type: "web3",
        title: "Solana Swap",
        blurb: "Token swap platform on Solana with wallet adapter integration & real-time price feeds",
        tags: ["Solana", "Rust", "Anchor", "DeFi"],
        image: "/assets/projects/solana-swap.png",
        live: "https://sol-swap-taupe.vercel.app/",
        repo: "https://github.com/0xSunill/Sol-Swap",
    }, {
        id: "05",
        type: "web3",
        title: "Sun Launcher",
        blurb: "One-click token launcher for deploying custom SPL tokens on the Solana blockchain",
        tags: ["Solana", "Rust", "Anchor", "Tooling"],
        image: "/assets/projects/sun-launcher.png",
        live: "https://sun-launcher.vercel.app/",
        repo: "https://github.com/0xSunill/sun-launcher",
    }, {
        id: "06",
        type: "web3",
        title: "Take Notes",
        blurb: "On-chain note-taking dApp with persistent storage powered by Solana programs",
        tags: ["Solana", "Rust", "Anchor", "Productivity"],
        image: "/assets/projects/notes.png",
        live: "https://take-notes-khaki.vercel.app",
        repo: "https://github.com/0xSunill/take-notes",
    }, {
        id: "07",
        type: "web3",
        title: "Solana Coin Flip",
        blurb: "Provably fair coin flip game with on-chain randomness & instant SOL payouts",
        tags: ["Solana", "Rust", "Anchor", "Gaming"],
        image: "/assets/projects/coin-flip.png",
        live: "https://coin-flip-solana-ten.vercel.app",
        repo: "https://github.com/0xSunill/coin-flip-solana",
    }, {
        id: "08",
        type: "web3",
        title: "Sunllet",
        blurb: "Web-based HD wallet generator supporting Solana & Ethereum with mnemonic recovery",
        tags: ["Solana", "Ethereum", "Cryptography", "Next.js"],
        image: "/assets/projects/sunlett.png",
        live: "https://sunllet.vercel.app",
        repo: "https://github.com/0xSunill/Sunllet",
    },


    // --- Web Dev Projects ---
    {
        id: "01",
        type: "web",
        title: "LamaDefi",
        blurb: "Crypto dashboard with real-time market data, portfolio tracking & price charts",
        tags: ["Next.js", "REST API", "Tailwind"],
        image: "/assets/projects/lamadefi.png",
        live: "https://lamadefi.vercel.app",
        repo: "https://github.com/0xSunill/lamadefi",
    },
    {
        id: "02",
        type: "web",
        title: "Easy Rent",
        blurb: "Full-stack vehicle rental platform with booking management & user authentication",
        tags: ["Next.js", "Node.js", "MongoDB"],
        image: "/assets/projects/easyrent.png",
        live: "https://easyrent-ten.vercel.app",
        repo: "https://github.com/0xSunill/EasyRent",
    }, {
        id: "03",
        type: "web",
        title: "Chat Sync",
        blurb: "Real-time social media platform with live messaging & user profiles",
        tags: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
        image: "/assets/projects/chatsync.png",
        live: "https://chatsync-ten.vercel.app",
        repo: "https://github.com/0xSunill/Chat-Sync",
    },
    {
        id: "04",
        type: "web",
        title: "Blog",
        blurb: "The ultimate personal blog with markdown rendering & clean reading experience",
        tags: ["Next.js", "Markdown", "Tailwind"],
        image: "/assets/projects/blog.png",
        live: "https://blog-seven-gamma-55.vercel.app/",
        repo: "https://github.com/0xSunday/blog",
    }, {
        id: "05",
        type: "web",
        title: "KandyLand",
        blurb: "Interactive NFT showcase website with immersive animations & smooth transitions",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        image: "/assets/projects/kandyland.png",
        live: "https://kandyland-mocha.vercel.app/",
        repo: "https://github.com/0xSunday/kandyland",
    }, {
        id: "06",
        type: "web",
        title: "Momoguro",
        blurb: "Animated NFT collection landing page with parallax effects & dynamic visuals",
        tags: ["Vite", "Tailwind", "Framer Motion"],
        image: "/assets/projects/momoguro.png",
        live: "https://momoguro-0xsunday.vercel.app/",
        repo: "https://github.com/0xSunday/momoguro",
    },

];
