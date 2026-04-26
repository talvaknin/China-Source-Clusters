# MEMORY — China Source Clusters

This is the long-term project memory.
Every feature change, correction, and decision should be logged here.

---

## Logging Rules

For each update entry, include:
- Date (UTC)
- Type (`feature`, `fix`, `data-update`, `docs`, `decision`)
- Version/commit
- What changed
- Why it changed
- Impacted files/modules
- Follow-up actions

For each correction entry, also include:
- Previous (incorrect) state
- Corrected state
- Evidence/source used
- Risk of similar issue elsewhere

---

## Entry Template

### [YYYY-MM-DD] — <title>
- **Type**: feature | fix | data-update | docs | decision
- **Version/Commit**: <hash>
- **Summary**: <1-2 lines>
- **Details**:
  - <bullet>
  - <bullet>
- **Why**:
  - <reason>
- **Impacted Areas**:
  - <file/module>
- **Correction?**:
  - Previous: <value/state or N/A>
  - New: <value/state or N/A>
  - Evidence: <source links or N/A>
- **Follow-up**:
  - [ ] <task>

---

## Entries

### [2026-04-26] — Initial docs baseline
- **Type**: docs
- **Version/Commit**: b9a0bfb
- **Summary**: Added first project documentation set (`README.md`, `PLAN.md`, `MEMORY.md`).
- **Details**:
  - Defined product vision and starter data contract.
  - Added a phased roadmap and update/correction policy.
- **Why**:
  - Establish shared execution and documentation standards before app implementation.
- **Impacted Areas**:
  - `README.md`
  - `PLAN.md`
  - `MEMORY.md`
- **Correction?**:
  - Previous: N/A
  - New: Documentation baseline established.
  - Evidence: Repository commit history.
- **Follow-up**:
  - [ ] Scaffold frontend app
  - [ ] Implement clickable pilot-city map

### [2026-04-26] — Documentation refinement after review
- **Type**: docs
- **Version/Commit**: 1419eb0
- **Summary**: Refined docs structure for clarity, traceability, and execution readiness.
- **Details**:
  - Tightened README wording and made policy requirements explicit.
  - Converted plan tasks to checkbox format and added milestone table.
  - Updated MEMORY format and added explicit commit linkage.
- **Why**:
  - Improve usability of docs and make progress tracking easier during execution.
- **Impacted Areas**:
  - `README.md`
  - `PLAN.md`
  - `MEMORY.md`
- **Correction?**:
  - Previous: Initial draft only.
  - New: More actionable and audit-friendly documentation.
  - Evidence: Repository commit history.
- **Follow-up**:
  - [x] Confirmed review-driven refinements

### [2026-04-26] — Added dedicated tech stack specification
- **Type**: decision
- **Version/Commit**: (this commit)
- **Summary**: Added explicit stack definition and synchronized docs to reference it.
- **Details**:
  - Added new `TECH_STACK.md` with package-level stack details and setup commands.
  - Updated `README.md` with a finalized stack table.
  - Updated `PLAN.md` to include stack lock as a Phase 0 task.
- **Why**:
  - Remove ambiguity about implementation choices before scaffold.
- **Impacted Areas**:
  - `TECH_STACK.md`
  - `README.md`
  - `PLAN.md`
  - `MEMORY.md`
- **Correction?**:
  - Previous: Stack only described at high level.
  - New: Stack documented in dedicated file and linked from docs.
  - Evidence: This commit.
- **Follow-up**:
  - [ ] Run stack initialization commands and scaffold app


### [2026-04-26] — Added starter dataset and contribution guide
- **Type**: docs
- **Version/Commit**: (this commit)
- **Summary**: Added contributor workflow doc and a pilot-city seed dataset to accelerate scaffold.
- **Details**:
  - Added `CONTRIBUTING.md` with PR, data update, and correction checklists.
  - Added `data/cities.example.json` with 5 pilot city records and cluster fields.
  - Updated `README.md` and `PLAN.md` to reference the new files.
- **Why**:
  - Convert documentation into an immediately usable implementation baseline.
- **Impacted Areas**:
  - `CONTRIBUTING.md`
  - `data/cities.example.json`
  - `README.md`
  - `PLAN.md`
  - `MEMORY.md`
- **Correction?**:
  - Previous: Docs described next steps but had no starter dataset file.
  - New: Starter dataset and contributor workflow are now included.
  - Evidence: This commit.
- **Follow-up**:
  - [ ] Scaffold app and wire map to `data/cities.example.json`


### [2026-04-26] — Built interactive map MVP app scaffold
- **Type**: feature
- **Version/Commit**: (this commit)
- **Summary**: Implemented first runnable app with clickable city markers and city cluster detail panel.
- **Details**:
  - Added Vite + React + TypeScript project files.
  - Added ECharts China map rendering with clickable pilot city markers.
  - Wired `data/cities.example.json` to map markers and detail pane rendering.
- **Why**:
  - Move from documentation baseline to working MVP application.
- **Impacted Areas**:
  - `package.json`
  - `index.html`
  - `src/main.tsx`
  - `src/App.tsx`
  - `src/styles.css`
  - `README.md`
  - `MEMORY.md`
- **Correction?**:
  - Previous: Repo had planning/docs only.
  - New: Repo includes runnable interactive MVP app scaffold.
  - Evidence: This commit.
- **Follow-up**:
  - [ ] Add full city dataset and source references
  - [ ] Add search and filter controls
