# My Portfolio
 
A modern, responsive portfolio built with React and Material UI implementing single-page navigation using React Router DOM for showcase projects, skills, and contact details.

## Live Site
- URL: https://nadildulran.netlify.app
- Hosting: Netlify
- Status: Auto-deployed with GitLab CI/CD pipeline on successful builds

## CI/CD (GitLab)
This project uses GitLab CI/CD with separate stages for build, test, and deploy.
- **Build:** Installs dependencies and builds the production bundle.
- **Test:** Runs unit and smoke tests in CI (Jest/React Testing Library).
- **Deploy:** Publishes the built `build/` artifacts to Netlify.

Typical `.gitlab-ci.yml` stages (overview):
- **`install`**: `npm ci` for clean installs.
- **`test`**: `npm test -- --ci --watchAll=false` to run tests once.
- **`build`**: `npm run build` producing optimized static files.
- **`deploy`**: Netlify CLI/API deploy using a site ID or auth token.

Note: Ensure the pipeline caches `node_modules`, sets `CI=true`, and passes Netlify auth (`NETLIFY_AUTH_TOKEN`) and `NETLIFY_SITE_ID` securely via GitLab CI variables.

## Local Development
Prerequisites:
- Node.js 18+ and npm
- macOS with zsh (default shell)

Install dependencies:
```bash
npm install
```

Start the dev server:
```bash
npm start
```
- Opens `http://localhost:3000`.
- Hot reload enabled; lint errors appear in the console.

Run tests locally:
```bash
npm test
```

Build for production:
```bash
npm run build
```

Serve the production build locally (optional):
```bash
npx serve -s build
```

## Tech Stack
- **Framework:** React
- **Styling:** CSS
- **Testing:** Jest + React Testing Library
- **Hosting:** Netlify
- **CI/CD:** GitLab Pipelines

## Deployment Notes (Netlify)
- Configure `netlify.toml` to set build command and publish directory.
- Typical settings:
	- **Build command:** `npm run build`
	- **Publish directory:** `build`
- Connect the Git repository to Netlify for automatic deploys on push, or deploy via CI using Netlify CLI with tokens stored as CI variables.

## Contributing
- Branch from `main`, open pull requests.
- Run `npm test` before pushing.
- Ensure CI passes (build + test) before merge.

## License
This portfolio is provided as for personal use.
