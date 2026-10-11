// Edit this file to change the text on the site.
export const profile = {
  name: 'Soe Moe Htet',
  nick: 'Stephen',
  role: 'Desktop Software',
  tagline: 'Local-first desktop apps for macOS, Windows and Linux.',
  statement:
    'I build desktop tools that run on your own machine: private, fast, and with a proper window, menus and shortcuts. My current focus is Tauri apps that talk to local AI models.',
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
  glyph: string;
  summary: string;
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
    slug: 'comic-studio',
    name: 'Comic Studio',
    glyph: 'C',
    summary:
      'A local-first story and comic generator. A local LLM in LM Studio writes the script, ComfyUI draws the panels, and the app handles layout, lettering and PDF export. Nothing leaves the machine.',
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
  {
    slug: 'gitdesk',
    name: 'GitDesk',
    glyph: 'G',
    summary:
      'A lightweight desktop git client in the spirit of GitHub Desktop. Review changes with a proper diff, pick exactly which files go into a commit, browse history, switch branches and sync with your remote. Under 5 MB, with a Rust core that drives your own git.',
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
    glyph: 'L',
    summary:
      'A turn-based roguelike where your lantern is your life. Oil burns with every step and the light shrinks with it. Dive eight procedurally generated floors, fight what lurks at the edge of the glow and take the Sunstone from the Warden. The rules live in a deterministic Rust core; React draws the flickering light on a canvas.',
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
];

export const skills = [
  { group: 'Shell', items: ['Tauri 2', 'Rust', 'Electron', 'Flutter desktop'] },
  { group: 'UI', items: ['TypeScript', 'React', 'Tailwind', 'Canvas 2D'] },
  { group: 'Local AI', items: ['LM Studio', 'Ollama', 'ComfyUI', 'OpenAI-compatible APIs'] },
  { group: 'Shipping', items: ['Code signing', 'Auto-update', 'GitHub Actions'] },
];
