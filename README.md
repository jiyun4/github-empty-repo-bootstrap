# github-empty-repo-bootstrap

CLI that turns an empty GitHub account into a polished open-source-ready project skeleton.

## Installation

```bash
npm install github-empty-repo-bootstrap
```

## Quick Start

```typescript
import { GithubEmptyRepoBootstrap } from "github-empty-repo-bootstrap";

const instance = new GithubEmptyRepoBootstrap();
const result = await instance.run();
console.log(result);
```

## Features

- Generates TS package scaffold (tsconfig, eslint, vitest, build scripts)
- Creates CI workflows (tests, release, changelog, provenance)
- Interactive prompts for package name, license, and publish settings

## API Reference

### `GithubEmptyRepoBootstrap`

#### Constructor

```typescript
new GithubEmptyRepoBootstrap(options?: GithubEmptyRepoBootstrapOptions)
```

#### Methods

- `run()` - Execute the main operation. Returns `Promise<GithubEmptyRepoBootstrapResult>`.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Build
npm run build

# Type check
npm run lint
```

## Publishing

1. Update version in `package.json`
2. Create a GitHub release with tag `v0.x.0`
3. The GitHub Action will automatically publish to npm

## License

MIT
