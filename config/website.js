const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Wilcox Lab", // Navigation and Site Title
  siteTitleAlt: "Wilcox Lab", // Alternative Site title for SEO
  siteUrl: "https://carg.uw.edu", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logos/logo.png", // Used for SEO and manifest
  siteDescription: "Clinical Data Science @ University of Washington",

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: "@wilcoxlab", // Twitter Username
  ogSiteName: "wilcoxlab", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.uw,
  backgroundColor: tailwind.colors.blue
};
