import { Transaction } from "../types";

export default function TransactionCard({
  data,
  onClick,
}: {
  data: Transaction;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick} 
      className="flex flex-col bg-card-group/50 border-2 border-border-card rounded-[12px] mt-[12px] px-[18px] py-[12px] w-full min-w-[320px] cursor-pointer"
    >     
      <p className="font-semibold capitalize text-lg">{data.title}</p>

      <p className="text-text-sub text-sm mt-1">
        {data.body.slice(0, 60)}...
      </p>

      <p className="text-xs text-gray-500 text-right">
        ID: {data.id} | User: {data.userId}
      </p>
    </div>
  );
}