/* =====================================================================
   GitHub Profile — interactive engine
   Matrix rain, Pokéball carousel, live GitHub API data, accessibility.
   Kept as a classic script so inline handlers (onclick="triggerCatch")
   can still reach the global functions defined here.
   ===================================================================== */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* 1. MATRIX DIGITAL RAIN SYSTEM */
function initMatrixRain(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // Respect reduced-motion: paint a single calm static frame instead of animating.
  if (prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement.clientHeight || 200;
    ctx.fillStyle = 'rgba(16, 20, 26, 0.6)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement.clientHeight || 200;
  }
  resize();
  window.addEventListener('resize', resize);

  const matrixChars = '010101010101010101LICETAI0011';
  const fontSize = 13;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

  function drawRain() {
    ctx.fillStyle = 'rgba(16, 20, 26, 0.18)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

    for (let i = 0; i < drops.length; i++) {
      const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      // occasional cyan accent
      ctx.fillStyle = Math.random() > 0.88 ? '#8ed5ff' : '#4be260';

      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawRain, 55);
}

// Initialize background rain and README section rain
initMatrixRain('readme-matrix-canvas');
initMatrixRain('ambient-matrix-rain');

/* 2. POKÉBALL CAROUSEL CONTROLS */
const carousel = document.getElementById('pokeball-carousel');
const prevBtn = document.getElementById('poke-prev');
const nextBtn = document.getElementById('poke-next');

if (carousel && prevBtn && nextBtn) {
  const scrollStep = 320;
  nextBtn.addEventListener('click', () => carousel.scrollBy({ left: scrollStep, behavior: 'smooth' }));
  prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' }));

  // Keyboard navigation for the carousel region
  carousel.setAttribute('tabindex', '0');
  carousel.setAttribute('role', 'region');
  carousel.setAttribute('aria-label', 'Repository Poké-Orb carousel. Use arrow keys to scroll.');
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); carousel.scrollBy({ left: scrollStep, behavior: 'smooth' }); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' }); }
  });
}

/* Build indicator dots dynamically to match the actual card count */
function renderCarouselDots() {
  const dotsWrap = document.getElementById('carousel-dots');
  if (!dotsWrap || !carousel) return;
  const count = carousel.children.length || 1;
  dotsWrap.innerHTML = Array.from({ length: count }, () =>
    '<span class="w-1.5 h-1.5 rounded-full bg-outline/40 cursor-pointer transition-all" aria-hidden="true"></span>'
  ).join('');
  updateCarouselDots();
}

function updateCarouselDots() {
  const dotsWrap = document.getElementById('carousel-dots');
  if (!dotsWrap || !carousel) return;
  const dots = [...dotsWrap.children];
  if (!dots.length) return;
  const cardWidth = 320;
  const activeIndex = Math.min(dots.length - 1, Math.round(carousel.scrollLeft / cardWidth));
  dots.forEach((dot, index) => {
    const isActive = index === activeIndex;
    dot.classList.toggle('bg-secondary', isActive);
    dot.classList.toggle('shadow-[0_0_6px_#4be260]', isActive);
    dot.classList.toggle('w-2', isActive);
    dot.classList.toggle('h-2', isActive);
    dot.classList.toggle('bg-outline/40', !isActive);
    dot.classList.toggle('w-1.5', !isActive);
    dot.classList.toggle('h-1.5', !isActive);
  });
}

if (carousel) {
  carousel.addEventListener('scroll', () => window.requestAnimationFrame(updateCarouselDots), { passive: true });
}

/* Interactive Catch / Release Animation on click */
function triggerCatch(element) {
  const orb = element.querySelector('.matrix-pokeball');
  const repoTitle = element.querySelector('span.truncate')?.innerText || 'Repository';

  if (orb) {
    orb.classList.remove('poke-active-trigger');
    void orb.offsetWidth; // trigger reflow
    orb.classList.add('poke-active-trigger');
  }

  const toast = document.getElementById('poke-toast');
  const toastText = document.getElementById('poke-toast-text');
  if (toast && toastText) {
    toastText.innerText = `Matrix Poké-Orb deployed! Accessing ${repoTitle}...`;
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-24', 'opacity-0');
    }, 2200);
  }
}

