<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="web_standard" name="shell-type"/>
<title>GitHub - licet-student</title>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&amp;family=JetBrains+Mono:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
<style>
    @layer base {
      html, body { margin: 0; padding: 0; }
      body { overscroll-behavior: none; }
      main > :first-child { margin-top: 0 !important; }
      main > :last-child { margin-bottom: 0 !important; }
    }
    ::-webkit-scrollbar { display: none; }
    
    /* Cyber Matrix Scanline Effect */
    .scanlines {
      background: linear-gradient(rgba(18, 24, 27, 0) 50%, rgba(0, 255, 128, 0.04) 50%);
      background-size: 100% 4px;
      pointer-events: none;
    }

    /* CRT Flicker & Glow */
    .crt-glow {
      box-shadow: 0 0 20px rgba(75, 226, 96, 0.25), inset 0 0 25px rgba(75, 226, 96, 0.15);
    }

    /* Horizontal scroll styling */
    .pokeball-slider {
      scroll-behavior: smooth;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .pokeball-slider::-webkit-scrollbar {
      display: none;
    }

    /* 3D Matrix Poké-Orb Core Dynamics */
    .matrix-orb-wrap {
      perspective: 800px;
    }

    .matrix-pokeball {
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      position: relative;
      overflow: hidden;
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
      background: #080c10;
      box-shadow: 0 10px 25px rgba(0,0,0,0.8), 0 0 15px rgba(34, 197, 94, 0.2);
    }

    .pokeball-card:hover .matrix-pokeball {
      transform: translateY(-8px) scale(1.05);
      box-shadow: 0 16px 32px rgba(0,0,0,0.9), 0 0 30px rgba(75, 226, 96, 0.45), 0 0 15px rgba(56, 189, 248, 0.3);
    }

    .pokeball-card:hover .binary-stream-top {
      animation-duration: 2s;
    }

    .pokeball-card:hover .pokeball-matrix-btn {
      box-shadow: 0 0 20px #4be260, 0 0 35px #38bdf8;
      background-color: #ecfdf5;
      transform: translate(-50%, -50%) scale(1.15);
    }

    /* Binary code texture scroll */
    @keyframes matrixStreamDown {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }

    .binary-stream-anim {
      animation: matrixStreamDown 8s linear infinite;
    }

    /* Release Catch Animation on click */
    @keyframes pokeCatchFlash {
      0% { transform: scale(1); filter: brightness(1); }
      40% { transform: scale(0.9) rotate(8deg); filter: brightness(2.2) drop-shadow(0 0 30px #4be260); }
      70% { transform: scale(1.1) rotate(-6deg); filter: brightness(1.6); }
      100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
    }
    .poke-active-trigger {
      animation: pokeCatchFlash 0.55s ease-out;
    }
  </style>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          "colors": {
            "inverse-primary": "#00668a",
            "outline": "#87929a",
            "surface": "#10141a",
            "primary": "#8ed5ff",
            "on-tertiary": "#490080",
            "surface-tint": "#7bd0ff",
            "surface-container-low": "#181c22",
            "on-primary-fixed": "#001e2c",
            "surface-container": "#1c2026",
            "on-primary-fixed-variant": "#004c69",
            "on-tertiary-fixed": "#2c0051",
            "primary-container": "#38bdf8",
            "on-tertiary-container": "#6400ac",
            "surface-variant": "#31353c",
            "on-secondary-container": "#003f0e",
            "surface-container-lowest": "#0a0e14",
            "surface-dim": "#10141a",
            "on-surface-variant": "#bdc8d1",
            "secondary-fixed": "#6fff7b",
            "secondary-container": "#00b73b",
            "on-surface": "#dfe2eb",
            "tertiary-container": "#ce9bff",
            "on-secondary": "#00390c",
            "surface-container-highest": "#31353c",
            "on-secondary-fixed-variant": "#005316",
            "inverse-surface": "#dfe2eb",
            "surface-bright": "#353940",
            "background": "#10141a",
            "on-error": "#690005",
            "on-primary": "#00354a",
            "error-container": "#93000a",
            "secondary": "#4be260",
            "on-error-container": "#ffdad6",
            "outline-variant": "#3e484f",
            "on-tertiary-fixed-variant": "#6900b3",
            "on-secondary-fixed": "#002205",
            "tertiary": "#e1bfff",
            "primary-fixed": "#c4e7ff",
            "inverse-on-surface": "#2d3137",
            "tertiary-fixed": "#f0dbff",
            "tertiary-fixed-dim": "#ddb7ff",
            "on-background": "#dfe2eb",
            "on-primary-container": "#004965",
            "secondary-fixed-dim": "#4be260",
            "surface-container-high": "#262a31",
            "error": "#ffb4ab",
            "primary-fixed-dim": "#7bd0ff"
          },
          "borderRadius": {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
          },
          "spacing": {
            "space-xs": "0.25rem",
            "gutter": "1rem",
            "margin": "1rem",
            "space-md": "1rem",
            "space-sm": "0.5rem",
            "space-lg": "1.5rem",
            "margin-desktop": "3rem",
            "margin-tablet": "2rem",
            "gutter-desktop": "1.5rem",
            "space-xl": "2.5rem"
          },
          "fontFamily": {
            "headline-sm": ["Geist", "sans-serif"],
            "label-code-sm": ["JetBrains Mono", "monospace"],
            "headline-xl": ["Geist", "sans-serif"],
            "headline-lg-mobile": ["Geist", "sans-serif"],
            "headline-md": ["Geist", "sans-serif"],
            "headline-xl-mobile": ["Geist", "sans-serif"],
            "body-lg": ["Geist", "sans-serif"],
            "label-code-md": ["JetBrains Mono", "monospace"],
            "body-sm": ["Geist", "sans-serif"],
            "label-code-lg": ["JetBrains Mono", "monospace"],
            "headline-lg": ["Geist", "sans-serif"],
            "body-md": ["Geist", "sans-serif"]
          }
        }
      }
    };
  </script>
</head>
<body class="bg-surface font-body-md text-body-md text-on-surface min-h-screen relative overflow-x-hidden selection:bg-secondary/30 selection:text-secondary-fixed">
<!-- Top Navigation Header -->
<header class="fixed top-0 left-0 w-full z-50 bg-surface-container-low/90 backdrop-blur-md border-b border-outline-variant/60 shadow-lg">
<div class="h-28 flex flex-col justify-between">
<div class="h-16 px-gutter-desktop flex items-center justify-between border-b border-outline-variant/50">
<div class="flex items-center gap-space-md flex-1">
<a class="flex items-center text-on-surface hover:text-primary transition-colors group relative" href="#">
<span class="material-symbols-outlined text-[32px] group-hover:scale-110 transition-transform">terminal</span>
<!-- Cyber Matrix micro badge -->
<span class="absolute -top-1 -right-3 text-[9px] font-mono text-secondary px-1 py-0.2 rounded bg-secondary/10 border border-secondary/30 hidden md:inline-block">AI:SYS</span>
</a>
<div class="relative max-w-xs w-full hidden sm:block">
<div class="flex items-center bg-surface-container-lowest border border-outline-variant/70 rounded-lg px-space-sm py-1 focus-within:border-secondary/60 focus-within:ring-1 focus-within:ring-secondary/40 transition-all">
<span class="material-symbols-outlined text-outline text-[18px] mr-space-xs">search</span>
<span class="font-label-code-sm text-label-code-sm text-outline flex-1">Type / to search repositories...</span>
<span class="text-[10px] font-mono text-outline-variant border border-outline-variant/50 px-1 rounded">⌘K</span>
</div>
</div>
<nav class="hidden lg:flex items-center gap-space-md" data-active-classes="bg-surface-container text-on-surface font-bold">
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="pull-requests" href="#">Pull requests</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="issues" href="#">Issues</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="codespaces" href="#">Codespaces</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="marketplace" href="#">Marketplace</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="explore" href="#">Explore</a>
</nav>
</div>
<div class="flex items-center gap-space-md">
<div class="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded bg-secondary/10 border border-secondary/20 text-secondary text-xs font-mono">
<span class="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span>LICET://NEURAL-NODE.ONLINE</span>
</div>
<button class="p-space-xs text-on-surface-variant hover:text-on-surface transition-colors relative" title="Notifications" type="button">
<span class="material-symbols-outlined text-[20px]">notifications</span>
<span class="absolute top-1 right-1 w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#4be260]"></span>
</button>
<!-- Squirtle Squad Header Avatar -->
<div class="w-8 h-8 rounded-full overflow-hidden ring-1 ring-secondary/50 bg-surface-container-high shadow-inner relative group">
<img alt="Profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPnhRpkuOqOxWAire7VZbBgH9YtFoxFGEYjEhtuQIZlj3OnchIVll2dLnUgxfinpMWfBLVH2yRL4A-NRM8bnLTH5UaxrVN54ixI9GAjM78pe0re40L5x2d69ATeXHic2ZVSCgkMeUuzYK75FZ8n3ywwqt07nQSrtuArcL8gR8iH9XJoBn23gK97RY5X7JL_DsgwKmZcmJIiSv9pTNhqIojURiN35fRUBFYLWJ1G-yVSILvBL2-W2AEd8b3v14JWw6Tfg"/>
<div class="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
</div>
</div>
</div>
<div class="h-12 px-gutter-desktop flex items-center overflow-x-auto">
<nav class="flex items-center gap-space-lg h-full" data-active-classes="border-b-2 border-primary-container text-on-surface font-bold">
<a aria-current="page" class="h-full flex items-center gap-1.5 transition-colors border-b-2 border-primary text-on-surface font-bold" data-path="overview" href="#">
<span class="material-symbols-outlined text-[16px] text-primary">book</span>
            Overview
          </a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface h-full flex items-center gap-space-xs transition-colors" data-path="repositories" href="#">
