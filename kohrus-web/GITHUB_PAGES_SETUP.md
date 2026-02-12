# GitHub Pages Setup - Quick Guide

## Step 1: Push Changes to GitHub

```bash
# Add all files
git add .

# Commit changes
git commit -m "Configure Next.js for GitHub Pages deployment"

# Push to GitHub
git push origin master
```

## Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. Save the settings

## Step 3: Trigger Deployment

The workflow will automatically run when you push to `master` branch. 

To manually trigger:
1. Go to **Actions** tab
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** → **"Run workflow"**

## Step 4: Access Your Site

After deployment completes (check Actions tab), your site will be available at:

**https://[your-username].github.io/[repository-name]/**

For example, if your repository is `https://github.com/username/kohrus`, your site will be:
**https://username.github.io/kohrus/**

## Troubleshooting

- Check the **Actions** tab for any build errors
- Make sure GitHub Pages is enabled in repository Settings
- Wait a few minutes after pushing - deployment takes 2-5 minutes
- The workflow must complete successfully before the site is live
