// Edit this file to change the text on the site.
export const profile = {
  name: 'Soe Moe Htet',
  nick: 'Stephen',
  role: 'Desktop Software',
  tagline: 'Local-first desktop apps for macOS, Windows and Linux.',
  statement:
    'I build desktop tools that run on your own machine: private, fast, and with a proper window, menus and shortcuts. Right now that is a git client, a word processor, a roguelike and a local-AI comic studio, all on Tauri 2 with the heavy lifting in Rust.',
  location: 'Bangkok, Thailand · UTC+7',
  email: 'soemoehtetstephen@gmail.com',
  github: 'https://github.com/Stephen-SMH',
  hub: 'https://stephen-smh.github.io/',
};

export type Platform = 'macOS' | 'Windows' | 'Linux';
export type Status = 'Planning' | 'In progress' | 'Released';
export type Release = { version: string; date: string; title: string; notes: string[] };
export type App = {
  slug: string;
  name: string;
  // line-icon path (24×24, stroked) and the tile background behind it
  icon: string;
  tint: string;
  summary: string;
  // longer write-up shown in #story on the app page
  story: string[];
  status: Status;
  platforms: Platform[];
  stack: string[];
  pipeline?: string[];
  repo?: string;
  download?: string;
  // store-page details
  version: string;
  released: string;
  updated: string;
  license: string;
  size?: string;
  features: string[];
  requirements: { os: string[]; hardware: string[]; software: string[] };
  releases: Release[];
  roadmap: { id: string; title: string; items: string[] }[];
};