<span class="material-symbols-outlined text-[16px]">folder_copy</span>
            Repositories <span class="font-label-code-sm text-label-code-sm px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">14</span>
</a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface h-full flex items-center gap-1.5 transition-colors" data-path="projects" href="#">
<span class="material-symbols-outlined text-[16px]">view_kanban</span>
            Projects
          </a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface h-full flex items-center gap-1.5 transition-colors" data-path="packages" href="#">
<span class="material-symbols-outlined text-[16px]">deployed_code</span>
            Packages
          </a>
<a class="font-body-md text-body-md text-on-surface-variant hover:text-on-surface h-full flex items-center gap-space-xs transition-colors" data-path="stars" href="#">
<span class="material-symbols-outlined text-[16px] text-amber-400">star</span>
            Stars <span class="font-label-code-sm text-label-code-sm px-1.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">28</span>
</a>
</nav>
</div>
</div>
</header>
<!-- Ambient Matrix Digital Rain Accents (Background Streamers) -->
<div class="fixed inset-0 pointer-events-none z-0 opacity-15 overflow-hidden">
<canvas class="w-full h-full block" id="ambient-matrix-rain"></canvas>
</div>
<main class="w-full pt-28 bg-surface relative z-10">
<div class="flex flex-col w-full">
<div class="max-w-[1280px] w-full mx-auto px-gutter-desktop py-space-lg">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
<!-- Left Sidebar Profile Column (~296px) -->
<aside class="lg:col-span-3 flex flex-col gap-space-md w-full">
<!-- FEATURE 1: ANIMATED SQUIRTLE SQUAD GIF WITH MATRIX DIGITAL BINARY CRT TERMINAL AESTHETIC -->
<div class="relative group mx-auto lg:mx-0 w-64 lg:w-full max-w-[260px]">
<div class="relative w-[260px] h-[260px] rounded-2xl overflow-hidden bg-surface-container-lowest shadow-[0_0_30px_rgba(0,0,0,0.8)] border-2 border-secondary/50 ring-2 ring-secondary/20 crt-glow transition-all duration-300 hover:ring-secondary/60 hover:shadow-[0_0_35px_rgba(75,226,96,0.4)]">
<!-- Falling Matrix Binary Digital Rain Backdrop Canvas -->
<canvas class="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" id="avatar-matrix-canvas"></canvas>
<!-- Animated Squirtle Squad GIF -->
<img alt="Squirtle Squad" class="relative z-10 w-full h-full object-cover mix-blend-screen opacity-95 transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5oHEehVjCAcqy73RVbtxo3SAVs2MgemO3FRA2fb14t97CciWFs1RLFDF66FN3uJ6AlgTwwube6FSQXTGLdrLSw6l9CA2_f47GpmeOGotl5COP5gyveQ3aGbctbLdguqE79J-yT0-dbiw-zMGAWazH7raWUVK0hpSugHOiQwEPcDWblhPIiOngplqVF_1-YNEMS7r_rGTunUb2pumVUB0Ne4IIqJU_NxYyqigrnadbWTg496BA-ZUTHfIbk-D-pLdpew"/>
<!-- Overlay CRT Green Scanlines & Grid HUD -->
<div class="absolute inset-0 scanlines opacity-50 pointer-events-none z-20"></div>
<div class="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-secondary/10 pointer-events-none z-20"></div>
<!-- Cyber Terminal Frame Corner Accents -->
<div class="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-secondary z-30 pointer-events-none"></div>
<div class="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-secondary z-30 pointer-events-none"></div>
<div class="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-secondary z-30 pointer-events-none"></div>
<div class="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-secondary z-30 pointer-events-none"></div>
<!-- Flowing Binary Stream Watermark Header -->
<div class="absolute top-2 inset-x-2 flex items-center justify-between z-30 px-1 font-mono text-[9px] text-secondary/80 pointer-events-none bg-surface-container-lowest/80 backdrop-blur rounded border border-secondary/30">
<span class="truncate">SQUIRTLE_SYS://01001001</span>
<span class="flex items-center gap-1 shrink-0">
<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
<span>LIVE</span>
</span>
</div>
<!-- Binary Status Tag at Bottom -->
<div class="absolute bottom-2 left-2 z-30 flex items-center gap-1 bg-surface-container-lowest/85 backdrop-blur border border-secondary/40 px-2 py-0.5 rounded text-[9px] font-mono text-secondary">
<span>01001100 01001001</span>
</div>
</div>
<!-- Status Pill Bubble -->
<div class="absolute -bottom-2 right-1 z-30 flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high/95 backdrop-blur border border-secondary/40 text-on-surface shadow-md hover:bg-surface-bright hover:border-secondary/70 transition-colors cursor-pointer text-xs">
<span>💭</span>
<span class="font-body-sm text-body-sm text-on-surface truncate max-w-[130px]">Building neural nets</span>
</div>
</div>
<!-- Name & Handle -->
<div class="flex flex-col pt-space-xs text-left">
<h1 class="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight flex items-center gap-2">
<span>CS Student &amp; AI Enthusiast</span>
</h1>
<p class="font-body-lg text-body-lg text-outline flex items-center gap-2 font-mono">
                licet-student
                <span class="text-[11px] px-1.5 py-0.2 rounded bg-surface-container text-secondary border border-secondary/30">L-50 Trainer</span>
</p>
</div>
<!-- Bio verbatim -->
<p class="font-body-md text-body-md text-on-surface leading-relaxed border-l-2 border-secondary/50 pl-3 bg-surface-container-low/40 py-1 rounded-r">
              Computer Science student at LICET (Loyola-ICAM College of Engineering and Technology) with a keen focus and interest in Artificial Intelligence and Machine Learning.
            </p>