/* Copy email to clipboard */
async function copyEmail(button) {
  const email = button.dataset.email;
  const label = button.querySelector('.copy-label');
  try {
    await navigator.clipboard.writeText(email);
    if (label) {
      const original = label.innerText;
      label.innerText = 'Copied!';
      setTimeout(() => { label.innerText = original; }, 1800);
    }
  } catch (error) {
    console.warn('Clipboard copy failed', error);
  }
}

/* =====================================================================
   LIVE GITHUB DATA
   ===================================================================== */
const PROFILE_CONFIG = {
  username: new URLSearchParams(window.location.search).get('user') || 'Rahul-A-2111',
  pokeballImageUrl: './assets/Pokeball%20ascii.png',
  squirtleGifUrl: './assets/Squirtle%20Squad%20ascii.png',
  featuredRepo: 'FlyWire-Connectome-Music-Rater',
  repoLimit: 12
};

const githubHeaders = { Accept: 'application/vnd.github+json' };
const githubApi = (path) => `https://api.github.com${path}`;
const githubCacheTtl = 30 * 60 * 1000; // 30 min — well within unauthenticated rate limits

async function githubJson(urlOrPath) {
  const url = urlOrPath.startsWith('http') ? urlOrPath : githubApi(urlOrPath);
  const cacheKey = `github-profile-cache:${url}`;
  let cached = null;
  try {
    cached = JSON.parse(localStorage.getItem(cacheKey) || 'null');
    if (cached && Date.now() - cached.timestamp < githubCacheTtl) return cached.data;
  } catch (error) {
    console.warn('GitHub cache read failed', error);
  }
  try {
    const response = await fetch(url, { headers: githubHeaders });
    if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
    const data = await response.json();
    localStorage.setItem(cacheKey, JSON.stringify({ timestamp: Date.now(), data }));
    return data;
  } catch (error) {
    if (cached?.data) {
      console.warn(`GitHub request failed; using cached data for ${url}`, error);
      return cached.data;
    }
    throw error;
  }
}

const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
}[char]));

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function relativeDate(value) {
  const days = Math.max(0, Math.floor((Date.now() - new Date(value)) / 86400000));
  return days === 0 ? 'today' : `${days} day${days === 1 ? '' : 's'} ago`;
}

function repoCard(repo, index) {
  const colors = ['secondary', 'tertiary', 'primary'];
  const color = colors[index % colors.length];
  const language = repo.language || 'Code';
  return `<article class="pokeball-card snap-center shrink-0 w-[290px] flex flex-col items-center group cursor-pointer relative" onclick="triggerCatch(this)">
    <a class="matrix-orb-wrap w-44 flex flex-col items-center" href="${repo.html_url}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(repo.name)}">
      <div class="matrix-pokeball w-40 h-40 border-2 border-${color}/60 relative flex items-center justify-center bg-surface-container-lowest">
        <img class="w-full h-full object-contain p-2" src="${PROFILE_CONFIG.pokeballImageUrl}" alt="" aria-hidden="true" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.classList.remove('hidden')">
        <span class="hidden absolute inset-3 border border-dashed border-${color}/70 rounded-lg items-center justify-center text-center text-${color} font-mono text-[10px] px-2">ADD<br>assets/Pokeball ascii.png</span>
        <div class="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
      </div>
    </a>
    <a class="w-full mt-3 p-3 rounded-lg bg-surface-container-high/90 border border-outline-variant/60 group-hover:border-secondary/60 transition-all shadow-md flex flex-col gap-1.5 relative" href="${repo.html_url}" target="_blank" rel="noreferrer">
      <div class="flex items-center justify-between gap-2"><span class="font-semibold text-primary truncate text-sm font-mono">${escapeHtml(repo.name)}</span><span class="font-mono text-[10px] px-1.5 py-0.5 rounded-full bg-surface-container-lowest text-secondary border border-secondary/30">${repo.private ? 'Private' : 'Public'}</span></div>
      <p class="text-on-surface-variant line-clamp-2 text-xs min-h-[2rem]">${escapeHtml(repo.description || 'No description provided.')}</p>
      <div class="flex items-center justify-between pt-2 border-t border-outline-variant/30 font-mono text-[11px] text-outline"><span class="flex items-center gap-1 text-on-surface"><span class="w-2 h-2 rounded-full bg-${color}"></span>${escapeHtml(language)}</span><span class="flex items-center gap-3"><span>★ ${repo.stargazers_count}</span><span>⑂ ${repo.forks_count}</span></span></div>
    </a>
  </article>`;
}

