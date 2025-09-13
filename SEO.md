## SEO Strategy for Tay Duong Pharma (Next.js App)

### 1) Current Codebase Overview
- Stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, next-intl (i18n), Cloudinary images
- Routing: Locale-prefixed routes via next-intl middleware (en, vi) at app/[locale]/..., pages: /home, /products, /products/[id], /customers, /about, /news, /contact, root page at app/[locale]/page.tsx
- Navigation/Layout: Header/Footer components used per-page; global layout at app/[locale]/layout.tsx loads fonts and provides NextIntlClientProvider
- SEO Today:
  - Global metadata is defined in app/[locale]/layout.tsx (title, description, keywords, minimal Open Graph)
  - No Twitter Card, no robots metadata, no canonical/hreflang alternates
  - No sitemap.xml or robots.txt routes
  - No JSON-LD structured data
  - Images mostly include alt text; heading hierarchy is reasonable on key pages

### 2) Key Findings (Audit)
- Internationalization: Locale-prefixed URLs are correctly enforced, but hreflang/canonical are missing
- Discoverability: No sitemap.xml; robots.txt not present; search engines have limited guidance
- Social Sharing: Open Graph lacks url/siteName/images; no Twitter card
- Structured Data: Missing Organization and WebSite JSON-LD
- Performance: Images from Cloudinary; Tailwind/shadcn UI; opportunities for preconnect and metadataBase canonicalization
- Content: Copy exists in vi/en message files; product detail pages are static with good on-page headings but could use per-page meta

### 3) Recommendations (Targeted to This App)
- Metadata
  - Expand layout metadata: robots, openGraph (siteName, url, images), twitter card, keywords (localized), themeColor
  - Add alternates.languages for en/vi; set canonical when a stable production URL is provided via env
  - Optionally add per-page metadata (About, Products, Product Detail, Customers, News, Contact) using export const metadata or generateMetadata
- Structured Data
  - Add Organization JSON-LD at layout level (name, url, logo, sameAs)
  - Optionally add WebSite with SearchAction in future when site search is available
- Crawling/Indexing
  - Create app/robots.ts to allow all bots and reference sitemap
  - Create app/sitemap.ts to include localized routes and product detail URLs for both locales
- Performance/UX
  - Consider metadataBase with NEXT_PUBLIC_SITE_URL for absolute OG/canonical
  - Optionally add <link rel="preconnect"> to Cloudinary (requires head.tsx or custom Head injection)
  - Ensure images use sizes and width/height (already used in many components)
- Accessibility
  - Continue ensuring descriptive alt text; keep one H1 per page; maintain logical H2/H3 hierarchy
- Local SEO
  - Include address and contact in Footer (already present); add Organization JSON-LD with address/phone; add Google Business profile if applicable
- Monitoring
  - Add analytics (Plausible/GA4) and track pageviews per locale
  - Monitor Core Web Vitals (Chrome UX Report or Vercel Analytics)

### 4) Technical SEO Checklist
- [x] Next.js Metadata API in layout
- [ ] Robots meta (index, follow) globally
- [ ] Open Graph (title, description, url, siteName, image)
- [ ] Twitter Card (summary_large_image)
- [ ] Alternates (hreflang for en/vi)
- [ ] Canonical URLs (via env + generateMetadata)
- [ ] JSON-LD (Organization)
- [ ] robots.txt (allow, sitemap)
- [ ] sitemap.xml (localized routes, product detail)
- [ ] Image alt text and sizes
- [ ] Heading hierarchy (H1 per page)

### 5) Content Optimization Guidelines
- Localize titles and meta descriptions per locale; keep titles ≤ 60 chars, descriptions 140–160 chars
- Put primary keywords early in H1; mirror intent in first paragraph; avoid keyword stuffing
- For product pages, include manufacturer, category, key benefits, and usage in on-page copy; add FAQs as needed
- Use descriptive, human-readable link text; avoid generic "Click here"
- For News, include publication dates and author (if applicable); consider Article JSON-LD if expanded later

### 6) Performance Recommendations
- Prefer metadataBase so Next.js can output absolute URLs
- Consider preconnect to res.cloudinary.com
- Ensure images include sizes for responsive behavior (already used in News page)
- Remove unused CSS and components; leverage Next.js image optimization where applicable

### 7) Mobile & Accessibility
- Use mobile-first layout (already Tailwind-based); verify tap targets and spacing
- Ensure color contrast meets WCAG AA; provide focus styles
- Provide alt text for all non-decorative images; use aria-labels for icon-only links

### 8) Local SEO
- Add company legal name, address, phone, and email in footer (already present)
- Organization JSON-LD with address/phone and social profiles
- If you have multiple offices, create a Locations page and add LocalBusiness JSON-LD per location

### 9) Monitoring & Analytics
- Add privacy-friendly analytics (e.g., Plausible) or GA4; track per-locale pageviews
- Monitor 404s and crawl errors in Google Search Console
- Track Core Web Vitals; use Vercel Analytics or web-vitals library

---

## Implementation Plan (Completed/Planned)
- Expand global metadata in app/[locale]/layout.tsx (robots, OG, Twitter, alternates)
- Add Organization JSON-LD in layout
- Add app/robots.ts (allow + sitemap)
- Add app/sitemap.ts (localized pages + product detail URLs for en/vi)
- Playwright smoke tests: meta tags on /en, hreflang presence, /sitemap.xml and /robots.txt reachable

Notes:
- For accurate canonical/OG URLs, set NEXT_PUBLIC_SITE_URL in environment (e.g., https://www.example.com). We currently fall back to http://localhost:3000 for development in sitemap.

