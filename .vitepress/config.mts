import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: 'src',

    title: "Captcha.bot",
    description: "Documentation and setup guide for Captcha.bot",

    head: [
        ['link', { rel: "shortcut icon", href: "rounded-logo.png"}],
    ],

    cleanUrls: true,

    themeConfig: {
        // logo: "public/rounded-logo.png",

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "Home", link: "/" },
            { text: "Add bot", link: "https://captcha.bot/invite" },
            { text: "Dashboard", link: "https://captcha.bot/dashboard" }
        ],

        // search: {
        //     provider: "local"
        // },

        socialLinks: [
            { icon: "discord", link: "https://discord.gg/captcha" },
            { icon: "x", link: "https://x.com/discordcaptcha" },
            // { icon: "github", link: "https://github.com/privy-gg/" }
        ],

        sidebar: [
            {
                text: "Introduction",
                items: [
                    { text: "Getting Started", link: "/introduction/getting-started" },
                    { text: "Setup Process", link: "/introduction/setup-process" }
                ],
                collapsed: false
            },
            {
                text: "Reference",
                items: [
                    { text: "Commands", link: "/reference/command-reference" },
                    { text: "Phishing Scams", link: "/reference/phishing-scams" },
                    { text: "FAQ", link: "/reference/faq" }
                ],
                collapsed: false
            },
            {
                text: "Specific Features",
                items: [
                    { text: "Anti-Phishing", link: "/specific-features/anti-phishing" },
                    { text: "Button Panels", link: "/specific-features/button-panels" },
                    { text: "Time Limits", link: "/specific-features/time-limits" },
                    { text: "Linked Roles", link: "/specific-features/linked-roles" }
                ],
                collapsed: false
            },
            {
                text: "Logging",
                items: [
                    { text: "Server Analytics", link: "/logging/server-analytics" },
                    { text: "Audit Log", link: "/logging/audit-log" }
                ],
                collapsed: false
            },
            {
                text: "Premium",
                items: [
                    { text: "Premium", link: "/premium/premium" },
                ],
                collapsed: false
            },
        ],

        outline: {
            level: 1,
        },

        footer: {
            copyright: 'Copyright © 2021-2024 Privy.gg LLC'
        },
    },

    sitemap: {
        hostname: 'https://docs.captcha.bot'
    },

    markdown: {
        container: {
            dangerLabel: '🚨 DANGER'
        }
    }
})
