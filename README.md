# Yes We Cook

A full-stack recipe management application where users can create, manage, and share recipes. Recipes are organized by category (Entrées, Plats, Desserts, Apéros), support rich-text instructions, cover images, and can be published publicly or kept private. The app includes user authentication, community profiles, and an admin area.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Database**: PostgreSQL (via Docker) + Prisma ORM
- **Auth**: [Better Auth](https://www.better-auth.com/docs/introduction)
- **Image upload**: [Cloudinary](https://cloudinary.com/documentation)
- **Rich text editor**: TipTap
- **UI**: Tailwind CSS v4, shadcn/ui (Radix UI), Lucide icons
- **Forms & validation**: React Hook Form + Zod

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/) (for the PostgreSQL database)
- A [Cloudinary](https://cloudinary.com/) account (free tier works)

## Getting Started

### 1. Clone the repository

```bash
git clone <repo-url>
cd yeswecook
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file at the root of the project:

```bash
cp .env.example .env
```

`.env` template:

```env
# Auth
BETTER_AUTH_SECRET=<generate-a-random-secret>
BETTER_AUTH_URL=http://localhost:3000

# Database (must match docker-compose values)
DB_NAME=<your-db-name>
DB_USER=<your-db-user>
DB_PASSWORD=<your-db-password>
DB_PORT=<your-db-port>

# Prisma connection string
# Port must match DB_PORT above (maps to the Docker container's internal 5432)
DATABASE_URL="postgresql://<your-db-user>:<your-db-password>@localhost:<your-db-port>/<your-db-name>?schema=public"

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your-cloud-name>
NEXT_PUBLIC_CLOUDINARY_API_KEY=<your-api-key>
NEXT_PUBLIC_CLOUDINARY_RECIP_PRESET=<your-recipe-upload-preset>
NEXT_PUBLIC_CLOUDINARY_USER_PRESET=<your-user-upload-preset>
CLOUDINARY_API_SECRET=<your-api-secret>
```

> To generate a `BETTER_AUTH_SECRET`, run: `openssl rand -hex 32`

### 4. Start the database

```bash
docker-compose up -d
```

This spins up a PostgreSQL 15 container accessible on `localhost:5434`.

### 5. Run database migrations

```bash
npx prisma migrate deploy
```

### 6. (Optional) Seed the database

A seed file is available at `prisma/seed-data.json`. Use the in-app seed page at `/seed` once the app is running, or trigger it via the server action in `actions/seed/seed-action.ts`.

### 7. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npx prisma studio` | Open Prisma Studio (database GUI) |
| `npx prisma migrate dev` | Create and apply a new migration |

## Project Structure

```
yeswecook/
├── app/                  # Next.js App Router pages
│   ├── (private)/        # Protected routes (account, admin, seed)
│   ├── auth/             # Sign-in / sign-up pages
│   ├── explore-recipes/  # Public recipe browser
│   ├── community/        # Community & user profiles
│   └── [entrees|plats|desserts|aperos]/  # Recipe category pages
├── components/           # React components by feature
├── actions/              # Next.js Server Actions
├── lib/                  # Auth, Prisma client, utilities, Zod schemas
├── prisma/               # Prisma schema & migrations
├── types/                # TypeScript type definitions
└── docker-compose.yaml   # PostgreSQL service
```

## Cloudinary Setup

1. Create a free account at [cloudinary.com](https://cloudinary.com)
2. In your dashboard, create two **unsigned upload presets**:
   - One for recipe covers (e.g. `yeswecook_recipe_preset`)
   - One for user avatars (e.g. `yeswecook_user_preset`)
3. Add the preset names and your credentials to `.env`
