import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";

const OPEN_SOURCE_URL = ''

const baseSiteConfig = {
  name: "Fake Credit Card Generator - Generate Valid Test Cards | Free Visa, MC, Amex Numbers",
  description:
    "Free fake credit card generator for testing. Generate valid Visa, Mastercard, Amex test numbers instantly. Perfect for developers, QA testers, and payment integration. No registration required. Batch export in JSON/CSV/XML.",
  url: "https://creditcardgenerator.wangdu.site",
  ogImage: "https://creditcardgenerator.wangdu.site/og.png",
  metadataBase: '/',
  keywords: [
    "fake credit card generator",
    "credit card number generator",
    "credit card generator credit card generator",
    "smile generation credit card",
    "fake credit card number generator",
    "free credit card generator",
    "test credit card numbers",
    "visa test card",
    "mastercard test card",
    "amex test card"
  ],
  authors: [
    {
      name: "wwkjs666",
      url: "https://www.wangdu.site",
      twitter: 'https://twitter.com/wwkjs666',
    }
  ],
  creator: '@wwkjs666',
  openSourceURL: '',
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  nextThemeColor: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'repo', href: OPEN_SOURCE_URL, icon: BsGithub },
    { name: 'twitter', href: "https://twitter.com/wwkjs666", icon: BsTwitterX },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/dongyubin", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    { name: 'email', href: "mailto:itxh888@gmail.com", icon: MdEmail },
    { name: 'twitter', href: "https://twitter.com/wwkjs666", icon: BsTwitterX },
    { name: 'github', href: "https://github.com/dongyubin/", icon: BsGithub },
    { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/dongyubin", icon: SiBuymeacoffee },
    // { name: 'juejin', href: "https://juejin.cn/user/26044008768029", icon: SiJuejin },
    // { name: 'weChat', href: "https://weijunext.com/make-a-friend", icon: BsWechat }
  ],
  footerProducts: [
    { url: 'https://www.wangdu.site/', name: '文武科技柜' },
    // { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    // { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    // { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    // { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    // { url: 'https://githubbio.com', name: 'Github Bio Generator' },
    // { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
