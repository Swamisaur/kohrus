# Troubleshooting GitHub Pages Deployment

## Current Status
- ✅ Build works locally (verified)
- ✅ All files have correct `/kohrus/` basePath
- ⚠️ Site returns 404 (deployment may not be complete)

## Steps to Fix

### 1. Check GitHub Actions Status
Go to: https://github.com/Swamisaur/kohrus/actions

**Look for:**
- ✅ Green checkmark = Deployment successful
- 🟡 Yellow circle = Still running (wait 2-5 minutes)
- ❌ Red X = Failed (check logs)

### 2. Verify GitHub Pages Settings
Go to: https://github.com/Swamisaur/kohrus/settings/pages

**Required Settings:**
- **Source**: Must be set to **"GitHub Actions"** (NOT "Deploy from a branch")
- **Branch**: Should be grayed out if using Actions
- **Custom domain**: Leave empty unless you have one

### 3. Check Workflow Permissions
Go to: https://github.com/Swamisaur/kohrus/settings/actions

**Required Settings:**
- **Workflow permissions**: Should be **"Read and write permissions"**
- **Allow GitHub Actions to create and approve pull requests**: Can be enabled

### 4. Manual Workflow Trigger (if needed)
1. Go to: https://github.com/Swamisaur/kohrus/actions
2. Click **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button (top right)
4. Select branch: **master**
5. Click **"Run workflow"**

### 5. Wait for Deployment
- First deployment: 3-5 minutes
- Subsequent deployments: 2-3 minutes
- Check Actions tab for progress

### 6. Verify Site URL
Once deployment completes, your site should be at:
**https://swamisaur.github.io/kohrus/**

## Common Issues

### Issue: 404 Not Found
**Causes:**
- Deployment hasn't completed yet
- GitHub Pages source not set to "GitHub Actions"
- Workflow failed (check Actions logs)

**Solution:**
1. Wait 5 minutes after pushing
2. Verify Pages settings (step 2 above)
3. Check Actions for errors

### Issue: Assets Not Loading (CSS/JS broken)
**Cause:** basePath mismatch

**Solution:** Already configured correctly with `basePath: '/kohrus'` in `next.config.ts`

### Issue: Workflow Fails
**Common causes:**
- Missing dependencies
- Build errors
- Permission issues

**Solution:** Check the Actions log for specific error messages

## Quick Test
After deployment completes, test these URLs:
- https://swamisaur.github.io/kohrus/ (homepage)
- https://swamisaur.github.io/kohrus/browse/ (browse page)
- https://swamisaur.github.io/kohrus/signup/ (signup page)

All should load correctly if deployment succeeded.
