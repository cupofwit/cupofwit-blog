# Writing Site

A minimal, clean writing site built with Next.js 14 (App Router), Tailwind CSS, and the Notion API. Posts are authored in Notion and published automatically when their status is set to **Published**.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + `@tailwindcss/typography`
- **Data**: Notion API via `@notionhq/client`
- **Markdown**: `notion-to-md` + `react-markdown`
- **Language**: TypeScript

---

## Running Locally

### 1. Clone the repo

```bash
git clone https://github.com/cupofwit/cupofwit-blog.git
cd cupofwit-blog
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

Open `.env.local` and set:

```
NOTION_API_KEY=secret_xxxxxxxxxxxx
NOTION_DATABASE_ID=your-database-id
```

See the [Environment Variables](#environment-variables) section below for details.

### 4. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Description |
|---|---|
| `NOTION_API_KEY` | Your Notion integration secret. Create one at [notion.so/my-integrations](https://www.notion.so/my-integrations). |
| `NOTION_DATABASE_ID` | The ID of your Notion database. Found in the database URL: `notion.so/YOUR_WORKSPACE/DATABASE_ID?v=...` |

### Setting up the Notion Integration

1. Go to [notion.so/my-integrations](https://www.notion.so/my-integrations) and click **+ New integration**.
2. Give it a name (e.g. "Writing Site"), select your workspace, and click **Submit**.
3. Copy the **Internal Integration Secret** — this is your `NOTION_API_KEY`.
4. Open your Notion database, click the **...** menu (top right) → **Add connections** → select your integration.
5. Copy the database ID from the URL and set it as `NOTION_DATABASE_ID`.

### Database Schema

The Notion database must have these properties:

| Property | Type | Notes |
|---|---|---|
| `Name` | Title | Post title |
| `Publish Date` | Date | Used for sorting |
| `Select` | Select | Options: `Draft`, `Scheduled`, `Unpublished`, `Published` |
| `URL` | URL | Optional external link |

Each row is also a full Notion page — write the article body inside the page.

---

## Deploying to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "your message"
git push
```

### 2. Import the project on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and click **Import Project**.
2. Select your GitHub repo.
3. Vercel will auto-detect Next.js — no build settings need changing.

### 3. Add environment variables

In the Vercel project settings under **Settings → Environment Variables**, add:

- `NOTION_API_KEY`
- `NOTION_DATABASE_ID`

### 4. Deploy

Click **Deploy**. Vercel will build and deploy the site.

### Connecting a Custom Domain

1. In your Vercel project, go to **Settings → Domains**.
2. Enter your domain (e.g. `yourname.com`) and click **Add**.
3. Vercel will show you DNS records to add:
   - **A record**: `@` → `76.76.21.21` (or Vercel's IP)
   - **CNAME record**: `www` → `cname.vercel-dns.com`
4. Add these records in your domain registrar's DNS settings.
5. Wait for DNS propagation (usually a few minutes to an hour).
6. Vercel automatically provisions an SSL certificate.

---

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout (header, global styles)
│   ├── page.tsx                # Home page
│   ├── globals.css
│   └── writing/
│       ├── page.tsx            # /writing — lists published posts
│       └── [slug]/
│           └── page.tsx        # /writing/[slug] — full post page
├── components/
│   ├── Header.tsx
│   └── PostCard.tsx
├── lib/
│   ├── notion.ts               # All Notion API logic
│   └── types.ts                # Shared TypeScript types
├── middleware.ts               # Auth-ready middleware (passthrough for now)
├── .env.example
├── vercel.json
└── README.md
```

---

## Adding Authentication Later

The project is structured so NextAuth can be added with minimal changes:

1. `npm install next-auth`
2. Create `app/api/auth/[...nextauth]/route.ts` with your provider config.
3. Update `middleware.ts` (see comments inside the file) to protect routes.
4. Add `NEXTAUTH_URL` and `NEXTAUTH_SECRET` to your `.env.local` and Vercel environment variables.

---

## Incremental Static Regeneration

Both `/writing` and `/writing/[slug]` use `revalidate = 60`, meaning Vercel will regenerate pages in the background every 60 seconds. New posts published in Notion will appear on the site within ~60 seconds of revalidation — no redeploy needed.
