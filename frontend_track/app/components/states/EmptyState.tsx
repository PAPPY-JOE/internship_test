import { LuSearchX } from "react-icons/lu";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center text-center text-gray-500">
        <div className="flex">
            <LuSearchX className="text-[200px] text-text-sub/70" />
        </div>
        <div className="flex flex-col justify-center">
            <p className="text-text font-semibold text-xl mb-3 mt-6">No result found</p>   
            <p className="text-text-gray">{"We can't find any transactions matching your search"}</p>   
        </div>
    </div>
  );
}