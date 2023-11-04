## UI Template rep

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## requirements

- node v18.17.0 >
- pnpm v8 >
- docker (optional)

## Getting Started

First, run the development server:

```bash
pnpm dev
# or
docker-compose up --build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack used

- Next.js / React
- TypeScript
- MSW (not supported for app router yet)
- jest
- react-testing-library (RTL)
- playwright
- tailwindcss
- eslint / prettier
- github actions (CI/CD)
- netlify (deployments and PR previews)
- docker (optional)

## Folder structure

```
/components
/constants
/Feature
     /__tests__
     index
     helpers
     general-components..
/app
```

## CICD integration

![image](https://user-images.githubusercontent.com/13686332/94494964-dbefa480-01c6-11eb-9ab3-11ecd6015d25.png)
