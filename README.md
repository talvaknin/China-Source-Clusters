# China Source Clusters — Interactive City Industry Map

An interactive map of China where each city is clickable and shows the industry clusters that city is known for.

## Project Objective

Build a credible, source-backed city-by-city map that answers:
- Which industries are strong in this city?
- Why is this city a cluster for those industries?
- Which companies and supply-chain roles are present?
- What sources support this claim and when was it last verified?

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

## Suggested Technical Approach

- **Frontend**: React + TypeScript
- **Map**: ECharts + China GeoJSON
- **Data storage (early)**: JSON files in repo
- **Data storage (later)**: database-backed API
- **Build**: Vite

## Data Contract (Starter Schema)

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

```txt
.
├── README.md
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

## Documentation Policy (Mandatory)

1. Every meaningful app or data change must be logged in `MEMORY.md`.
2. Every roadmap/scope change must be reflected in `PLAN.md`.
3. Every correction entry must include:
   - previous state
   - corrected state
   - evidence/source
   - correction date

## Local Development (after scaffold)

```bash
npm install
npm run dev
```

## Key Project Documents

- Roadmap: `PLAN.md`
- Historical updates + corrections: `MEMORY.md`
