# Download Links and Android Entry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update Windows and macOS downloads to 2.3.9 and add a bilingual Android APK download card.

**Architecture:** Keep the current `DownloadSection` structure and extend it from two to three platform cards. Store all user-facing Android labels and updated version/netdisk text in the existing `app/i18n.ts` dictionaries; keep concrete URLs in `app/page.tsx` following the existing pattern.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Node.js built-in test runner

## Global Constraints

- GitHub release tag is exactly `v3.1`.
- Desktop version is exactly `2.3.9`.
- Android asset name is exactly `app-debug.apk`.
- Do not modify `app/boss/page.tsx`.
- Android copy must explain that scanning opens the pairing page directly without a second scan.

---

### Task 1: Download Resource Contract

**Files:**
- Create: `tests/download-links.test.mjs`
- Modify: `app/page.tsx`
- Modify: `app/i18n.ts`

**Interfaces:**
- Consumes: source text from `app/page.tsx` and `app/i18n.ts`
- Produces: three platform cards with GitHub and Baidu links plus bilingual labels

- [ ] **Step 1: Write the failing test**

Create a `node:test` test that reads both source files and asserts the exact six URLs, extraction codes `34qu`, `mb8c`, `84mx`, version `2.3.9`, Android translation keys, and the direct-pairing copy. It must also assert the download grid contains `lg:grid-cols-3`.

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test tests/download-links.test.mjs`

Expected: FAIL because the Android card, new URLs, and new extraction codes are absent.

- [ ] **Step 3: Write minimal implementation**

In `app/page.tsx`, replace the Windows and macOS URLs, change the download grid to `md:grid-cols-2 lg:grid-cols-3`, and add an Android card with 📱, GitHub APK URL, Baidu URL, and translated strings.

In both language dictionaries in `app/i18n.ts`, update desktop version/netdisk strings and add `download_android_title`, `download_android_spec`, `download_android_btn`, `download_android_note`, `download_android_baidu`, and `download_android_warn`.

- [ ] **Step 4: Run test to verify it passes**

Run: `node --test tests/download-links.test.mjs`

Expected: one passing test, zero failures.

- [ ] **Step 5: Build and inspect scope**

Run: `npm run build`

Expected: Next.js build exits with code 0.

Run: `git diff --check` and `git diff -- app/boss/page.tsx`

Expected: no whitespace errors and no Boss-page diff.

- [ ] **Step 6: Commit and push**

Commit `app/page.tsx`, `app/i18n.ts`, `tests/download-links.test.mjs`, and this plan with message `feat: add Android download and update desktop links`, then push `main` to `origin`.
