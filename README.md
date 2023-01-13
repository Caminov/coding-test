# Fringuant's Coding Test

Great, here is our hiring test. Chances are that if you're here, it means we want you in the team. Unfortunately, we can't hire everyone, so we have to take a decision. Thus, we have to make sure that you're the right person for the job. This test is designed to help us make that decision.

If you fork this repo, please keep yours private.

## The test

Estimated completion time: 1~2 hours

This test is about handling data coming from fashion brands. It comprises products' specifications. The test is divided into two parts:

- [ ] For the first part, you'll have to retrieve data from a PostgreSQL database and display it in a table. You'll also have to implement a search feature and an edit button as the last column of the table.
- [ ] For the second part, you'll have to implement a form to add new data to the database.

### Table description

The table is composed of the following columns:

- `id`: the primary key of the table. It's an auto-incremented integer.
- `organization`: the name of a brand.
- `name`: the name of a product.
- `specifications`: a JSON object containing the product's specifications. Its structure is the following:

```json
{
  "fit": "string", // one of "fitted", "semifitted", or "loose"
  "sizes": ["string" or "number"], // list the available sizes (e.g.: "S", "M", "L")
  "gender": "unisex", // one of "unisex", "female", "male"
  "product_dimensions": {
    // the product's dimensions
    "string": { // the name of a dimension (one of "chest", "waist", "pelvis", "hips", "arm_length", "shoulder_length")
      "delta": "number", // arbitrary number
      "dimensions": ["number"] // list of sizes in cm for the given dimension (e.g.: [50, 52, 54])
    }
  }
}
```

## Getting Started

### Prerequisites

In order to set everything up, you'll need to create an `.env.local` file at the project's root. This file will contain the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
FIRST_NAME=
```

As you read this, we already sent you the values for the first two variables. The third one is your first name. Please fill it in as it will be used to retrieve your personal PostgreSQL table.

Finally, you'll also have to update your first name in the file `assets/db_types.ts`

### First run

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/products](http://localhost:3000/api/products). This endpoint can be edited in `pages/api/products.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about this hiring test, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Supabase Documentation](https://supabase.io/docs) - learn about Supabase features and API.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
