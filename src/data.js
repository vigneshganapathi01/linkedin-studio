// Agents Office v2 — roster + design tokens (ported from v1 command-centre.html)
import { applyData } from './profile.js';

// Nominal.so tokens (locked design language, 30 Jul 2026)
export const TOKENS = {
  cream: '#FDFFF8',
  ink: '#151414',
  grey: '#5A5A5A',
  hairline: 'rgba(21,20,20,0.12)',
};

// Dept mapping: Support→mint, Sales→butter, Marketing→coral, Finance→periwinkle,
// Operations→violet, Brain→sage.
// NOTE (17 Aug 2026): the old 'ops' pod split in two. The accounting half kept the pod,
// the periwinkle palette and the key 'fin' (now FINANCE); Proposals + Intel moved out into
// a new 'ops' pod (OPERATIONS) alongside Legal Review, Compliance and Internal Reporting.
// V3.1 (5 Sep 2026, AJ): SUPPORT → EMAILS (same mint slot), new DELIVERY pod (sky) on the top axis.
export const DEPT_KEYS = ['emails', 'sales', 'marketing', 'ops', 'fin', 'delivery'];
export const DEPTS = {
  emails:    { name: 'PROFILE',          short: 'PROFILE',  chip: '#5ADEB7', ink: '#1E9070', floor: '#E9F6EF' },
  delivery:  { name: 'CLIENTS',          short: 'CLIENTS', chip: '#8FD3F4', ink: '#2E86AB', floor: '#E6F4FB' },
  sales:     { name: 'RESEARCH',         short: 'RESEARCH',   chip: '#EADC8F', ink: '#A08A1E', floor: '#F6F1DA' },
  marketing: { name: 'CONTENT',          short: 'CONTENT', chip: '#E69393', ink: '#C46060', floor: '#FAE9E7' },
  fin:       { name: 'ANALYTICS',        short: 'ANALYTICS', chip: '#98A5EF', ink: '#5B66CE', floor: '#EAEDFA' },
  ops:       { name: 'ENGAGEMENT',       short: 'ENGAGEMENT', chip: '#BFA2E3', ink: '#7449A9', floor: '#F2ECFA' },
  brain:     { name: 'THE BRAIN',        short: 'THE BRAIN', chip: '#D1DECD', ink: '#4C7A57', floor: '#E9EFE4' },
};

