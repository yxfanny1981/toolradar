import { writeFileSync } from "node:fs";
import { join } from "node:path";

const img = (photoId) =>
  `https://images.unsplash.com/photo-${photoId}?w=120&auto=format&fit=crop&q=60`;

const PHOTOS = {
  ai: "1677442136019-21780ecad995",
  abstract: "1618005182384-a83a8bd57fbe",
  code: "1555066931-4365d14bab8c",
  art: "1620641788421-7a1c342ea42e",
  ui: "1507238691740-187a5b1d37b8",
  cinema: "1536440136628-849c177e76a1",
  video: "1492691527719-9d1e07e534b4",
  music: "1511671782779-c97d3d27a1d4",
  voice: "1484755560693-a4074577af3a",
  search: "1501504905252-473c47e087f8",
  design: "1541462608141-ad4979e408c9",
  notes: "1517842645767-c639042777db",
  wireframe: "1581291518633-83b4ebd1d83e",
  fullstack: "1607799279861-4dd421887fb3",
  pm: "1460925895917-afdab827c52f",
  write: "1455390582261-044cdead27a1",
  marketing: "1460925895917-afdab827c52f",
  office: "1497215842964-222b430dc094",
  meeting: "1600880292203-757bb62b4baf",
  automation: "1551288049-bebda4e38f71",
  photo: "1516035069373-29a1e4e4d52d",
  robot: "1485827404703-89b55fcc595e",
  data: "1551288049-bebda4e38f71",
  mobile: "1512941937669-90a1b58e7e9c",
  cloud: "1451187580459-43490279c0fa",
};

