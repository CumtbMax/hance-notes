import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished technical journal", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="zh-CN"/i);
  assert.match(html, /<title>HANCE \/ NOTES｜把复杂技术，讲清楚<\/title>/i);
  assert.match(html, /把复杂技术/);
  assert.match(html, /智能体系统，难点从来不只在模型/);
  assert.match(html, /RAG 的工程边界/);
  assert.match(html, /从原型到可维护产品/);
  assert.match(html, /文章预览/);
  assert.match(html, /AI 与智能体/);
  assert.match(html, /一位独立作者的长期记录/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("removes disposable starter assets and metadata", async () => {
  const [page, layout, packageJson, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/i);
  assert.doesNotMatch(layout, /Starter Project|next\/font|codex-preview/i);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /<html lang="zh-CN">/);
  assert.match(page, /className="site-page" id="top"/);
  assert.doesNotMatch(page, /article-mark|↗/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /--paper:\s*#f4f1e9/);
  assert.match(css, /--muted:\s*#62645f/);
  assert.match(css, /--warm-gray:\s*#68645e/);
  assert.doesNotMatch(css, /\.article-row:hover|\.article-mark/);
  assert.doesNotMatch(css, /prefers-color-scheme:\s*dark/);
  await assert.rejects(access(new URL("public/favicon.svg", templateRoot)));
});
