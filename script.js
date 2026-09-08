// ================================================================
// 项目数据（直接内联，无需外部 fetch）
// ================================================================
const projectsData = [
    {
        slug: "documentary-film",
        title: "微型纪录片《越向下，越重庆》（片段）",
        category: "纪录片 / 内容策划",
        year: "2026",
        summary: "与团队合作拍摄的微型纪录片切片，聚焦城市特色的生活故事。",
        status: "Completed",
        role: "选题策划 · 文稿撰写 · 中英字幕翻译",
        tools: ["Premiere Pro (字幕)", "剪映"],
        video: "videos/documentary.mp4",
        scriptImage: "images/越向下越重庆分镜文稿截图.webp",
        overview: "从《流浪地球》、《小巷人家》等经典作品中获取灵感，所有被命运裹挟往下走的人叫芸芸众生，但他们之中也从 不缺乏同命运抗争的无名英雄。以重庆地下通道为叙事空间，通过镜头记录理发摊、旧书铺等微观场景，展现山城 特有的烟火气。作为一种街头文化，地下路边摊承载着重庆人松弛感背后坚韧向上的生活态度。标题大量运用“勒 里”、“雄起”、“巴适得板”、“吆不到台”等川渝方言，作为叙事的文化锚点，为文本楔入在地性与原生感。 现场执行时，我采用了轻量化、机动性的拍摄方案，提前与摊主进行沟通，通过沉浸式跟拍和抓拍相结合的方式， 在最小干扰下捕捉最真实的状态。巧妙利用现场的明黄灯光作为主光，塑造了独特的影调，将劣势转化为视觉特色。 以质朴温情的影像语言，诠释最地道的小巷故事。摊贩间的邻里互助、政府提供的便民摊位……透析城市治理的细 腻之处，打破大众对地下暗无天日的刻板印象，试图推动地下通道文化和城市文明建设同频共振。",
        goal: "完成一部10分钟以内的纪录短片。",
        research: "前期做了大量的人物调研和场地勘察，确定拍摄对象和叙事线索。",
        process: "选题确定 → 拍摄计划制定 → 分镜脚本撰写 → 实地拍摄（3天）→ 后期剪辑与字幕翻译。",
        execution: "我负责了整体选题方向、文稿撰写以及后期字幕的中英翻译工作",
        cover: "images/越向下越重庆.webp",
        learnings: [
            "真实的故事最有感染力。",
            "跨团队协作需要清晰的分工和高效的沟通。",
            "中英双语字幕的翻译不仅要准确，还要符合口语习惯。"
        ]
    },
    {
        slug: "xiaohongshu-content-operation",
        title: "小红书二次元内容运营",
        category: "内容运营 / 社交媒体",
        year: "个人项目",
        summary: "从兴趣内容创作出发，通过热点观察与内容形式迭代，探索二次元用户的内容偏好。",
        status: "Completed",
        role: "选题 · 内容制作 · 账号运营",
        tools: ["小红书", "内容策划", "视频剪辑"],
        cover: "images/小红书.webp",
        scriptImage: "images/小红书.webp",
        overview: "个人运营的二次元内容账号。账号最初以文字创作为主，后续随着内容与兴趣方向变化，逐步扩展至绘画、捡手机与视频剪辑等内容。",
        process: "观察二次元社区热门梗 → 判断适合的内容方向 → 转化为P图/视频等内容 → 发布并观察反馈 → 根据表现调整内容方向。",
        execution: "独立完成账号内容的选题、创作与发布。",
        results: "单篇最高获赞1.7W+，另有1.6W+、5K+内容，多篇内容获赞1K–2K+。"
    },
    {
        slug: "visual-novel-game",
        title: "《不合理恋爱》视觉小说游戏 · 剧情策划切片",
        category: "游戏剧情策划 / 视觉小说",
        year: "2026",
        summary: "根据原创乙女向小说改编的代入向视觉小说游戏剧情策划稿切片，包含人物小传、六章剧情结构及序章+第一章完整剧情切片。",
        status: "Completed",
        role: "剧情策划 · 人物小传 · 章节结构设计",
        tools: ["剧情策划", "人物小传", "章节结构"],
        cover: "",
        file: "不合理恋爱_剧情策划切片.docx",
        overview: "将原创乙女向小说《不合理恋爱》改编为代入向视觉小说游戏的剧情策划文档。文档包含完整的人物小传、六章剧情结构，以及序章和第一章「重逢」的完整游戏剧情切片，为后续游戏开发提供可直接执行的文案与结构基础。",
        process: "小说阅读与解构 → 人物关系梳理 → 剧情结构设计 → 游戏化切片编写 → 场景与对白整理",
        execution: "独立完成剧情策划文档的全部内容",
        learnings: [
            "将小说叙事转化为游戏叙事需要重新思考节奏与互动性",
            "人物弧光的设计需要与游戏章节结构紧密结合"
        ]
    },
    {
        slug: "radio-advertising",
        title: "广播广告",
        category: "广告 / 音频",
        year: "课程作品",
        summary: "三则广播广告创意与音频制作作品。",
        status: "Completed",
        role: "广告创意 · 音频制作",
        tools: ["音频编辑", "播音", "创意策划"],
        mediaList: [
            { type: "audio", src: "audio/爱情保护伞.mp3", title: "🎙️ 广播广告 · 爱情保护伞" },
            { type: "audio", src: "audio/头发闹着要跳楼.mp3", title: "🎙️ 广播广告 · 头发闹着要跳楼" },
            { type: "audio", src: "audio/口腔救援.mp3", title: "🎙️ 广播广告 · 口腔救援" }
        ],
        overview: "三条广播广告作品，分别为《爱情保护伞》《头发闹着要跳楼》《口腔救援》。",
        process: "广告创意 → 文案/录制 → 音频编辑 → 最终输出。",
        execution: "参与广播广告的创意与音频内容制作。"
    },
    {
        slug: "hpv-vaccine-h5",
        title: "H5交互小广告",
        category: "H5交互 / 公益广告",
        year: "个人项目“《525我爱我》：HPV九价疫苗，这份礼物我想送给我自己”",
        summary: "围绕HPV九价疫苗展开的H5交互新闻报道，以“5·25我爱我”为契机，用恐惧诉求与温和叙事结合的方式科普女性健康。",
        status: "Completed",
        role: "后期制作 · 视觉设计",
        tools: ["易企秀", "Photoshop", "SVG", "GIF"],
        link: "https://x.eqxiu.com/s/15VjkVj4?eip=true",
        overview: "当时国内媒体并无针对HPV九价疫苗撰写和投放的特定宣传文案和公益广告，团队认为围绕HPV九价疫苗展开H5交互新闻报道具有可实施性。不同于以往仅限于文本和图表的形式，阅读性有望得到大幅提升。团队抓住这一风口，决定以“5·25我爱我”节日主题为契机，对女性健康议题展开科普。",
        why: "填补国内HPV九价疫苗在交互式宣传文案和公益广告方面的空白，用更生动的方式传递女性健康知识。",
        goal: "完成一则兼具科普价值与情感共鸣的H5交互新闻报道。",
        research: "研究了HPV九价疫苗的基本知识、疫苗类型、接种率、传播途径及预防措施，并分析了现有媒体报道的局限性。",
        process: "选题策划 → 交互设计 → 视觉素材制作 → 后期合成 → 动画效果调试 → 上线发布。",
        execution: "我主要负责后期制作，保障母亲、信封等关键平面立绘和动态背景相得益彰，页面跳转、触发交互等动画效果流畅自然。在视觉设计上，运用icon、GIF、SVG等深夜街景元素丰富版面，巧妙地将现实生活中的下班路上的真实景象融入其中。",
        results: "完成了一则完整的H5交互新闻报道，以温和、舒缓的风格向女性传递自我关怀与HPV预防知识。",
        cover: ""
    },
    {
        slug: "wechat-article-production",
        title: "公众号推文制作",
        category: "内容运营 / 公众号",
        year: "个人项目",
        summary: "制作推文，包括选题、撰稿、排版与视觉设计。",
        status: "Completed",
        role: "推文策划 · 内容撰写 · 排版设计",
        tools: ["微信公众号平台", "秀米", "Photoshop"],
        cover: "images/公众号2.webp",
        mediaList: [
            {
                type: "link",
                title: "📄 公众号推文作品 2",
                src: "images/公众号2.webp",
                url: "https://mp.weixin.qq.com/s/Y9pMRLT1WJIPq3GEmiUa6Q"
            },
            {
                type: "link",
                title: "📄 重大人写重大人 | 折花逢驿使，寄与重大人",
                src: "images/公众号1.webp",
                url: "https://mp.weixin.qq.com/s/AQS2PhhvJfooJniQXplE2w"
            }
        ],
        overview: "参与公众号的推文制作，负责选题策划、内容撰写、排版设计。",
        process: "选题策划 → 素材收集 → 内容撰写 → 排版设计 → 预览校对 → 发布推送。"
    }
];

