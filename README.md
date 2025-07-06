# ✈️ ZenRoute

Plan your journeys with ease.

**ZenRoute** is a simple web app that helps you organize your trips and the places you want to visit. Whether it's a weekend getaway or a month-long adventure, this app lets you create trips, add multiple locations, and track your travel plans in one place.

## 🖼️ Features

- Create and manage multiple trips
- Add details like title, description, start and end dates
- Save locations for each trip (with coordinates)
- Integration with maps API to show the location
- Set the order of visits
- Clean and responsive UI

## 🛠️ Tech Stack

- **Next.js** – React-based framework for building fast web apps
- **TypeScript** – Typed JavaScript for better developer experience
- **Prisma** – Database toolkit for working with PostgreSQL
- **PostgreSQL** – Stores all trip and location data
- **Graphhopper Maps API** - A free and routing and geocoding service used to convert location names into coordinates (geocoding).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