// 35 agents (V3.4, 7 Sep 2026: every department has a lead). grid = [col,row] desk slot on the department plinth.
export const AGENTS = [
  // PROFILE (5) — client onboarding, profile audit, voice & story
  { id: 'elead', name: 'PROFILE LEAD',        dept: 'emails',    lead: true,  grid: [0.5, 0], hair: '#2b2b2b', skin: '#E8B98E' },
  { id: 'cmail', name: 'PROFILE OPTIMIZER',   dept: 'emails',    grid: [0, 1], hair: '#3b2b1d', skin: '#F0C9A0' },
  { id: 'imail', name: 'VOICE PROFILER',      dept: 'emails',    grid: [1, 1], hair: '#111111', skin: '#C68B59' },
  { id: 'vmail', name: 'STORY MINER',         dept: 'emails',    grid: [0, 2], hair: '#7a3b12', skin: '#F5D5B0' },
  { id: 'kmail', name: 'GOALS INTAKE',        dept: 'emails',    grid: [1, 2], hair: '#4a2a10', skin: '#D89F70' },
  // RESEARCH (6) — domain news, trends, viral hooks, sources
  { id: 'lexi',  name: 'RESEARCH LEAD',       dept: 'sales',     lead: true,  grid: [0.5, 0], hair: '#5a2d0c', skin: '#F0C9A0' },
  { id: 'enzo',  name: 'NEWS SCOUT',          dept: 'sales',     grid: [0, 1], hair: '#1c1c2e', skin: '#E0A878' },
  { id: 'ilm',   name: 'TREND TRACKER',       dept: 'sales',     grid: [1, 1], hair: '#26140a', skin: '#F5D5B0' },
  { id: 'pros',  name: 'HOOK STUDY',          dept: 'sales',     grid: [0, 2], hair: '#2a1a0e', skin: '#E8B98E' },
  { id: 'piper', name: 'SOURCE COLLECTOR',    dept: 'sales',     grid: [1, 2], hair: '#2d1a0a', skin: '#F0C9A0' },
  { id: 'folo',  name: 'SIGNAL MONITOR',      dept: 'sales',     grid: [0.5, 3], hair: '#171717', skin: '#F5D5B0' },
  // CONTENT (7) — plan, extract, hooks, write, repurpose, design, video
  { id: 'mlead', name: 'CONTENT LEAD',        dept: 'marketing', lead: true,  grid: [0.5, 0], hair: '#2a1a0e', skin: '#E0A878' },
  { id: 'riley', name: 'INFO EXTRACTOR',      dept: 'marketing', grid: [0, 1], hair: '#8a4a1f', skin: '#F5D5B0' },
  { id: 'newt',  name: 'HOOK WRITER',         dept: 'marketing', grid: [1, 1], hair: '#26140a', skin: '#D89F70' },
  { id: 'gfx',   name: 'CAROUSEL DESIGNER',   dept: 'marketing', grid: [0, 2], hair: '#141414', skin: '#F0C9A0' },
  { id: 'ada',   name: 'POST WRITER',         dept: 'marketing', grid: [1, 2], hair: '#3d2814', skin: '#C68B59' },
  { id: 'iggy',  name: 'REPURPOSER',          dept: 'marketing', grid: [0, 3], hair: '#552200', skin: '#E8B98E' },
  { id: 'vid',   name: 'VIDEO SCRIPTER',      dept: 'marketing', grid: [1, 3], hair: '#1b1b24', skin: '#D9A97E' },
  // ENGAGEMENT (6) — comments, replies, brand safety, reporting
  { id: 'olead', name: 'ENGAGEMENT LEAD',     dept: 'ops',       lead: true,  grid: [0.5, 0], hair: '#111111', skin: '#F0C9A0' },
  { id: 'scout', name: 'COMMENT DRAFTER',     dept: 'ops',       grid: [0, 1], hair: '#101820', skin: '#B07850' },
  { id: 'legal', name: 'REPLY HANDLER',       dept: 'ops',       grid: [1, 1], hair: '#20242e', skin: '#F0C9A0' },
  { id: 'comply', name: 'BRAND SAFETY',       dept: 'ops',       grid: [0, 2], hair: '#5a3a1a', skin: '#C68B59' },
  { id: 'report', name: 'ENGAGEMENT REPORTER', dept: 'ops',      grid: [1, 2], hair: '#2e2118', skin: '#E8B98E' },
  { id: 'dash',  name: 'ENGAGEMENT DASH',     dept: 'ops',       grid: [0.5, 3], hair: '#0d0d0d', skin: '#9C6B43' },
  // ANALYTICS (4) — engagers, thread monitoring, cadence
  { id: 'alead', name: 'ANALYTICS LEAD',      dept: 'fin',       lead: true,  grid: [0.5, 0], hair: '#1f1f1f', skin: '#E0A878' },
  { id: 'invo',  name: 'ENGAGER ANALYTICS',   dept: 'fin',       grid: [0, 1], hair: '#4a2a10', skin: '#F5D5B0' },
  { id: 'apay',  name: 'THREAD MONITOR',      dept: 'fin',       grid: [1, 1], hair: '#0a0a0a', skin: '#8A5A32' },
  { id: 'recon', name: 'CADENCE & DATA',      dept: 'fin',       grid: [0.5, 2], hair: '#33221a', skin: '#E8B98E' },
  // CLIENTS (7) — delivery, coordination, QA, reports, assets
  { id: 'dlead', name: 'CLIENT LEAD',         dept: 'delivery',  lead: true,  grid: [0.5, 0], hair: '#1f1f1f', skin: '#F0C9A0' },
  { id: 'pco',   name: 'ACCOUNT COORDINATOR', dept: 'delivery', grid: [0, 1], hair: '#3d2814', skin: '#E8B98E' },
  { id: 'qa',    name: 'EDITOR & QA',         dept: 'delivery', grid: [1, 1], hair: '#101820', skin: '#C68B59' },
  { id: 'crep',  name: 'CLIENT REPORTS',      dept: 'delivery',  grid: [0, 2], hair: '#6b3410', skin: '#F5D5B0' },
  { id: 'cass',  name: 'CLIENT ASSETS',       dept: 'delivery',  grid: [1, 2], hair: '#141414', skin: '#D9A97E' },
  { id: 'dasst', name: 'DESIGN ASSISTANT',    dept: 'delivery',  grid: [0, 3], hair: '#552200', skin: '#F0C9A0' },
  { id: 'ona',   name: 'CLIENT ONBOARDER',    dept: 'delivery',  grid: [1, 3], hair: '#0d0d0d', skin: '#9C6B43' },
];

// Plinth placement in world XZ. Brain central; departments well separated (AJ: not too close at zoom-out).
export const LAYOUT = {
  brain:     { pos: [0, 0],     w: 16, d: 16 },
  emails:    { pos: [-30, -23], w: 20, d: 26 },
  delivery:  { pos: [0, -48],   w: 20, d: 30 },   // 6th pod mirrors ops on the top axis
  sales:     { pos: [30, -23],  w: 20, d: 30 },
  marketing: { pos: [-30, 23],  w: 20, d: 30 },
  fin:       { pos: [30, 23],   w: 20, d: 26 },
  ops:       { pos: [0, 48],    w: 20, d: 30 },   // the 5th pod fills the empty bottom-left gap
};