// ================================================================
// 渲染项目卡片
// ================================================================
function renderProjects(data) {
    const featuredGrid = document.getElementById('featuredGrid');
    const normalGrid = document.getElementById('normalGrid');
    if (!featuredGrid || !normalGrid) return;

    const featured = data.slice(0, 3);
    const normal = data.slice(3);

    featuredGrid.innerHTML = featured.map((p) => {
        const statusBadge = p.status === 'Coming Soon' ? `<span class="status-badge">即将推出</span>` :
            (p.status === 'Completed' ? `<span class="status-badge">✅ 已完成</span>` : '');
        const coverHtml = p.cover ? `<img loading="lazy" decoding="async" src="${p.cover}" alt="${p.title}" />` :
            `<span class="placeholder">${p.title.charAt(0)}</span>`;
        return `
            <div class="project-card featured-card" data-slug="${p.slug}">
                <div class="cover">${coverHtml}${statusBadge}</div>
                <div class="card-body">
                    <div class="card-meta"><span>${p.category}</span><span>${p.year}</span></div>
                    <div class="card-title">${p.title}</div>
                    <div class="card-summary">${p.summary}</div>
                    <span class="card-arrow">→ 查看详情</span>
                </div>
            </div>
        `;
    }).join('');

    normalGrid.innerHTML = normal.map((p) => {
        const statusBadge = p.status === 'Coming Soon' ? `<span class="status-badge">即将推出</span>` :
            (p.status === 'Completed' ? `<span class="status-badge">✅ 已完成</span>` : '');
        const coverHtml = p.cover ? `<img loading="lazy" decoding="async" src="${p.cover}" alt="${p.title}" />` :
            `<span class="placeholder">${p.title.charAt(0)}</span>`;
        return `
            <div class="project-card small-card" data-slug="${p.slug}">
                <div class="cover">${coverHtml}${statusBadge}</div>
                <div class="card-body">
                    <div class="card-meta"><span>${p.category}</span><span>${p.year}</span></div>
                    <div class="card-title">${p.title}</div>
                    <div class="card-summary">${p.summary}</div>
                    <span class="card-arrow">→ 查看详情</span>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function() {
            const slug = this.dataset.slug;
            const project = projectsData.find(p => p.slug === slug);
            if (project) openModal(project);
        });
    });
}

// ================================================================
// 模态框控制
// ================================================================
let keyHandler = null;
let activeMedia = null;
let observer = null;

function openModal(project) {
    const overlay = document.getElementById('modalOverlay');
    const box = document.getElementById('modalBox');
    const content = document.getElementById('modalContent');
    if (!overlay || !box || !content) return;

    const statusLabel = project.status === 'Coming Soon' ?
        `<span style="background:rgba(184,176,208,0.15);padding:2px 12px;border-radius:40px;border:1px solid var(--border-ink);">即将推出</span>` :
        (project.status === 'Completed' ?
            `<span style="background:rgba(212,233,226,0.4);padding:2px 12px;border-radius:40px;border:1px solid var(--border-ink);">已完成</span>` :
            '');
    const toolsHtml = project.tools ? project.tools.map(t => `<span class="skill-tag">${t}</span>`).join(' ') : '';
    const learningsHtml = project.learnings ? project.learnings.map(item => `<li>${item}</li>`).join('') : '';

    // 媒体渲染...
    let mediaHtml = '';
    if (project.mediaList && project.mediaList.length > 0) {
        mediaHtml = project.mediaList.map((media, idx) => {
            let badgeClass, badgeText;
            if (media.type === 'video') {
                badgeClass = 'video-badge';
                badgeText = '视频';
                return `
                    <div class="media-container" data-index="${idx}">
                        <div class="media-label"><span class="badge ${badgeClass}">${badgeText}</span> ${media.title}</div>
                        <div class="video-wrapper">
                            <video controls preload="none" data-index="${idx}">
                                <source data-src="${media.src}" type="video/mp4">
                                您的浏览器不支持视频播放。
                            </video>
                        </div>
                    </div>
                `;
            } else if (media.type === 'audio') {
                badgeClass = 'audio-badge';
                badgeText = '音频';
                return `
                    <div class="media-container" data-index="${idx}">
                        <div class="media-label"><span class="badge ${badgeClass}">${badgeText}</span> ${media.title}</div>
                        <div class="audio-wrapper">
                            <audio controls preload="none" data-index="${idx}">
                                <source src="${media.src}" type="audio/mpeg">
                                您的浏览器不支持音频播放。
                            </audio>
                        </div>
                    </div>
                `;
            } else if (media.type === 'link') {
                badgeClass = 'link-badge';
                badgeText = '链接';
                return `
                    <div class="media-container" data-index="${idx}">
                        <div class="media-label"><span class="badge ${badgeClass}">${badgeText}</span> ${media.title}</div>
                        <div class="link-card-content">
                            ${media.src ? `<img loading="lazy" decoding="async" src="${media.src}" alt="文章配图" />` : ''}
                            <div class="link-text">
                                <div class="link-title">${media.title}</div>
                                <a href="${media.url}" target="_blank" rel="noopener noreferrer" class="link-btn">🔗 查看原文</a>
                            </div>
                        </div>
                    </div>
                `;
            }
            return '';
        }).join('');
    } else if (project.video) {
        mediaHtml = `
            <div class="media-container" data-index="0">
                <div class="media-label"><span class="badge video-badge">视频</span> 正片</div>
                <div class="video-wrapper">
                    <video controls preload="none" data-index="0">
                        <source data-src="${project.video}" type="video/mp4">
                        您的浏览器不支持视频播放。
                    </video>
                </div>
            </div>
        `;
    }

    let linkHtml = '';
    if (project.link && !project.mediaList) {
        linkHtml = `
            <div class="project-link-wrapper">
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                    🔗 查看作品
                    <span class="arrow">→</span>
                </a>
            </div>
        `;
    }

    let fileHtml = '';
    if (project.file) {
        fileHtml = `
            <div class="file-download-wrapper">
                <a href="${project.file}" target="_blank" rel="noopener noreferrer" class="file-download-btn">
                    <span class="icon-doc">📄</span> 查看完整策划文档
                    <span class="arrow">→</span>
                </a>
            </div>
        `;
    }

    let textHtml = `
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-bottom:12px; margin-top:8px;">
            <span style="background:rgba(184,176,208,0.12);padding:2px 14px;border-radius:40px;border:1px solid var(--border-ink);font-size:0.85rem;">${project.category}</span>
            <span style="color:rgba(26,26,26,0.4);font-size:0.85rem;">${project.year}</span>
            ${statusLabel}
        </div>
        <h2 class="modal-title">${project.title}</h2>
        <div class="modal-meta">
            ${project.role ? `<span>🎯 ${project.role}</span>` : ''}
            ${project.tools ? `<span>🛠 ${project.tools.join(' · ')}</span>` : ''}
        </div>
        <div class="modal-body">
            ${project.overview ? `<p><strong>概述</strong><br>${project.overview}</p>` : ''}
            ${project.why ? `<p><strong>为什么做</strong><br>${project.why}</p>` : ''}
            ${project.goal ? `<p><strong>目标</strong><br>${project.goal}</p>` : ''}
            ${project.research ? `<p><strong>调研与思考</strong><br>${project.research}</p>` : ''}
            ${project.process ? `<p><strong>过程</strong><br>${project.process}</p>` : ''}
            ${project.execution ? `<p><strong>执行</strong><br>${project.execution}</p>` : ''}
            ${project.results ? `<p><strong>成果</strong><br>${project.results}</p>` : ''}
            ${toolsHtml ? `<div><strong>工具</strong><br><div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:6px;">${toolsHtml}</div></div>` : ''}
            ${learningsHtml ? `<div style="margin-top:20px;"><strong>学习收获</strong><ul>${learningsHtml}</ul></div>` : ''}
        </div>
        ${linkHtml}
        ${fileHtml}
    `;

    let scriptImageHtml = '';
    if (project.scriptImage) {
        scriptImageHtml = `
            <div class="script-image-wrapper">
                <div class="script-title">📄 项目展示图</div>
                <img loading="lazy" decoding="async" src="${project.scriptImage}" alt="项目展示图" />
            </div>
        `;
    }

    content.innerHTML = `
        ${mediaHtml}
        ${textHtml}
        ${scriptImageHtml}
        <div class="shortcut-hint">
            🎹 点击视频/音频可切换控制 &nbsp;·&nbsp;
            <kbd>←</kbd> <kbd>→</kbd> 快进/退 5s &nbsp;·&nbsp;
            <kbd>↑</kbd> <kbd>↓</kbd> 调节音量
        </div>
    `;

    const mediaContainers = content.querySelectorAll('.media-container');
    mediaContainers.forEach(container => {
        const media = container.querySelector('video, audio');
        if (!media) return;
        const activate = function(e) {
            document.querySelectorAll('.media-container').forEach(c => c.classList.remove('media-active'));
            container.classList.add('media-active');
            activeMedia = media;
            e.stopPropagation();
        };
        container.addEventListener('click', activate);
        media.addEventListener('click', activate);
        media.addEventListener('play', function() {
            document.querySelectorAll('.media-container').forEach(c => c.classList.remove('media-active'));
            container.classList.add('media-active');
            activeMedia = media;
        });
    });

    if (mediaContainers.length > 0) {
        const firstContainer = mediaContainers[0];
        const firstMedia = firstContainer.querySelector('video, audio');
        if (firstMedia) {
            firstContainer.classList.add('media-active');
            activeMedia = firstMedia;
        }
    }

    overlay.classList.add('active');
    if (window.initLazyVideos) window.initLazyVideos();
    box.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (keyHandler) document.removeEventListener('keydown', keyHandler);
    keyHandler = function(e) {
        if (!activeMedia) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const media = activeMedia;
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            if (media.duration) media.currentTime = Math.min(media.currentTime + 5, media.duration);
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            if (media.duration) media.currentTime = Math.max(media.currentTime - 5, 0);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            media.volume = Math.min(media.volume + 0.1, 1);
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            media.volume = Math.max(media.volume - 0.1, 0);
        }
    };
    document.addEventListener('keydown', keyHandler);
}

function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    const box = document.getElementById('modalBox');
    if (!overlay || !box) return;
    const medias = box.querySelectorAll('video, audio');
    medias.forEach(m => {
        m.pause();
        m.currentTime = 0;
    });
    activeMedia = null;
    document.querySelectorAll('.media-container').forEach(c => c.classList.remove('media-active'));
    overlay.classList.remove('active');
    box.classList.remove('active');
    document.body.style.overflow = '';
    if (keyHandler) {
        document.removeEventListener('keydown', keyHandler);
        keyHandler = null;
    }
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ================================================================
// 导航滚动、移动端菜单
// ================================================================
const navbar = document.getElementById('navbar');
let scrollTicking = false;
window.addEventListener('scroll', function() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(function() {
        if (window.scrollY > 20) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
        scrollTicking = false;
    });
}, { passive: true });

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMobile(open) {
    const isOpen = mobileMenu.classList.contains('open');
    const shouldOpen = open !== undefined ? open : !isOpen;
    if (shouldOpen) {
        mobileMenu.classList.add('open');
        mobileOverlay.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
}
hamburger.addEventListener('click', () => toggleMobile());
mobileOverlay.addEventListener('click', () => toggleMobile(false));
document.querySelectorAll('#mobileMenu a').forEach(link => link.addEventListener('click', () => toggleMobile(false)));
window.addEventListener('resize', () => { if (window.innerWidth >= 768 && mobileMenu.classList.contains('open')) toggleMobile(false); });

// ================================================================
// 视频懒加载
// ================================================================
function loadVideo(video) {
    if (!video || video.dataset.loaded === "true") return;
    var sources = video.querySelectorAll("source[data-src]");
    sources.forEach(function (source) {
        source.src = source.dataset.src;
        source.removeAttribute("data-src");
    });
    video.dataset.loaded = "true";
    video.load();
}

function initLazyVideos() {
    var videos = document.querySelectorAll("#modalContent video");
    if (!videos.length) return;
    setTimeout(function () {
        loadVideo(videos[0]);
    }, 120);
    if ("IntersectionObserver" in window) {
        if (observer) observer.disconnect();
        observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    loadVideo(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: "300px 0px",
            threshold: 0
        });
        videos.forEach(function (video, index) {
            if (index > 0) observer.observe(video);
            video.addEventListener("play", function () {
                loadVideo(video);
            }, { once: true });
        });
    } else {
        videos.forEach(function (video, index) {
            if (index > 0) {
                video.addEventListener("play", function () {
                    loadVideo(video);
                }, { once: true });
            }
        });
    }
}

window.initLazyVideos = initLazyVideos;

// ================================================================
// 启动：渲染项目
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
    renderProjects(projectsData);
});