/* Featured project spotlight */
function renderFeatured(repo) {
  const wrap = document.getElementById('featured-spotlight');
  if (!wrap) return;
  if (!repo) {
    wrap.classList.add('hidden');
    return;
  }
  wrap.classList.remove('hidden');
  const language = repo.language || 'Code';
  wrap.innerHTML = `
    <div class="rounded-xl border border-secondary/40 bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-lowest p-space-md shadow-[0_0_30px_rgba(75,226,96,0.15)] relative overflow-hidden flex flex-col md:flex-row gap-space-md items-center">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#4be260_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      <div class="relative z-10 flex flex-col gap-2 flex-1 min-w-0">
        <span class="font-label-code-sm text-label-code-sm uppercase tracking-widest text-secondary flex items-center gap-1.5"><span class="material-symbols-outlined text-[16px]">eco</span> Featured Project</span>
        <h3 class="font-headline-md text-headline-md font-semibold text-on-surface truncate">${escapeHtml(repo.name)}</h3>
        <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">${escapeHtml(repo.description || 'No description provided.')}</p>
        <div class="flex flex-wrap items-center gap-3 pt-1 font-mono text-[11px] text-outline">
          <span class="flex items-center gap-1 text-on-surface"><span class="w-2 h-2 rounded-full bg-secondary"></span>${escapeHtml(language)}</span>
          <span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[13px] text-amber-400">star</span> ${repo.stargazers_count}</span>
          <span class="flex items-center gap-0.5"><span class="material-symbols-outlined text-[13px]">fork_right</span> ${repo.forks_count}</span>
        </div>
      </div>
      <div class="relative z-10 flex flex-col sm:flex-row gap-2 shrink-0">
        <a href="${repo.html_url}" target="_blank" rel="noreferrer" class="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-secondary/15 border border-secondary/50 text-secondary font-label-code-sm text-label-code-sm hover:bg-secondary/25 transition-colors"><span class="material-symbols-outlined text-[16px]">code</span> View Code</a>
        ${repo.homepage ? `<a href="${escapeHtml(repo.homepage)}" target="_blank" rel="noreferrer" class="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-primary/15 border border-primary/50 text-primary font-label-code-sm text-label-code-sm hover:bg-primary/25 transition-colors"><span class="material-symbols-outlined text-[16px]">rocket_launch</span> Live Demo</a>` : ''}
      </div>
    </div>`;
}

function renderLanguages(languageTotals, repoCount) {
  const entries = Object.entries(languageTotals).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, bytes]) => sum + bytes, 0) || 1;
  const palette = ['#8ed5ff', '#ce9bff', '#4be260', '#f59e0b', '#f87171'];
  const bar = document.getElementById('language-bar');
  const legend = document.getElementById('language-legend');
  if (!bar || !legend) return;
  const badges = document.getElementById('language-badges');
  if (badges) badges.innerHTML = `<div class="solitaire-spread">${entries.slice(0, 8).map(([name, bytes], index) => `<div class="solitaire-card ${index === 0 ? 'card-featured' : ''} p-1.5 flex flex-col justify-between" title="${escapeHtml(name)}"><div class="card-watermark absolute inset-0 opacity-40 rounded-lg pointer-events-none"></div><div class="flex flex-col items-start leading-none relative z-10"><span class="font-mono font-bold text-xs text-primary">${index + 1}</span><span class="text-[11px] text-primary">♦</span></div><div class="flex flex-col items-center justify-center text-center relative z-10 px-0.5"><span class="text-lg">⌘</span><span class="font-bold text-[11px] leading-tight text-white mt-1 truncate max-w-full">${escapeHtml(name)}</span><span class="text-[10px] font-mono text-primary tracking-tight truncate max-w-full">${(bytes / total * 100).toFixed(1)}%</span></div><div class="flex flex-col items-end leading-none rotate-180 relative z-10"><span class="font-mono font-bold text-xs text-primary">${index + 1}</span><span class="text-[11px] text-primary">♦</span></div></div>`).join('') || '<span class="text-outline font-mono text-xs">No language data found.</span>'}</div>`;
  bar.innerHTML = entries.slice(0, 5).map(([name, bytes], index) => `<div class="h-full" style="width:${(bytes / total * 100).toFixed(1)}%;background:${palette[index % palette.length]}" title="${escapeHtml(name)}"></div>`).join('');
  legend.innerHTML = entries.slice(0, 5).map(([name, bytes], index) => `<div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full" style="background:${palette[index % palette.length]}"></span><span class="text-on-surface font-medium">${escapeHtml(name)}</span><span class="text-outline">${(bytes / total * 100).toFixed(1)}%</span></div>`).join('');
  setText('#language-source', `Calculated from ${repoCount} public repos`);
}

