# Contributing to Railverse

Thank you for contributing to Railverse! We are building a premium, high-performance railway intelligence platform, and we expect all contributions to meet our high standards of quality, accessibility, and design elegance.

Please read this document carefully before starting any work.

---

## ✦ Code of Conduct
By participating in this project, you agree to abide by our [Code of Conduct](file:///c:/Project%20Railverse/Railverse%20v2.0.0/CODE_OF_CONDUCT.md). Please report any violations or inappropriate behavior to `conduct@travelcore.in`.

---

## ✦ Git Workflow & Branch Strategy

We use a linear Git history model. Avoid unnecessary merge commits where possible.

### Branch Naming Convention
Create descriptive branch names using the following prefixes:
- `feat/` — Adding a new feature (e.g., `feat/rv-102-pnr-status-view`)
- `fix/` — Fixing a bug (e.g., `fix/rv-404-date-matrix-overflow`)
- `perf/` — Performance tuning and optimization (e.g., `perf/framer-motion-lazy`)
- `docs/` — Documentation updates (e.g., `docs/add-api-specs`)
- `refactor/` — Restructuring code without changing functionality (e.g., `refactor/custom-hooks`)

### Committing Code (Conventional Commits)
We enforce the [Conventional Commits](https://www.conventionalcommits.org/) specification. This helps automate changelogs and maintain a readable commit history.

**Format**: `type(scope): description`

**Commit Types**:
- `feat`: A new user-facing feature.
- `fix`: A bug fix.
- `docs`: Documentation updates.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `chore`: Internal tool updates, dependency changes, or config updates.

**Examples**:
- `feat(pnr): add visual coach mapping cards`
- `fix(live-status): correct delay calculations for terminating stations`
- `docs(readme): add environment variable requirements`
- `style(components): standardise focus rings using Tailwind v4 classes`

---

## ✦ Development Lifecycle

### 1. Issue Assignment
Before writing code, ensure there is an open issue in our project tracker detailing the bug or feature request. Assign the issue to yourself or confirm with the repository maintainers.

### 2. Local Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/travelcore/railverse-v2.git
   cd railverse-v2
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   *Note: Edit `.env.local` to include your specific credentials. Refer to the [README.md](file:///c:/Project%20Railverse/Railverse%20v2.0.0/README.md) for details.*

### 3. Writing Code
- Follow the design principles and coding conventions defined in [DEVELOPMENT_GUIDELINES.md](file:///c:/Project%20Railverse/Railverse%20v2.0.0/DEVELOPMENT_GUIDELINES.md).
- Use **Tailwind CSS v4** utility classes combined with custom **shadcn/ui** layout variables.
- Keep components small, modular, and accessible.

### 4. Verification & Testing
Before committing your work, verify that your changes do not break existing features.
- **Linting & Formatting**:
  ```bash
  npm run lint
  npm run format
  ```
- **Type Checking**:
  ```bash
  npx tsc --noEmit
  ```
- **Testing**:
  ```bash
  npm run test
  ```

---

## ✦ Pull Request (PR) Submission Guidelines

1. **Keep PRs focused**: Each PR should address one specific feature or bug fix. Avoid modifying unrelated files.
2. **Use our template**: Ensure you fill out the PR description template completely. Link the PR to the relevant issue.
3. **Review requirement**: All PRs must receive approval from at least one Core Maintainer/Lead Architect and pass all CI checks before being merged.

### PR Checklist
- [ ] Code is fully typed using TypeScript.
- [ ] No `any` types are introduced unless explicitly approved and documented.
- [ ] Focus rings and keyboard controls are verified for accessibility (WCAG AA).
- [ ] All code formatters and linters pass without warnings.
- [ ] No visual regression or unintended layout shifts are introduced.
- [ ] Screenshots or screen recordings are attached if there are UI/UX changes.
