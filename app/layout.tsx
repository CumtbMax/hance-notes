import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HANCE / NOTES｜把复杂技术，讲清楚",
  description: "关于 AI、工程系统与产品实践的长期笔记。",
  applicationName: "HANCE / NOTES",
  authors: [{ name: "HANCE" }],
  creator: "HANCE",
  keywords: ["AI", "智能体", "工程架构", "产品实践", "技术博客"],
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "HANCE / NOTES",
    title: "HANCE / NOTES｜把复杂技术，讲清楚",
    description: "关于 AI、工程系统与产品实践的长期笔记。",
  },
  twitter: {
    card: "summary",
    title: "HANCE / NOTES｜把复杂技术，讲清楚",
    description: "关于 AI、工程系统与产品实践的长期笔记。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
