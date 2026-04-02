interface Props {
  search: string;
  setSearch: (v: string) => void;
  userId: number | null;
  setUserId: (v: number | null) => void;
}

export default function SearchBar({
  search,
  setSearch,
  userId,
  setUserId,
}: Props) {
  return (
    <div className="flex gap-4 mb-8">
      <input
        type="text"
        autoFocus
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-card-group border-2 border-border-card rounded-[12px] py-2 px-4 mb-4 w-full focus:outline-none focus:ring-0"
      /> 

      <select
        value={userId ?? ""}
        onChange={(e) =>
          setUserId(e.target.value ? Number(e.target.value) : null)
        }
        className="bg-card-group border-2 border-border-card rounded-[12px] p-2 mb-4 focus:outline-none focus:ring-0"
      >
        <option value="">All</option>
        {Array.from({ length: 10 }).map((_, i) => (
          <option key={i} value={i + 1}>
            User {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
}