// Department billboard metrics (v1 rule #5: live metrics float above each dept,
// values tick green on change, "Waiting Approval" pulses amber when > 0).
export const BILLBOARDS = {
  emails:    [{ id: 'audits',    label: 'PROFILES AUDITED',  val: 12 }],
  delivery:  [{ id: 'reports',   label: 'CLIENT REPORTS',    val: 9 }],
  sales:     [{ id: 'angles',    label: 'ANGLES FOUND',      val: 47 },
              { id: 'hooks',     label: 'HOOKS STUDIED',     val: 18, step: 1 }],
  marketing: [{ id: 'posts',     label: 'POSTS DRAFTED',     val: 34, step: 1 }],
  ops:       [{ id: 'replies',   label: 'REPLIES DRAFTED',   val: 41 }],
  fin:       [{ id: 'engagers',  label: 'ENGAGERS PULLED',   val: 214 }],
  brain:     [{ id: 'notes',     label: 'NOTES INDEXED',    val: 1204, fmt: v => Math.round(v).toLocaleString('en-NZ') }],
};

// Approval asks (agent requests → AJ decides; v1 flavour).
// Per-agent first so the ask matches who's asking; dept pool is the fallback.
export const APPROVAL_ASKS = {
  emails:    ['Publish the rewritten profile for the client — draft attached', 'Approve the client voice profile before writers use it'],
  delivery:  ['Ship the September results pack to 14 clients', 'Release the approved posts to the client folder'],
  sales:     ['Approve this week’s research brief — 8 angles ranked', 'Add 5 new voices to the client’s watch list'],
  marketing: ['Post “the 10am rule” to the client’s feed — draft attached', 'Schedule 4 posts for the client’s week'],
  ops:       ['Post the reply sweep — 12 comments drafted', 'Post 3 comments on the client’s target accounts'],
  fin:       ['Send the outbound list — 40 engagers, openers attached', 'Route 6 warm threads for follow-up replies'],
};
export const APPROVAL_BY_AGENT = {
  cmail: 'Publish the rewritten headline + About for the client — draft attached',
  vmail: 'Approve the Story Bank additions — 5 new entries',
  crep:  'Send the September results pack to 14 clients — 2 flagged for a call',
  qa:    'Sign off the post after the humanizer audit — 2 minor notes',
  dlead: 'Extend the client’s cadence for a week — the client asked',
  apay:  'Route 6 warm threads to the Reply Handler — 6-24h window',
  piper: 'Approve the source pack for the client’s post — 3 stats verified',
  iggy:  'Post the repurposed webinar as a LinkedIn post — draft attached',
  vid:   'Approve the 45-sec founder reel script — v2 attached',
  ada:   'Post “cold outreach maths” to the client’s feed — draft v3',
  mlead: 'Approve the October content plan — 12 posts, 3 pillars',
  olead: 'Approve the client’s reply sweep — 12 comments drafted',
  newt:  'Approve the 5 hook options for the client’s post',
  scout: 'Post 3 comments on the client’s target accounts — variants attached',
  enzo:  'Approve the morning news brief — 5 stories for the client',
};

// Fake terminal lines for the desk screens (per-dept flavour), matching v1's chat voice.
export const WORKLINES = {
  emails: [
    '▸ auditing profile — headline + About',
    '▸ voice profile: tone + do-not-say list',
    '▸ story interview — 5 new entries logged',
    '▸ client brief drafted · goals captured',
  ],
  delivery: [
    '▸ client report: September pack 9/14',
    '▸ QA pass: humanizer audit · 2 notes',
    '▸ approved posts synced → client folder',
    '▸ content calendar: 3 posts moved',
  ],
  sales: [
    '▸ scanning domain — 40 sources',
    '▸ 5 stories surfaced for the audience',
    '▸ viral hook reverse-engineered · template out',
    '▸ trend rising — flagged for Content',
  ],
  marketing: [
    '▸ drafting hook v3 — "the 10am rule"',
    '▸ 5 hook options → Post Writer',
    '▸ post drafted · humanizer pass',
    '▸ carousel: 8 slides, brand kit',
    '▸ repurposing webinar → LinkedIn post',
  ],
  ops: [
    '▸ 3 comment variants → review',
    '▸ reply sweep: 12 comments drafted',
    '▸ brand-safety pass · 1 off-voice flagged',
    '▸ first-comment draft for target post',
    '▸ engagement report: replies → conversations',
  ],
  fin: [
    '▸ pulling engagers · 214 segmented by ICP',
    '▸ warm thread flagged — 6-24h window',
    '▸ post performance: winning hook named',
    '▸ cadence set from the data',
  ],
  brain: [
    '▸ indexing vault — notes',
    '▸ answering RESEARCH query — hook formulas',
    '▸ reading the client voice profile',
  ],
};

// INDUSTRY PROFILE (12 Sep 2026): a per-industry demo file rewrites pods, seats, rows, asks and screen lines in place. No-op without window.PROFILE.
applyData({ DEPTS, AGENTS, BILLBOARDS, APPROVAL_ASKS, APPROVAL_BY_AGENT, WORKLINES });
