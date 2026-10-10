// Edit this file to change the text on the site.
// Anything marked PLACEHOLDER is sample content: replace it before sharing the site.
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
export type Project = {
  name: string;
  glyph: string;
  summary: string;
  status: Status;
  platforms: Platform[];
  stack: string[];
  pipeline?: string[];
  repo?: string;
  download?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Comic Studio',
    glyph: 'C',
    summary:
      'A local-first story and comic generator. A local LLM in LM Studio writes the script, ComfyUI draws the panels, and the app handles layout, lettering and PDF export. Nothing leaves the machine.',
    status: 'Planning',
    platforms: ['macOS', 'Windows', 'Linux'],
    stack: ['Tauri 2', 'Rust', 'React', 'TypeScript', 'SQLite', 'LM Studio', 'ComfyUI'],
    pipeline: ['Story', 'Script', 'Panels', 'Page', 'PDF'],
  },
  {
    name: 'Project name two', // PLACEHOLDER
    glyph: '2',
    summary: 'One or two sentences on what this app does and who it is for.',
    status: 'Planning',
    platforms: ['macOS', 'Windows'],
    stack: ['Tauri', 'TypeScript'],
    placeholder: true,
  },
];

export const skills = [
  { group: 'Shell', items: ['Tauri 2', 'Rust', 'Electron', 'Flutter desktop'] }, // PLACEHOLDER: confirm
  { group: 'UI', items: ['TypeScript', 'React', 'Tailwind'] },
  { group: 'Local AI', items: ['LM Studio', 'Ollama', 'ComfyUI', 'OpenAI-compatible APIs'] },
  { group: 'Shipping', items: ['Code signing', 'Auto-update', 'GitHub Actions'] }, // PLACEHOLDER: confirm
];
