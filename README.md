# China Source Clusters — Interactive City Industry Map

An interactive map of China where each city is clickable and shows the industry clusters that city is known for.

## Project Objective

Build a credible, source-backed city-by-city map that answers:
- Which industries are strong in this city?
- Why is this city a cluster for those industries?
- Which companies and supply-chain roles are present?
- What sources support this claim and when was it last verified?

## Current Implementation Status

A working MVP web app scaffold is now included:
- Vite + React + TypeScript setup
- Interactive China map using ECharts
- Clickable pilot city markers from `data/cities.example.json`
- City details panel with cluster summaries

Run locally:

```bash
npm install
npm run dev
```

## Current Scope

### MVP (Phase 1–2)
- Render a China map.
- Plot pilot cities (5–10).
- Make each city clickable.
- Show a city detail panel with:
  - city + province
  - industry clusters
  - short rationale
  - source links
  - `last_updated`
  - confidence level

### Planned Enhancements (Phase 3+)
- Search by city.
- Filter by industry.
- Province-level overview.
- Data confidence/quality indicators.
- Data maintenance workflow tied to `MEMORY.md`.

## Finalized Tech Stack (V1)

| Layer | Choice | Notes |
|---|---|---|
| Frontend framework | React 18 + TypeScript | Component-driven UI + typed data model |
| Build tool | Vite 5 | Fast local development and build |
| Map rendering | Apache ECharts 5 | Efficient China map + event handling |
| Geography data | China GeoJSON | Base map geometry for province/city plotting |
| State management | React hooks (useState/useMemo) | Keep MVP simple before adding global state lib |
| API/data access | Static JSON files (MVP) | Stored in `data/` for rapid iteration |
| Future backend | Node.js + Express + PostgreSQL (planned) | For scaling updates and query/filter performance |
| Styling | CSS Modules (or Tailwind optional) | Start lightweight and consistent |
| QA/lint | ESLint + Prettier + TypeScript checks | Keep code quality stable from day one |

See `TECH_STACK.md` for implementation-level package and command details.

## Data Contract (Starter Schema)
An interactive map of China where each city is clickable and displays the industry clusters active in that city.

## Vision

Build a searchable, maintainable, and transparent city-by-city industry intelligence map for China.
Each city entry should answer:

- What industries are strong here?
- Why is this city a cluster for these industries?
- What are the leading firms / supply chain roles?
- What sources support this information?

## Core Features (MVP → Full)

### MVP
- Render China map with clickable cities.
- Show a city detail panel/modal on click.
- Display:
  - city name
  - province
  - cluster industries
  - short rationale
  - source references
  - last updated date

### Next Features
- Search by city.
- Filter by industry cluster (e.g., EV, semiconductors, textiles).
- Province-level summaries.
- “Data confidence” indicator per city.
- Historical edits / correction visibility from `MEMORY.md`.

## Suggested Tech Stack

- **Frontend**: React + TypeScript (or plain JS)
- **Map Library**: ECharts (recommended) or Mapbox GL / Leaflet
- **Data Format**: JSON (later: database)
- **Styling**: Tailwind or CSS Modules
- **Build Tool**: Vite

## Data Model (Starter)

```json
{
  "city_id": "shenzhen",
  "city_name": "Shenzhen",
  "province": "Guangdong",
  "coordinates": [114.0579, 22.5431],
  "industry_clusters": [
    {
      "name": "Electronics Manufacturing",
      "strength": "high",
      "summary": "Dense supply-chain concentration for consumer electronics and components.",
      "key_companies": ["Example Co 1", "Example Co 2"],
      "summary": "Dense supply chain for consumer electronics and components.",
      "key_companies": ["Company A", "Company B"],
      "sources": [
        {
          "title": "Source title",
          "url": "https://example.com",
          "accessed_on": "2026-04-26"
        }
      ]
    }
  ],
  "confidence": "medium",
  "last_updated": "2026-04-26"
}
```

## Suggested Repository Layout
  "last_updated": "2026-04-26",
  "confidence": "medium"
}
```

## Project Structure (Proposed)

```txt
.
├── README.md
├── TECH_STACK.md
├── PLAN.md
├── MEMORY.md
├── CONTRIBUTING.md
├── data/
│   ├── cities.example.json
├── PLAN.md
├── MEMORY.md
├── data/
│   ├── cities.json
│   └── industries.json
├── src/
│   ├── components/
│   ├── map/
│   ├── pages/
│   ├── services/
│   └── types/
└── public/
    └── geo/
        └── china.geojson
```


## Starter Dataset

A seed file is now included at `data/cities.example.json` with 5 pilot cities:
- Shenzhen
- Suzhou
- Shanghai
- Wuhan
- Chengdu

Use it as the initial dataset for map plotting and city-click interactions.

## Documentation Policy (Mandatory)

1. Every meaningful app or data change must be logged in `MEMORY.md`.
2. Every roadmap/scope change must be reflected in `PLAN.md`.
3. Every stack decision change must be reflected in `TECH_STACK.md`.
4. Every correction entry must include:
   - previous state
   - corrected state
   - evidence/source
   - correction date

## Local Development (after scaffold)
## Documentation Rules

- Every app update must be recorded in `MEMORY.md`.
- Every roadmap change must be reflected in `PLAN.md`.
- Data corrections must include:
  - what was wrong
  - how it was corrected
  - source evidence
  - date

## Getting Started (once app scaffold exists)

```bash
npm install
npm run dev
```

## Key Project Documents

- Roadmap: `PLAN.md`
- Tech stack details: `TECH_STACK.md`
- Contribution workflow: `CONTRIBUTING.md`
- Historical updates + corrections: `MEMORY.md`
## Roadmap & Change History

- Execution roadmap: `PLAN.md`
- Ongoing updates and corrections log: `MEMORY.md`
