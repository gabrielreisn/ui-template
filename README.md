## UI Template rep

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## requirements
 - node v12.0.0 >
 - yarn v1.22.0 >
 - docker (optional)

## Getting Started

First, run the development server:

```bash
yarn dev
# or
docker-compose up --build
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack used

- Next.js / React
- TypeScript
- MSW 
- jest
- react-testing-library (RTL)
- cypress
- emotion (css-in-js lib)
- axios (for http requests)
- eslint / prettier
- travis CICD
- netlify (deployments and PR previews)
- docker (optional)
- i18n-next


## Architectural decisions

- client-side-render (CSR): I'd choose Next.js since it has the ability of scale later with hybrid approaches and bundle with SSG (static site generation), reducing first time to render / paint

- TypeScript / eslint : the usage of types and static analysis can eliminate a whole category of bugs

- Axios: After a few problems with native fetch in the past, i'd decided to move with Axios for REST http requests, it's also handful for isomorphic applications (SSR) where you can't run fetch

- Jest / RTL / Cypress : this combination provides a charming complete test suite including unit, integration and E2E tests. As part of the testing strategies, i'd opted for handling edge cases on jest + RTL and only the "happy path" on cypress due to it's time cost.

- emotion : css-in-js can be pretty handful using with the collocation principle, allowing scoped css right next to the real usage

- MSW : Provides a mock api based on service-workers and a unique source of mocks/stubs to be used during development + testing env + production (if necessary), turning the whole app integration easy

- i18n-next: Support for i18n from the beginning aiming easy scalability

## Folder structure

```
/src
   /pages
   /constants  
   /Feature
     /__tests__
     index
     helpers
     general-components..
```

## CICD integration

![image](https://user-images.githubusercontent.com/13686332/94494964-dbefa480-01c6-11eb-9ab3-11ecd6015d25.png)