export const projects: App[] = [
  {
    slug: 'gitdesk',
    name: 'GitDesk',
    icon: 'M4 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M4 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M16 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0M6 7v10M18 8v1.5a4 4 0 0 1-4 4h-4a4 4 0 0 0-4 3.5',
    tint: 'linear-gradient(135deg, #fb923c, #e11d48)',
    summary:
      'A lightweight desktop git client in the spirit of GitHub Desktop. Review changes with a proper diff, pick exactly which files go into a commit, browse history, switch branches and sync with your remote. Under 5 MB, with a Rust core that drives your own git.',
    story: [
      'GitDesk covers the git work I do most days: read a diff, tick the files that belong in this commit, push. It does that in an app small enough not to notice, at 4.4 MB, and opens straight into a repository from the terminal.',
      'It does not reimplement git. The Rust core drives the git already on your PATH and parses its output, so your config, hooks, credential helper and SSH agent keep working exactly as they do on the command line.',
      'That git layer is covered by integration tests that run against real repositories. Next up are hunk-level staging, stash, and resolving merge conflicts without leaving the app.',
    ],
    status: 'In progress',
    platforms: ['macOS', 'Windows', 'Linux'],
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'Vite', 'git CLI'],
    pipeline: ['Changes', 'Diff', 'Commit', 'History', 'Push'],
    repo: 'https://github.com/Stephen-SMH/gitdesk',
    version: '0.1.0',
    released: 'Oct 11, 2026',
    updated: 'Oct 11, 2026',
    license: 'MIT',
    size: '4.4 MB',
    features: [
      'Changes view with per-file checkboxes: commit exactly the files you pick and leave the rest alone.',
      'Side-by-side line numbers and coloured hunks in the diff view, for working-tree and historical changes.',
      'History with commit details and per-file diffs, loaded 100 commits at a time.',
      'Branch picker with filter, create-from-current and one-click checkout of remote branches.',
      'Fetch, pull, push and publish from a single toolbar button that shows ahead and behind counts.',
      'Clone by URL, add an existing folder, or create a new repository. Your keychain and SSH agent handle auth.',
      'Opens straight into a repository from the command line: gitdesk ~/code/project.',
    ],
    requirements: {
      os: ['macOS 11+', 'Windows 10 / 11 (WebView2)', 'Ubuntu 22.04+ (WebKitGTK)'],
      hardware: ['Any machine that runs git', 'Around 100 MB of RAM with a repository open'],
      software: ['git 2.23 or newer on PATH'],
    },
    releases: [
      { version: '0.1.0', date: 'Oct 11, 2026', title: 'First working client', notes: ['Changes, diff, commit, discard, history, branches, fetch/pull/push and clone.', 'Rust git layer covered by integration tests against real repositories.', 'Light and dark themes that follow the system.'] },
    ],
    roadmap: [
      { id: 'M1', title: 'Finer-grained commits', items: ['Stage individual hunks and lines', 'Stash and restore work in progress', 'Amend the last commit'] },
      { id: 'M2', title: 'Merging and conflicts', items: ['Merge a branch into the current one', 'Conflict list with ours/theirs resolution', 'Cherry-pick and revert from history'] },
      { id: 'M3', title: 'GitHub integration', items: ['Sign in with the device flow', 'List and open pull requests', 'Create a pull request from the current branch'] },
      { id: 'M4', title: 'Release', items: ['Signed and notarised builds with auto-update', 'CI builds for Windows and Linux', 'Keyboard shortcuts and an accessibility pass'] },
    ],
  },
  {
    slug: 'lantern',
    name: 'Lantern',
    icon: 'M9.5 5.5a2.5 2.5 0 0 1 5 0M8 5.5h8l-1 2.5H9zM9 8h6l.5 9.5h-7zM7.5 19.5h9M8.5 17.5v2M15.5 17.5v2M12 10.5c1.3 1.4 1.6 2.5.7 3.5a1 1 0 0 1-1.4 0c-.9-1-.6-2.1.7-3.5z',
    tint: 'linear-gradient(135deg, #facc15, #c2410c)',
    summary:
      'A turn-based roguelike where your lantern is your life. Oil burns with every step and the light shrinks with it. Dive eight procedurally generated floors, fight what lurks at the edge of the glow and take the Sunstone from the Warden. The rules live in a deterministic Rust core; React draws the flickering light on a canvas.',
    story: [
      'Lantern is a small roguelike built around one idea: your light is your health bar and your clock at the same time. Every step burns oil, the circle of light shrinks, and the things in the dark get bolder.',
      'The rules live in a deterministic Rust core. The same seed always gives the same dungeon, which makes the daily run possible and every bug reproducible. React only draws the game state onto a canvas and adds the flicker.',
      'To tune the difficulty I wrote a bot that plays 200 seeds per run, and a test that checks every generated floor across 200 seeds is fully connected.',
    ],
    status: 'In progress',
    platforms: ['macOS', 'Windows', 'Linux'],
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'Canvas 2D', 'Vite'],
    pipeline: ['Seed', 'Dungeon', 'Light', 'Fight', 'Sunstone'],
    repo: 'https://github.com/Stephen-SMH/lantern',
    version: '0.1.0',
    released: 'Oct 11, 2026',
    updated: 'Oct 11, 2026',
    license: 'MIT',
    size: '4.1 MB',
    features: [
      'Light as a resource: oil burns every turn, the light radius shrinks from 8 tiles to 1, and the dark bites when it runs out.',
      'Eight seeded floors of rooms and corridors, with fog of war and a remembered map.',
      'Five monster types plus a boss. Wraiths keep to the edge of your light and close in as it fades.',
      'Bump-to-attack combat, XP and levels, potions, oil flasks, blades and mail.',
      'Autosaves every turn with permadeath, plus a local top-10 board of best runs.',
      'A daily run: the same dungeon for everyone on the same UTC day.',
      'Keyboard-first: arrows, WASD, vi keys or the numpad.',
    ],
    requirements: {
      os: ['macOS 11+', 'Windows 10 / 11 (WebView2)', 'Ubuntu 22.04+ (WebKitGTK)'],
      hardware: ['Any machine from the last decade', 'Around 80 MB of RAM'],
      software: ['Nothing else: no runtime or account needed'],
    },
    releases: [
      { version: '0.1.0', date: 'Oct 11, 2026', title: 'First playable release', notes: ['Eight floors, five monsters and the Warden, items, levels and the Sunstone win.', 'Rust core with 13 unit tests, including connectivity checks across 200 seeds.', 'Autosave, permadeath, high scores and a daily seed.', 'Difficulty tuned with a bot that plays 200 seeds per run.'] },
    ],
    roadmap: [
      { id: 'M1', title: 'More to fight', items: ['Ranged enemies', 'Throwable oil flask that sets an area alight', 'Status effects: poison and fear'] },
      { id: 'M2', title: 'Deeper dungeons', items: ['Generated vaults and secret doors', 'Shops between floors', 'Seed sharing from the title screen'] },
      { id: 'M3', title: 'Feel', items: ['Lantern hiss and ambient sound tied to oil level', 'Hit and death animations', 'Gamepad support'] },
      { id: 'M4', title: 'Release', items: ['Signed and notarised builds with auto-update', 'CI builds for Windows and Linux', 'itch.io page'] },
    ],
  },
  {
    slug: 'yaymal',
    name: 'YayMal',
    icon: 'M12 3l5 7-5 10-5-10zM12 3v8.5M10.5 13a1.5 1.5 0 1 0 3.0 0a1.5 1.5 0 1 0 -3.0 0M8 21h8',
    tint: 'linear-gradient(135deg, #60a5fa, #4f46e5)',
    summary:
      'A local-first word processor modelled on Microsoft Word, and the first app in my YoneTone office suite. A full ribbon, real pages and Print Layout, templates, a self-updating table of contents and Word shortcuts. It opens and saves real .docx files, so documents move freely between YayMal, Word, Google Docs, Pages and LibreOffice. Your files never leave your machine.',
    story: [
      'YayMal is the first app in YoneTone, an office suite I am building. The goal is a word processor that feels like Word to anyone who has used Word: the same ribbon, the same pages, the same shortcuts, with no subscription and no cloud account.',
      'The hard part is .docx. The editor is TipTap on ProseMirror, and a small FastAPI service built on python-docx converts to and from the Word format. That service is frozen and bundled inside the .dmg, so the app installs as one file and needs nothing else.',
      'Files YayMal saves reopen exactly as they were; files from Word are converted from the Word XML. Comments, track changes and tables that split across pages come next, then a spreadsheet and a slides app on the same shell.',
    ],
    status: 'In progress',
    platforms: ['macOS'],
    stack: ['Tauri 2', 'React', 'TypeScript', 'TipTap / ProseMirror', 'FastAPI', 'python-docx', 'Expo'],
    pipeline: ['Write', 'Format', 'Paginate', '.docx', 'Share'],
    version: '0.1.0',
    released: 'Oct 12, 2026',
    updated: 'Oct 12, 2026',
    license: 'Private repository',
    size: '17 MB (.dmg)',
    features: [
      'A Word-style ribbon: Home, Insert, Layout, References, Review and View, plus Table Layout when the cursor is in a table.',
      'Print Layout with real pages: margins, orientation and paper sizes, with a draggable ruler and zoom from 10% to 500%.',
      'Opens and saves .docx. Files YayMal saved reopen exactly as they were; files from Word are converted from the Word XML.',
      'Styles gallery, tables, pictures, headers and footers, page numbers and a clickable table of contents.',
      'A backstage File view with templates (resume, letter, report, meeting notes, MLA essay) and recent files.',
      'Spell check, word count, Read Aloud, Read Mode and dark mode.',
      'Asks before you lose changes and keeps a crash-recovery copy. Also runs in the browser and as an Expo phone app.',
    ],
    requirements: {
      os: ['macOS 11+ on Apple Silicon (M1 or later)'],
      hardware: ['Any Apple Silicon Mac'],
      software: ['Nothing else: the .docx service is bundled inside the app'],
    },
    releases: [
      { version: '0.1.0', date: 'Oct 12, 2026', title: 'Working editor and installable app', notes: ['Ribbon, backstage, dialogs, real pages and Word keyboard shortcuts.', 'Lossless .docx round-trip through a bundled FastAPI service, with backend tests.', 'Installable .dmg with the Python service frozen inside, plus browser and Expo mobile builds.'] },
    ],
    roadmap: [
      { id: 'M1', title: 'Closer to Word', items: ['Comments and track changes', 'Footnotes and section breaks', 'Different first-page headers and footers'] },
      { id: 'M2', title: 'Layout', items: ['Split long paragraphs and tables across pages', 'Multi-column layout and text boxes', 'Equations'] },
      { id: 'M3', title: 'YoneTone suite', items: ['A spreadsheet and a slides app on the same shell', 'Shared file browser and recent files', 'One installer for the suite'] },
      { id: 'M4', title: 'Release', items: ['Signed and notarised builds with auto-update', 'Intel Mac, Windows and Linux builds', 'Native PDF export'] },
    ],
  },
  {
    slug: 'comic-studio',
    name: 'Comic Studio',
    icon: 'M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 9h8M8 12h5',
    tint: 'linear-gradient(135deg, #fb7185, #9333ea)',
    summary:
      'A local-first story and comic generator. A local LLM in LM Studio writes the script, ComfyUI draws the panels, and the app handles layout, lettering and PDF export. Nothing leaves the machine.',
    story: [
      'Comic Studio started from a simple question: can a laptop write and draw a comic by itself, with no cloud service in the loop? LM Studio and ComfyUI already run good models locally. What is missing is the app that ties them together into a story, a page and a finished PDF.',
      'It is still in design. Before writing feature code I wrote a PRD, an architecture document with diagrams, decision records and a risk register, and chose Tauri 2 so the long-running work (streaming text, queuing image jobs, writing files) lives in a Rust core instead of the UI.',
      'The first milestone is a set of spikes that prove the risky parts: streaming a chat from LM Studio through Rust, running a ComfyUI workflow and getting the image back, and making the model return script JSON that matches a schema.',
    ],
    status: 'Planning',
    platforms: ['macOS', 'Windows', 'Linux'],
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'SQLite', 'LM Studio', 'ComfyUI'],
    pipeline: ['Story', 'Script', 'Panels', 'Page', 'PDF'],
    repo: 'https://github.com/Stephen-SMH/comic-studio',
    version: '0.0.1 (design phase)',
    released: 'Oct 10, 2026',
    updated: 'Oct 10, 2026',
    license: 'Private repository',
    features: [
      'Write a story, or co-write it with a local LLM that streams into the editor.',
      'The story is broken into scenes and panels with schema-validated scripts.',
      'A local diffusion engine draws each panel; a persistent queue survives restarts.',
      'Lay out the page, add speech bubbles and captions, then export PDF, CBZ or PNG.',
      'Everything runs on your machine. No cloud, no account, no network permission without a decision record.',
    ],
    requirements: {
      os: ['macOS 13+ (Apple Silicon first)', 'Windows 10 / 11', 'Ubuntu 22.04+'],
      hardware: ['Text-only mode: no GPU needed', 'Image mode: 8 GB VRAM recommended', 'Apple Silicon: 16 GB unified memory'],
      software: ['LM Studio for the text model', 'ComfyUI for image generation'],
    },
    releases: [
      { version: '0.0.1', date: 'Oct 10, 2026', title: 'Library prototype and landing page', notes: ['Clickable Library prototype.', 'Landing page and BytePlus-inspired UX notes.'] },
      { version: '0.0.0', date: 'Oct 10, 2026', title: 'Product, architecture and planning docs', notes: ['PRD, architecture with diagrams, ADRs, roadmap and risk register.', 'Tauri 2 chosen for a Rust core with a system webview.'] },
    ],
    roadmap: [
      { id: 'M0', title: 'Spikes and skeleton', items: ['Tauri 2 project with CI on all three OSes', 'Stream a chat from LM Studio through Rust', 'Run a ComfyUI workflow and receive the image', 'JSON-schema constrained output from the local LLM'] },
      { id: 'M1', title: 'Story and script', items: ['Project create/open and SQLite schema', 'Characters and world notes', 'Script generation with streaming and validation'] },
      { id: 'M2', title: 'Panels', items: ['ComfyUI provider and workflow templating', 'Persistent job queue with retries and cancel', 'Candidate gallery and style presets'] },
      { id: 'M3', title: 'Page, lettering, export', items: ['Page canvas with grid templates', 'Bubbles, captions and text editing', 'PDF export with chosen DPI'] },
      { id: 'M4', title: 'Consistency and editing (v1.0)', items: ['Reference-image conditioning for characters', 'In-painting and region regenerate', 'CBZ, PNG and Markdown export'] },
      { id: 'M5', title: 'Polish and release', items: ['Signed and notarised builds with auto-update', 'Accessibility pass and keyboard shortcuts', 'Onboarding, empty states and fix-it errors'] },
    ],
  },
];

