import { Button } from "@/components/ui/button";
import { FaArrowRotateRight } from "react-icons/fa6";
import { PiSmileySadBold } from "react-icons/pi";

export default function ErrorState({ onRetry }: { onRetry: () => void }) {

  return (
    <div className="flex flex-col items-center text-center text-gray-500 w-full">
      <div className="flex mt-[100px]">
          <PiSmileySadBold className="text-[200px] text-text-sub/70" />
      </div>
      <div className="flex flex-col justify-center items-center">
          <p className="text-text font-semibold text-xl mb-3 mt-6">Something went wrong</p>   
          <Button
            onClick={onRetry} 
            className="cursor-pointer px-4 py-2 w-max bg-text-gray/50 text-text rounded-[12px]"
          >
            <FaArrowRotateRight />
            Retry
          </Button>  
      </div>
  </div>
  );
}