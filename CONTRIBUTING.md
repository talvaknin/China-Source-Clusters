# CONTRIBUTING

## Documentation-first workflow

Before adding major code, ensure the following docs are up to date:
1. `README.md` (scope + key architecture)
2. `TECH_STACK.md` (stack decisions)
3. `PLAN.md` (phase tasks + acceptance criteria)
4. `MEMORY.md` (history/corrections)

## Pull Request checklist

- [ ] Added or updated tests for runtime code changes
- [ ] Updated `MEMORY.md` with a new entry
- [ ] Updated `PLAN.md` if roadmap/scope changed
- [ ] Updated `TECH_STACK.md` if dependencies or architecture changed
- [ ] Updated `README.md` if onboarding or structure changed

## Data update checklist

For every city update:
- [ ] `city_id`, `city_name`, `province`, and `coordinates` are present
- [ ] At least one `industry_clusters` item exists
- [ ] `last_updated` is set with UTC date
- [ ] Sources are attached (or flagged clearly as TODO)
- [ ] Confidence level reflects source quality

## Correction protocol

When correcting wrong/outdated data:
1. Fix the dataset entry.
2. Add a correction note in `MEMORY.md` (previous/new/evidence/date).
3. Add any follow-up cleanup tasks.
