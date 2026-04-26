# PLAN — China Source Clusters

## Goal

Deliver an interactive map of China with clickable city profiles that are source-backed, maintainable, and easy to correct over time.

---

## Milestone Overview

| Milestone | Focus | Target Outcome |
|---|---|---|
| Phase 0 | Scope + stack + data contract | Unambiguous schema, taxonomy, and stack lock |
| Phase 1 | Map MVP | Clickable city map with pilot data |
| Phase 2 | Profile UX | Full city details panel/modal |
| Phase 3 | Data quality | Correction + validation workflow |
| Phase 4 | Discovery | Search and filtering |
| Phase 5 | Scale-out | Broad city coverage |
| Phase 6 | Operate | Deployment + maintenance cadence |

---

## Phase 0 — Scope, Stack, & Data Contract

### Tasks
- [ ] Finalize tech stack in `TECH_STACK.md`.
- [ ] Finalize city schema fields.
- [ ] Add and validate `data/cities.example.json` seed dataset (5 pilot cities).
- [ ] Finalize industry taxonomy.
- [ ] Define confidence rubric (`low/medium/high`).
- [ ] Define source citation requirements.

### Acceptance Criteria
- Stack, schema, and taxonomy are explicitly documented.
- New city entries can be added without interpretation gaps.

---

## Phase 1 — Map MVP

### Tasks
- [ ] Add China GeoJSON and map rendering.
- [ ] Plot 5–10 pilot cities.
- [ ] Implement city click behavior.
- [ ] Add loading/empty/error UI states.

### Acceptance Criteria
- Clicking a pilot city opens correct data.
- Core path has no console/runtime errors.

---

## Phase 2 — City Profile Experience

### Tasks
- [ ] Build a reusable city profile panel/modal.
- [ ] Render clusters, rationale, sources, and confidence.
- [ ] Display `last_updated` per city.

### Acceptance Criteria
- All schema fields are visible and correctly bound.
- Panel handles missing fields gracefully.

---

## Phase 3 — Data Quality & Corrections

### Tasks
- [ ] Define source validation checklist.
- [ ] Define correction protocol.
- [ ] Require correction/update entries in `MEMORY.md`.

### Acceptance Criteria
- Any correction is auditable from MEMORY history.
- Source links and access dates are consistently present.

---

## Phase 4 — Discovery Features

### Tasks
- [ ] Add city search.
- [ ] Add industry filter.
- [ ] Optional province filter.

### Acceptance Criteria
- Users can find a city quickly (≤ 3 interactions).
- Filtered output remains accurate.

---

## Phase 5 — Coverage Expansion

### Tasks
- [ ] Add major prefecture-level cities in batches.
- [ ] Add schema validation checks for dataset updates.
- [ ] Review entries by source confidence.

### Acceptance Criteria
- Dataset growth does not break schema consistency.
- Validation checks pass for each batch.

---

## Phase 6 — Deployment & Operations

### Tasks
- [ ] Deploy frontend.
- [ ] Define update cadence (weekly/biweekly/monthly).
- [ ] Add stale-data review cycle.

### Acceptance Criteria
- App is publicly accessible and stable.
- Documentation stays aligned with shipped behavior.

---

## Immediate Next 7-Day Plan

1. Confirm and install locked stack from `TECH_STACK.md`.
2. Lock schema and taxonomy.
3. Scaffold app.
4. Load `data/cities.example.json` into the map prototype.
5. Implement click-to-open city panel.
6. Record all progress in `MEMORY.md`.
