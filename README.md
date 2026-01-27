# Paint & Wine

A React + Vite application with Sanity CMS integration.

## Prerequisites

- Node.js (v18+)
- npm

## Getting Started

### 1. Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install Sanity Studio dependencies
cd studio-wine-and-paint
npm install
```

### 2. Run the Frontend

From the project root:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Run Sanity Studio

In a separate terminal, from the `studio-wine-and-paint` folder:

```bash
cd studio-wine-and-paint
npm run dev
```

The studio will be available at `http://localhost:3333`

## Available Scripts

### Frontend (root)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

### Sanity Studio (studio-wine-and-paint)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start studio locally |
| `npm run build` | Build studio for deployment |
| `npm run deploy` | Deploy studio to Sanity hosting |

## Deployment

The frontend is hosted on **Cloudflare Pages**. Pushing to `main` automatically triggers a build and deployment.

**Live site:** [paintandwine.mk](https://paintandwine.mk)
