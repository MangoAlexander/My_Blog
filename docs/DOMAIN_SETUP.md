# Custom domain setup

## Before changing DNS

1. Create `public/CNAME` containing the exact domain, without `https://` or a path.
2. Update `src/data/site.json` to the HTTPS origin.
3. In GitHub **Settings → Secrets and variables → Actions → Variables**, create `SITE_URL` with that origin.
4. Push and let the deploy workflow finish.

## GitHub Pages settings

In **Settings → Pages**, select **GitHub Actions** as the source. Enter the custom domain if GitHub has not picked it up from `CNAME`. Verify the domain in your GitHub account or organization settings to reduce takeover risk.

## DNS records

For an apex domain such as `example.com`, add the current GitHub Pages `A` records and, if desired, `AAAA` records published in GitHub’s official Pages documentation. For a subdomain such as `notes.example.com`, add a `CNAME` pointing to `YOUR-USER.github.io` (not to a repository path). Do not invent proxy records, and remove conflicting `A`, `AAAA`, or `CNAME` records for the same host.

GitHub can change its documented IP set. Copy the values from the current official documentation at setup time rather than from an old project README.

## HTTPS and propagation

DNS changes may take hours to propagate. Once GitHub reports the DNS check as successful and provisions a certificate, enable **Enforce HTTPS**. Do not force HTTPS through unrelated redirect services while GitHub is issuing the certificate.

Verify:

- the apex and chosen `www` behavior are intentional;
- CSS, JavaScript, covers, uploads, RSS, and sitemap load without 404s;
- canonical and Open Graph URLs use the custom domain;
- `https://YOUR-DOMAIN/sitemap-index.xml` and `/rss.xml` respond;
- the Pages environment shows the expected deployment URL.

If moving back to a `username.github.io/repository` URL, remove `public/CNAME`, delete the `SITE_URL` repository variable, and redeploy so the workflow calculates the repository base path.
