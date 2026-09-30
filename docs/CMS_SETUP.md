# Pages CMS setup and operation

## Why Pages CMS

Pages CMS edits files directly in GitHub. It keeps Markdown, images, settings, commit history, local development, and browser editing on one source of truth. No database or custom password system is involved.

## Connect GitHub

1. Push this project to the intended GitHub repository.
2. Open `/admin` on the deployed site, then choose **Continue with GitHub**.
3. Sign in at Pages CMS and authorize access to the repository. Grant only the repository needed for this site when GitHub offers that choice.
4. Select the repository and its `main` branch. Pages CMS reads `.pages.yml` automatically.

Authorization is the one setup action Codex cannot perform for you. Knowing `/admin` does not grant access; GitHub write permission does.

## Create and edit content

Choose **Writing**, **Notes**, or **Projects**, then select an existing entry or **New**. Fill in the form; Pages CMS writes frontmatter and Markdown. You do not need to edit YAML. Use lowercase words separated by hyphens for Slug.

On phones, use the same Pages CMS URL. The essential flow—sign in, open an entry, edit text, upload an image, and save—works in the browser.

## Images

Use the image picker in the Cover field or rich-text editor. Uploads are committed under `public/images/uploads/` and public URLs begin `/images/uploads/`. Always write useful alt text that conveys the image’s purpose.

## Draft and publish

- Keep **Draft** enabled while working. Production builds exclude the entry from pages, tags, archive, RSS, sitemap, related posts, and search.
- A publish date in the future is also excluded until that date.
- To publish, set the intended date, turn Draft off, and save. Pages CMS commits the change; the push starts GitHub Actions.
- To withdraw an entry without deleting it, turn Draft back on and save.

## Save, delete, and recover

Saving creates a Git commit. Deleting through the CMS also creates a commit rather than erasing history. To recover, open the repository on GitHub, find the commit that removed or changed the file, and use GitHub’s revert flow (or restore the file from that revision locally and push it).

## Now, Uses, and settings

These entries edit JSON files. Update the date on the Now page whenever its lists change. Site Settings controls identity, canonical URL, contact details, hero copy, and footer. When adopting a custom domain, also create or update `public/CNAME` and the GitHub Actions `SITE_URL` repository variable; robots and sitemap URLs are generated from the build URL.

## Change the CMS schema

Edit `.pages.yml`, validate indentation, and commit it. Field names must remain aligned with `src/content.config.ts` and the JSON structures in `src/data/`. Run `pnpm typecheck`, `pnpm validate:content`, and `pnpm build` before pushing schema changes.
