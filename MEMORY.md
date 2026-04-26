# MEMORY — China Source Clusters

This file is the long-term memory of the project.
Every meaningful app update, data correction, and decision should be recorded here.

---

## Logging Rules

For **every update**, include:

- Date (UTC)
- Version / commit hash (if available)
- Type (`feature`, `fix`, `data-update`, `docs`, `decision`)
- What changed
- Why it changed
- Impacted files/modules
- Data/source impact
- Follow-up actions

For **every correction**, include:

- Previous incorrect state
- Corrected state
- Evidence/source used
- Risk of similar error elsewhere

---

## Entry Template

### [YYYY-MM-DD] — <short title>
- **Type**: feature | fix | data-update | docs | decision
- **Version/Commit**: <hash or N/A>
- **Summary**: <1-3 lines>
- **Details**:
  - <bullet>
  - <bullet>
- **Why**:
  - <reason>
- **Impacted Areas**:
  - <file/module/data area>
- **Correction?**:
  - Previous: <old value/state or N/A>
  - New: <new value/state or N/A>
  - Evidence: <source links or N/A>
- **Follow-up**:
  - [ ] <task 1>
  - [ ] <task 2>

---

## Entries

### [2026-04-26] — Project initialization docs created
- **Type**: docs
- **Version/Commit**: N/A
- **Summary**: Created initial documentation framework for README, PLAN, and MEMORY to guide build and long-term maintenance.
- **Details**:
  - Defined project goal and MVP behavior.
  - Defined phased roadmap from scope to deployment.
  - Established mandatory update/correction logging standard.
- **Why**:
  - Ensure structured execution and traceable changes from day one.
- **Impacted Areas**:
  - `README.md`
  - `PLAN.md`
  - `MEMORY.md`
- **Correction?**:
  - Previous: N/A
  - New: Documentation baseline established.
  - Evidence: Internal planning decision.
- **Follow-up**:
  - [ ] Scaffold frontend project
  - [ ] Implement first clickable city map prototype
