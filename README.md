# 🚀 Meetbound Agency — Full Stack Website

Next.js 14 + Tailwind + Prisma + PostgreSQL (Neon) + Vercel

---

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS + custom CSS |
| Database | PostgreSQL via Prisma ORM |
| Hosting DB | Neon (free tier) |
| Deploy | Vercel |
| Email | Resend (optional) |
| Font | Outfit (Google Fonts) |

---

## Local Development

### 1. Install dependencies
```bash
npm install
```

### 2. Setup environment
```bash
cp .env.example .env.local
# Fill in your DATABASE_URL and other vars
```

### 3. Setup database
```bash
# Push schema to your Neon DB
npx prisma db push

# Seed with sample blog posts
npx ts-node --compiler-options '{"module":"CommonJS"}' prisma/seed.ts
```

### 4. Run dev server
```bash
npm run dev
# Open http://localhost:3000
```

---

## Deploy to Vercel

### Step 1 — Database (Neon)
1. Go to [neon.tech](https://neon.tech) → Create account
2. Create new project → Copy the **Connection string** (pooled)
3. Save it as `DATABASE_URL`

### Step 2 — Push to GitHub
```bash
git init
git add .
git commit -m "🚀 Initial commit — Meetbound Agency"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/meetbound.git
git push -u origin main
```

### Step 3 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → Import project from GitHub
2. Add Environment Variables:
   - `DATABASE_URL` — your Neon connection string
   - `ADMIN_API_KEY` — random secret (use `openssl rand -hex 32`)
   - `RESEND_API_KEY` — optional, from resend.com
   - `NOTIFY_EMAIL` — your email for lead notifications
3. Click **Deploy** 🎉

### Step 4 — Initialize DB on production
After first deploy, run this once:
```bash
# In Vercel dashboard → Settings → Functions → Run command
npx prisma db push
```

Or use Neon's web console to run the SQL directly.

---

## Blog Management (API)

The blog is managed via REST API with an API key.

### Create a post
```bash
curl -X POST https://meetbound.agency/api/posts \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_ADMIN_API_KEY" \
  -d '{
    "slug": "my-new-post",
    "title": "My New Blog Post",
    "excerpt": "A short description",
    "content": "## Hello\n\nThis is the content...",
    "category": "Cold Email",
    "readTime": "5 min read",
    "published": true
  }'
```

### Update a post
```bash
curl -X PATCH https://meetbound.agency/api/posts/POST_ID \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_ADMIN_API_KEY" \
  -d '{"published": false}'
```

### Delete a post
```bash
curl -X DELETE https://meetbound.agency/api/posts/POST_ID \
  -H "x-api-key: YOUR_ADMIN_API_KEY"
```

### View all leads
```bash
curl https://meetbound.agency/api/leads \
  -H "x-api-key: YOUR_ADMIN_API_KEY"
```

---

## Project Structure

```
meetbound/
├── app/
│   ├── (marketing)/
│   │   └── blog/
│   │       ├── page.tsx          # Blog listing
│   │       └── [slug]/
│   │           └── page.tsx      # Blog post
│   ├── api/
│   │   ├── contact/route.ts      # Contact form → saves lead + email
│   │   ├── posts/route.ts        # Blog CRUD (GET, POST)
│   │   ├── posts/[id]/route.ts   # Blog CRUD (GET, PATCH, DELETE)
│   │   └── leads/route.ts        # View leads (admin)
│   ├── layout.tsx
│   ├── page.tsx                  # Homepage
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── StatsBanner.tsx
│       ├── Services.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       └── Contact.tsx
├── lib/
│   └── prisma.ts
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── .env.example
├── vercel.json
└── README.md
```

---

## Next Steps (Roadmap)

- [ ] Admin dashboard at `/admin` (view leads, manage posts)
- [ ] Notion CMS integration for writing posts
- [ ] Calendly embed in the CTA
- [ ] Analytics (Plausible or Vercel Analytics)
- [ ] SEO sitemap generation
- [ ] Multi-language support (FR/EN)
