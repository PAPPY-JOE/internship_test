"use client";

import { Transaction } from "../types";
import TransactionCard from "./TransactionCard";

type Props = {
  data: Transaction[];
  onSelect: (tx: Transaction) => void;
};

export default function TransactionList({ data, onSelect }: Props) {
  return (
    <div className="space-y-3 mt-4">
      {data.map((tx) => (
        <TransactionCard
          key={tx.id}
          data={tx}
          onClick={() => onSelect(tx)}
        />
      ))}
    </div>
  );
}