<!-- Edit Profile Button -->
<button class="w-full py-1.5 px-3 rounded-lg bg-surface-container-high hover:bg-surface-bright border border-outline-variant hover:border-primary/50 text-on-surface transition-all font-body-md text-body-md font-medium text-center shadow-sm flex items-center justify-center gap-2" type="button">
<span class="material-symbols-outlined text-[16px] text-primary">badge</span>
<span>Edit profile</span>
</button>
<!-- Profile Metadata Info List -->
<div class="flex flex-col gap-2 pt-space-xs font-body-sm text-body-sm text-on-surface">
<div class="flex items-start gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-outline shrink-0 text-[18px]">school</span>
<span class="text-on-surface leading-snug">Loyola-ICAM College of Engineering &amp; Technology (LICET)</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-outline shrink-0 text-[18px]">psychology</span>
<span class="text-on-surface">AI / Machine Learning &amp; Deep Learning</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-outline shrink-0 text-[18px]">location_on</span>
<span class="text-on-surface">Chennai, India</span>
</div>
<div class="flex items-center gap-2 text-on-surface-variant">
<span class="material-symbols-outlined text-outline shrink-0 text-[18px]">mail</span>
<a class="text-primary hover:underline truncate" href="#">student.cs@licet.ac.in</a>
</div>
</div>
<!-- Social Badges & External Link Chips -->
<div class="flex flex-wrap gap-1.5 pt-1">
<a class="flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/40 hover:border-secondary/40 transition-colors text-secondary font-label-code-sm text-label-code-sm" href="#">
<span class="material-symbols-outlined text-[14px]">terminal</span>
<span>Kaggle/licet-ai</span>
</a>
<a class="flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/40 hover:border-primary/40 transition-colors text-primary font-label-code-sm text-label-code-sm" href="#">
<span class="material-symbols-outlined text-[14px]">link</span>
<span>LinkedIn/in/licet-cs</span>
</a>
</div>
<!-- Achievements Section -->
<div class="pt-space-sm flex flex-col gap-2">
<div class="flex items-center justify-between">
<span class="font-body-md text-body-md font-semibold text-on-surface">Achievements</span>
<span class="font-label-code-sm text-label-code-sm text-outline">4 badges</span>
</div>
<div class="flex items-center gap-2">
<!-- Badge 1: Pull Shark -->
<div class="relative group cursor-pointer p-1.5 rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 hover:border-primary transition-all" title="Pull Shark - x2">
<span class="material-symbols-outlined text-primary text-[28px]">scuba_diving</span>
</div>
<!-- Badge 2: YOLO -->
<div class="relative group cursor-pointer p-1.5 rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 hover:border-secondary transition-all" title="YOLO - Merged without review">
<span class="material-symbols-outlined text-secondary text-[28px]">rocket_launch</span>
</div>
<!-- Badge 3: Quickdraw -->
<div class="relative group cursor-pointer p-1.5 rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 hover:border-tertiary transition-all" title="Quickdraw - Closed issue in 5 min">
<span class="material-symbols-outlined text-tertiary text-[28px]">bolt</span>
</div>
<!-- Badge 4: Arctic Vault -->
<div class="relative group cursor-pointer p-1.5 rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 hover:border-primary-fixed transition-all" title="Arctic Code Vault Contributor">
<span class="material-symbols-outlined text-primary-fixed text-[28px]">ac_unit</span>
</div>
</div>
</div>
<!-- Organizations & Squads -->
<div class="pt-space-xs flex flex-col gap-2">
<span class="font-body-md text-body-md font-semibold text-on-surface">Organizations</span>
<div class="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high border border-outline-variant/40 hover:border-secondary/40 transition-colors cursor-pointer">
<div class="w-8 h-8 rounded overflow-hidden bg-surface-container-lowest shrink-0 ring-1 ring-secondary/30">
<img alt="Squirtle Squad ML Club" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUPuTx8O2itXq42MoYYfzZJhwTXksNkyP5aJ4YV6sHe5zqNnLDg7d30-YaJaGUk43TSb-u9LyvyOa00fNhXqBlw_w8iCGSYFDyvaPJPthWwUFOyVmIzGGHYRoQmGe7H9wuMJHAW3W_MV9Q5BG8WFHo1ybOqc7eVRDIRgyvje6_vnFEQh6Csw-ve0C8YiEQ2LYyYUjzjT0_AAo23oDRJohYqJi8DEBjMl_TJ_no6AhY7mGyQh3sBFHln7rVuAk3oQKi3Q"/>
</div>
<div class="flex flex-col min-w-0">
<span class="font-body-sm text-body-sm font-medium text-on-surface truncate flex items-center gap-1.5">
                    Squirtle Squad ML Club
                    <span class="text-[10px] text-secondary font-mono">#007</span>
</span>
<span class="font-label-code-sm text-label-code-sm text-outline">Founding Member</span>
</div>
</div>
</div>
</aside>
<!-- Main Content Right Area (9 columns) -->
<section class="lg:col-span-9 flex flex-col gap-space-lg w-full min-w-0">
<!-- FEATURE 2: README.md Profile Box with MATRIX DIGITAL RAIN & CYBER SCANLINES -->
<div class="rounded-lg bg-surface-container-low shadow-xl border border-secondary/30 flex flex-col overflow-hidden relative group">
<!-- Matrix Digital Rain Canvas Behind Header / Terminal -->
<div class="absolute inset-0 h-44 overflow-hidden pointer-events-none z-0">
<canvas class="w-full h-full opacity-25" id="readme-matrix-canvas"></canvas>
<div class="absolute inset-0 bg-gradient-to-b from-transparent via-surface-container-low/70 to-surface-container-low"></div>
</div>
<!-- Cyber Scanline Layer -->
<div class="absolute inset-0 scanlines opacity-20 pointer-events-none z-0"></div>
<!-- README Header Bar -->
<div class="px-space-md py-2.5 bg-surface-container/90 backdrop-blur flex items-center justify-between border-b border-outline-variant/60 relative z-10">
<div class="flex items-center gap-2 font-label-code-sm text-label-code-sm text-on-surface">
<span class="material-symbols-outlined text-secondary text-[16px] animate-pulse">terminal</span>
<span class="text-outline">licet-student</span>
<span class="text-outline">/</span>
<span class="font-semibold text-on-surface">README.md</span>
<span class="hidden sm:inline-block font-mono text-[10px] text-secondary/70 bg-secondary/10 px-1.5 py-0.5 rounded border border-secondary/20">UTF-8 // [MATRIX-LINKED]</span>
</div>
<div class="flex items-center gap-3">
<!-- Live Matrix stream indicator -->
<span class="font-mono text-[11px] text-secondary hidden md:inline-flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                    01000001 01001001
                  </span>
<button class="text-outline hover:text-primary transition-colors flex items-center gap-1" title="Edit Readme">
<span class="material-symbols-outlined text-[16px]">edit</span>
</button>
</div>
</div>
<!-- README Content -->
<div class="p-space-lg flex flex-col gap-space-md relative z-10">
<!-- Cyber Greeting & Summary -->
<div class="flex flex-col gap-2">
<div class="flex flex-wrap items-center justify-between gap-2">
<h2 class="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight flex items-center gap-2">
<span>👋 Hey there! Welcome to my GitHub workspace.</span>
</h2>
<span class="px-2 py-0.5 rounded bg-secondary/10 border border-secondary/30 text-secondary font-mono text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">water_drop</span> Hydro-AI System Ready
                    </span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    I am an aspiring AI engineer pursuing Computer Science Engineering at <span class="text-primary font-medium">Loyola-ICAM College of Engineering and Technology (LICET)</span>. My research and development revolves around computer vision architectures, attention-based NLP pipelines, low-level neural model quantization, and distributed deep learning algorithms.
                  </p>
</div>
<!-- Tech Stack Categories -->
<div class="flex flex-col gap-3 pt-2">
<div class="flex items-center justify-between">
<span class="font-label-code-sm text-label-code-sm uppercase tracking-wider text-outline font-semibold flex items-center gap-1.5">
<span class="material-symbols-outlined text-secondary text-[16px]">memory</span> Technologies &amp; Frameworks
                    </span>
<span class="font-mono text-[11px] text-outline">01100011 01101111 01100100 01100101</span>
</div>
<!-- Core AI / ML Badges -->
<div class="flex flex-col gap-1.5">
<span class="font-body-sm text-body-sm text-on-surface-variant font-medium">Core AI / Machine Learning:</span>
<div class="flex flex-wrap gap-1.5">
<span class="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-code-sm text-label-code-sm flex items-center gap-1 hover:bg-tertiary/20 transition-colors">
<span class="material-symbols-outlined text-[12px]">neurology</span> PyTorch
                      </span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-code-sm text-label-code-sm flex items-center gap-1 hover:bg-tertiary/20 transition-colors">
