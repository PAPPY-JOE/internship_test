
# Transaction Dashboard – TaxStreem Frontend Assessment

A responsive transaction dashboard built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

This project focuses on **state management, async data handling, and clear UI communication** rather than visual perfection.

---

## 🌐 Live Demo

https://taxstreem-internship-test.vercel.app/

---

## 🚀 Features

### Core
- Fetch transactions from API
- Loading, Error, and Empty states
- Transaction list with:
  - Transaction ID
  - Account ID
  - Reference
  - Description preview
- Search (debounced)
- Filter by Account ID
- Transaction detail view

### Bonus Implemented
- Pagination (client-side)
- Dark mode toggle 

---

## 🧠 Approach

### State Management
- Used a **discriminated union fetch state**:

```ts
type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };
```

- Encapsulated logic inside a custom hook: useTransactions
- Avoided scattered useEffect chains

---

### Data Flow
- Fetch → store in state
- Derived UI state via:
    - search (debounced)
    - filter (userId)
- UI reacts declaratively based on state

---

## ⚖️ Assumptions
- API data is small enough for client-side filtering
- Account ID filtering uses exact match
- Pagination handled client-side (no server pagination)

---

## 🔄 Trade-offs
- No global state (Context) since scope is small
- No URL query sync (would add with more time)
- Styling kept minimal to prioritize logic

---

## 🔧 What I'd Improve
- Add URL-based state (search + filters)
- Add sorting (ascending/descending)
- Improve accessibility (ARIA + keyboard navigation)
- Add test coverage (React Testing Library)
- Introduce caching (e.g., SWR or React Query)

---

## 📁 Project Structure
```
app/
  components/
    TransactionList.tsx
    TransactionCard.tsx
    TransactionDetail.tsx
    SearchBar.tsx
    SideBar.tsx
    ThemeToggle.tsx
    PaginationControls.tsx
    states/
      LoadingSkeleton.tsx
      ErrorState.tsx
      EmptyState.tsx
  hooks/
    useTransactions.ts
    useDebounce.ts
  types/
    index.ts
  utils/
    filter.ts
  page.tsx
```

---

## 🛠️ Tech Stack
- Next.js (App Router)
- TypeScript (strict mode)
- Tailwind CSS
- shadcn/ui
- React Icons

---

## ▶️ Running Locally
```
npm install
npm run dev
```
- Visit: http://localhost:3000

---

## 📌 Notes
- All required states (loading, error, empty) are implemented
- Fetch failure was manually tested
- No any types used

---

## Author
Joseph Fatoye
https://github.com/PAPPY-JOE