"use client";

import { useEffect, useState } from "react";
import { FetchState, Transaction } from "../types";

export function useTransactions() {
  const [state, setState] = useState<FetchState<Transaction[]>>({
    status: "idle",
  });

  const fetchTransactions = async () => {
    setState({ status: "loading" });

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const data: Transaction[] = await res.json();

      setState({ status: "success", data });
    } catch {
      setState({
        status: "error",
        message: "Failed to load transactions",
      });
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return { state, refetch: fetchTransactions };
}