<span class="material-symbols-outlined text-[12px]">hub</span> TensorFlow
                      </span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-code-sm text-label-code-sm">Scikit-learn</span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-code-sm text-label-code-sm">🤗 Hugging Face</span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-code-sm text-label-code-sm">OpenCV</span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-code-sm text-label-code-sm">NumPy</span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-code-sm text-label-code-sm">Pandas</span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-code-sm text-label-code-sm">Matplotlib</span>
<span class="px-2 py-0.5 rounded bg-tertiary-container/20 border border-tertiary/30 text-tertiary font-label-code-sm text-label-code-sm">Jupyter</span>
</div>
</div>
<!-- Languages Badges -->
<div class="flex flex-col gap-1.5 pt-1">
<span class="font-body-sm text-body-sm text-on-surface-variant font-medium">Programming Languages:</span>
<div class="flex flex-wrap gap-1.5">
<span class="px-2.5 py-0.5 rounded bg-primary-container/20 border border-primary/40 text-primary font-label-code-sm text-label-code-sm font-semibold flex items-center gap-1">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                        Python (Primary)
                      </span>
<span class="px-2 py-0.5 rounded bg-primary-container/20 border border-primary/30 text-primary font-label-code-sm text-label-code-sm">C++</span>
<span class="px-2 py-0.5 rounded bg-primary-container/20 border border-primary/30 text-primary font-label-code-sm text-label-code-sm">TypeScript</span>
<span class="px-2 py-0.5 rounded bg-primary-container/20 border border-primary/30 text-primary font-label-code-sm text-label-code-sm">SQL</span>
</div>
</div>
<!-- Dev Tools Badges -->
<div class="flex flex-col gap-1.5 pt-1">
<span class="font-body-sm text-body-sm text-on-surface-variant font-medium">DevOps, Acceleration &amp; Backend:</span>
<div class="flex flex-wrap gap-1.5">
<span class="px-2 py-0.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-label-code-sm text-label-code-sm">FastAPI</span>
<span class="px-2 py-0.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-label-code-sm text-label-code-sm">Flask</span>
<span class="px-2 py-0.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-label-code-sm text-label-code-sm">Docker</span>
<span class="px-2 py-0.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-label-code-sm text-label-code-sm">Linux / Bash</span>
<span class="px-2 py-0.5 rounded bg-secondary/15 border border-secondary/40 text-secondary font-label-code-sm text-label-code-sm font-semibold shadow-[0_0_10px_rgba(75,226,96,0.15)]">NVIDIA CUDA</span>
<span class="px-2 py-0.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-label-code-sm text-label-code-sm">Weights &amp; Biases</span>
<span class="px-2 py-0.5 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-label-code-sm text-label-code-sm">Git CI/CD</span>
</div>
</div>
</div>
<!-- Most Used Languages Bar -->
<div class="pt-space-sm flex flex-col gap-2">
<div class="flex items-center justify-between text-on-surface font-label-code-sm text-label-code-sm">
<span class="font-medium flex items-center gap-1.5">
<span class="material-symbols-outlined text-[14px] text-primary">analytics</span> Languages Breakdown
                    </span>
