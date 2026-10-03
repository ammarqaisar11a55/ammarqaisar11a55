<h1 align="center">Muhammad Ammar Qaisar</h1>

<p align="center">
  I build desktop, mobile and web tools, and solve a problem most days.<br />
  BS Software Engineering @ The University of Lahore · CGPA 3.89
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/muhammad-ammar-qaisar-474890304/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://leetcode.com/u/mammarqaisar/"><img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black" alt="LeetCode" /></a>
  <a href="mailto:ammarqaisar1130@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

---

### About

My interest in software engineering grew out of Data Structures and Algorithms.
What started as academic curiosity turned into a daily habit of competitive
programming, and that habit now shapes how I build software: measure first,
treat input as untrusted, and keep iterating until it is right.

- 🎓 BS Software Engineering, The University of Lahore (2023 – present)
- 🧠 1,000+ problems solved on LeetCode, plus Codeforces and CodeChef contests
- 🛠️ Currently building developer tools: VS Code extensions, MCP servers, browser extensions

---

### Featured projects

#### 📖 [Markdown Viewer](https://github.com/ammarqaisar11a55/Markdown-Viewer) · Desktop App
A fast, secure, offline Markdown reader for Windows and Linux. Rendering runs in
Rust (comrak for GFM, ammonia for sanitising), with syntax highlighting for ~45
languages, a live table of contents, tabs with session restore, Quick Open fuzzy
search and auto-reload on file change.<br />
`Tauri 2` `Rust` `React 19` `TypeScript` `Tailwind CSS 4` `zustand` `Shiki`

#### 🔒 [Lockdown App](https://github.com/ammarqaisar11a55/Lockdown-App) · Android App
Scheduled, hard-to-escape focus sessions built purely on official Android
device-management APIs (Device Owner, lock task mode): no root, no accessibility
tricks, no overlays. A policy reconciliation engine drives every state change
through one idempotent `reconcile()` so the device recovers correctly after
reboots or process death.<br />
`Kotlin` `Jetpack Compose` `Material 3` `Room` `Hilt` `Coroutines`

#### 📝 [Google Docs MCP](https://github.com/ammarqaisar11a55/google-docs-mcp) · Developer Tool
A Model Context Protocol server that lets Claude create, read, edit, format and
search Google Docs via the official Docs and Drive APIs. Ships as a one-file
Claude Desktop extension (`.mcpb`) or a standalone server for Claude Code,
VS Code and Cursor, with OAuth 2.0 PKCE sign-in.<br />
`Node.js` `TypeScript` `MCP` `Google Docs API` `OAuth 2.0` `zod`

