// AI Tools Data - Latest AI Models September 2026
// Last Updated: 2026-09-04 09:10:53

const toolsData = [
    {
        name: "Gpt-6",
        description: "Legora used GPT-6 Astra to review 41 documents in minutes, find all four planted errors, and improve performance by nearly 40% in this financial-review workflow.",
        url: "https://chat.openai.com",
        category: "Chat Assistant",
        price: "See official site",
        rating: "NEW",
        emoji: "NEW",
        badge: "New Release"
    },
    {
        name: "GPT-5.6",
        description: "New OpenAI model with improved efficiency and lower pricing for enterprise deployment. Enhanced multi-step reasoning and tool use.",
        url: "https://chat.openai.com",
        category: "Chat Assistant",
        price: "Free / Plus $20/mo",
        rating: "NEW",
        emoji: "NEW",
        badge: "New Release"
    },
    {
        name: "DeepSeek V4 Pro",
        description: "1.6T parameters, 1M context, best open-source model rivaling top closed-source models. Agent coding champion.",
        url: "https://deepseek.com",
        category: "LLM",
        price: "¥24/million tokens",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "🧠",
        badge: "Open Source King"
    },
    {
        name: "GPT-5.5 Pro",
        description: "OpenAI's most intelligent model with autonomous task execution. Plans, uses tools, and completes complex multi-step work independently.",
        url: "https://chat.openai.com",
        category: "Chat Assistant",
        price: "Pro $200/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "🚀",
        badge: "Most Intelligent"
    },
    {
        name: "GPT-5.5 Instant",
        description: "Default ChatGPT model for all users. Faster, smarter, with auto-switching between Instant and Thinking modes.",
        url: "https://chat.openai.com",
        category: "Chat Assistant",
        price: "Free / Plus $20/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "⚡",
        badge: "Default Model"
    },
    {
        name: "GPT-5.4 Pro",
        description: "OpenAI's model with native computer control, can operate your PC via screenshots. 10T parameters.",
        url: "https://chat.openai.com",
        category: "Chat Assistant",
        price: "Pro $200/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "💬",
        badge: "Computer Control"
    },
    {
        name: "Claude Opus 4.6",
        description: "Best for coding and long context. SWE-Bench 75.6%, IMO gold medal level math.",
        url: "https://claude.ai",
        category: "Chat Assistant",
        price: "Pro $200/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "🤖",
        badge: "Best for Coding"
    },
    {
        name: "Gemini 3.1 Pro",
        description: "Google's flagship with 1M context, native multimodal. GPQA Diamond 94.3%.",
        url: "https://gemini.google.com",
        category: "Chat Assistant",
        price: "Advanced $20/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "✨",
        badge: "Best Multimodal"
    },
    {
        name: "DeepSeek V4 Flash",
        description: "284B parameters, ultra-efficient. 1/5 cost of GPT-5 with 98% performance. Best value.",
        url: "https://deepseek.com",
        category: "LLM",
        price: "¥2/million tokens",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "⚡",
        badge: "Best Value"
    },
    {
        name: "Grok 4.20",
        description: "xAI's latest with real-time X data access and image generation. Best for current events.",
        url: "https://x.ai",
        category: "Chat Assistant",
        price: "X Premium $16/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "⚡",
        badge: "Real-time Data"
    },
    {
        name: "Midjourney V7",
        description: "State-of-the-art AI image generation with photorealistic outputs and 4K resolution.",
        url: "https://midjourney.com",
        category: "Image Generation",
        price: "Basic $10/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "🎨",
        badge: "Best Images"
    },
    {
        name: "Sora",
        description: "OpenAI's text-to-video AI for cinematic video creation. Now available to Plus users.",
        url: "https://openai.com/sora",
        category: "Video Generation",
        price: "ChatGPT Plus $20/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "🎥",
        badge: "Video AI"
    },
    {
        name: "Cursor AI",
        description: "AI-powered code editor with intelligent autocomplete. Now supports Claude 4.7 and GPT-5.5.",
        url: "https://cursor.sh",
        category: "Coding Assistant",
        price: "Free / Pro $20/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "💻",
        badge: "Coding Essential"
    },
    {
        name: "Runway Gen-3",
        description: "Professional AI video generation with motion control, green screen, and upscaling.",
        url: "https://runwayml.com",
        category: "Video Generation",
        price: "Standard $12/mo",
        rating: "⭐⭐⭐⭐",
        emoji: "🎬"
    },
    {
        name: "ElevenLabs",
        description: "Top-tier AI voice synthesis with natural speech in 29 languages and voice cloning.",
        url: "https://elevenlabs.io",
        category: "Audio Processing",
        price: "Free / Starter $5/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "🎙️",
        badge: "Best Voice"
    },
    {
        name: "Kling AI",
        description: "Advanced AI video generator with realistic motion and high quality long-duration output.",
        url: "https://klingai.com",
        category: "Video Generation",
        price: "Free / Credits",
        rating: "⭐⭐⭐⭐",
        emoji: "📹",
        badge: "Hot"
    },
    {
        name: "Perplexity AI",
        description: "AI-powered search engine with real-time information, citations, and deep research mode.",
        url: "https://perplexity.ai",
        category: "AI Search",
        price: "Free / Pro $20/mo",
        rating: "⭐⭐⭐⭐⭐",
        emoji: "🔍",
        badge: "Search Powerhouse"
    },
    {
        name: "Stable Diffusion 3",
        description: "Open-source image generation with FLUX models. Run locally or use API. Completely free.",
        url: "https://stability.ai",
        category: "Image Generation",
        price: "Free",
        rating: "⭐⭐⭐⭐",
        emoji: "🖼️"
    },
    {
        name: "Notion AI",
        description: "Built-in AI assistant for Notion with writing, summarizing, translation, and Q&A.",
        url: "https://notion.so",
        category: "Productivity",
        price: "AI Add-on $10/mo",
        rating: "⭐⭐⭐⭐",
        emoji: "📝"
    }
];

if (typeof module !== 'undefined') {
    module.exports = toolsData;
}