export const skills = [
  { group: 'Shell', items: ['Tauri 2', 'Rust', 'Electron', 'Flutter desktop'] },
  { group: 'UI', items: ['TypeScript', 'React', 'Tailwind', 'Canvas 2D', 'TipTap / ProseMirror'] },
  { group: 'Local AI', items: ['LM Studio', 'Ollama', 'ComfyUI', 'OpenAI-compatible APIs'] },
  { group: 'Shipping', items: ['Code signing', 'Auto-update', 'GitHub Actions'] },
];

// The "Why desktop.md" window on the home page.
export const approach = {
  intro:
    'Most software moved into a browser tab, and for a lot of it that is fine. The tools I use every day work better as real apps: they open instantly, work offline, keep files where I can see them, and respect the shortcuts my hands already know. That is what I build.',
  principles: [
    { title: 'Local-first', body: 'Your files stay on your disk in formats other apps can read: .docx, plain git repositories, SQLite. No account, no sync server, nothing phoning home. Comic Studio runs its AI models on your own machine too.' },
    { title: 'Small and fast', body: 'Tauri uses the system webview instead of shipping a browser, so GitDesk is 4.4 MB and Lantern 4.1 MB. Heavy work runs in Rust, off the UI thread.' },
    { title: 'Feels like it belongs', body: 'Real windows and menus, light and dark themes that follow the system, platform shortcuts, and a prompt before you lose unsaved work.' },
    { title: 'Keyboard-first', body: 'Common actions have shortcuts. YayMal uses Word’s, and Lantern plays entirely from the keyboard with arrows, WASD, vi keys or the numpad.' },
    { title: 'Tested where it counts', body: 'The logic lives in a Rust core with its own tests. GitDesk’s git layer runs against real repositories; Lantern’s generator is checked across 200 seeds.' },
  ],
  build: ['Rust core', 'Typed commands', 'React UI', 'CI on 3 OSes', 'Signed builds'],
  buildNote:
    'Each app is a Rust core that owns files, processes and state, with a React UI that calls it through typed Tauri commands. Signed, notarised builds with auto-update are the last milestone on every roadmap.',
};