const tools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "The industry-leading AI language model by OpenAI for conversation, coding, and writing.",
    url: "https://chatgpt.com",
    category: "AI Chatbots",
    tags: ["AI Chat", "OpenAI", "GPT-4o"],
    image: img(PHOTOS.ai),
    content:
      "ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response. Best AI assistant for daily productivity, copywriting, and software engineering workflows.",
  },
  {
    id: "claude",
    name: "Claude 3.5 Sonnet",
    description:
      "Anthropic's most advanced AI model with exceptional reasoning, coding, and long-context writing capabilities.",
    url: "https://claude.ai",
    category: "AI Chatbots",
    tags: ["Anthropic", "Coding AI", "Long Context"],
    image: img(PHOTOS.abstract),
    content:
      "Claude 3.5 Sonnet sets new industry benchmarks for graduate-level expert reasoning, undergraduate-level knowledge, and coding proficiency. Widely regarded as the best free AI for complex programming tasks.",
  },
  {
    id: "cursor",
    name: "Cursor",
    description:
      "The AI-first code editor built around Anthropic Claude and OpenAI models for 10x faster development.",
    url: "https://cursor.com",
    category: "AI Coding",
    tags: ["Code Editor", "AI Programming", "Next.js"],
    image: img(PHOTOS.code),
    content:
      "Cursor is a fork of VS Code that integrates cutting-edge AI features like Composer, Tab-complete, and codebase indexing. The ultimate tool for indie hackers and full-stack software development.",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description:
      "An independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.",
    url: "https://midjourney.com",
    category: "AI Image",
    tags: ["AI Art", "Text to Image", "Design"],
    image: img(PHOTOS.art),
    content:
      "Midjourney generates highly realistic and artistic images from textual prompts. It operates via Discord and is widely used by UI designers, concept artists, and digital marketers worldwide.",
  },
  {
    id: "v0",
    name: "v0 by Vercel",
    description:
      "Generative UI system by Vercel to create production-ready React, Tailwind CSS, and Shadcn UI components.",
    url: "https://v0.dev",
    category: "AI Coding",
    tags: ["Generative UI", "React", "Frontend"],
    image: img(PHOTOS.ui),
    content:
      "v0 uses AI to generate frontend code based on text prompts. It enables developers to design complex web landing pages and application interfaces within seconds, ready to copy-paste into Next.js projects.",
  },
  {
    id: "sora",
    name: "Sora by OpenAI",
    description:
      "OpenAI's groundbreaking text-to-video model that creates realistic and imaginative scenes up to a minute long.",
    url: "https://openai.com/sora",
    category: "AI Video",
    tags: ["Text to Video", "Cinematic", "OpenAI"],
    image: img(PHOTOS.cinema),
    content:
      "Sora can generate complex scenes with multiple characters, specific types of motion, and accurate foreground/background details. The best futuristic cinematic video generator tool on the market.",
  },
  {
    id: "runway-gen3",
    name: "Runway Gen-3 Alpha",
    description:
      "A frontier video generation model offering major improvements in fidelity, consistency, and motion dynamics.",
    url: "https://runwayml.com",
    category: "AI Video",
    tags: ["Video Editing", "Gen-3", "Runway"],
    image: img(PHOTOS.video),
    content:
      "Runway Gen-3 Alpha powers professional video production with advanced prompt compliance and photorealistic human outputs. Essential tool for content creators and advertising professionals.",
  },
  {
    id: "suno",
    name: "Suno AI",
    description:
      "Generate hyper-realistic full length songs with vocals, instruments, and lyrics from simple text prompts.",
    url: "https://suno.com",
    category: "AI Audio",
    tags: ["AI Music", "Song Generator", "Vocals"],
    image: img(PHOTOS.music),
    content:
      "Suno AI breaks the barrier between imagination and music creation. From pop to heavy metal, Suno creates high-fidelity audio assets for games, podcasts, and social media shorts.",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description:
      "The absolute best AI voice generator and text-to-speech engine with ultra-realistic emotional inflection.",
    url: "https://elevenlabs.io",
    category: "AI Audio",
    tags: ["Text to Speech", "Voice Cloning", "Dubbing"],
    image: img(PHOTOS.voice),
    content:
      "ElevenLabs delivers natural-sounding lifelike voices for audiobooks, video narrations, and game localization. Features cutting-edge instant voice cloning and multilingual voice synthesis.",
  },
  {
    id: "perplexity",
    name: "Perplexity AI",
    description:
      "An AI-powered conversational search engine providing instant answers with accurate real-time web citations.",
    url: "https://perplexity.ai",
    category: "Productivity",
    tags: ["AI Search", "Research Tool", "Citations"],
    image: img(PHOTOS.search),
    content:
      "Perplexity redefines the search experience by bypassing standard SEO links and summarizing direct consensus reports with footnotes. Ideal for market researchers, students, and journalists.",
  },
  {
    id: "v0-chat",
    name: "v0 Chat",
    description:
      "Chat with Vercel's generative frontend companion to design layouts instantly.",
    url: "https://v0.dev",
    category: "AI Design",
    tags: ["UI UX", "Tailwind", "Design AI"],
    image: img(PHOTOS.design),
    content:
      "v0 Chat turns prose into UI design tokens. It integrates nicely with Tailwind UI frameworks for beautiful mockups.",
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description:
      "Supercharge your workspace notes with integrated summary, brainstorming, and writing assistance.",
    url: "https://notion.so",
    category: "Productivity",
    tags: ["Workspace", "Notes", "Productivity"],
    image: img(PHOTOS.notes),
    content:
      "Notion AI automates tedious documentation tasks, fixes spelling, extracts action items, and generates content inside the cloud block editor.",
  },
  {
    id: "relume",
    name: "Relume",
    description:
      "AI-powered sitemap and wireframe builder to layout professional multi-page websites in Figma and Webflow.",
    url: "https://www.relume.io",
    category: "AI Design",
    tags: ["Wireframing", "Figma", "Sitemaps"],
    image: img(PHOTOS.wireframe),
    content:
      "Relume utilizes large language models to construct production-ready wireframes. Saves agency designers hundreds of pre-production layout hours.",
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    description:
      "Full-stack AI developer platform in the browser to build, run, edit, and deploy web applications directly from prompts.",
    url: "https://bolt.new",
    category: "AI Coding",
    tags: ["Fullstack", "Web Dev", "In-Browser"],
    image: img(PHOTOS.fullstack),
    content:
      "Bolt.new breaks standard constraints by compiling node servers right inside StackBlitz WebContainers. Complete full stack web app generation from text prompts.",
  },
  {
    id: "linear",
    name: "Linear",
    description:
      "Issue tracking tool streamlined with AI suggestions for sprint planning and engineering velocity.",
    url: "https://linear.app",
    category: "Productivity",
    tags: ["Project Management", "Agile", "DevTools"],
    image: img(PHOTOS.pm),
    content:
      "Linear keeps agile high performance loops tight. AI integration assists with automated bug triaging and roadmap updates.",
  },
  {
    id: "google-gemini",
    name: "Google Gemini",
    description:
      "Google's multimodal AI assistant with live search, Workspace integration, and Android-native experiences.",
    url: "https://gemini.google.com",
    category: "AI Chatbots",
    tags: ["Google", "Multimodal", "Free AI"],
    image: img(PHOTOS.cloud),
    content:
      "Gemini connects to Google Search for up-to-date answers and powers Docs, Gmail, and mobile assistants. Best free AI chatbot for users deep in the Google ecosystem in 2026.",
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    description:
      "Enterprise-ready AI assistant across Windows, Edge, and Microsoft 365 with Bing grounding.",
    url: "https://copilot.microsoft.com",
    category: "AI Chatbots",
    tags: ["Microsoft 365", "Enterprise", "Bing"],
    image: img(PHOTOS.office),
    content:
      "Copilot embeds GPT-class models into Word, Excel, Teams, and Windows. The best AI tool for organizations standardized on Microsoft productivity suites.",
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description:
      "The original AI pair programmer for VS Code, JetBrains, and GitHub with inline completions and chat.",
    url: "https://github.com/features/copilot",
    category: "AI Coding",
    tags: ["GitHub", "Copilot", "IDE"],
    image: img(PHOTOS.code),
    content:
      "GitHub Copilot suggests whole functions from comments and learns your codebase patterns. Still the default best AI coding assistant for professional software teams.",
  },
  {
    id: "codeium",
    name: "Codeium",
    description:
      "Free AI coding assistant and Windsurf IDE with unlimited autocomplete for individuals.",
    url: "https://codeium.com",
    category: "AI Coding",
    tags: ["Free Copilot", "Windsurf", "Autocomplete"],
    image: img(PHOTOS.code),
    content:
      "Codeium offers a generous free tier across 70+ editors plus the Windsurf agentic IDE. Top Copilot alternative for budget-conscious developers and students.",
  },
  {
    id: "dalle-3",
    name: "DALL·E 3",
    description:
      "OpenAI's text-to-image model inside ChatGPT with strong prompt adherence and readable text in images.",
    url: "https://openai.com/dall-e-3",
    category: "AI Image",
    tags: ["OpenAI", "Text to Image", "ChatGPT"],
    image: img(PHOTOS.art),
    content:
      "DALL·E 3 excels at marketing visuals and concept art without a steep learning curve. Best free AI image generator entry point when bundled with ChatGPT Plus.",
  },
  {
    id: "leonardo-ai",
    name: "Leonardo AI",
    description:
      "Game-ready AI art platform with fine-tuned models, character consistency, and daily free tokens.",
    url: "https://leonardo.ai",
    category: "AI Image",
    tags: ["Game Art", "Free Tokens", "SDXL"],
    image: img(PHOTOS.photo),
    content:
      "Leonardo AI targets indie developers and illustrators with Alchemy pipelines and Motion clips. One of the best free AI image generators for high-volume experimentation.",
  },
  {
    id: "flux",
    name: "FLUX.1",
    description:
      "Black Forest Labs' photorealistic open-weight image model rivaling Midjourney fidelity.",
    url: "https://blackforestlabs.ai",
    category: "AI Image",
    tags: ["Photoreal", "Open Weights", "API"],
    image: img(PHOTOS.abstract),
    content:
      "FLUX delivers state-of-the-art skin, hands, and typography via API partners like fal.ai and Replicate. Preferred by technical artists who need controllable pipelines.",
  },
  {
    id: "heygen",
    name: "HeyGen",
    description:
      "AI avatar video platform with instant digital twins, lip sync, and multilingual dubbing.",
    url: "https://heygen.com",
    category: "AI Video",
    tags: ["AI Avatar", "UGC Ads", "Dubbing"],
    image: img(PHOTOS.video),
    content:
      "HeyGen powers ecommerce ads and course videos without cameras. Best AI spokesperson generator for performance marketers testing creative variants at scale.",
  },
  {
    id: "synthesia",
    name: "Synthesia",
    description:
      "Enterprise AI video studio with 140+ avatars for training, onboarding, and internal comms.",
    url: "https://www.synthesia.io",
    category: "AI Video",
    tags: ["Corporate", "Avatars", "L&D"],
    image: img(PHOTOS.office),
    content:
      "Synthesia replaces studio shoots with SOC 2-compliant text-to-video workflows. The safest pick for HR and compliance-heavy organizations rolling out AI video.",
  },
  {
    id: "luma-dream-machine",
    name: "Luma Dream Machine",
    description:
      "Fast generative video model for cinematic clips with realistic motion and camera moves.",
    url: "https://lumalabs.ai/dream-machine",
    category: "AI Video",
    tags: ["Dream Machine", "Clips", "Cinematic"],
    image: img(PHOTOS.cinema),
    content:
      "Luma Dream Machine competes with Runway and Sora on short-form realism. Creators love its speed for social teasers and product launch videos.",
  },
  {
    id: "udio",
    name: "Udio",
    description:
      "Studio-grade AI music generator with inpainting, stems, and genre-precise controls.",
    url: "https://udio.com",
    category: "AI Audio",
    tags: ["AI Music", "Stems", "Producers"],
    image: img(PHOTOS.music),
    content:
      "Udio rivals Suno on fidelity and gives musicians fine-grained editing. Best AI song generator when you need WAV exports and section-level inpainting.",
  },
  {
    id: "murf-ai",
    name: "Murf AI",
    description:
      "Professional AI voiceovers for slides, e-learning, and explainers with 120+ voices.",
    url: "https://murf.ai",
    category: "AI Audio",
    tags: ["Voiceover", "E-learning", "TTS"],
    image: img(PHOTOS.voice),
    content:
      "Murf AI balances quality and licensing for corporate narrations. Integrates with Canva and Google Slides for rapid training content production.",
  },
  {
    id: "jasper-ai",
    name: "Jasper AI",
    description:
      "Brand-safe AI marketing platform for campaigns, SEO blogs, and omnichannel copy.",
    url: "https://www.jasper.ai",
    category: "AI Writing",
    tags: ["Marketing", "Brand Voice", "SEO"],
    image: img(PHOTOS.write),
    content:
      "Jasper orchestrates team approvals, knowledge bases, and Surfer SEO integrations. Best AI writer for agencies shipping high-volume branded content.",
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    description:
      "GTM-focused AI copy platform with workflows for sales emails, ads, and product messaging.",
    url: "https://www.copy.ai",
    category: "AI Writing",
    tags: ["GTM", "Sales Copy", "Workflows"],
    image: img(PHOTOS.marketing),
    content:
      "Copy.ai targets revenue teams with Infobase brand memory and Zapier automation. A top free AI writer tier for startups building pipeline without hiring copywriters.",
  },
  {
    id: "grammarly",
    name: "Grammarly",
    description:
      "AI writing assistant for grammar, tone, clarity, and generative rewrites in every app.",
    url: "https://www.grammarly.com",
    category: "AI Writing",
    tags: ["Proofreading", "Tone", "Extensions"],
    image: img(PHOTOS.write),
    content:
      "Grammarly checks emails, docs, and LinkedIn posts in real time. The most deployed AI writing copilot for non-native English professionals worldwide.",
  },
  {
    id: "canva-ai",
    name: "Canva Magic Studio",
    description:
      "All-in-one AI design suite for social graphics, video, presentations, and Magic Write copy.",
    url: "https://www.canva.com",
    category: "AI Design",
    tags: ["Magic Studio", "Templates", "Social"],
    image: img(PHOTOS.design),
    content:
      "Canva bundles text-to-image, background removal, and AI video for non-designers. Best free AI design tool for small businesses and solo creators.",
  },
  {
    id: "figma-ai",
    name: "Figma AI",
    description:
      "Generative UI, layer renaming, and FigJam brainstorming inside collaborative design files.",
    url: "https://www.figma.com",
    category: "AI Design",
    tags: ["UI Design", "FigJam", "Design Systems"],
    image: img(PHOTOS.design),
    content:
      "Figma AI accelerates product design teams with First Draft layouts and dev-ready components. Essential for startups shipping design systems with AI assistance.",
  },
  {
    id: "framer-ai",
    name: "Framer AI",
    description:
      "Prompt-to-website builder with animations, CMS, and free hosting for marketing sites.",
    url: "https://www.framer.com",
    category: "AI Design",
    tags: ["No-Code", "Landing Pages", "Animations"],
    image: img(PHOTOS.ui),
    content:
      "Framer AI publishes polished landing pages in minutes with designer-grade motion. Indie hackers use it to validate ideas before engineering custom stacks.",
  },
  {
    id: "otter-ai",
    name: "Otter.ai",
    description:
      "AI meeting transcription with summaries, action items, and Zoom or Teams auto-join.",
    url: "https://otter.ai",
    category: "Productivity",
    tags: ["Transcription", "Meetings", "Summaries"],
    image: img(PHOTOS.meeting),
    content:
      "Otter.ai captures sales calls and standups with speaker labels and shareable highlights. Best free AI meeting assistant for remote teams documenting every conversation.",
  },
  {
    id: "zapier-ai",
    name: "Zapier AI",
    description:
      "Natural-language automation across 7,000+ apps with AI Zaps, chatbots, and tables.",
    url: "https://zapier.com",
    category: "Productivity",
    tags: ["Automation", "No-Code", "Integrations"],
    image: img(PHOTOS.automation),
    content:
      "Zapier AI lets ops teams describe workflows in plain English and deploy them instantly. The best AI automation layer for connecting CRMs, support, and marketing stacks.",
  },
  {
    id: "poe",
    name: "Poe",
    description:
      "Quora's multi-model AI hub to chat with GPT-4, Claude, Gemini, and custom bots in one app.",
    url: "https://poe.com",
    category: "AI Chatbots",
    tags: ["Multi-Model", "Bots", "Quora"],
    image: img(PHOTOS.robot),
    content:
      "Poe removes the need for separate subscriptions by bundling frontier models. Power users benchmark prompts across providers before picking a daily driver.",
  },
  {
    id: "character-ai",
    name: "Character.AI",
    description:
      "Persona-based AI chat for entertainment, roleplay, and community character creation.",
    url: "https://character.ai",
    category: "AI Chatbots",
    tags: ["Roleplay", "Personas", "Community"],
    image: img(PHOTOS.ai),
    content:
      "Character.AI dominates social AI engagement with customizable voices and group chats. Best free AI chatbot for creative storytelling and language practice.",
  },
  {
    id: "replit-ai",
    name: "Replit Agent",
    description:
      "Browser IDE with AI agent that builds, debugs, and deploys full apps from prompts.",
    url: "https://replit.com",
    category: "AI Coding",
    tags: ["Replit Agent", "Deploy", "Education"],
    image: img(PHOTOS.fullstack),
    content:
      "Replit Agent ships MVPs without local setup—ideal for hackathons and CS classrooms. Combines Ghostwriter completions with one-click hosting.",
  },
  {
    id: "windsurf",
    name: "Windsurf",
    description:
      "Codeium's agentic IDE with Cascade flows, memories, and deep multi-file editing.",
    url: "https://codeium.com/windsurf",
    category: "AI Coding",
    tags: ["Cascade", "Agentic IDE", "Codeium"],
    image: img(PHOTOS.code),
    content:
      "Windsurf competes head-on with Cursor on agentic refactors and live previews. Developers switching from VS Code get a familiar UX with stronger automation.",
  },
  {
    id: "ideogram",
    name: "Ideogram",
    description:
      "AI image generator specialized in posters, logos, and legible typography in visuals.",
    url: "https://ideogram.ai",
    category: "AI Image",
    tags: ["Typography", "Logos", "Posters"],
    image: img(PHOTOS.art),
    content:
      "Ideogram solves text-in-image pain points that plague other generators. Marketers rely on it for Pinterest pins, event flyers, and meme-ready creatives.",
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description:
      "Open-source image generation ecosystem with SDXL, LoRAs, and local ComfyUI pipelines.",
    url: "https://stability.ai",
    category: "AI Image",
    tags: ["Open Source", "LoRA", "ComfyUI"],
    image: img(PHOTOS.abstract),
    content:
      "Stable Diffusion empowers artists to self-host uncensored, customizable models. The best free AI image stack when you own a GPU and want total control.",
  },
  {
    id: "pictory",
    name: "Pictory",
    description:
      "Turn blog posts and scripts into captioned social videos with stock footage automation.",
    url: "https://pictory.ai",
    category: "AI Video",
    tags: ["Repurpose", "YouTube", "Captions"],
    image: img(PHOTOS.video),
    content:
      "Pictory helps SEO bloggers multiply video touchpoints from existing articles. A must-have AI video tool for content marketers scaling Shorts and Reels.",
  },
  {
    id: "invideo-ai",
    name: "InVideo AI",
    description:
      "Prompt-based AI video maker with scripts, voiceovers, and thousands of templates.",
    url: "https://invideo.io",
    category: "AI Video",
    tags: ["Templates", "Script to Video", "SMB"],
    image: img(PHOTOS.cinema),
    content:
      "InVideo AI lowers the barrier for local businesses running paid social. Generate full promos from a single sentence brief with licensed stock media.",
  },
  {
    id: "descript",
    name: "Descript",
    description:
      "Text-based audio and video editor with Overdub voices and Studio Sound cleanup.",
    url: "https://www.descript.com",
    category: "AI Audio",
    tags: ["Podcast", "Overdub", "Video Edit"],
    image: img(PHOTOS.voice),
    content:
      "Descript lets podcasters cut filler words like editing a Google Doc. The best AI audio workflow for interview shows and screen-recording courses.",
  },
  {
    id: "writesonic",
    name: "Writesonic",
    description:
      "SEO-focused AI writer with Chatsonic, Article Writer, and ecommerce copy tools.",
    url: "https://writesonic.com",
    category: "AI Writing",
    tags: ["SEO", "Chatsonic", "Articles"],
    image: img(PHOTOS.write),
    content:
      "Writesonic bundles keyword research with generative drafts for affiliate blogs. Strong alternative to Jasper for growth marketers watching cost per article.",
  },
  {
    id: "beautiful-ai",
    name: "Beautiful.ai",
    description:
      "Smart slide designer with AI layout guardrails and DesignerBot deck generation.",
    url: "https://www.beautiful.ai",
    category: "AI Design",
    tags: ["Presentations", "Slides", "Pitch Decks"],
    image: img(PHOTOS.presentation || PHOTOS.design),
    content:
      "Beautiful.ai prevents misaligned bullets and off-brand fonts automatically. Sales teams ship polished pitch decks without PowerPoint busywork.",
  },
  {
    id: "motion",
    name: "Motion",
    description:
      "AI calendar that auto-schedules tasks, meetings, and focus blocks for busy founders.",
    url: "https://www.usemotion.com",
    category: "Productivity",
    tags: ["Calendar AI", "Scheduling", "Tasks"],
    image: img(PHOTOS.office),
    content:
      "Motion replaces manual planning with dynamic reprioritization when deadlines slip. Best AI productivity tool for executives protecting deep work hours.",
  },
  {
    id: "mem",
    name: "Mem",
    description:
      "Self-organizing AI notes with Mem Chat over your personal knowledge graph.",
    url: "https://mem.ai",
    category: "Productivity",
    tags: ["PKM", "Notes", "Mem Chat"],
    image: img(PHOTOS.notes),
    content:
      "Mem surfaces forgotten ideas while you draft emails or briefs. Consultants build a second brain without rigid Notion databases.",
  },
  {
    id: "fireflies",
    name: "Fireflies.ai",
    description:
      "AI notetaker that records, transcribes, and analyzes calls across Zoom and Google Meet.",
    url: "https://fireflies.ai",
    category: "Productivity",
    tags: ["Meeting AI", "CRM Sync", "Analytics"],
    image: img(PHOTOS.meeting),
    content:
      "Fireflies.ai pushes conversation intelligence into Salesforce and HubSpot. Revenue leaders coach reps using AI-generated talk-track insights.",
  },
  {
    id: "pika",
    name: "Pika",
    description:
      "Creative AI video tool for stylized clips, lip sync, and canvas expansions on mobile.",
    url: "https://pika.art",
    category: "AI Video",
    tags: ["Pika 2.0", "Lip Sync", "Social Video"],
    image: img(PHOTOS.video),
    content:
      "Pika targets TikTok creators with playful effects and fast iteration loops. Best AI video generator when aesthetic flair matters more than corporate polish.",
  },
];

