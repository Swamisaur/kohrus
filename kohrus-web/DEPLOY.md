# GitHub Pages Deployment

This Next.js application is configured for static export and GitHub Pages deployment.

## Setup Instructions

1. **Push to GitHub**: Make sure your code is pushed to a GitHub repository

2. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

3. **Deploy**:
   - The GitHub Actions workflow will automatically deploy when you push to the `main` branch
   - Or manually trigger it from the Actions tab → "Deploy to GitHub Pages" → "Run workflow"

4. **Access your site**:
   - After deployment completes, your site will be available at:
   - `https://[your-username].github.io/[repository-name]/`
   - Or if using a custom domain, configure it in Settings → Pages

## Build Locally

To test the static export locally:

```bash
cd kohrus-web
npm install
npm run build
```

The static files will be in the `out` folder. You can serve them with any static file server:

```bash
npx serve out
```

## Notes

- All dynamic routes (`/asset/[id]`, `/owner/applications/[id]`, etc.) are pre-rendered with static params
- Images are unoptimized for static export compatibility
- Trailing slashes are enabled for GitHub Pages compatibility
