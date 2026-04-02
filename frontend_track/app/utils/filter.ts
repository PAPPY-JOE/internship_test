import { Transaction } from "../types";

export function filterTransactions(
  data: Transaction[],
  search: string,
  userId?: number
) {
  return data.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.body.toLowerCase().includes(search.toLowerCase());

    const matchesUser = userId ? item.userId === userId : true;

    return matchesSearch && matchesUser;
  });
}