<span class="text-outline">Calculated from 14 public repos</span>
</div>
<!-- Ratio Bar -->
<div class="w-full h-2.5 rounded-full overflow-hidden flex bg-surface-container border border-outline-variant/30">
<div class="h-full bg-primary" style="width: 72%;" title="Python: 72%"></div>
<div class="h-full bg-tertiary" style="width: 16%;" title="C++: 16%"></div>
<div class="h-full bg-secondary" style="width: 12%;" title="TypeScript: 12%"></div>
</div>
<!-- Legend -->
<div class="flex flex-wrap items-center gap-4 pt-1 font-label-code-sm text-label-code-sm">
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span class="text-on-surface font-medium">Python</span>
<span class="text-outline">72.0%</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span class="text-on-surface font-medium">C++</span>
<span class="text-outline">16.0%</span>
</div>
<div class="flex items-center gap-1.5">
<span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span class="text-on-surface font-medium">TypeScript</span>
<span class="text-outline">12.0%</span>
</div>
</div>
</div>
</div>
</div>
<!-- FEATURE 3: CIRCULAR MATRIX BINARY POKEBALL REPOSITORIES CAROUSEL -->
<div class="flex flex-col gap-space-sm pt-2">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="font-body-md text-body-md font-semibold text-on-surface flex items-center gap-1.5">
<!-- Circular Matrix Poké-Orb Symbol -->
<span class="inline-block w-4 h-4 rounded-full border border-secondary overflow-hidden relative shadow-[0_0_8px_#4be260]">
<span class="absolute inset-0 bg-red-600/80 h-1/2"></span>
<span class="absolute inset-x-0 bottom-0 bg-emerald-950 h-1/2"></span>
<span class="absolute inset-x-0 top-[42%] h-[16%] bg-black"></span>
<span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full border-[0.5px] border-secondary shadow-[0_0_4px_#4be260]"></span>
</span>
                    Pinned Repositories &amp; Matrix Pokéball Arsenal
                  </span>
<span class="hidden sm:inline-block font-label-code-sm text-label-code-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded border border-secondary/30">
                    6 Binary Spheres Active
                  </span>
</div>
<!-- Controls: Left / Right Navigation Buttons -->
<div class="flex items-center gap-2">
<button class="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-on-surface hover:text-secondary transition-colors disabled:opacity-30" id="poke-prev" title="Previous Matrix Orb">
<span class="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button class="w-8 h-8 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-on-surface hover:text-secondary transition-colors" id="poke-next" title="Next Matrix Orb">
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
<button class="font-body-sm text-body-sm text-outline hover:text-primary transition-colors hidden md:inline ml-2">Customize pins</button>
</div>
</div>
<!-- Carousel Track Container -->
<div class="relative w-full rounded-xl bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-space-md border border-outline-variant/50 shadow-lg overflow-hidden">
<!-- Ambient Subtle Matrix Green Grid Pattern -->
<div class="absolute inset-0 opacity-10 bg-[radial-gradient(#4be260_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
<!-- Scrollable Belt -->
<div class="pokeball-slider flex gap-6 overflow-x-auto pb-4 pt-3 px-2 snap-x snap-mandatory" id="pokeball-carousel">
<!-- Pokéball Orb 1: vision-object-classifier -->
<div class="pokeball-card snap-center shrink-0 w-[290px] flex flex-col items-center group cursor-pointer relative" onclick="triggerCatch(this)">
<!-- Strictly Circular 1:1 Matrix Poké-Orb -->
<div class="matrix-orb-wrap w-44 flex flex-col items-center">
<div class="matrix-pokeball w-40 h-40 border-2 border-secondary/60 relative">
<!-- Top Hemisphere: Red Digital Binary Construct -->
<div class="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-rose-950 via-red-900 to-[#1e0707] border-b border-black">
<!-- Flowing Binary Matrix Lines (Red-Tinted & Bright Green Matrix Numbers) -->
<div class="binary-stream-anim binary-stream-top font-mono text-[9px] leading-[11px] tracking-widest text-emerald-400/70 select-none p-1.5 opacity-80 whitespace-pre">
01101001 01100011 01100101
10010101 01110110 01101001
01110011 01101001 01101111
01101110 11010010 01000001
01101001 01100011 01100100
10010101 01110110 01101001
</div>
<!-- Curved Glass Spherical Specular Reflection -->
<div class="absolute top-2 left-4 w-12 h-6 bg-white/20 rounded-full blur-[2px] -rotate-25 pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<!-- Central Matrix Equator Band -->
<div class="absolute top-1/2 left-0 w-full h-[18px] -translate-y-1/2 bg-black border-y-2 border-secondary/50 z-10 flex items-center justify-center">
<span class="text-[8px] font-mono text-secondary tracking-widest uppercase">01://SYS-V1</span>
</div>
<!-- Bottom Hemisphere: Cyan / White Matrix Binary Construct -->
<div class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-to-t from-emerald-950 via-slate-900 to-black">
<div class="binary-stream-anim font-mono text-[9px] leading-[11px] tracking-widest text-secondary/75 select-none p-1.5 opacity-80 whitespace-pre">
11001010 10100101 01010101
00110101 11010100 00101010
01100011 01101111 01100100
01100101 01110011 01111001
11001010 10100101 01010101
00110101 11010100 00101010
</div>
<div class="absolute bottom-2 inset-x-6 h-4 bg-secondary/15 rounded-full blur-sm pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<!-- Central Glowing Cybernetic Release Core -->
<div class="pokeball-matrix-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black border-2 border-secondary z-20 flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_#4be260]">
<div class="w-5 h-5 rounded-full bg-surface-container-lowest border border-secondary flex items-center justify-center">
<span class="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_#4be260] animate-pulse"></span>
</div>
</div>
</div>
</div>
<!-- Attached Repository Card -->
<div class="w-full mt-3 p-3 rounded-lg bg-surface-container-high/90 border border-outline-variant/60 group-hover:border-secondary/60 transition-all shadow-md flex flex-col gap-1.5 relative">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary font-body-md truncate group-hover:underline text-sm flex items-center gap-1 font-mono">
<span class="material-symbols-outlined text-[15px] text-secondary">deployed_code</span>
                          vision-object-classifier
                        </span>
<span class="font-label-code-sm text-[10px] px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-secondary border border-secondary/30 font-mono">Public</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 text-xs">
                        PyTorch &amp; OpenCV real-time visual recognition model tuned with multi-stream feature pyramids.
                      </p>
<div class="flex flex-wrap gap-1 pt-1">
<span class="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px]">PyTorch</span>
<span class="px-1.5 py-0.5 rounded bg-secondary/10 text-secondary font-mono text-[10px]">OpenCV</span>
</div>
<div class="flex items-center justify-between pt-2 border-t border-outline-variant/30 font-label-code-sm text-[11px] text-outline">
<div class="flex items-center gap-1 text-on-surface">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<span>Python</span>
</div>
<div class="flex items-center gap-3">
<span class="flex items-center gap-0.5 text-on-surface hover:text-amber-400"><span class="material-symbols-outlined text-[13px] text-amber-400">star</span> 42</span>
<span class="flex items-center gap-0.5 text-on-surface"><span class="material-symbols-outlined text-[13px]">fork_right</span> 11</span>
</div>
</div>
</div>
</div>
<!-- Pokéball Orb 2: nlp-transformer-workbench -->
<div class="pokeball-card snap-center shrink-0 w-[290px] flex flex-col items-center group cursor-pointer relative" onclick="triggerCatch(this)">
<div class="matrix-orb-wrap w-44 flex flex-col items-center">
<div class="matrix-pokeball w-40 h-40 border-2 border-tertiary/60 relative">
<div class="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-purple-950 via-red-950 to-black border-b border-black">
<div class="binary-stream-anim binary-stream-top font-mono text-[9px] leading-[11px] tracking-widest text-tertiary/75 select-none p-1.5 opacity-80 whitespace-pre">
01001110 01001100 01010000
01010100 01010010 01000001
01001110 01010011 01000110
01001111 01010010 01001101
01001110 01001100 01010000
01010100 01010010 01000001
</div>
<div class="absolute top-2 left-4 w-12 h-6 bg-white/20 rounded-full blur-[2px] -rotate-25 pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="absolute top-1/2 left-0 w-full h-[18px] -translate-y-1/2 bg-black border-y-2 border-tertiary/50 z-10 flex items-center justify-center">
<span class="text-[8px] font-mono text-tertiary tracking-widest uppercase">02://TRANSFORM</span>
</div>
<div class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-to-t from-indigo-950 via-slate-900 to-black">
<div class="binary-stream-anim font-mono text-[9px] leading-[11px] tracking-widest text-secondary/75 select-none p-1.5 opacity-80 whitespace-pre">
10101011 00110100 11010101
01100011 01101111 01100100
01100101 01110011 01111001
00110101 11010100 00101010
10101011 00110100 11010101
01100011 01101111 01100100
</div>
<div class="absolute bottom-2 inset-x-6 h-4 bg-tertiary/15 rounded-full blur-sm pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="pokeball-matrix-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black border-2 border-tertiary z-20 flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_#ce9bff]">
<div class="w-5 h-5 rounded-full bg-surface-container-lowest border border-tertiary flex items-center justify-center">
<span class="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_#ce9bff] animate-pulse"></span>
</div>
</div>
</div>
</div>
<div class="w-full mt-3 p-3 rounded-lg bg-surface-container-high/90 border border-outline-variant/60 group-hover:border-tertiary/60 transition-all shadow-md flex flex-col gap-1.5 relative">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary font-body-md truncate group-hover:underline text-sm flex items-center gap-1 font-mono">
<span class="material-symbols-outlined text-[15px] text-tertiary">chat</span>
                          nlp-transformer-workbench
                        </span>
<span class="font-label-code-sm text-[10px] px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-tertiary border border-tertiary/30 font-mono">Public</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 text-xs">
                        Fine-tuning LLMs, LoRA adapters, and multi-class sentiment classification pipelines with transformers.
                      </p>
<div class="flex flex-wrap gap-1 pt-1">
<span class="px-1.5 py-0.5 rounded bg-tertiary/10 text-tertiary font-mono text-[10px]">HuggingFace</span>
<span class="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px]">LoRA</span>
</div>
<div class="flex items-center justify-between pt-2 border-t border-outline-variant/30 font-label-code-sm text-[11px] text-outline">
<div class="flex items-center gap-1 text-on-surface">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<span>Python</span>
</div>
<div class="flex items-center gap-3">
<span class="flex items-center gap-0.5 text-on-surface hover:text-amber-400"><span class="material-symbols-outlined text-[13px] text-amber-400">star</span> 38</span>
<span class="flex items-center gap-0.5 text-on-surface"><span class="material-symbols-outlined text-[13px]">fork_right</span> 8</span>
</div>
</div>
</div>
</div>
<!-- Pokéball Orb 3: ml-algorithms-scratch -->
<div class="pokeball-card snap-center shrink-0 w-[290px] flex flex-col items-center group cursor-pointer relative" onclick="triggerCatch(this)">
<div class="matrix-orb-wrap w-44 flex flex-col items-center">
<div class="matrix-pokeball w-40 h-40 border-2 border-secondary/60 relative">
<div class="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-rose-950 via-amber-950 to-black border-b border-black">
<div class="binary-stream-anim binary-stream-top font-mono text-[9px] leading-[11px] tracking-widest text-emerald-400/80 select-none p-1.5 opacity-80 whitespace-pre">
01001101 01001100 00101101
01000001 01001100 01000111
01001111 01010011 01000011
01010010 01000001 01010100
01001101 01001100 00101101
01000001 01001100 01000111
</div>
<div class="absolute top-2 left-4 w-12 h-6 bg-white/20 rounded-full blur-[2px] -rotate-25 pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="absolute top-1/2 left-0 w-full h-[18px] -translate-y-1/2 bg-black border-y-2 border-secondary/50 z-10 flex items-center justify-center">
<span class="text-[8px] font-mono text-secondary tracking-widest uppercase">03://MATH-CORE</span>
</div>
<div class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-to-t from-emerald-950 via-slate-900 to-black">
<div class="binary-stream-anim font-mono text-[9px] leading-[11px] tracking-widest text-secondary/75 select-none p-1.5 opacity-80 whitespace-pre">
11010010 01000001 01101001
01100011 01100100 10010101
01110110 01101001 01110011
11010010 01000001 01101001
01100011 01100100 10010101
01110110 01101001 01110011
</div>
<div class="absolute bottom-2 inset-x-6 h-4 bg-secondary/15 rounded-full blur-sm pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="pokeball-matrix-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black border-2 border-secondary z-20 flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_#4be260]">
<div class="w-5 h-5 rounded-full bg-surface-container-lowest border border-secondary flex items-center justify-center">
<span class="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_#4be260] animate-pulse"></span>
</div>
</div>
</div>
</div>
<div class="w-full mt-3 p-3 rounded-lg bg-surface-container-high/90 border border-outline-variant/60 group-hover:border-secondary/60 transition-all shadow-md flex flex-col gap-1.5 relative">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary font-body-md truncate group-hover:underline text-sm flex items-center gap-1 font-mono">
<span class="material-symbols-outlined text-[15px] text-secondary">calculate</span>
                          ml-algorithms-scratch
                        </span>
<span class="font-label-code-sm text-[10px] px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-secondary border border-secondary/30 font-mono">Public</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 text-xs">
                        Core machine learning algorithms (linear, logistic, SVM, random forests, k-means) in pure NumPy.
                      </p>
<div class="flex flex-wrap gap-1 pt-1">
<span class="px-1.5 py-0.5 rounded bg-secondary/10 text-secondary font-mono text-[10px]">NumPy</span>
<span class="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-mono text-[10px]">Math</span>
</div>
<div class="flex items-center justify-between pt-2 border-t border-outline-variant/30 font-label-code-sm text-[11px] text-outline">
<div class="flex items-center gap-1 text-on-surface">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span>Jupyter</span>
</div>
<div class="flex items-center gap-3">
<span class="flex items-center gap-0.5 text-on-surface hover:text-amber-400"><span class="material-symbols-outlined text-[13px] text-amber-400">star</span> 65</span>
<span class="flex items-center gap-0.5 text-on-surface"><span class="material-symbols-outlined text-[13px]">fork_right</span> 19</span>
</div>
</div>
</div>
</div>
<!-- Pokéball Orb 4: autonomous-rl-agent -->
<div class="pokeball-card snap-center shrink-0 w-[290px] flex flex-col items-center group cursor-pointer relative" onclick="triggerCatch(this)">
<div class="matrix-orb-wrap w-44 flex flex-col items-center">
<div class="matrix-pokeball w-40 h-40 border-2 border-primary/60 relative">
<div class="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-rose-950 via-cyan-950 to-black border-b border-black">
<div class="binary-stream-anim binary-stream-top font-mono text-[9px] leading-[11px] tracking-widest text-primary/75 select-none p-1.5 opacity-80 whitespace-pre">
01000001 01010101 01010100
01001111 01010010 01001100
01000001 01000111 01000101
01001110 01010100 00100000
01000001 01010101 01010010
01001111 01010010 01001100
</div>
<div class="absolute top-2 left-4 w-12 h-6 bg-white/20 rounded-full blur-[2px] -rotate-25 pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="absolute top-1/2 left-0 w-full h-[18px] -translate-y-1/2 bg-black border-y-2 border-primary/50 z-10 flex items-center justify-center">
<span class="text-[8px] font-mono text-primary tracking-widest uppercase">04://RL-AGENT</span>
</div>
<div class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-to-t from-blue-950 via-slate-900 to-black">
<div class="binary-stream-anim font-mono text-[9px] leading-[11px] tracking-widest text-secondary/75 select-none p-1.5 opacity-80 whitespace-pre">
01101001 01101110 01100101
01110101 01110010 01101111
01101110 01110011 00100000
01100111 01111001 01101101
01101001 01101110 01100101
01110101 01110010 01101111
</div>
<div class="absolute bottom-2 inset-x-6 h-4 bg-primary/15 rounded-full blur-sm pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="pokeball-matrix-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black border-2 border-primary z-20 flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_#38bdf8]">
<div class="w-5 h-5 rounded-full bg-surface-container-lowest border border-primary flex items-center justify-center">
<span class="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_#38bdf8] animate-pulse"></span>
</div>
</div>
</div>
</div>
<div class="w-full mt-3 p-3 rounded-lg bg-surface-container-high/90 border border-outline-variant/60 group-hover:border-primary/60 transition-all shadow-md flex flex-col gap-1.5 relative">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary font-body-md truncate group-hover:underline text-sm flex items-center gap-1 font-mono">
<span class="material-symbols-outlined text-[15px] text-primary">smart_toy</span>
                          autonomous-rl-agent
                        </span>
<span class="font-label-code-sm text-[10px] px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-primary border border-primary/30 font-mono">Public</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 text-xs">
                        Deep Q-Network reinforcement learning agent solving OpenAI Gym navigation physics.
                      </p>
<div class="flex flex-wrap gap-1 pt-1">
<span class="px-1.5 py-0.5 rounded bg-primary/10 text-primary font-mono text-[10px]">Gymnasium</span>
<span class="px-1.5 py-0.5 rounded bg-surface-container text-secondary font-mono text-[10px]">DQN</span>
</div>
<div class="flex items-center justify-between pt-2 border-t border-outline-variant/30 font-label-code-sm text-[11px] text-outline">
<div class="flex items-center gap-1 text-on-surface">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<span>Python</span>
</div>
<div class="flex items-center gap-3">
<span class="flex items-center gap-0.5 text-on-surface hover:text-amber-400"><span class="material-symbols-outlined text-[13px] text-amber-400">star</span> 27</span>
<span class="flex items-center gap-0.5 text-on-surface"><span class="material-symbols-outlined text-[13px]">fork_right</span> 5</span>
</div>
</div>
</div>
</div>
<!-- Pokéball Orb 5: licet-cs-curriculum-hub -->
<div class="pokeball-card snap-center shrink-0 w-[290px] flex flex-col items-center group cursor-pointer relative" onclick="triggerCatch(this)">
<div class="matrix-orb-wrap w-44 flex flex-col items-center">
<div class="matrix-pokeball w-40 h-40 border-2 border-tertiary/60 relative">
<div class="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-rose-950 via-purple-950 to-black border-b border-black">
<div class="binary-stream-anim binary-stream-top font-mono text-[9px] leading-[11px] tracking-widest text-tertiary/75 select-none p-1.5 opacity-80 whitespace-pre">
01001100 01001001 01000011
01000101 01010100 00101101
01000011 01010011 00101101
01001000 01010101 01000010
01001100 01001001 01000011
01000101 01010100 00101101
</div>
<div class="absolute top-2 left-4 w-12 h-6 bg-white/20 rounded-full blur-[2px] -rotate-25 pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="absolute top-1/2 left-0 w-full h-[18px] -translate-y-1/2 bg-black border-y-2 border-tertiary/50 z-10 flex items-center justify-center">
<span class="text-[8px] font-mono text-tertiary tracking-widest uppercase">05://LICET-CORE</span>
</div>
<div class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-to-t from-purple-950 via-slate-900 to-black">
<div class="binary-stream-anim font-mono text-[9px] leading-[11px] tracking-widest text-secondary/75 select-none p-1.5 opacity-80 whitespace-pre">
01100011 01110000 01110000
00110010 00110000 00100000
01100001 01101100 01100111
01101111 01110011 00100000
01100011 01110000 01110000
00110010 00110000 00100000
</div>
<div class="absolute bottom-2 inset-x-6 h-4 bg-tertiary/15 rounded-full blur-sm pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="pokeball-matrix-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black border-2 border-tertiary z-20 flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_#ce9bff]">
<div class="w-5 h-5 rounded-full bg-surface-container-lowest border border-tertiary flex items-center justify-center">
<span class="w-2.5 h-2.5 rounded-full bg-tertiary shadow-[0_0_8px_#ce9bff] animate-pulse"></span>
</div>
</div>
</div>
</div>
<div class="w-full mt-3 p-3 rounded-lg bg-surface-container-high/90 border border-outline-variant/60 group-hover:border-tertiary/60 transition-all shadow-md flex flex-col gap-1.5 relative">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary font-body-md truncate group-hover:underline text-sm flex items-center gap-1 font-mono">
<span class="material-symbols-outlined text-[15px] text-tertiary">account_tree</span>
                          licet-cs-curriculum-hub
                        </span>
<span class="font-label-code-sm text-[10px] px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-tertiary border border-tertiary/30 font-mono">Public</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 text-xs">
                        Data structures, algorithms, graph theory solvers, and laboratory assignments at LICET.
                      </p>
<div class="flex flex-wrap gap-1 pt-1">
<span class="px-1.5 py-0.5 rounded bg-tertiary/10 text-tertiary font-mono text-[10px]">C++20</span>
<span class="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-mono text-[10px]">LICET</span>
</div>
<div class="flex items-center justify-between pt-2 border-t border-outline-variant/30 font-label-code-sm text-[11px] text-outline">
<div class="flex items-center gap-1 text-on-surface">
<span class="w-2 h-2 rounded-full bg-tertiary"></span>
<span>C++</span>
</div>
<div class="flex items-center gap-3">
<span class="flex items-center gap-0.5 text-on-surface hover:text-amber-400"><span class="material-symbols-outlined text-[13px] text-amber-400">star</span> 19</span>
<span class="flex items-center gap-0.5 text-on-surface"><span class="material-symbols-outlined text-[13px]">fork_right</span> 4</span>
</div>
</div>
</div>
</div>
<!-- Pokéball Orb 6: medical-imaging-cnn -->
<div class="pokeball-card snap-center shrink-0 w-[290px] flex flex-col items-center group cursor-pointer relative" onclick="triggerCatch(this)">
<div class="matrix-orb-wrap w-44 flex flex-col items-center">
<div class="matrix-pokeball w-40 h-40 border-2 border-secondary/60 relative">
<div class="absolute inset-x-0 top-0 h-1/2 overflow-hidden bg-gradient-to-b from-rose-950 via-teal-950 to-black border-b border-black">
<div class="binary-stream-anim binary-stream-top font-mono text-[9px] leading-[11px] tracking-widest text-emerald-400/80 select-none p-1.5 opacity-80 whitespace-pre">
01001101 01000101 01000100
01001001 01000011 01000001
01001100 00101101 01000011
01001110 01001110 00100000
01001101 01000101 01000100
01001001 01000011 01000001
</div>
<div class="absolute top-2 left-4 w-12 h-6 bg-white/20 rounded-full blur-[2px] -rotate-25 pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="absolute top-1/2 left-0 w-full h-[18px] -translate-y-1/2 bg-black border-y-2 border-secondary/50 z-10 flex items-center justify-center">
<span class="text-[8px] font-mono text-secondary tracking-widest uppercase">06://MED-VISION</span>
</div>
<div class="absolute inset-x-0 bottom-0 h-1/2 overflow-hidden bg-gradient-to-t from-teal-950 via-slate-900 to-black">
<div class="binary-stream-anim font-mono text-[9px] leading-[11px] tracking-widest text-secondary/75 select-none p-1.5 opacity-80 whitespace-pre">
01100011 01101110 01101110
01111000 01110010 01100001
01111001 00100000 01100111
01110010 01100001 01100100
01100011 01101110 01101110
01111000 01110010 01100001
</div>
<div class="absolute bottom-2 inset-x-6 h-4 bg-secondary/15 rounded-full blur-sm pointer-events-none"></div>
<div class="absolute inset-0 scanlines opacity-40 pointer-events-none"></div>
</div>
<div class="pokeball-matrix-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black border-2 border-secondary z-20 flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_#4be260]">
<div class="w-5 h-5 rounded-full bg-surface-container-lowest border border-secondary flex items-center justify-center">
<span class="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_#4be260] animate-pulse"></span>
</div>
</div>
</div>
</div>
<div class="w-full mt-3 p-3 rounded-lg bg-surface-container-high/90 border border-outline-variant/60 group-hover:border-secondary/60 transition-all shadow-md flex flex-col gap-1.5 relative">
<div class="flex items-center justify-between">
<span class="font-semibold text-primary font-body-md truncate group-hover:underline text-sm flex items-center gap-1 font-mono">
<span class="material-symbols-outlined text-[15px] text-secondary">radiology</span>
                          medical-imaging-cnn
                        </span>
<span class="font-label-code-sm text-[10px] px-1.5 py-0.2 rounded-full bg-surface-container-lowest text-secondary border border-secondary/30 font-mono">Public</span>
</div>
<p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 text-xs">
                        Diagnostic chest X-ray classifier using deep convolutional neural nets with Grad-CAM activation mapping.
                      </p>
<div class="flex flex-wrap gap-1 pt-1">
<span class="px-1.5 py-0.5 rounded bg-secondary/10 text-secondary font-mono text-[10px]">Grad-CAM</span>
<span class="px-1.5 py-0.5 rounded bg-surface-container text-primary font-mono text-[10px]">CNN</span>
</div>
<div class="flex items-center justify-between pt-2 border-t border-outline-variant/30 font-label-code-sm text-[11px] text-outline">
<div class="flex items-center gap-1 text-on-surface">
<span class="w-2 h-2 rounded-full bg-primary"></span>
<span>Python</span>
</div>
<div class="flex items-center gap-3">
<span class="flex items-center gap-0.5 text-on-surface hover:text-amber-400"><span class="material-symbols-outlined text-[13px] text-amber-400">star</span> 31</span>
<span class="flex items-center gap-0.5 text-on-surface"><span class="material-symbols-outlined text-[13px]">fork_right</span> 7</span>
</div>
</div>
</div>
</div>
</div>
<!-- Indicator dots for carousel position -->
<div class="flex items-center justify-center gap-2 pt-2" id="carousel-dots">
<span class="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_#4be260] cursor-pointer"></span>
<span class="w-1.5 h-1.5 rounded-full bg-outline/40 cursor-pointer"></span>
<span class="w-1.5 h-1.5 rounded-full bg-outline/40 cursor-pointer"></span>
<span class="w-1.5 h-1.5 rounded-full bg-outline/40 cursor-pointer"></span>
</div>
</div>
</div>
<!-- 4. Contributions Graph & Activity Matrix -->
<div class="flex flex-col gap-space-sm">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<span class="font-body-md text-body-md font-semibold text-on-surface flex items-center gap-2">
<span class="material-symbols-outlined text-secondary text-[18px]">grid_view</span>
                  842 contributions in the last year
                </span>
<!-- Year Selector Filter -->
<div class="flex items-center gap-1 self-start sm:self-auto font-label-code-sm text-label-code-sm">
<button class="px-3 py-1 rounded bg-secondary/15 border border-secondary/40 text-secondary font-medium">2025</button>
<button class="px-3 py-1 rounded bg-surface-container-low hover:bg-surface-container text-outline transition-colors">2024</button>
<button class="px-3 py-1 rounded bg-surface-container-low hover:bg-surface-container text-outline transition-colors">2023</button>
</div>
</div>
<!-- Heatmap Container Card -->
<div class="p-space-md rounded-lg bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col gap-space-md relative overflow-hidden">
<!-- 52-week GitHub Contribution Heatmap Grid -->
<div class="w-full overflow-x-auto pb-1">
<div class="min-w-[720px] flex flex-col gap-1.5">
<!-- Month Labels -->
<div class="flex justify-between pl-8 pr-2 font-label-code-sm text-label-code-sm text-outline">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
<span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
</div>
<!-- Weekday Rows + Cells -->
<div class="flex items-start gap-2">
<div class="flex flex-col justify-between h-[88px] font-label-code-sm text-label-code-sm text-outline pt-1 pb-1">
<span>Mon</span>
<span>Wed</span>
<span>Fri</span>
</div>
<!-- Grid columns (52 weeks x 7 days) -->
<div class="flex-1 grid grid-flow-col grid-rows-7 gap-[3px] h-[88px]" id="contribution-grid">
<!-- Populated with realistic matrix green styling via JS -->
</div>
</div>
<!-- Footer legend -->
<div class="flex items-center justify-between pt-2 font-label-code-sm text-label-code-sm text-outline">
<a class="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[14px]">info</span>
                        Learn how we count contributions
                      </a>
<div class="flex items-center gap-1.5">
<span>Less</span>
<span class="w-[10px] h-[10px] rounded-sm bg-[#161b22]"></span>
<span class="w-[10px] h-[10px] rounded-sm bg-[#0e4429]"></span>
<span class="w-[10px] h-[10px] rounded-sm bg-[#006d32]"></span>
<span class="w-[10px] h-[10px] rounded-sm bg-[#26a641]"></span>
<span class="w-[10px] h-[10px] rounded-sm bg-[#39d353] shadow-[0_0_6px_#39d353]"></span>
<span>More</span>
</div>
</div>
</div>
</div>
<!-- Streak Telemetry Stats Bar with Cyber Badges -->
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t-0 bg-surface-container/70 border border-outline-variant/30 rounded p-3">
<div class="flex flex-col items-center justify-center p-2 text-center border-b sm:border-b-0 sm:border-r border-outline-variant/20">
<span class="font-headline-sm text-headline-sm font-semibold text-secondary flex items-center gap-1">
<span class="material-symbols-outlined text-[18px]">local_fire_department</span>
                      42 days
                    </span>
<span class="font-label-code-sm text-label-code-sm text-outline">Current Streak (Active)</span>
</div>
<div class="flex flex-col items-center justify-center p-2 text-center border-b sm:border-b-0 sm:border-r border-outline-variant/20">
<span class="font-headline-sm text-headline-sm font-semibold text-primary">89 days</span>
<span class="font-label-code-sm text-label-code-sm text-outline">Longest Streak (Summer '24)</span>
</div>
<div class="flex flex-col items-center justify-center p-2 text-center">
<span class="font-headline-sm text-headline-sm font-semibold text-on-surface">842</span>
<span class="font-label-code-sm text-label-code-sm text-outline">Total Commits (Last 365 Days)</span>
</div>
</div>
</div>
</div>
<!-- 5. Contribution Activity Timeline -->
<div class="flex flex-col gap-space-sm pt-2">
<span class="font-body-md text-body-md font-semibold text-on-surface flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]">history</span>
                Contribution Activity
              </span>
<div class="flex flex-col gap-3">
<!-- Month Marker -->
<div class="flex items-center gap-3">
<span class="font-label-code-sm text-label-code-sm font-semibold text-outline uppercase tracking-wider">February 2025</span>
<div class="h-[1px] flex-1 bg-surface-container-high"></div>
</div>
<!-- Activity item 1 -->
<div class="flex items-start gap-3 pl-2">
<div class="p-1 rounded-full bg-secondary-container/20 text-secondary mt-0.5 border border-secondary/30">
<span class="material-symbols-outlined text-[16px]">call_merge</span>
</div>
<div class="flex flex-col gap-1 w-full">
<div class="flex items-center justify-between text-body-sm font-body-sm">
<span class="text-on-surface">Merged 3 pull requests into <a class="text-primary hover:underline font-medium" href="#">vision-object-classifier</a></span>
<span class="text-outline font-label-code-sm text-label-code-sm">2 days ago</span>
</div>
<div class="p-2.5 rounded bg-surface-container-low border border-outline-variant/30 text-on-surface-variant font-label-code-sm text-label-code-sm flex flex-col gap-1">
<div class="flex items-center gap-2">
<span class="text-secondary font-bold">#18</span>
<span class="text-on-surface font-medium">feat: integrate multi-head spatial attention layer</span>
</div>
<span class="text-outline text-[11px]">8 commits with 4,210 additions and 118 deletions</span>
</div>
</div>
</div>
<!-- Activity item 2 -->
<div class="flex items-start gap-3 pl-2">
<div class="p-1 rounded-full bg-primary-container/20 text-primary mt-0.5 border border-primary/30">
<span class="material-symbols-outlined text-[16px]">commit</span>
</div>
<div class="flex flex-col gap-1 w-full">
<div class="flex items-center justify-between text-body-sm font-body-sm">
<span class="text-on-surface">Pushed 14 commits to <a class="text-primary hover:underline font-medium" href="#">nlp-transformer-workbench</a></span>
<span class="text-outline font-label-code-sm text-label-code-sm">4 days ago</span>
</div>
<div class="flex items-center gap-2 font-label-code-sm text-label-code-sm text-outline">
<span>Branch: <span class="text-secondary font-mono">main</span></span>
<span>•</span>
<span>LoRA fine-tuning benchmarks on LICET cluster</span>
</div>
</div>
</div>
<!-- Activity item 3 -->
<div class="flex items-start gap-3 pl-2">
<div class="p-1 rounded-full bg-tertiary-container/20 text-tertiary mt-0.5 border border-tertiary/30">
<span class="material-symbols-outlined text-[16px]">adjust</span>
</div>
<div class="flex flex-col gap-1 w-full">
<div class="flex items-center justify-between text-body-sm font-body-sm">
<span class="text-on-surface">Opened issue in <a class="text-primary hover:underline font-medium" href="#">autonomous-rl-agent</a></span>
<span class="text-outline font-label-code-sm text-label-code-sm">1 week ago</span>
</div>
<div class="flex items-center gap-2 font-label-code-sm text-label-code-sm text-on-surface-variant">
<span class="text-error font-medium">#9</span>
<span>Investigate reward clipping instability under dense observation spaces</span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</main>
<!-- Interactive Catch / Release Modal Flash Toast -->
<div class="fixed bottom-6 right-6 z-50 transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-container-highest border border-secondary shadow-[0_0_24px_rgba(75,226,96,0.3)] text-on-surface font-mono text-sm" id="poke-toast">
<span class="w-3 h-3 rounded-full bg-secondary animate-ping"></span>
<span id="poke-toast-text">Pokéball deployed! Opening repository...</span>
</div>
<!-- Standard Footer Elevated with Pokémon / Cyber Accents -->
<footer class="w-full bg-surface-container-lowest border-t border-outline-variant py-space-xl mt-space-xl relative z-10">
<div class="max-w-7xl mx-auto px-gutter-desktop flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-secondary text-[20px]">terminal</span>
<span>© 2025 GitHub, Inc. // LICET AI Research Lab</span>
</div>
<div class="flex flex-wrap items-center justify-center gap-space-md font-body-sm text-body-sm">
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Terms</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
<a class="text-on-surface-variant hover:text-secondary transition-colors font-mono text-xs" href="#">Status: All Systems Operational</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Docs</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">API</a>
</div>
</div>
</footer>
<!-- Interactive Scripts: Matrix Rain, Carousel, Avatar Canvas, and Catch Mechanics -->
<script>
    // 1. MATRIX DIGITAL RAIN SYSTEM
    function initMatrixRain(canvasId, densityFactor = 1.0) {
      const canvas = document.getElementById(canvasId);
      if (!canvas) return;
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

        ctx.fillStyle = '#4be260';
        ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // occasional cyan accent
          if (Math.random() > 0.88) {
            ctx.fillStyle = '#8ed5ff';
          } else {
            ctx.fillStyle = '#4be260';
          }

          ctx.fillText(char, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      setInterval(drawRain, 55);
    }

    // Initialize background rain, README section rain, and Avatar terminal backdrop rain
    initMatrixRain('readme-matrix-canvas');
    initMatrixRain('ambient-matrix-rain');
    initMatrixRain('avatar-matrix-canvas');

    // 2. POKÉBALL CAROUSEL CONTROLS
    const carousel = document.getElementById('pokeball-carousel');
    const prevBtn = document.getElementById('poke-prev');
    const nextBtn = document.getElementById('poke-next');

    if (carousel && prevBtn && nextBtn) {
      const scrollStep = 320;
      nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
      });
      prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
      });
    }

    // Interactive Catch / Release Animation on click
    function triggerCatch(element) {
      const orb = element.querySelector('.matrix-pokeball');
      const repoTitle = element.querySelector('span.truncate')?.innerText || 'Repository';
      
      if (orb) {
        orb.classList.remove('poke-active-trigger');
        void orb.offsetWidth; // trigger reflow
        orb.classList.add('poke-active-trigger');
      }

      // Show toast
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

    // 3. GITHUB CONTRIBUTION HEATMAP GENERATOR
    (function initContributionHeatmap() {
      const grid = document.getElementById('contribution-grid');
      if (!grid) return;
      
      const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
      const weights = [0.18, 0.28, 0.26, 0.18, 0.10];

      const pickColor = () => {
        const r = Math.random();
        let acc = 0;
        for (let i = 0; i < weights.length; i++) {
          acc += weights[i];
          if (r <= acc) return colors[i];
        }
        return colors[0];
      };

      const totalCells = 52 * 7;
      const fragment = document.createDocumentFragment();

      for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');
        cell.className = 'w-[10px] h-[10px] rounded-[2px] transition-transform duration-150 hover:scale-125 cursor-pointer hover:ring-1 hover:ring-secondary';
        const col = pickColor();
        cell.style.backgroundColor = col;
        if (col === '#39d353') {
          cell.style.boxShadow = '0 0 4px rgba(75, 226, 96, 0.6)';
        }
        cell.title = `Contributions: ${Math.floor(Math.random() * 12)} on node #${i + 1}`;
        fragment.appendChild(cell);
      }

      grid.appendChild(fragment);
    })();
  </script>
</body></html>
