# Frontend Pull Request

## Description
<!-- Briefly describe the UI or frontend-related changes -->

## Related Issue / Task
- JIRA Ticket: [ABC-123](https://your-jira-link)

## UI Changes
<!-- Include screenshots, recordings, or a description of visual changes -->
- [ ] Screenshots or Loom link added (if visual changes)
- [ ] Cross-browser and responsive tests done

---

## Effects sanity check
- [ ] If I added an effect, it connects React to an external system (network, storage, timers, subscriptions, DOM imperative work).
- [ ] This logic could not be handled at the **event boundary** (e.g., `onOpenChange`, router action).
- [ ] For data fetching I used **React Query/SWR** with `enabled`/`queryKey` instead of manual effects.
- [ ] I did **not** mirror props to local state. Any computed value is derived (`useMemo`/variable), not synced.
- [ ] I am **not** using `useLayoutEffect` (or this file is in the allowed folder for measurement/focus).
- [ ] Dependency arrays are minimal and stable (no unstable function identities unless memoized for a reason).

## Notes for reviewers
- Why an effect is necessary here:
  <!-- brief justification, e.g., "WebSocket subscribe/unsubscribe" -->

---

## Checklist
- [ ] Code compiles and runs locally
- [ ] ESLint / Prettier passes
- [ ] No unused imports, console logs, or debug code
- [ ] UI tested on supported devices/browsers
- [ ] Accessibility (ARIA / keyboard nav) verified
- [ ] Follows design and UX guidelines
