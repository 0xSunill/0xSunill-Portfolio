export type Project = {
    id: string;
    type: "web3" | "web";
    title: string;
    blurb: string;
    tags: string[];
    image: string;   // public/assets/projects/...
    live?: string;
    repo?: string;
};

export const projects: Project[] = [
    // --- Web3 Projects ---
    {
        id: "01",
        type: "web3",
        title: "Solana Swap",
        blurb: "swap token on solana network, wallet adapter.",
        tags: ["Solana", "Rust", "Anchor", "Next.js"],
        image: "/assets/projects/solana-swap.png",
        live: "https://sol-swap-taupe.vercel.app/",
        repo: "https://github.com/0xSunill/Sol-Swap",
    }, {
        id: "02",
        type: "web3",
        title: "Sun Launcher",
        blurb: "A Solana token launcher",
        tags: ["Solana", "Rust", "Anchor", "Next.js"],
        image: "/assets/projects/sun-launcher.png",
        live: "https://sun-launcher.vercel.app/",
        repo: "https://github.com/0xSunill/sun-launcher",
    }, {
        id: "03",
        type: "web3",
        title: "Take Notes",
        blurb: "A Solana Note Dapp",
        tags: ["Solana", "Rust", "Anchor", "Next.js"],
        image: "/assets/projects/notes.png",
        live: "https://take-notes-khaki.vercel.app",
        repo: "https://github.com/0xSunill/take-notes",
    }, {
        id: "04",
        type: "web3",
        title: "Solana Coin Flip",
        blurb: "A Solana Coin Flip Dapp",
        tags: ["Solana", "Rust", "Anchor", "Next.js"],
        image: "/assets/projects/coin-flip.png",
        live: "https://coin-flip-solana-ten.vercel.app",
        repo: "https://github.com/0xSunill/coin-flip-solana",
    }, {
        id: "05",
        type: "web3",
        title: "Sunllet",
        blurb: "A Web Based Crypto Wallet Generator",
        tags: ["Solana", "Rust", "Anchor", "Next.js"],
        image: "/assets/projects/sunlett.png",
        live: "https://sunllet.vercel.app",
        repo: "https://github.com/0xSunill/Sunllet",
    },


    // --- Web Dev Projects ---
    {
        id: "05",
        type: "web",
        title: "LamaDefi",
        blurb: "The Crypto Dashboard",
        tags: ["Next.js", "RestApi", "Tailwind"],
        image: "/assets/projects/lamadefi.png",
        live: "https://lamadefi.vercel.app",
        repo: "https://github.com/0xSunill/lamadefi",
    },
    {
        id: "07",
        type: "web",
        title: "Easy Rent",
        blurb: "A Vachel Rental App",
        tags: ["Next.js", "Node.js", "MongoDB"],
        image: "/assets/projects/easyrent.png",
        live: "https://easyrent-ten.vercel.app",
        repo: "https://github.com/0xSunill/EasyRent",
    }, {
        id: "06",
        type: "web",
        title: "Chat Sync",
        blurb: "A social media platform",
        tags: ["Next.js", "Node.js", "MongoDB"],
        image: "/assets/projects/chatsync.png",
        live: "https://chatsync-ten.vercel.app",
        repo: "https://github.com/0xSunill/Chat-Sync",
    },
    {
        id: "02",
        type: "web",
        title: "Blog",
        blurb: "The ultime Personal Blog website ",
        tags: ["Next", "Markdown", "Tailwind", "Vercel"],
        image: "/assets/projects/blog.png",
        live: "https://blog-seven-gamma-55.vercel.app/",
        repo: "https://github.com/0xSunday/blog",
    }, {
        id: "01",
        type: "web",
        title: "KandyLand",
        blurb: "An interactive NFT website for kandyland nft.",
        tags: ["Next.js", "Tailwind", "framer motion"],
        image: "/assets/projects/kandyland.png",
        live: "https://kandyland-mocha.vercel.app/",
        repo: "https://github.com/0xSunday/kandyland",
    }, {
        id: "03",
        type: "web",
        title: "Momoguro",
        blurb: "An interactive NFT website for Momoguro nft",
        tags: ["vite", "Tailwind", "framer motion"],
        image: "/assets/projects/momoguro.png",
        live: "https://momoguro-0xsunday.vercel.app/",
        repo: "https://github.com/0xSunday/momoguro",
    },

];