// Fix beautiful-ai photo reference
tools.find((t) => t.id === "beautiful-ai").image = img("1552664730-d307ca884978");

if (tools.length !== 50) {
  throw new Error(`Expected 50 tools, got ${tools.length}`);
}

const rankings = [
  {
    id: 1,
    title: "Top 10 AI Coding Assistants in 2026",
    slug: "top-10-ai-coding-assistants-2026",
    description:
      "Compare Cursor, GitHub Copilot, Codeium, Windsurf, v0, Bolt.new, and Replit Agent—the best AI programming tools for 10x developer velocity.",
    tools: ["cursor", "github-copilot", "codeium", "windsurf", "v0", "bolt-new", "replit-ai"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top 10 AI Coding Assistants in 2026 | Best AI Programmer Tools",
    seoDescription:
      "Ranked best AI coding assistants: Cursor, Copilot, Codeium, Windsurf, v0, Bolt.new. Free & paid tools for indie hackers and engineering teams.",
  },
  {
    id: 2,
    title: "Best Free AI Image Generators",
    slug: "best-free-ai-image-generators",
    description:
      "Leonardo AI, Ideogram, DALL·E 3, Stable Diffusion, and FLUX compared for free text-to-image creation in 2026.",
    tools: ["dalle-3", "leonardo-ai", "ideogram", "stable-diffusion", "flux", "midjourney"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Best Free AI Image Generators (2026)",
    seoDescription:
      "Top free AI image generators: DALL·E, Leonardo, Ideogram, Stable Diffusion, FLUX, Midjourney alternatives.",
  },
  {
    id: 3,
    title: "Must-have AI Tools for Indie Hackers",
    slug: "must-have-ai-tools-for-indie-hackers",
    description:
      "The lean AI stack: ChatGPT, Cursor, v0, Bolt.new, Perplexity, Notion AI, and Framer AI to ship SaaS faster.",
    tools: ["chatgpt", "cursor", "v0", "bolt-new", "perplexity", "notion-ai", "framer-ai"],
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Must-Have AI Tools for Indie Hackers (2026)",
    seoDescription:
      "Best AI tools for solo founders: chatbots, AI coders, UI generators, and productivity apps to launch in 2026.",
  },
  {
    id: 4,
    title: "Top AI Video Generation Software",
    slug: "top-ai-video-generation-software",
    description:
      "Sora, Runway Gen-3, HeyGen, Luma, Pika, and Synthesia ranked for cinematic AI video and avatar workflows.",
    tools: ["sora", "runway-gen3", "heygen", "luma-dream-machine", "pika", "synthesia"],
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top AI Video Generation Software (2026)",
    seoDescription:
      "Best AI video generators: Sora, Runway Gen-3, HeyGen, Luma Dream Machine, Pika, Synthesia compared.",
  },
  {
    id: 5,
    title: "Top 10 AI Writing Tools 2026",
    slug: "top-10-ai-writing-tools-2026",
    description:
      "Jasper, Copy.ai, Writesonic, Grammarly, and ChatGPT for SEO blogs, ads, and marketing copy.",
    tools: ["jasper-ai", "copy-ai", "writesonic", "grammarly", "chatgpt"],
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top 10 AI Writing Tools for 2026",
    seoDescription:
      "Best AI writing tools and free AI writers for content marketing, SEO, and sales copy in 2026.",
  },
  {
    id: 6,
    title: "Top 10 AI Image Generators 2026",
    slug: "top-10-ai-image-generators-2026",
    description:
      "Midjourney, FLUX, DALL·E 3, Leonardo, Ideogram, and Stable Diffusion for pro AI art pipelines.",
    tools: ["midjourney", "flux", "dalle-3", "leonardo-ai", "ideogram", "stable-diffusion"],
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top 10 AI Image Generators for 2026",
    seoDescription:
      "Ranked AI image generators for designers: Midjourney, FLUX, DALL·E, Leonardo, Ideogram, Stable Diffusion.",
  },
  {
    id: 7,
    title: "Best AI Chatbots for Customer Support 2026",
    slug: "best-ai-chatbots-customer-support-2026",
    description:
      "ChatGPT, Claude, Gemini, Copilot, and Perplexity for accurate, grounded customer and internal support bots.",
    tools: ["chatgpt", "claude", "google-gemini", "microsoft-copilot", "perplexity"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Best AI Chatbots for Customer Support (2026)",
    seoDescription:
      "Top AI chatbots for business support: ChatGPT, Claude, Gemini, Microsoft Copilot, Perplexity AI.",
  },
  {
    id: 8,
    title: "Top AI Productivity Tools for Remote Teams",
    slug: "top-ai-productivity-tools-remote-teams",
    description:
      "Notion AI, Otter, Linear, Zapier AI, Motion, Mem, and Fireflies for distributed team workflows.",
    tools: ["notion-ai", "otter-ai", "linear", "zapier-ai", "motion", "mem", "fireflies"],
    image:
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top AI Productivity Tools for Remote Teams (2026)",
    seoDescription:
      "Best AI productivity tools: Notion AI, Otter, Linear, Zapier, Motion, Mem, Fireflies for remote work.",
  },
  {
    id: 9,
    title: "Best AI Voice & Audio Tools 2026",
    slug: "best-ai-voice-audio-tools-2026",
    description:
      "ElevenLabs, Murf, Suno, Udio, and Descript for voiceovers, music, podcasts, and dubbing.",
    tools: ["elevenlabs", "murf-ai", "suno", "udio", "descript"],
    image:
      "https://images.unsplash.com/photo-1478737271069-78c9d5ff805b?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Best AI Voice & Audio Tools (2026)",
    seoDescription:
      "Top AI voice generators and AI music tools: ElevenLabs, Murf, Suno, Udio, Descript.",
  },
  {
    id: 10,
    title: "Top AI Design Tools for Marketers",
    slug: "top-ai-design-tools-for-marketers",
    description:
      "Canva Magic Studio, Figma AI, Relume, v0 Chat, Framer AI, and Beautiful.ai for campaigns and landing pages.",
    tools: ["canva-ai", "figma-ai", "relume", "v0-chat", "framer-ai", "beautiful-ai"],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top AI Design Tools for Marketers (2026)",
    seoDescription:
      "Best AI design tools for marketing teams: Canva, Figma AI, Relume, v0, Framer, Beautiful.ai.",
  },
  {
    id: 11,
    title: "Best AI Tools for Content Creators",
    slug: "best-ai-tools-for-content-creators",
    description:
      "Creator stack: ChatGPT, Midjourney, Runway, ElevenLabs, Pictory, Suno, and Canva for omnichannel content.",
    tools: ["chatgpt", "midjourney", "runway-gen3", "elevenlabs", "pictory", "suno", "canva-ai"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Best AI Tools for Content Creators (2026)",
    seoDescription:
      "Top AI tools for YouTubers and creators: writing, image, video, voice, and design AI apps.",
  },
  {
    id: 12,
    title: "Top Free AI Tools in 2026",
    slug: "top-free-ai-tools-2026",
    description:
      "ChatGPT, Gemini, Perplexity, Codeium, Leonardo, Copy.ai, Otter, and Character.AI you can start free today.",
    tools: ["chatgpt", "google-gemini", "perplexity", "codeium", "leonardo-ai", "copy-ai", "otter-ai", "character-ai"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top Free AI Tools in 2026",
    seoDescription:
      "Best free AI tools: chatbots, coders, image generators, writers, and meeting AI with no credit card.",
  },
  {
    id: 13,
    title: "Best AI Presentation & Slide Tools",
    slug: "best-ai-presentation-slide-tools",
    description:
      "Beautiful.ai, Canva, Figma slides, and Notion AI for automated pitch decks and sales presentations.",
    tools: ["beautiful-ai", "canva-ai", "figma-ai", "notion-ai"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Best AI Presentation Tools (2026)",
    seoDescription:
      "Top AI slide and presentation makers: Beautiful.ai, Canva, Figma AI for pitch decks.",
  },
  {
    id: 14,
    title: "Top AI Music Generators: Suno vs Udio",
    slug: "top-ai-music-generators-suno-vs-udio",
    description:
      "Compare Suno and Udio for full AI songs with vocals—plus ElevenLabs for narration layers.",
    tools: ["suno", "udio", "elevenlabs"],
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top AI Music Generators 2026 | Suno vs Udio",
    seoDescription:
      "Best AI music generators compared: Suno AI vs Udio for vocals, instruments, and creator licensing.",
  },
  {
    id: 15,
    title: "Best AI Meeting & Note-Taking Tools",
    slug: "best-ai-meeting-note-taking-tools",
    description:
      "Otter.ai, Fireflies, Notion AI, and Descript for transcripts, summaries, and searchable meeting memory.",
    tools: ["otter-ai", "fireflies", "notion-ai", "descript"],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Best AI Meeting & Note-Taking Tools (2026)",
    seoDescription:
      "Top AI meeting assistants: Otter, Fireflies, Notion AI, Descript for transcription and summaries.",
  },
  {
    id: 16,
    title: "Top AI Tools for Startups & SaaS",
    slug: "top-ai-tools-for-startups-saas",
    description:
      "Claude, Cursor, Jasper, Zapier AI, Perplexity, and Synthesia for lean GTM and product teams.",
    tools: ["claude", "cursor", "jasper-ai", "zapier-ai", "perplexity", "synthesia"],
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top AI Tools for Startups & SaaS (2026)",
    seoDescription:
      "Best AI stack for startups: coding, writing, automation, research, and video AI tools.",
  },
  {
    id: 17,
    title: "Best AI SEO & Marketing Writing Tools",
    slug: "best-ai-seo-marketing-writing-tools",
    description:
      "Jasper, Writesonic, Copy.ai, Grammarly, and Anyword-style workflows for high-converting copy.",
    tools: ["jasper-ai", "writesonic", "copy-ai", "grammarly", "chatgpt"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Best AI SEO & Marketing Writing Tools (2026)",
    seoDescription:
      "Top AI SEO writers: Jasper, Writesonic, Copy.ai, Grammarly for blogs, ads, and landing pages.",
  },
  {
    id: 18,
    title: "Top AI Video Editors for YouTube Creators",
    slug: "top-ai-video-editors-youtube-creators",
    description:
      "Pictory, InVideo AI, Descript, Runway Gen-3, and Pika for repurposing and Shorts production.",
    tools: ["pictory", "invideo-ai", "descript", "runway-gen3", "pika"],
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3a7a0d02?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top AI Video Editors for YouTube Creators (2026)",
    seoDescription:
      "Best AI video tools for YouTube: Pictory, InVideo, Descript, Runway, Pika for creators.",
  },
  {
    id: 19,
    title: "Best Claude & GPT Alternatives 2026",
    slug: "best-claude-gpt-alternatives-2026",
    description:
      "Gemini, Copilot, Perplexity, Poe, and Meta alternatives when you need a different AI chatbot stack.",
    tools: ["google-gemini", "microsoft-copilot", "perplexity", "poe", "character-ai"],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Best ChatGPT & Claude Alternatives (2026)",
    seoDescription:
      "Top ChatGPT and Claude alternatives: Gemini, Copilot, Perplexity, Poe, Character.AI compared.",
  },
  {
    id: 20,
    title: "Top AI Automation Tools for No-Code Teams",
    slug: "top-ai-automation-tools-no-code-teams",
    description:
      "Zapier AI, Notion AI, Microsoft Copilot, and Copy.ai workflows for ops without engineering headcount.",
    tools: ["zapier-ai", "notion-ai", "microsoft-copilot", "copy-ai"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    seoTitle: "Top AI Automation Tools for No-Code Teams (2026)",
    seoDescription:
      "Best AI automation platforms: Zapier AI, Notion AI, Copilot for marketing and ops workflows.",
  },
];

const root = join(process.cwd(), "data");
writeFileSync(join(root, "tools.json"), JSON.stringify(tools, null, 2) + "\n");
writeFileSync(join(root, "rankings.json"), JSON.stringify(rankings, null, 2) + "\n");
console.log(`Wrote ${tools.length} tools and ${rankings.length} rankings`);
