// Affiliate Links Module - Auto-insert referral links
// Updated: 2026-05-31

const AFFILIATE_LINKS = {
    // Verified Affiliate Programs (2026-05-31)
    "Cursor": "https://cursor.sh/?ref=ainewshub",
    "Jasper AI": "https://www.jasper.ai/?fpr=ainewshub",
    "Jasper": "https://www.jasper.ai/?fpr=ainewshub",
    "Notion AI": "https://notion.so/?partner=ainewshub",
    "Descript": "https://www.descript.com/?ref=ainewshub",
    "Surfer SEO": "https://surferseo.com/?fpr=ainewshub",
    "Synthesia": "https://www.synthesia.io/?ref=ainewshub",
    "Grammarly": "https://grammarly.com/qft?p=ainewshub",
    
    // Chinese AI Tools (with commission programs)
    "Kimi": "https://kimi.moonshot.cn",
    "Ernie Bot": "https://yiyan.baidu.com",
    "Tongyi Qianwen": "https://tongyi.aliyun.com",
    
    // Major AI Tools (Direct links - no affiliate available)
    "DeepSeek V4 Pro": "https://deepseek.com",
    "DeepSeek V4 Flash": "https://deepseek.com",
    "GPT-5.5 Pro": "https://chat.openai.com",
    "GPT-5.5 Instant": "https://chat.openai.com",
    "GPT-5.4 Pro": "https://chat.openai.com",
    "Claude Opus 4.6": "https://claude.ai",
    "Claude Sonnet 4": "https://claude.ai",
    "Gemini 3.1 Pro": "https://gemini.google.com",
    "Midjourney V7": "https://midjourney.com",
    
    // Support & Donation Links
    "Ko-fi": "https://ko-fi.com/aidaily",
    "Buy Me a Coffee": "https://buymeacoffee.com/felovery"
};

// Amazon Affiliate ID
const AMAZON_AFFILIATE_ID = "felovery-20";

// 爱发电配置
const AFDIAN_CONFIG = {
    url: "https://afdian.com/u/6d98de823fd411f1b3cf52540025c377",
    name: "爱发电",
    plans: {
        monthly: {
            name: "月度会员",
            price: "¥19/月",
            url: "https://afdian.com/u/6d98de823fd411f1b3cf52540025c377"
        },
        yearly: {
            name: "年度会员",
            price: "¥199/年",
            url: "https://afdian.com/u/6d98de823fd411f1b3cf52540025c377"
        }
    }
};

// Check and replace affiliate links
function applyAffiliateLinks() {
    if (typeof toolsData === 'undefined') return;
    
    toolsData.forEach(tool => {
        if (AFFILIATE_LINKS[tool.name]) {
            tool.url = AFFILIATE_LINKS[tool.name];
            tool.isAffiliate = true;  // Mark as affiliate link
        }
    });
}

// Apply on page load
document.addEventListener('DOMContentLoaded', function() {
    applyAffiliateLinks();
});

// Click tracking
function trackClick(toolName, url) {
    console.log(`Tool click: ${toolName} -> ${url}`);
    
    // Send to analytics
    if (window._hmt) {
        _hmt.push(['_trackEvent', 'Tool Click', toolName, url]);
    }
    if (window.gtag) {
        gtag('event', 'tool_click', {
            'tool_name': toolName,
            'url': url
        });
    }
}

// Export for use in other scripts
window.AFFILIATE_LINKS = AFFILIATE_LINKS;
window.AFDIAN_CONFIG = AFDIAN_CONFIG;