#### 📊 [DevPulse](https://devpulse-three-amber.vercel.app) · Full Stack
Coding analytics in two halves: a [VS Code extension](https://github.com/ammarqaisar11a55/DevPulse-VS-Code-Extension)
that measures real coding time per project and language, and a
[web app](https://github.com/ammarqaisar11a55/DevPulse-Web) with a dashboard,
goals and an opt-in leaderboard. Time-zone and DST-correct SQL aggregation,
offline queueing, and metadata only, never keystrokes or file contents.<br />
`React 19` `TypeScript` `Express 5` `PostgreSQL` `Prisma` `TanStack Query` `Argon2id`

#### 📄 [ResumeForge](https://resumeforge-nine-dusky.vercel.app) · Full Stack
A resume builder where the preview *is* the document. A measuring pagination
engine lays out real A4/Letter pages, and headless Chrome renders the exact same
markup to PDF, one preview page to one PDF page. Drag-and-drop everything, three
templates, no account. [Source](https://github.com/ammarqaisar11a55/ResumeForge)<br />
`React` `TypeScript` `zustand` `dnd-kit` `Express` `Puppeteer` `Playwright`

#### 🎞️ [MediaFlow](https://github.com/ammarqaisar11a55/MediaFlow-chrome-extension) · Chrome Extension
A privacy-first Manifest V3 media saver: no host permissions by default, no
backend, no analytics. Detects page media through observers, joins unencrypted
HLS streams into one file, and runs downloads through a pausable, retryable queue.
Tested end to end with Puppeteer, including byte-for-byte stream verification.<br />
`TypeScript` `React 19` `Manifest V3` `Vite` `Vitest` `Puppeteer`

---

### More projects

| Project | What it is | Stack |
| --- | --- | --- |
| [LeetRunner](https://github.com/ammarqaisar11a55/LeetRunner) | VS Code extension: paste a LeetCode URL, get a runnable C++ harness with every example as a test | TypeScript, VS Code API, C++ |
| [Localhost Dashboard](https://github.com/ammarqaisar11a55/localhost-dashboard-vs-code-extension) | VS Code control center for what's running on which port, with health checks | TypeScript, React, Node.js |
| [Dormly](https://dormly-six.vercel.app/) | Hostel discovery and booking platform for students and owners (backend) | React 19, Express 5, MongoDB |
| [Notes Saver](https://notes-saver-full-stack-app-3g5e.vercel.app/) | Markdown notes with version history, sharing, JWT and Google OAuth | React, Express, MongoDB, Cloudinary |
| [URL Shortener](https://url-shortener-app-r9or.vercel.app/) · [src](https://github.com/ammarqaisar11a55/URL-Shortener-App) | Branded short links on a custom domain with click tracking | React 19, Express 5, MongoDB Atlas |
| [LeetCode Metric](https://leetcode-metric-chi.vercel.app) · [src](https://github.com/ammarqaisar11a55/LeetCode-Metric) | Dashboard turning a LeetCode profile into readable progress | JavaScript, Tailwind CSS, Vercel |
| [Ancestral Lineage Tracker](https://familytreeuol.vercel.app/) | Genealogy database with recursive CTEs for trees of any depth | Node.js, Express, MySQL |

---

### Academic work

| Project | Course | Highlights |
| --- | --- | --- |
| DeadlockOS | Operating Systems | Banker's Algorithm, Wait-For Graph cycle detection and cost-based victim selection in C++17 |
| Access Control in Windows Server | Information Security | AD DS, RBAC via security groups, NTFS/SMB permissions, GPO hardening and auditing |
| Formal Verification of ATM Withdrawal | Formal Methods | Timed automata in UPPAAL, temporal logic and Z-Notation |
| Loan Approval Prediction | Artificial Intelligence | Compared ML models on historical loan data in Python |
| Data Science Salaries 2023 | Data Mining | EDA with Pandas and Seaborn, Decision Tree classifier |
| [Revised Theme of SadaPay](https://www.figma.com/design/VfDj0J8rWdTC0Vpf26iUt6/Revised-Theme-of-Sadapay) | Human Computer Interaction | 59-screen redesign of a mobile banking app in Figma |
| Hospital Admin Program | Programming Fundamentals | Patient, doctor and appointment management in C++ |

---

### Competitive programming

- [**LeetCode Solutions**](https://github.com/ammarqaisar11a55/LeetCode-Solutions): 800+ accepted C++ solutions, named by problem number and title
- [**Codeforces Solutions**](https://github.com/ammarqaisar11a55/CodeForces-Solutions): 170+ accepted C++ solutions, greedy, number theory and constructive problems
- **CodeChef**: Starters 167 through 177

<p align="center">
  <a href="https://leetcode.com/u/mammarqaisar/"><img src="https://leetcard.jacoblin.cool/mammarqaisar?theme=dark&font=Lexend%20Deca&ext=heatmap" alt="LeetCode stats" /></a>
</p>

---

### Tech stack

**Languages** &nbsp;
![C](https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=black)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)

**Frontend** &nbsp;
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)

**Backend** &nbsp;
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)

**Databases** &nbsp;
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

**Platforms & tools** &nbsp;
![Tauri](https://img.shields.io/badge/Tauri-24C8D8?style=flat-square&logo=tauri&logoColor=white)
![Jetpack Compose](https://img.shields.io/badge/Jetpack_Compose-4285F4?style=flat-square&logo=jetpackcompose&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=flat-square&logo=ubuntu&logoColor=white)

---

### GitHub activity

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=ammarqaisar11a55&show_icons=true&theme=github_dark&hide_border=true&include_all_commits=true" alt="GitHub stats" height="165" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ammarqaisar11a55&layout=compact&theme=github_dark&hide_border=true" alt="Top languages" height="165" />
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=ammarqaisar11a55&theme=github-dark-blue&hide_border=true" alt="GitHub streak" />
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ammarqaisar11a55/ammarqaisar11a55/output/activity-graph-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/ammarqaisar11a55/ammarqaisar11a55/output/activity-graph.svg" />
    <img src="https://raw.githubusercontent.com/ammarqaisar11a55/ammarqaisar11a55/output/activity-graph.svg" alt="Contribution graph" width="100%" />
  </picture>
</p>

<p align="center">
  <img src="https://github-trophies.vercel.app/?username=ammarqaisar11a55&theme=darkhub&no-frame=true&no-bg=true&column=7&margin-w=10" alt="GitHub trophies" />
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ammarqaisar11a55/ammarqaisar11a55/output/github-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/ammarqaisar11a55/ammarqaisar11a55/output/github-snake.svg" />
    <img src="https://raw.githubusercontent.com/ammarqaisar11a55/ammarqaisar11a55/output/github-snake.svg" alt="Contribution snake" />
  </picture>
</p>

---

<p align="center"><i>"And that each person will only have what they endeavoured towards."</i></p>
