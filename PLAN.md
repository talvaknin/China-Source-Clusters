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
## Project Goal

Create an interactive map of China where each city is clickable and displays its industry cluster profile, with source-backed data and a correction history workflow.

---

## Phase 0 — Scope & Data Contract

### Objective
Define exactly what a “city industry cluster profile” contains.

### Tasks
- Finalize city schema fields.
- Define industry taxonomy (controlled vocabulary).
- Define confidence levels (low/medium/high).
- Define source requirements per entry.

### Deliverables
- Agreed schema in README.
- Initial industry taxonomy list.

### Acceptance Criteria
- Team can add a new city without ambiguity.
- All required fields are explicit.

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
### Objective
Render a clickable map with city-level interaction.

### Tasks
- Integrate China map geometry (GeoJSON).
- Plot initial sample cities (5–10).
- Add click handler to open city detail panel.
- Add loading/empty/error states.

### Deliverables
- Working interactive map with sample dataset.

### Acceptance Criteria
- Clicking a sample city shows correct details.
- No console errors in standard user flow.

---

## Phase 2 — City Cluster Panel

### Objective
Show complete city cluster profile in UI.

### Tasks
- Build reusable city detail component.
- Display cluster cards (name, strength, rationale, sources).
- Add “last updated” and confidence badge.

### Deliverables
- Stable city panel/modal component.

### Acceptance Criteria
- UI displays all schema fields.
- Data renders correctly for all sample cities.

---

## Phase 3 — Data Quality Workflow

### Objective
Improve reliability and correction handling.

### Tasks
- Add source validation checklist.
- Add correction protocol for wrong/outdated entries.
- Ensure each correction is logged in `MEMORY.md`.

### Deliverables
- Written correction process.
- First correction-style memory entries (if needed).

### Acceptance Criteria
- Any data correction is traceable.
- Source links and dates are always present.

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
### Objective
Help users find insights quickly.

### Tasks
- Search by city name.
- Filter by industry.
- Optional: province filter.

### Deliverables
- Search + filter UX.

### Acceptance Criteria
- User can find a city in fewer than 3 interactions.
- Filtered results are accurate and fast.

---

## Phase 5 — Scale to Broad City Coverage

### Objective
Expand from sample to large city coverage.

### Tasks
- Add major prefecture-level cities progressively.
- Batch data entry with review checkpoints.
- Add lightweight validation scripts for schema consistency.

### Deliverables
- Expanded city dataset.

### Acceptance Criteria
- New entries conform to schema.
- Data integrity checks pass.

---

## Phase 6 — Deployment & Maintenance

### Objective
Release and maintain the application.

### Tasks
- Deploy frontend.
- Add update cadence (weekly/biweekly/monthly).
- Track all changes in `MEMORY.md`.
- Review stale entries periodically.

### Deliverables
- Publicly accessible app.
- Ongoing update process.

### Acceptance Criteria
- App is stable in production.
- Documentation remains current.

---

## Immediate Next Actions (This Week)

1. Confirm stack (React + TypeScript + ECharts recommended).
2. Finalize schema and taxonomy.
3. Scaffold app.
4. Add 5 pilot cities:
   - Shenzhen
   - Suzhou
   - Shanghai
   - Wuhan
   - Chengdu
5. Implement click-to-detail interaction.
6. Log all progress in `MEMORY.md`.
