import type { ZudokuConfig } from "zudoku";

/**
 * Developer Portal Configuration
 * For more information, see:
 * https://zuplo.com/docs/dev-portal/zudoku/configuration/overview
 */
const config: ZudokuConfig = {
  site: {
    title: "Leaderboard API Gateway",
    logo: {
      src: {
        light: "/badge.webp",
        dark: "/badge.webp",
      },
    },
  },
  metadata: {
    title: "Developer Portal",
    description: "Developer Portal",
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      icon: "book",
      items: ["overview", "setup"],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
      icon: "code",
    },
  ],
  redirects: [{ from: "/", to: "/api" }],
  apis: [
    {
      type: "file",
      input: "../config/routes.oas.json",
      path: "api",
    },
  ],
  apiKeys: {
    enabled: true,
  },
};

export default config;
