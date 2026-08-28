// ==================== Website Configuration ====================
// Modify the information below, then upload to GitHub to update the site

const SITE_CONFIG = {
    // ===== Basic Site Info =====
    siteName: "AI Frontier",
    siteUrl: "https://usaimaker.github.io/",
    siteDesc: "Daily updates on latest AI news, AI tools, and artificial intelligence trends",
    
    // ===== Contact Info =====
    email: "felovery@gmail.com",
    wechat: "",
    phone: "",
    
    // ===== Payment Info =====
    wechatPayQR: "images/wechat-pay.png",
    alipayQR: "images/alipay.png",
    
    // ===== VIP Pricing =====
    vipPrice: 19,                        // VIP annual price (USD)
    enterprisePrice: 199,                // Enterprise price (USD)
    consultPrice: 100,                   // Hourly consultation price (USD)
    
    // ===== Ad Pricing =====
    adTopPrice: 50,                      // Top banner monthly (USD)
    adContentPrice: 30,                  // Content area monthly (USD)
    adSidebarPrice: 20,                  // Sidebar monthly (USD)
    
    // ===== Search Engine Verification Codes =====
    baiduVerifyCode: "",
    googleVerifyCode: "J-PQr8rpxOgFD6GMG2R7IDbI0jyJZlOLGXQkCeSfEXc",
    bingVerifyCode: "6D910580EC7E0E384717FFC7E2A583C1",
    
    // ===== Analytics =====
    baiduTongjiId: "",
    googleAnalyticsId: "",
    
    // ===== Social Media Links =====
    weibo: "",
    zhihu: "",
    xiaohongshu: "",
    bilibili: "",
    
    // ===== Affiliate Links =====
    affiliateLinks: {
        "ChatGPT": "",
        "Claude": "",
        "Midjourney": "",
        "Kimi": "",
        "Notion AI": "",
    }
};

// ===== Do not modify below =====
if (typeof module !== 'undefined') {
    module.exports = SITE_CONFIG;
}
