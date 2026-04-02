export default function LoadingSkeleton() {
  return (
    <div className="space-y-3 w-full px-4 py-8 flex flex-col items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="h-20 bg-card-group border-2 border-border-card rounded-[12px] mt-[12px] px-[18px] py-[12px] w-full max-w-[50vw] animate-pulse" />
      ))}
    </div>
  );
}