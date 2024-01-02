# React Suspense Playground

This repo contains examples for my article [Is React Suspense useful?](https://a13xg0.com/2024/is-react-suspense-useful/).

It contains monorepo with two packages:
- `backend` - GraphQL server with a delay to simulate network latency. Based on NestJS.
- `frontend` - React application with examples of using React Suspense.

## How to run
1. Clone the repo
2. Install dependencies
```bash 
pnpm i
```
3. Run examples
```bash
pnpm lerna run strt
```
4. Open http://127.0.0.1:5173 in your browser

