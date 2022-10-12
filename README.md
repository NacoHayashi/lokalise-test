# AIOPT
![pnpm version](https://img.shields.io/badge/pnpm-v7.0.1-blue) ![node version](https://img.shields.io/badge/node-v16.13.2-blue)

> Vite / Vue3 / TypeScript / Tailwind CSS 

AI-optimized advertising platform

## Development Workflow
### 1. Create branch from project issue

- Go to project [issues](https://gitlab.cyntellitech.org/frontend/aiopt/-/issues).
- Create your branch from the issue and target milestone(if can).

### 2. Run server (two modes)
#### Local
1. Install the dependencies

Go to the root of the repository.

```bash
pnpm install
```

2. Start the application on development mode

```bash
pnpm run dev
```

> The server will be available and you will be go to at http://localhost:8080

### 3. When Commit
1. You must be use pnpm cz to commit.

2. Choose TYPE
- **feat**: A new feature
- **fix**:  A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code            (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding missing tests
- **chore**: Changes to the build process or auxiliary tools\n            and libraries such as documentation generation
- **ci**: Continuous Integration
- **revert**: evert to a commit
- **WIP**:  Work in progress

3. Choose SCOPE (please fill in as much as possible)
4. Write a **SHORT** description of change
5. Write a longer description of change (optional)
6. List issue if you want to close by this change

## CI/CD tag Workflow

### 1. **MERGE STAGE** to TEST when issues branch is done.

- if stage test not ok, should revert to issues branch to fix.

### 2. **MERGE PRE-RELEASE** for PM TEST when issues branch is done.

- if PM has other issue after testing, should revert to issues branch to fix.
### 3. TEST is well, **MERGE MASTER**

- must MR to project matainer or owner

### 4. Tag to master branch
```bash
pnpm run release
```

**Exception**
HOTFIX should push directly to Release.

Only the following types will be written in the changelog

```JSON
    { type: "feat", section: "✨ Features" },
    { type: "fix", section: "🐛 Bug Fixes" },
    { type: "docs", section: "✏️ Documentation" },
    { type: "style", section: "💄 Styles" },
    { type: "refactor", section: "♻️ Code Refactoring" },
    { type: "perf", section: "⚡ Performance Improvements" },
    { type: "chore", section: "🚀 Chore" },
    { type: "ci", section: "👷 Continuous Integration" },
```
## Docker (Recommand when project release)

1. create images from Dockerfile and build it.

```bash
docker build -t <image_name>:<tag> .
```

2. create container

```bash
docker run -d --name <container_name> <images>
```

3. run images built with ci

```bash
docker run --env-file .env.<desired_environment> \
    -p 8080:80 \
    -d \
    ccr.cyntellitech.com/service/sep-graphql-apollo-server:<tag>
```
