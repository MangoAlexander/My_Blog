# Codex Plan — Personal Blog

STATUS: COMPLETE

Last verified: 2026-09-30 (Asia/Shanghai)

## Project Goal

- [x] Deliver a production-ready personal blog, digital garden, portfolio, and browser-editable writing platform
- [x] Preserve GitHub as the sole content source of truth
- [x] Support GitHub Pages, repository subpaths, and a custom domain

## Environment

- [x] Ubuntu 24.04.4 LTS verified
- [x] Node.js 24.21.0 LTS installed and pinned
- [x] pnpm 10.34.6 installed and pinned
- [x] Clean install verified with `pnpm install --frozen-lockfile`

## Architecture

- [x] Astro 7 static-first architecture with strict TypeScript
- [x] Astro Content Collections for writing, notes, and projects
- [x] JSON-backed Now, Uses, and Site Settings
- [x] Central URL handling for root domains and repository base paths
- [x] Minimal client JavaScript; no SPA or database

## Design Direction

- [x] Editorial-minimal visual language with distinctive typography and restrained burnt-orange accent
- [x] Unified color, type, spacing, border, layout, and motion tokens
- [x] Polished Light, Dark, and System modes without theme flash
- [x] Responsive layouts reviewed at 390px and 1440px
- [x] Reduced-motion and visible focus states implemented

## Technology Stack

- [x] Astro, TypeScript, Markdown/MDX, and plain CSS
- [x] Pagefind full-text search with Cmd/Ctrl+K shortcut
- [x] Pages CMS browser authoring
- [x] Vitest, Playwright, Axe, ESLint, Prettier, and Lighthouse
- [x] GitHub Actions and GitHub Pages

## Pages

- [x] Homepage with hero, featured writing, editorial grid, recent writing, projects, now, and notes
- [x] Writing index and article detail
- [x] Notes index and note detail
- [x] Projects index and project detail
- [x] About, Now, Uses, Archive
- [x] Tags index and tag detail
- [x] Full-text Search
- [x] Hidden Admin gateway
- [x] Custom 404

## Content Model

- [x] Validated writing, notes, and project schemas
- [x] Draft and future-post production filtering
- [x] Bilingual reading-time calculation
- [x] Related posts plus previous/next navigation
- [x] 6 public example essays, 8 public notes, and 4 projects
- [x] Private draft and future fixtures prove filtering behavior

## Writing Experience

- [x] Article metadata, cover, TOC, active section, and reading progress
- [x] Responsive/collapsible mobile TOC
- [x] Designed prose, tables, images, blockquotes, and lists
- [x] High-contrast syntax highlighting, horizontal scrolling, and copy button
- [x] Comfortable Chinese and English typography

## CMS

- [x] `.pages.yml` configures Writing, Notes, Projects, Now, Uses, and Site Settings
- [x] Browser upload path configured at `public/images/uploads/`
- [x] Draft-first content workflow configured
- [x] `/admin` gateway implemented and excluded from search/sitemap
- [x] GitHub authentication correctly documented as the security boundary
- [ ] GitHub authorization — USER ACTION REQUIRED

## SEO

- [x] Titles, descriptions, canonical URLs, Open Graph, and Twitter cards
- [x] 1200 × 630 default OG artwork
- [x] Article JSON-LD structured data
- [x] Generated RSS, sitemap, and robots.txt
- [x] Drafts and future posts absent from RSS, sitemap, and search

## GitHub Pages and Custom Domain

- [x] Least-privilege CI workflow
- [x] Gated Pages deployment workflow
- [x] Root/custom-domain build verified
- [x] `/Myblog` repository base-path build verified, including assets, RSS, robots, and sitemap URLs
- [x] GitHub Pages repository URL configured; no `CNAME` is emitted until a real custom domain is available
- [x] Restrained monthly Dependabot configuration
- [ ] Enable Pages and replace/configure the real domain — USER ACTION REQUIRED

## Documentation

- [x] README covers setup, operation, structure, CI, CMS, domain, and troubleshooting
- [x] Browser CMS setup and recovery guide
- [x] Non-technical writing and publishing guide
- [x] DNS, verification, HTTPS, and custom-domain guide

## Testing

- [x] Content validation passed for 21 entries
- [x] 6/6 unit tests passed
- [x] 37/37 applicable E2E checks passed across desktop and mobile
- [x] 1 desktop execution of the mobile-only menu test skipped by design
- [x] Search, navigation, themes, TOC, adjacent posts, tags, and 404 verified
- [x] Axe: 0 automatically detectable violations on key desktop/mobile pages

## Accessibility

- [x] Semantic landmarks and heading hierarchy
- [x] Keyboard navigation and visible focus states
- [x] Meaningful labels, alt text, and reduced motion
- [x] High-contrast code theme selected after Axe detected and guided a fix

## Performance

- [x] Static output with minimal client JavaScript
- [x] Local system font stacks avoid font-loading delay
- [x] Lazy-compatible responsive media dimensions and no layout overflow
- [x] Lighthouse homepage: 100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO
- [x] Lighthouse article: 100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO

## Security

- [x] No PAT, OAuth secret, private key, password, or `.env` found
- [x] Secret patterns and sensitive filenames scanned
- [x] Workflow permissions follow least privilege
- [x] Admin gateway does not pretend to be an authentication boundary

## Visual Review

- [x] Ten desktop/mobile and light/dark screenshots captured in `artifacts/screenshots/`
- [x] Visual Polish Pass 1: hierarchy, typography, spacing, responsive layout, and dark mode reviewed
- [x] Visual Polish Pass 2: related layout, code contrast, article reading, and final screenshots reviewed
- [x] Homepage avoids dashboard/SaaS/AI-template conventions

## Final Acceptance

- [x] Environment: PASS
- [x] Clean Install: PASS
- [x] Format: PASS
- [x] Lint: PASS
- [x] TypeCheck: PASS — 0 errors, 0 warnings, 0 hints
- [x] Content Validation: PASS
- [x] Unit Tests: PASS
- [x] Production Build: PASS — 41 pages
- [x] Production Preview: PASS
- [x] E2E: PASS
- [x] Desktop: PASS
- [x] Mobile: PASS
- [x] Light Mode: PASS
- [x] Dark Mode: PASS
- [x] Accessibility: PASS
- [x] SEO: PASS
- [x] CMS Configuration: PASS
- [x] GitHub Pages Configuration: PASS
- [x] Repository Base Path: PASS
- [x] Security Review: PASS
- [x] Visual Review 1: PASS
- [x] Visual Review 2: PASS
- [x] Final Build: PASS

## User Action Required

- [x] Replace the public identity, contact, social links, and canonical URL
- [ ] Push the repository to GitHub and authorize it in Pages CMS
- [ ] Select GitHub Actions as the Pages deployment source
- [ ] Optional: configure a future custom domain, DNS, `CNAME`, and `SITE_URL`
