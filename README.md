# SmileXMedia Production House Website

A modern, cinematic website for SmileXMedia production house featuring stunning animations, camera shutter effects, lighting animations, and a sleek design.

## Features

- 🎬 Cinematic hero section with animated camera shutter effect
- ✨ Smooth animations and transitions using Framer Motion
- 🎨 Modern dark theme with film-noir aesthetics
- 📱 Fully responsive design
- 🎯 Interactive project showcases
- 💡 Animated lighting effects
- 🎪 Tent/studio lighting animations

## Tech Stack

- React 19
- Framer Motion (for animations)
- CSS3 (custom animations and effects)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/smileproductions18/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

## Deployment to GitHub Pages

The project is configured for GitHub Pages deployment. Follow these steps:

### First Time Setup

1. **Authenticate with GitHub** (if not already done):
   - You'll need to push to the repository. If you get a permission error, you may need to:
     - Use SSH instead of HTTPS: `git remote set-url origin git@github.com:smileproductions18/website.git`
     - Or authenticate using GitHub CLI: `gh auth login`
     - Or use a personal access token

2. **Push to main/master branch**:
```bash
git push -u origin master
```

3. **Deploy to GitHub Pages**:
```bash
npm run deploy
```

This will:
- Build the production version
- Create/update the `gh-pages` branch
- Push it to GitHub

### Enable GitHub Pages

After the first deployment:

1. Go to your repository on GitHub: https://github.com/smileproductions18/website
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select the `gh-pages` branch
4. Click **Save**

Your site will be live at: **https://smileproductions18.github.io/website**

## Custom Domain Setup (smileproductions.in)

The project is configured to use the custom domain `smileproductions.in`. Follow these steps:

### 1. DNS Configuration

Configure your DNS records with your domain registrar (where you purchased `smileproductions.in`):

**Option A: Apex Domain (smileproductions.in) - Recommended**

Add these A records:
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600 (or default)

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600 (or default)
```

**Option B: WWW Subdomain (www.smileproductions.in)**

Add this CNAME record:
```
Type: CNAME
Name: www
Value: smileproductions18.github.io
TTL: 3600 (or default)
```

### 2. GitHub Pages Configuration

1. After deploying to GitHub Pages, go to your repository: https://github.com/smileproductions18/website
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter: `smileproductions.in`
4. Check **Enforce HTTPS** (this will be available after DNS propagates)
5. Click **Save**

### 3. Verify Setup

- The `CNAME` file is already created in the `public/` folder and will be included in the build
- After DNS propagation (can take 24-48 hours), your site will be accessible at:
  - **https://smileproductions.in**
  - **https://www.smileproductions.in** (if configured)

### 4. Troubleshooting "NotServedByPagesError"

If you see "Domain does not resolve to the GitHub Pages server" error:

**Step 1: Verify DNS Records**
- Use online tools to check your DNS: https://www.whatsmydns.net or https://dnschecker.org
- Search for A records for `smileproductions.in`
- All 4 A records should show the GitHub IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- If they don't match, update your DNS records at your registrar

**Step 2: Check CNAME File**
- The CNAME file must contain ONLY the domain name (no extra lines or spaces)
- After deploying, verify it exists in the `gh-pages` branch at the root
- It should contain exactly: `smileproductions.in` (no trailing spaces/newlines)

**Step 3: Remove Conflicting Records**
- Make sure you don't have conflicting CNAME records for the apex domain
- Apex domains (like `smileproductions.in`) should ONLY use A records, not CNAME
- If you have a CNAME for `@`, remove it and use A records instead

**Step 4: Wait for DNS Propagation**
- DNS changes can take 24-48 hours to fully propagate
- Even if your registrar shows the records, they may not be visible globally yet
- Check from multiple locations using DNS checker tools

**Step 5: Verify GitHub Pages Settings**
1. Go to repository Settings → Pages
2. Make sure "Custom domain" shows: `smileproductions.in`
3. If it shows "Not yet verified", wait for DNS to propagate
4. Don't check "Enforce HTTPS" until DNS is verified

**Step 6: Re-deploy**
After fixing DNS, re-deploy:
```bash
npm run deploy
```

**Step 7: Check for CAA Records (if using)**
If you have CAA records, ensure they allow Let's Encrypt:
```
Type: CAA
Name: @
Value: 0 issue "letsencrypt.org"
```

### 5. Important Notes

- DNS changes can take 24-48 hours to propagate globally
- Make sure to deploy after adding the CNAME file: `npm run deploy`
- The CNAME file must be in the `public/` folder (it will be copied to build)
- GitHub will automatically create the CNAME file in the gh-pages branch
- HTTPS will be automatically enabled by GitHub Pages once DNS is configured
- **Never use CNAME for apex domain** - only use A records for the root domain

### Updating the Site

To update the live site:

1. Make your changes
2. Commit and push to master:
```bash
git add .
git commit -m "Your commit message"
git push origin master
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
smilexmedia/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Main styles and animations
│   ├── index.js        # Entry point
│   └── index.css       # Global styles
├── package.json
└── README.md
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages (builds and deploys)

## Customization

- Update Instagram link in `src/App.js` (search for `smilexmedia`)
- Modify colors in `src/App.css`
- Update project data in the `projects` array in `src/App.js`
- Customize animations in `src/App.css` (look for `@keyframes`)

## License

This project is private and proprietary to SmileXMedia.

## Contact

- Instagram: [@smilexmedia](https://www.instagram.com/smilexmedia/)
