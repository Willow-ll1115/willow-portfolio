// ================================================================
// 全局变量
// ================================================================
let projectsData = [];
let keyHandler = null;
let activeMedia = null;
let observer = null;

// ================================================================
// 项目数据加载
// ================================================================
async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        if (!response.ok) throw new Error('网络错误');
        projectsData = await response.json();
        renderProjects(projectsData);
    } catch (error) {
        console.error('加载项目数据失败:', error);
        // 可以显示错误提示
    }
}

// ================================================================
// 渲染项目卡片
// ================================================================
function renderProjects(data) {
    const featuredGrid = document.getElementById('featuredGrid');
    const normalGrid = document.getElementById('normalGrid');
    if (!featuredGrid || !normalGrid) return;

    const featured = data.slice(0, 3);
    const normal = data.slice(3);

    // 渲染大卡片
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

    // 渲染小卡片
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

    // 绑定点击事件（所有卡片）
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

    // ---- 渲染媒体 ----
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

    // ---- 链接按钮（非媒体列表中的link） ----
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

    // ---- 文件下载按钮（docx等） ----
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

    // ---- 文字内容 ----
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

    // ---- 项目展示图（长图）放在最后 ----
    let scriptImageHtml = '';
    if (project.scriptImage) {
        scriptImageHtml = `
            <div class="script-image-wrapper">
                <div class="script-title">📄 项目展示图</div>
                <img loading="lazy" decoding="async" src="${project.scriptImage}" alt="项目展示图" />
            </div>
        `;
    }

    // ---- 组合 ----
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

    // ---- 绑定媒体点击事件 ----
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

    // ---- 显示模态框 ----
    overlay.classList.add('active');
    if (window.initLazyVideos) window.initLazyVideos();
    box.classList.add('active');
    document.body.style.overflow = 'hidden';

    // ---- 键盘控制 ----
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
window.addEventListener('resize', () => { if (window.innerWidth >= 768 && mobileMenu.classList.contains('open'))
    toggleMobile(false); });

// ================================================================
// 视频懒加载（首页不加载，模态框打开后加载第一条）
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

    // 用户刚打开项目，马上让第一条视频进入后台加载。
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
// 启动：加载项目数据
// ================================================================
document.addEventListener('DOMContentLoaded', loadProjects);