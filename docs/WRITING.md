# Writing and publishing guide

This guide assumes no terminal or local development environment.

## Write an article in a browser

1. Open `https://your-domain.example/admin`.
2. Continue to Pages CMS and sign in with the GitHub account that can write to the site repository.
3. Choose **Writing → New**.
4. Add a title and a short description. Create a lowercase hyphenated slug such as `a-season-of-small-tools`.
5. Choose a publication date, upload a cover, describe it in Cover alt text, and add a few stable tags.
6. Write in the Content editor. Keep Draft on and save as often as needed.
7. Preview through a branch or local environment if desired. When ready, turn Draft off and save. GitHub Actions publishes automatically.

## Notes and projects

Use **Notes** for short ideas and quick capture; only title, slug, date, tags, draft, and content are needed. Use **Projects** for portfolio work, adding a year, cover, technology list, and optional GitHub/demo links.

## Useful Markdown

```markdown
## Section heading

Write paragraphs with a blank line between them.

- A list item
- Another item

[A descriptive link](https://example.com)

> A quotation or important aside.

`inline code`
```

Use fenced code blocks with a language for syntax highlighting:

````markdown
```ts
const answer = 42;
```
````

## Images and accessibility

Upload from the image field or editor; do not use FTP, SSH, or manual server copies. Compress very large camera originals before upload when practical. Alt text should communicate what a reader needs from the image, not start with “Image of”. Decorative images should generally stay outside article content.

## Featured, tags, and dates

Featured writing can appear prominently on the homepage. Use it sparingly. Reuse existing tag spelling rather than creating near-duplicates. Future dates schedule a post by keeping it out of production until the date arrives.

## Correct or withdraw a post

Open the entry, edit, and save; set Updated date for meaningful revisions. To withdraw, enable Draft. To restore an accidental edit or deletion, use the repository’s Git history as described in `CMS_SETUP.md`.
