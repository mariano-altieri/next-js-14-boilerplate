## Description

Next JS App Router boilerplate that simulates a basic e-commerce and includes a few basic pages (CSR, SSG, SSR and ISR). It contains a small Admin, protected and public routes, forms (+ validation) and several commonly used features: authentication, search, products grid, pagination, shopping cart and more.

Demo [here](https://next-js-14-boilerplate-tau.vercel.app/).

## Tech Stack

- Next JS 14+
- TypeScript
- Tailwind CSS
- Shadcn/ui
- React Hook Form
- Zod
- Tanstack React Query
- Auth JS v5
- Zustand (client state management)

## Features

- Client Side Rendering (CSR): eg. Admin Pages
- Server Side Rendering (SSR): eg. Product List Page
- Static Site Generation (SSG): eg. Home, about
- Incremental Static Regeneration (ISR): Products Details Page
- Authentication (Sign In, Sign Up, Sign Out)
- Protected/Public Routes
- Typescript Schema-driven Forms + Validation
- Search Products (SSR)
- Shopping Cart (uses Zustand - not persisted)
- API powered by [DummyJSON](https://dummyjson.com/)

## Inspiration

This project is an attempt to make use of the App Router folder structure as much as possible, following a feature centric approach, where each feature has its own folder with all the necessary files (components, hooks, pages, services, types, etc). The structure was also loosely inspired by a few concepts extracted from Nest JS, Vue and Angular.

## Getting Started

1. Clone the repository.

2. Copy `.env.template` file and rename it to `.env`. Fill in the required environment variables.

3. Install dependencies:

```bash
npm i
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Roadmap

- Add Unit and E2E testing
- Add more features
- Shrink JS bundle sizes where possible

## Contribute

Feel free to contribute to this project. Any feedback or suggestions are welcome. Please open an issue or a pull request.
