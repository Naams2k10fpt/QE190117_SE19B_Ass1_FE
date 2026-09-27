# TaskTrack frontend · PRN232 Assignment 1

Public Next.js 15 app for browsing and managing departments, projects, tasks, and tags. It uses the App Router, TypeScript, Tailwind CSS, and the [TaskTrack API](https://github.com/Naams2k10fpt/QE190117_SE19B_Ass1_BE).

## Database ERD

![TaskTrack PostgreSQL entity relationship diagram](docs/erd.svg)

## Run locally

1. Install dependencies with `npm ci`.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL` to the API origin, without a trailing `/api` path.
3. Run `npm run dev` and open `http://localhost:3000`.

Run `npm run lint` and `npm run build` before pushing. GitHub Actions runs these checks on every push. The deployed frontend is at [Vercel](https://prn232-as01.vercel.app/).

The management pages are public for this assignment and provide create, edit, delete, filtering, and 10-row pagination. Task deletion is a soft delete in the API.
