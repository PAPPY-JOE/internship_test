"use client";

import { useState } from "react";
import { useTransactions } from "./hooks/useTransactions";
import { useDebounce } from "./hooks/useDebounce";
import { filterTransactions } from "./utils/filter";

import SearchBar from "./components/SearchBar";
import TransactionList from "./components/TransactionList";
import TransactionDetail from "./components/TransactionDetail";

import LoadingSkeleton from "./components/states/LoadingSkeleton";
import ErrorState from "./components/states/ErrorState";
import EmptyState from "./components/states/EmptyState";

import { Transaction } from "./types";
import PaginationControls from "./components/PaginationControls";

export default function Page() {
  const { state, refetch } = useTransactions();

  const [search, setSearch] = useState("");
  const [userId, setUserId] = useState<number | null>(null);
  const [selected, setSelected] = useState<Transaction | null>(null);
  
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 10;

  const debouncedSearch = useDebounce(search);

  if (state.status === "loading") return <LoadingSkeleton />;
  if (state.status === "error")
    return <ErrorState onRetry={refetch} />;

  if (state.status === "success") {
    const filtered = filterTransactions(
      state.data,
      debouncedSearch,
      userId ?? undefined
    );

    const paginated = filtered.slice(
      (page - 1) * PAGE_SIZE,
      page * PAGE_SIZE
    );

    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

    if (selected) {
      return (
        <div className="max-w-3xl mx-auto p-6">
          <TransactionDetail
            data={selected}
            onBack={() => setSelected(null)}
          />
        </div>
      );
    }

    return (
      <div className="max-w-3xl mx-auto p-6 w-full">
        <h1 className="text-2xl font-bold mb-4 mt-4">
          Transaction Dashboard
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
          userId={userId}
          setUserId={setUserId}
        />

        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <TransactionList
              data={paginated}
              onSelect={setSelected}
            />
            <PaginationControls
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          </>
        )}
      </div>
    );
  }

  return null;
}