function renderTechStack(repos) {
  const topics = [...new Set(repos.flatMap((repo) => repo.topics || []))].sort();
  const devopsSet = ['docker', 'github-actions', 'ci-cd', 'linux', 'bash', 'api', 'fastapi', 'flask', 'deployment', 'vercel', 'netlify'];
  const coreTopics = topics.filter((topic) => !devopsSet.includes(topic));
  const devopsTopics = topics.filter((topic) => devopsSet.includes(topic));
  const cardMarkup = (items, emptyText, suit, accent) => items.length
    ? `<div class="solitaire-spread">${items.map((item, index) => `<div class="solitaire-card ${index === 0 ? 'card-featured' : ''} p-1.5 flex flex-col justify-between" title="${escapeHtml(item)}"><div class="card-watermark absolute inset-0 opacity-40 rounded-lg pointer-events-none"></div><div class="flex flex-col items-start leading-none relative z-10"><span class="font-mono font-bold text-xs text-${accent}">${index + 1}</span><span class="text-[11px] text-${accent}">${suit}</span></div><div class="flex flex-col items-center justify-center text-center relative z-10 px-0.5"><span class="text-lg">✦</span><span class="font-bold text-[11px] leading-tight text-white mt-1 truncate max-w-full">${escapeHtml(item)}</span><span class="text-[10px] font-mono text-${accent} tracking-tight truncate max-w-full">Topic</span></div><div class="flex flex-col items-end leading-none rotate-180 relative z-10"><span class="font-mono font-bold text-xs text-${accent}">${index + 1}</span><span class="text-[11px] text-${accent}">${suit}</span></div></div>`).join('')}</div>`
    : `<span class="text-outline font-mono text-xs">${emptyText}</span>`;
  const core = document.getElementById('core-tech-stack');
  const devops = document.getElementById('devops-tech-stack');
  if (core) core.innerHTML = cardMarkup(coreTopics, 'No AI/ML topics are listed in the repositories.', '♠', 'secondary');
  if (devops) devops.innerHTML = cardMarkup(devopsTopics, 'No DevOps or backend topics are listed in the repositories.', '♣', 'emerald-400');
}

function renderAchievements(repositories, languageTotals) {
  const list = document.getElementById('achievement-list');
  if (!list) return;
  const topLanguage = Object.entries(languageTotals).sort((a, b) => b[1] - a[1])[0]?.[0] || 'No language data';
  const mostStarred = repositories.reduce((best, repo) => repo.stargazers_count > (best?.stargazers_count ?? -1) ? repo : best, repositories[0]);
  const achievements = [
    ['folder_copy', `${repositories.length} public repositories`, 'Live repository count'],
    ['code', `${topLanguage} primary language`, 'Calculated from repository bytes'],
    ['star', `${mostStarred?.stargazers_count || 0} total stars`, 'Across public repositories'],
    ['update', 'Active profile', 'Repository data available']
  ];
  setText('#achievement-count', `${achievements.length} repo signals`);
  list.innerHTML = achievements.map(([icon, title, detail]) => `<div class="solitaire-card" title="${escapeHtml(detail)}"><span class="material-symbols-outlined text-secondary text-[22px]">${icon}</span><br><strong class="text-on-surface text-xs">${escapeHtml(title)}</strong></div>`).join('');
}

let contributionState = { year: new Date().getFullYear(), days: [] };

