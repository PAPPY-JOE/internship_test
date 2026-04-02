export interface Transaction {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };