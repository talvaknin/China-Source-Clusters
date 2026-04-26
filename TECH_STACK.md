# TECH_STACK — China Source Clusters

## Locked Stack for MVP (2026-04-26)

## Frontend
- `react` + `react-dom`
- `typescript`
- `vite`

## Mapping
- `echarts`
- `echarts-for-react` (or direct ECharts integration)
- China GeoJSON file in `public/geo/`

## Tooling
- `eslint`
- `prettier`
- `@typescript-eslint/*`

## Data Strategy
- MVP: JSON files in repository (`data/cities.json`, `data/industries.json`)
- Post-MVP: Node.js + Express API + PostgreSQL

## Suggested Initialization Commands

```bash
npm create vite@latest china-source-clusters -- --template react-ts
cd china-source-clusters
npm install
npm install echarts echarts-for-react
npm install -D eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Optional Add-ons (after MVP)
- Search index optimization (MiniSearch/FlexSearch)
- Caching layer for heavy lookups
- CI markdown + type + lint checks

## Change Control
If the stack changes, update:
1. `TECH_STACK.md`
2. `README.md` (summary table)
3. `MEMORY.md` (decision entry)
