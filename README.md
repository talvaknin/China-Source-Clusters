# China Source Clusters — Interactive City Industry Map

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
  "last_updated": "2026-04-26",
  "confidence": "medium"
}
```

## Project Structure (Proposed)

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

## Roadmap & Change History

- Execution roadmap: `PLAN.md`
- Ongoing updates and corrections log: `MEMORY.md`
