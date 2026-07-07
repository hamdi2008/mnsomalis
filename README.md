# mnsomalis.com

A public-data reference site on Minnesota's Somali community.
Next.js 14 App Router + TypeScript. No database, no dependencies beyond Next.

## Deploy
1. Create repo hamdi2008/mnsomalis, push these files
2. Import to Vercel, deploy
3. Point mnsomalis.com DNS to Vercel

## Update data
All stats live in `lib/data.ts` — every stat requires value, year, source, sourceUrl.
Annual refresh when new ACS data drops (Sept 1-yr / Dec 5-yr).
