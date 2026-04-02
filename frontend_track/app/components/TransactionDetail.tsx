import { FaChevronLeft } from "react-icons/fa";
import { Transaction } from "../types";

export default function TransactionDetail({
  data,
  onBack,
}: {
  data: Transaction;
  onBack: () => void;
}) {
  return (
    <div>
      <div onClick={onBack} className="flex items-center space-x-2 mb-8 cursor-pointer">
        <FaChevronLeft /> <p>Back</p>
      </div>

      <div className="flex flex-col bg-card-group/50 border-2 border-border-card rounded-[12px] mt-[12px] px-[18px] py-[12px] w-full min-w-[320px]">
        <h2 className="text-xl font-bold capitalize">{data.title}</h2>
        <p className="mt-4 text-text-sub">{data.body}</p>
        
        <p className="text-sm text-gray-500 mt-2 text-right">
          ID: {data.id} | User: {data.userId}
        </p>

      </div>
    </div>
  );
}