// Edit this file to change the text on the site.
// Anything marked PLACEHOLDER is sample content: replace it before sharing the site.
export const profile = {
  name: 'Soe Moe Htet',
  nick: 'Stephen',
  role: 'Desktop Software',
  tagline: 'Native and cross-platform desktop apps for macOS, Windows and Linux.', // PLACEHOLDER
  statement:
    'I build desktop software: fast, offline-capable tools with a proper window, menus and keyboard shortcuts.', // PLACEHOLDER
  location: 'Bangkok, Thailand · UTC+7',
  email: 'soemoehtetstephen@gmail.com',
  github: 'https://github.com/Stephen-SMH',
  hub: 'https://stephen-smh.github.io/',
};

export type Platform = 'macOS' | 'Windows' | 'Linux';
export type Project = {
  name: string;
  summary: string;
  platforms: Platform[];
  stack: string[];
  repo?: string;
  download?: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    name: 'Project name one', // PLACEHOLDER
    summary: 'One or two sentences on what this app does and who it is for.',
    platforms: ['macOS', 'Windows'],
    stack: ['Electron', 'TypeScript'],
    placeholder: true,
  },
  {
    name: 'Project name two', // PLACEHOLDER
    summary: 'One or two sentences on what this app does and who it is for.',
    platforms: ['macOS', 'Windows', 'Linux'],
    stack: ['Flutter', 'Dart'],
    placeholder: true,
  },
  {
    name: 'Project name three', // PLACEHOLDER
    summary: 'One or two sentences on what this app does and who it is for.',
    platforms: ['Windows'],
    stack: ['C#', '.NET'],
    placeholder: true,
  },
];

export const skills = [
  { group: 'Frameworks', items: ['Electron', 'Tauri', 'Flutter desktop', '.NET'] }, // PLACEHOLDER
  { group: 'Languages', items: ['TypeScript', 'Dart', 'C#', 'Rust'] }, // PLACEHOLDER
  { group: 'Shipping', items: ['Code signing', 'Auto-update', 'Installers', 'CI builds'] }, // PLACEHOLDER
];
