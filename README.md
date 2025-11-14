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
