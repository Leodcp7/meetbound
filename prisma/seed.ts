import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const posts = [
  {
    slug: 'cold-email-guide-2025',
    title: 'The Ultimate Cold Email Guide for B2B SaaS in 2025',
    excerpt: 'Everything you need to know to write cold emails that actually get replies — from subject lines to follow-up sequences.',
    category: 'Cold Email',
    readTime: '8 min read',
    published: true,
    publishedAt: new Date('2025-01-15'),
    content: `## Why Most Cold Emails Fail

The average cold email gets a **2-3% reply rate**. The best ones? 25-35%. The difference isn't magic — it's a system.

Most people make these mistakes:
- Talking about themselves instead of the prospect
- Generic openers ("I hope this email finds you well")
- No clear, single call to action
- Following up once then giving up

## The Framework We Use at Meetbound

After running thousands of campaigns, we've distilled it down to a simple formula:

### 1. The Subject Line

Your subject line is 80% of the open rate. It should be short (3-5 words max), curiosity-driven or hyper-specific, and never clickbait-y.

**Examples that work:**
- "Quick question, [Name]"
- "[Company] + [Your Company]?"
- "Idea for [specific problem]"

### 2. The Opener (The Hook)

Use a **specific trigger** instead of generic openers:

> "Saw you just raised a Series A — congrats. Most SaaS companies at that stage are ramping outbound fast."

### 3. The Value Proposition

Don't list features. Say exactly what outcome you deliver:

> "We help B2B SaaS companies book 20+ qualified meetings/month using AI-personalized outbound."

### 4. Social Proof

One relevant proof point:

> "We did this for Scalepath — they went from 3 to 28 meetings/month in 45 days."

### 5. The CTA

Ask for one thing. Make it easy to say yes:

> "Worth a 15-min call this week to see if it makes sense for [Company]?"

## The Follow-Up Sequence

Most replies come from follow-ups — not the first email:

1. **Day 1** — Initial email
2. **Day 3** — Add value (share a relevant resource)
3. **Day 7** — Light bump ("Did this get buried?")
4. **Day 14** — Try a different angle
5. **Day 21** — Break-up email ("Closing the loop...")

## Domain & Deliverability

None of this matters if your emails land in spam:
- Use a **secondary domain** (never your main one)
- Set up SPF, DKIM, and DMARC
- Warm up for 3-4 weeks before sending
- Keep sending volume under 50/day per inbox to start
- Monitor with tools like Mailreach or Lemwarm`,
  },
  {
    slug: 'linkedin-outreach-strategy',
    title: 'LinkedIn Outreach That Gets 20%+ Reply Rates',
    excerpt: "How we craft LinkedIn messages that don't feel like spam — and the exact sequences we use for our clients.",
    category: 'LinkedIn',
    readTime: '6 min read',
    published: true,
    publishedAt: new Date('2025-01-22'),
    content: `## The LinkedIn Outreach Myth

Everyone says LinkedIn outreach doesn't work anymore. They're wrong. What doesn't work is **lazy LinkedIn outreach**.

The platform still has the highest B2B conversion rate of any channel — when done right.

## What "Done Right" Looks Like

### Connection Request (The Entry Point)

Your connection note has **300 characters** to make an impression. Don't waste it with "I'd like to add you to my network."

Instead:
> "Hey [Name] — saw your post on [specific topic]. We help [ICP] companies with [result]. Thought it might be relevant. Worth connecting?"

### The First Message (After They Accept)

Wait 24-48 hours. Then:
- Reference something specific about them
- Lead with curiosity, not pitch
- Ask one question

> "Thanks for connecting! Noticed [Company] is expanding into [market] — are you building out your outbound motion for that too?"

### The Follow-Up Sequence

- **Day 2 post-accept**: Opener message above
- **Day 5**: Value drop (share relevant article/resource)
- **Day 10**: Soft ask ("Would it make sense to connect for 15 min?")
- **Day 18**: Final bump

## Using Sales Navigator Like a Pro

The magic is in the **filters**:
- **Seniority level**: Director and above
- **Function**: Sales, Business Development, Marketing
- **Posted on LinkedIn in 30 days** (means they're active)
- **Changed jobs in 90 days** (high buying intent)
- **Company headcount growth** (momentum signal)

## AI Personalization at Scale

We use **Clay** + **GPT-4o** to:
1. Pull their last 3 LinkedIn posts
2. Identify a relevant hook
3. Generate a custom opener for each prospect
4. QA the output before sending

This turns a 5% reply rate into a 20%+ one.

## What to Avoid

- Never pitch in the connection request
- Never send the same message twice if they ignored it
- Never automate without personalization
- Never message more than once per day`,
  },
  {
    slug: 'ai-personalization-outbound',
    title: 'How AI Personalization Is Changing Cold Outreach',
    excerpt: 'Using Clay, GPT-4o, and enrichment APIs to write messages that feel 1-to-1 even at scale.',
    category: 'AI & Tech',
    readTime: '5 min read',
    published: true,
    publishedAt: new Date('2025-02-01'),
    content: `## The Personalization Paradox

The best outreach feels personal. But you can't personally write 500 emails a week. **Until now.**

AI personalization solves this — not by faking personal, but by making mass outreach genuinely relevant.

## The Stack We Use

### Clay (The Backbone)

Clay is a spreadsheet-meets-enrichment platform. You feed it a list of companies or contacts, and it can:
- Pull LinkedIn data
- Scrape company websites
- Find recent news and funding
- Detect tech stack (via BuiltWith, Clearbit)
- Combine data from 50+ sources

### GPT-4o (The Writer)

Once you have rich data on each prospect, you pass it through a GPT-4o prompt like:

> "You're a senior SDR at Meetbound Agency. Write a 3-sentence cold email opener for [Name] at [Company]. Use this context: [recent LinkedIn post / company news / tech stack]. Sound human, not robotic."

The output is reviewed and refined. You're not just blasting AI text — you're using it as a first draft that gets polished.

### Apollo or LinkedIn Sales Navigator (The Data Source)

- Build your ICP list
- Export to Clay
- Enrich and personalize
- Push to your sending tool (Instantly, Smartlead, Lemlist)

## What Actually Moves the Needle

**Trigger-based personalization wins every time:**

- "Saw you just raised a $5M Series A"
- "Noticed you're hiring 3 AEs right now"
- "Your post about [topic] got me thinking..."
- "You switched from HubSpot to Salesforce last month"

These signals show you did your homework. They create instant credibility.

## The Human Review Step

Never skip this. AI makes mistakes. One weird sentence tanks the whole email.

Our process:
1. AI generates 100 openers
2. Human reviews flagged ones (outliers, odd phrasing)
3. Manual edits where needed
4. Send

Quality > speed. Always.

## Results We've Seen

With full AI personalization vs. generic:
- Open rate: **42% vs. 28%**
- Reply rate: **22% vs. 6%**
- Positive reply rate: **14% vs. 2%**

The difference is dramatic. And it scales.`,
  },
]

async function main() {
  console.log('🌱 Seeding database...')

  for (const post of posts) {
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    })
    console.log(`✅ Post: ${post.title}`)
  }

  console.log('✅ Seed complete!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
