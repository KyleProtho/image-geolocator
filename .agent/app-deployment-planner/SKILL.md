---
name: App Deployment Planner
description: Generates a comprehensive pre-launch checklist for a modern web application stack (Next.js, Vercel, Supabase, Clerk, Stripe).
---

# App Deployment Planner

This skill helps users plan and prepare for the deployment of their web application. It generates a detailed pre-launch checklist tailored to the following technology stack:

-   **Frontend/Framework**: Next.js
-   **Hosting**: Vercel
-   **Database**: Supabase
-   **Auth**: Clerk
-   **Payments**: Stripe
-   **Version Control**: GitHub

## Usage

When the user asks to plan a deployment or create a launch checklist, follow these steps:

1.  **Analyze the current project status**:
    *   Check for existing configuration files (e.g., `next.config.js`, `vercel.json`).
    *   Look for environment variable definitions (`.env.example`).
    *   Identify installed packages related to the stack.

2.  **Generate/Update `PRE_LAUNCH_CHECKLIST.md`**:
    *   Create a file named `PRE_LAUNCH_CHECKLIST.md` in the root directory if it doesn't exist.
    *   Populate it with the sections defined below.

## Checklist Template Structure

The checklist should include the following sections with actionable items:

### 1. Project Setup & Version Control (GitHub)
*   [ ] Initialize Git repository
*   [ ] Create `.gitignore` (ensure `.env` and `node_modules` are ignored)
*   [ ] Commit initial code
*   [ ] Create a GitHub repository
*   [ ] Push code to GitHub `main` branch
*   [ ] Protect `main` branch (require PR reviews if applicable)

### 2. Frontend Framework (Next.js)
*   [ ] Audit `next.config.js` for production settings
*   [ ] Run `npm run build` locally to check for build errors
*   [ ] Verify all pages have dynamic metadata (SEO)
*   [ ] Check for hydration errors
*   [ ] Optimize images using `next/image`
*   [ ] Configure custom 404/500 pages

### 3. User Management (Clerk)
*   [ ] Create Clerk application in dashboard
*   [ ] Configure Social Connections (Google, GitHub, etc.)
*   [ ] Define environment variables (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`)
*   [ ] Set up Redirect URLs for production
*   [ ] Customize branding (logo, colors) in Clerk dashboard
*   [ ] Verify protected routes in `middleware.ts`

### 4. Database & Storage (Supabase)
*   [ ] Create Supabase project
*   [ ] Get connection strings and API keys
*   [ ] Run initial migration/schema setup
*   [ ] Setup Row Level Security (RLS) policies
*   [ ] Configure backups (Point-in-Time Recovery)
*   [ ] Sync strict typing (if using TypeScript)

### 5. Payments (Stripe)
*   [ ] Create Stripe account
*   [ ] Get Test/Live API keys
*   [ ] Create Product Catalog (Plans/Prices)
*   [ ] Configure Webhooks (endpoint: `/api/webhooks/stripe`)
*   [ ] Test checkout flow in Test Mode
*   [ ] Activate account for Live payments
*   [ ] Verify tax settings

### 6. Hosting & Deployment (Vercel)
*   [ ] Import GitHub repository to Vercel
*   [ ] Configure build settings (defaults are usually fine for Next.js)
*   [ ] add all Environment Variables from steps 3, 4, and 5
*   [ ] Deploy!
*   [ ] Configure Custom Domain
*   [ ] Verify SSL generation

### 7. Security & Hardening
*   [ ] **Secret Audit**: Search codebase for hardcoded keys. Ensure `.env` is in `.gitignore`.
*   [ ] **Vercel Env Vars**: Add all private keys (API secrets, DB URLs) to Vercel Environment Variables (do NOT check into git).
*   [ ] **Prompt Injection Defense**:
    *   [ ] Use rigorous input validation (e.g. Zod) to restrict input length and characters.
    *   [ ] Use delimiters (e.g., `"""User Input"""`) in prompts to separation instructions from data.
    *   [ ] Implement backend rate limiting for AI endpoints.
*   [ ] **Secure Headers**: Configure `Content-Security-Policy` and other security headers.

### 8. Post-Launch Verification
*   [ ] Test full user flow (Sign up -> Pay -> Use App)
*   [ ] Verify database entries
*   [ ] Check Stripe dashboard for successful payments
*   [ ] Monitor Vercel logs for runtime errors
