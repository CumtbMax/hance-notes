const articles = [
  {
    number: "01",
    category: "AI 系统",
    date: "2026.06.28",
    dateTime: "2026-06-28",
    readTime: "12 分钟",
    title: "智能体系统，难点从来不只在模型",
    summary:
      "当模型能力趋于可用，真正决定系统质量的，是任务拆解、工具边界、上下文管理，以及失败后的恢复路径。",
  },
  {
    number: "02",
    category: "工程架构",
    date: "2026.05.16",
    dateTime: "2026-05-16",
    readTime: "8 分钟",
    title: "RAG 的工程边界",
    summary:
      "检索增强并非万能答案。本文从数据更新频率、召回质量和运维成本出发，梳理它真正适合解决的问题。",
  },
  {
    number: "03",
    category: "产品实践",
    date: "2026.04.09",
    dateTime: "2026-04-09",
    readTime: "10 分钟",
    title: "从原型到可维护产品",
    summary:
      "原型验证方向，工程承载时间。把一次可运行的演示变成长期产品，需要尽早处理结构、反馈与取舍。",
  },
] as const;

const topics = [
  {
    number: "A",
    title: "AI 与智能体",
    description: "模型能力、智能体工作流，以及人与系统如何形成新的协作方式。",
    detail: "模型 · 工具 · 工作流",
  },
  {
    number: "B",
    title: "工程架构",
    description: "从原型走向生产环境时，关于边界、可靠性与演进成本的判断。",
    detail: "架构 · 数据 · 可靠性",
  },
  {
    number: "C",
    title: "产品实践",
    description: "将技术能力转化为清晰产品体验，记录其中的决策与校准。",
    detail: "洞察 · 设计 · 交付",
  },
] as const;

export default function Home() {
  return (
    <div className="site-page" id="top">
      <a className="skip-link" href="#main-content">
        跳至主要内容
      </a>

      <header className="site-header page-shell">
        <a className="brand" href="#top" aria-label="HANCE NOTES 首页">
          <span>HANCE</span>
          <span className="brand-slash" aria-hidden="true">
            /
          </span>
          <span>NOTES</span>
        </a>

        <nav className="primary-nav" aria-label="主要导航">
          <a href="#articles">文章</a>
          <a href="#topics">专题</a>
          <a href="#about">关于</a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero page-shell" aria-labelledby="hero-title">
          <div className="issue-line" aria-hidden="true">
            <span>Independent technical journal</span>
            <span>Issue 01 · 2026</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Notes on making and thinking</p>
              <h1 id="hero-title">
                把复杂技术，
                <span>讲清楚。</span>
              </h1>
            </div>

            <div className="hero-aside">
              <p>关于 AI、工程系统与产品实践的长期笔记。</p>
              <span aria-hidden="true">向下阅读</span>
            </div>
          </div>
        </section>

        <section
          className="editorial-section page-shell"
          id="articles"
          aria-labelledby="articles-title"
        >
          <div className="section-heading">
            <p className="section-kicker">Featured essays</p>
            <h2 id="articles-title">精选文章</h2>
            <p>文章预览，正文将在后续持续发布。</p>
          </div>

          <div className="article-list">
            {articles.map((article) => (
              <article className="article-row" key={article.number}>
                <p className="article-number" aria-hidden="true">
                  {article.number}
                </p>
                <div className="article-body">
                  <div className="article-meta">
                    <span>文章预览</span>
                    <span>{article.category}</span>
                    <time dateTime={article.dateTime}>{article.date}</time>
                    <span>{article.readTime}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="topics-section page-shell"
          id="topics"
          aria-labelledby="topics-title"
        >
          <div className="section-heading section-heading-compact">
            <p className="section-kicker">Ongoing subjects</p>
            <h2 id="topics-title">长期专题</h2>
          </div>

          <div className="topic-grid">
            {topics.map((topic) => (
              <article className="topic-card" key={topic.number}>
                <p className="topic-number" aria-hidden="true">
                  {topic.number}
                </p>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span>{topic.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-section page-shell"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-label">
            <p className="section-kicker">About this journal</p>
            <span aria-hidden="true">H / N</span>
          </div>
          <div className="about-copy">
            <h2 id="about-title">一位独立作者的长期记录。</h2>
            <div>
              <p>
                HANCE / NOTES 用来沉淀我对技术、工程与产品的持续观察。这里不追逐即时结论，更关心一个判断如何形成，又如何在实践中被修正。
              </p>
              <p>
                每篇文章都来自真实问题：做过的系统、踩过的坑，以及仍在验证的想法。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-shell">
        <span>© 2026 HANCE / NOTES</span>
        <p>持续写作，持续校准。</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </div>
  );
}
