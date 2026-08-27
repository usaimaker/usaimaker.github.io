// Simulated user profiles for realistic community interaction
// Generated with diverse backgrounds and writing styles

const users = [
  {
    id: "user_001",
    username: "tech_dad_42",
    displayName: "Mike Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    bio: "Software engineer, father of 2. Using AI to survive dad life.",
    joinDate: "2026-01-15",
    badges: ["early_adopter", "helpful"],
    writingStyle: "casual_dad"
  },
  {
    id: "user_002",
    username: "sarah_creates",
    displayName: "Sarah Kim",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    bio: "Digital artist & AI enthusiast. Midjourney addict.",
    joinDate: "2026-02-03",
    badges: ["artist", "verified"],
    writingStyle: "creative"
  },
  {
    id: "user_003",
    username: "startup_grind",
    displayName: "Alex Rivera",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    bio: "Bootstrapping my SaaS. AI is my co-founder.",
    joinDate: "2026-01-28",
    badges: ["entrepreneur"],
    writingStyle: "business"
  },
  {
    id: "user_004",
    username: "coding_nights",
    displayName: "Dev Sharma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
    bio: "Full-stack dev. Night owl. Coffee addict.",
    joinDate: "2026-02-10",
    badges: ["developer", "night_owl"],
    writingStyle: "technical"
  },
  {
    id: "user_005",
    username: "prompt_wizard",
    displayName: "Emma Zhang",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    bio: "Prompt engineering is my superpower. Teaching others.",
    joinDate: "2026-01-20",
    badges: ["expert", "teacher"],
    writingStyle: "educational"
  },
  {
    id: "user_006",
    username: "budget_hacker",
    displayName: "Tom Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    bio: "Free tools > paid tools. Always finding cheaper ways.",
    joinDate: "2026-02-15",
    badges: ["budget_conscious"],
    writingStyle: "practical"
  },
  {
    id: "user_007",
    username: "ai_skeptic",
    displayName: "Jordan Lee",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    bio: "Questioning everything. AI is useful but overhyped.",
    joinDate: "2026-01-25",
    badges: ["critical_thinker"],
    writingStyle: "skeptical"
  },
  {
    id: "user_008",
    username: "content_queen",
    displayName: "Nina Patel",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nina",
    bio: "Content creator. Using AI to scale my brand.",
    joinDate: "2026-02-08",
    badges: ["creator", "verified"],
    writingStyle: "enthusiastic"
  },
  {
    id: "user_009",
    username: "newbie_journey",
    displayName: "Chris Martin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris",
    bio: "Just starting with AI. Learning something new every day.",
    joinDate: "2026-03-01",
    badges: ["newcomer"],
    writingStyle: "curious"
  },
  {
    id: "user_010",
    username: "data_driven",
    displayName: "Rachel Green",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel",
    bio: "Data scientist. AI models are my playground.",
    joinDate: "2026-01-18",
    badges: ["data_scientist", "expert"],
    writingStyle: "analytical"
  },
  {
    id: "user_011",
    username: "solo_founder",
    displayName: "Marcus Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    bio: "Building my startup solo. AI = my team.",
    joinDate: "2026-02-20",
    badges: ["entrepreneur", "solo"],
    writingStyle: "business"
  },
  {
    id: "user_012",
    username: "writer_life",
    displayName: "Sophie Turner",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    bio: "Freelance writer. AI helps me write more, stress less.",
    joinDate: "2026-01-22",
    badges: ["writer"],
    writingStyle: "narrative"
  },
  {
    id: "user_013",
    username: "gamer_ai",
    displayName: "Tyler Brooks",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tyler",
    bio: "Gamer & tech enthusiast. AI for gaming & content.",
    joinDate: "2026-02-12",
    badges: ["gamer"],
    writingStyle: "casual"
  },
  {
    id: "user_014",
    username: "minimalist_coder",
    displayName: "Yuki Tanaka",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yuki",
    bio: "Minimalist approach to everything, including AI.",
    joinDate: "2026-01-30",
    badges: ["minimalist"],
    writingStyle: "concise"
  },
  {
    id: "user_015",
    username: "student_life",
    displayName: "Priya Sharma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    bio: "CS student. AI is changing how I learn.",
    joinDate: "2026-02-25",
    badges: ["student"],
    writingStyle: "curious"
  }
];

