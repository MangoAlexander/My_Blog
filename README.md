# Quiet Signal

An editorial personal blog, digital garden, portfolio, and browser-editable writing platform. Content lives in Markdown and JSON, Astro produces a static site, Pages CMS edits the same files in a browser, and GitHub Actions deploys to GitHub Pages.

## Technology stack

- Astro 7 and strict TypeScript
- Astro Content Collections with Markdown/MDX
- Design-token-driven CSS with no client framework
- Pagefind static full-text search
- Pages CMS for GitHub-backed browser authoring
- Vitest, Playwright, ESLint, and Prettier
- GitHub Actions and GitHub Pages

## Requirements

- Ubuntu 24.04 LTS is the primary maintenance environment. macOS and Windows with a compatible Node setup also work.
- Node 24.21.0 (see `.nvmrc` and `.node-version`)
- pnpm 10.34.6

Using nvm on Ubuntu:

```bash
nvm install
nvm use
npm install --global pnpm@10.34.6
```

## Install and develop

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:4321`. Development mode intentionally includes drafts and future entries so they can be previewed. Production excludes them everywhere.

## Production build and preview

```bash
pnpm build
pnpm preview
```

The build validates Astro/TypeScript, writes the static site to `dist/`, then adds the Pagefind index. Run the complete local quality suite with `pnpm check`; run production browser tests after a build with `pnpm test:e2e`.

## Create content locally

- Writing: add `src/content/writing/my-slug.md`
- Notes: add `src/content/notes/my-slug.md`
- Projects: add `src/content/projects/my-slug.md`
- Uploads: put images in `public/images/uploads/`

Copy a nearby entry to retain the validated frontmatter shape. Set `draft: true` until publication. Slugs must be unique, lowercase kebab-case. See [docs/WRITING.md](docs/WRITING.md) for the non-technical workflow.

## Browser CMS

The hidden `/admin` page links to Pages CMS. After the repository has been pushed to GitHub, sign in to Pages CMS, authorize this repository, and select it. The root `.pages.yml` creates friendly editors for Writing, Notes, Projects, Now, Uses, and Site Settings, including image upload. Edits become Git commits; there is no external content database.

Detailed setup and recovery instructions are in [docs/CMS_SETUP.md](docs/CMS_SETUP.md).

## Site settings

Edit `src/data/site.json` locally or through Pages CMS to update the author, email, GitHub URL, canonical URL, and copy. `src/data/now.json` and `src/data/uses.json` also remain browser-editable.

For a repository Pages URL, the deployment workflow calculates `BASE_PATH` automatically. For a custom domain, create the Actions repository variable `SITE_URL` with the full origin (for example `https://notes.example.com`) and use `/` as the base.

## GitHub Pages and Actions

1. Push the project to a GitHub repository with `main` as the default branch.
2. In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
3. The CI workflow checks formatting, lint, types, content, unit tests, build, and Playwright on pushes and pull requests.
4. The deploy workflow repeats the quality gates, uploads `dist`, and deploys only after success.

Workflow permissions are least-privilege: CI has read-only repository access; deployment adds only Pages and OIDC write access.

## Custom domain and DNS

The site uses `https://www.mangoduck.cn`. The custom domain is recorded in `public/CNAME`, and the Actions repository variable `SITE_URL` must use the same HTTPS origin. DNS setup and verification are covered in [docs/DOMAIN_SETUP.md](docs/DOMAIN_SETUP.md).

## Directory structure

```text
src/components/       shared interface components
src/content/          writing, notes, and project Markdown
src/data/             browser-editable JSON settings
src/layouts/          document and article layouts
src/pages/            static routes and dynamic content routes
src/styles/           global design system and prose styles
src/utils/            publishing, URL, and reading helpers
scripts/              content validation
tests/e2e/            production browser tests
public/images/        covers and CMS uploads
docs/                 authoring and deployment guides
```

## Commands

| Command                 | Purpose                                        |
| ----------------------- | ---------------------------------------------- |
| `pnpm dev`              | Local authoring server                         |
| `pnpm format`           | Apply formatting                               |
| `pnpm format:check`     | Verify formatting                              |
| `pnpm lint`             | Static linting                                 |
| `pnpm typecheck`        | Astro and TypeScript validation                |
| `pnpm validate:content` | Frontmatter, slug, cover, and reference checks |
| `pnpm test`             | Unit tests                                     |
| `pnpm build`            | Production build and search index              |
| `pnpm preview`          | Serve production output                        |
| `pnpm test:e2e`         | Desktop and mobile browser tests               |

## Troubleshooting

- **Wrong Node version:** run `nvm use` and confirm `node --version` matches `.nvmrc`.
- **Frozen lockfile failure:** use the pinned pnpm version; update dependencies intentionally with `pnpm install`, then commit `pnpm-lock.yaml`.
- **CSS or image 404 on project Pages:** do not hardcode the repository name. Let the workflow set `BASE_PATH`, and use `sitePath()` for internal/public links.
- **A draft appears locally:** expected in development. Check the production build/preview; drafts and future posts are removed there.
- **Search unavailable in development:** Pagefind is generated by `pnpm build`; use `pnpm preview`.
- **Pages CMS does not show the repository:** confirm GitHub authorization and repository write permission.

## Security

Never put PATs, OAuth secrets, private keys, or passwords in this repository, `.pages.yml`, `public/`, or client-side JavaScript. Pages CMS authorization and GitHub repository permissions are the write boundary; `/admin` is only a discoverable gateway.