function renderContributionMonth(monthIndex) {
  const grid = document.getElementById('contribution-grid');
  const weekdays = document.getElementById('calendar-weekdays');
  if (!grid || !weekdays) return;
  const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
  const year = contributionState.year;
  const days = contributionState.days.filter((day) => new Date(`${day.date}T00:00:00`).getMonth() === monthIndex);
  const monthStart = new Date(year, monthIndex, 1).getDay();
  weekdays.innerHTML = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => `<div class="text-center py-1">${day}</div>`).join('');
  const cells = Array.from({ length: monthStart }, () => '<div></div>');
  days.forEach((day) => {
    const level = Math.max(0, Math.min(4, Number(day.level) || 0));
    cells.push(`<div class="min-h-[58px] rounded border border-outline-variant/30 p-1 hover:border-secondary transition-colors" style="background:${colors[level]}" title="${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}"><span class="font-mono text-[10px] text-on-surface">${Number(day.date.slice(-2))}</span><br><span class="font-mono text-[10px] text-on-surface-variant">${day.count}</span></div>`);
  });
  grid.innerHTML = cells.join('');
  document.querySelectorAll('[data-contribution-month]').forEach((button) => {
    const isActive = Number(button.dataset.contributionMonth) === monthIndex;
    button.classList.toggle('bg-secondary/15', isActive);
    button.classList.toggle('text-secondary', isActive);
    button.classList.toggle('border-secondary/40', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function renderContributions(contributions, year) {
  contributionState = { year, days: contributions };
  const total = contributions.reduce((sum, day) => sum + day.count, 0);
  let current = 0;
  let longest = 0;
  contributions.forEach((day) => {
    current = day.count > 0 ? current + 1 : 0;
    longest = Math.max(longest, current);
  });
  const months = document.getElementById('contribution-months');
  if (months) months.innerHTML = Array.from({ length: 12 }, (_, index) => `<button class="px-2 py-1 rounded bg-surface-container-low border border-outline-variant/40 text-outline font-mono text-xs" data-contribution-month="${index}" aria-pressed="false">${new Date(year, index, 1).toLocaleString('en', { month: 'short' })}</button>`).join('');
  document.querySelectorAll('[data-contribution-month]').forEach((button) => button.addEventListener('click', () => renderContributionMonth(Number(button.dataset.contributionMonth))));
  renderContributionMonth(new Date().getFullYear() === year ? new Date().getMonth() : 0);
  document.querySelectorAll('[data-contribution-year]').forEach((button) => {
    const isActive = Number(button.dataset.contributionYear) === year;
    button.classList.toggle('bg-secondary/15', isActive);
    button.classList.toggle('border-secondary/40', isActive);
    button.classList.toggle('border-outline-variant/40', !isActive);
    button.classList.toggle('text-secondary', isActive);
    button.classList.toggle('bg-surface-container-low', !isActive);
    button.classList.toggle('text-outline', !isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  setText('#contribution-total', `${total} contributions in ${year}`);
  setText('#contribution-count', total.toLocaleString());
  setText('#current-streak', `${current} days`);
  setText('#longest-streak', `${longest} days`);
}

async function loadContributions(year = new Date().getFullYear()) {
  const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${PROFILE_CONFIG.username}?y=${year}`);
  if (!response.ok) throw new Error('Contribution data could not be loaded');
  const data = await response.json();
  renderContributions(data.contributions || [], year);
}

async function loadActivity() {
  const events = await githubJson(`/users/${PROFILE_CONFIG.username}/events/public?per_page=30`);
  const activity = document.getElementById('activity-timeline');
  if (!activity) return;
  const visibleEvents = events.filter((event) => ['PushEvent', 'IssuesEvent', 'PullRequestEvent', 'CreateEvent', 'WatchEvent'].includes(event.type)).slice(0, 6);
  if (!visibleEvents.length) {
    activity.innerHTML = '<p class="text-outline font-label-code-sm text-label-code-sm">No recent public activity found.</p>';
    return;
  }
  activity.innerHTML = visibleEvents.map((event) => {
    const repoName = event.repo?.name || 'repository';
    const repoUrl = `https://github.com/${repoName}`;
    let icon = 'history';
    let color = 'secondary';
    let message = 'Updated';
    if (event.type === 'PushEvent') {
      icon = 'commit';
      color = 'primary';
      const pushCount = event.payload.commits?.length || event.payload.size || event.payload.distinct_size;
      message = pushCount ? `Pushed ${pushCount} commit${pushCount === 1 ? '' : 's'} to` : 'Pushed changes to';
    } else if (event.type === 'IssuesEvent') {
      icon = 'adjust';
      color = 'tertiary';
      message = `${event.payload.action} an issue in`;
    } else if (event.type === 'PullRequestEvent') {
      icon = 'call_merge';
      message = `${event.payload.action} a pull request in`;
    } else if (event.type === 'CreateEvent') {
      icon = 'add_circle';
      color = 'primary';
      message = `Created ${event.payload.ref_type} in`;
    } else if (event.type === 'WatchEvent') {
      icon = 'star';
      color = 'tertiary';
      message = 'Starred';
    }
    return `<div class="flex items-start gap-3 pl-2"><div class="p-1 rounded-full bg-${color}-container/20 text-${color} mt-0.5 border border-${color}/30"><span class="material-symbols-outlined text-[16px]">${icon}</span></div><div class="flex items-center justify-between gap-3 w-full text-body-sm font-body-sm"><span class="text-on-surface">${message} <a class="text-primary hover:underline font-medium" href="${repoUrl}" target="_blank" rel="noreferrer">${escapeHtml(repoName.split('/').pop())}</a></span><span class="text-outline font-label-code-sm text-label-code-sm whitespace-nowrap">${relativeDate(event.created_at)}</span></div></div>`;
  }).join('');
}

async function loadGitHubProfile() {
  const [profile, repos] = await Promise.all([
    githubJson(`/users/${PROFILE_CONFIG.username}`),
    githubJson(`/users/${PROFILE_CONFIG.username}/repos?per_page=100&sort=updated`)
  ]);
  const publicRepos = repos.filter((repo) => !repo.fork);
  const selectedRepos = publicRepos.slice(0, PROFILE_CONFIG.repoLimit);
  if (carousel) carousel.innerHTML = selectedRepos.map(repoCard).join('');
  renderCarouselDots();

  const featuredRepo = publicRepos.find((repo) => repo.name === PROFILE_CONFIG.featuredRepo)
    || [...publicRepos].sort((a, b) => (b.stargazers_count - a.stargazers_count) || (b.size - a.size))[0];
  renderFeatured(featuredRepo);

  setText('#repo-arsenal-count', `${publicRepos.length} Projects`);
  setText('#readme-owner', profile.login);
  const avatar = document.querySelector('img[alt="Profile"]');
  if (avatar) avatar.src = profile.avatar_url;
  const squirtle = document.querySelector('img[alt="Squirtle Squad"]');
  if (squirtle && PROFILE_CONFIG.squirtleGifUrl) squirtle.src = PROFILE_CONFIG.squirtleGifUrl;

  // Accurate byte-based language totals via a single aggregate over repo sizes
  const languageTotals = {};
  selectedRepos.forEach((repo) => {
    if (repo.language) languageTotals[repo.language] = (languageTotals[repo.language] || 0) + Math.max(1, repo.size);
  });
  renderLanguages(languageTotals, publicRepos.length);
  renderAchievements(publicRepos, languageTotals);
  renderTechStack(repos);

  document.querySelectorAll('[data-contribution-year]').forEach((button) => {
    button.onclick = () => loadContributions(Number(button.dataset.contributionYear)).catch((error) => console.warn(error));
  });
  try {
    await loadContributions(new Date().getFullYear());
  } catch (error) {
    setText('#contribution-total', 'Contribution data unavailable');
    console.warn(error);
  }
  try {
    await loadActivity();
  } catch (error) {
    const activity = document.getElementById('activity-timeline');
    if (activity) activity.innerHTML = '<p class="text-outline font-label-code-sm text-label-code-sm">Activity data unavailable.</p>';
    console.warn(error);
  }
  setText('#github-status', `Live GitHub data refreshed ${new Date().toLocaleTimeString()}`);
}

function showProfileFallback() {
  setText('#repo-arsenal-count', 'GitHub API unavailable');
  setText('#language-source', 'Repository metadata unavailable');
  if (carousel) carousel.innerHTML = '<div class="w-full py-8 text-center text-outline font-mono text-xs"><a class="text-primary hover:underline" href="https://github.com/Rahul-A-2111?tab=repositories" target="_blank" rel="noreferrer">Open Rahul-A-2111 repositories on GitHub</a></div>';
  const featured = document.getElementById('featured-spotlight');
  if (featured) featured.classList.add('hidden');
  ['#core-tech-stack', '#language-badges', '#devops-tech-stack'].forEach((selector) => {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = '<span class="text-outline font-mono text-xs">Repository metadata unavailable.</span>';
  });
  const activity = document.getElementById('activity-timeline');
  if (activity) activity.innerHTML = '<a class="text-primary hover:underline font-label-code-sm text-label-code-sm" href="https://github.com/Rahul-A-2111?tab=overview" target="_blank" rel="noreferrer">View Rahul-A-2111\'s live public activity on GitHub</a>';
}

loadGitHubProfile().catch((error) => {
  showProfileFallback();
  console.warn(error);
});

// Auto-refresh at a conservative cadence to stay within rate limits
setInterval(() => loadGitHubProfile().catch(() => {}), 30 * 60 * 1000);