// Comment templates by writing style
const commentTemplates = {
  casual_dad: [
    "haha this is so relatable! my kids think I'm a wizard now with AI 😂",
    "finally someone said it! been using this for months and couldn't agree more",
    "thanks for sharing, just showed this to my wife and she's like 'finally something useful'",
    "man, I wish I knew this earlier. would've saved me so much time with work stuff",
    "this is exactly what I needed to read today. thanks!"
  ],
  creative: [
    "love this perspective! been experimenting with similar stuff lately",
    "the creative possibilities are endless! just made something cool inspired by this",
    "totally agree! AI has changed my whole creative process",
    "this is gold! sharing with my artist friends",
    "beautifully written! captures exactly how I feel about AI tools"
  ],
  business: [
    "solid insights. implemented something similar for my startup",
    "ROI on this approach is real. seeing results already",
    "this is the kind of practical advice that actually moves the needle",
    "bookmarked! need to revisit this when planning next quarter",
    "thanks for breaking this down. super actionable"
  ],
  technical: [
    "nice! I've been using a similar approach. works great",
    "one thing I'd add: make sure to handle edge cases properly",
    "this is cleaner than my current setup. time to refactor 😅",
    "solid implementation. might try this on my next project",
    "thanks for sharing the technical details, super helpful"
  ],
  educational: [
    "great explanation! this would be perfect for beginners",
    "I teach this exact concept in my workshops. well done!",
    "breaking it down like this makes it so much more approachable",
    "sharing this with my students. thanks for the clear breakdown",
    "this is the kind of content that helps people actually learn"
  ],
  practical: [
    "tried this approach, works like a charm. saved me $50/month",
    "the free version works fine for this. don't need to pay",
    "practical tip! implemented in 5 minutes",
    "this is what I call useful content. no fluff",
    "bookmarked for later. definitely trying this"
  ],
  skeptical: [
    "interesting take, but I'd be careful about over-relying on this",
    "works for now, but let's see in 6 months",
    "good points, though I've seen some issues with this approach",
    "not bad, but there are limitations nobody talks about",
    "solid advice, just don't expect miracles"
  ],
  enthusiastic: [
    "THIS! exactly what I was looking for! 🔥",
    "you're amazing for sharing this! game changer!",
    "love love love this approach! works perfectly",
    "finally someone who gets it! sharing everywhere",
    "this is why I follow this blog! pure gold!"
  ],
  curious: [
    "quick question: how does this compare to [other tool]?",
    "thanks for explaining! still learning, this helps a lot",
    "newbie here - is this suitable for beginners?",
    "interesting! need to try this myself",
    "great post! learned something new today"
  ],
  analytical: [
    "interesting data points. would love to see more metrics",
    "solid analysis. the numbers back this up",
    "from my testing, I'm seeing similar patterns",
    "this aligns with what I've observed in the data",
    "great breakdown! the ROI is clear"
  ],
  narrative: [
    "this resonates so much with my own journey",
    "beautifully written. captures the essence perfectly",
    "I have a similar story! AI changed everything for me",
    "thanks for sharing your experience. very relatable",
    "this is exactly the kind of authentic content I love"
  ],
  casual: [
    "lol this is so true 😂",
    "dude same! been there done that",
    "nice one! definitely trying this",
    "sweet, thanks for the tip!",
    "this is awesome! sharing with my friends"
  ],
  concise: [
    "works great. thanks.",
    "solid approach.",
    "useful tip.",
    "good stuff.",
    "noted."
  ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { users, commentTemplates };
}
