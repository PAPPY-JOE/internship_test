"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

type Props = {
  page: number;
  totalPages: number;
  setPage: (p: number) => void;
};

export default function PaginationControls({
  page,
  totalPages,
  setPage,
}: Props) {
  return (
    <Pagination className="mt-6">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => page > 1 && setPage(page - 1)}
          />
        </PaginationItem>

        <PaginationItem>
          <span className="px-4 text-sm">
            Page {page} of {totalPages}
          </span>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            onClick={() =>
              page < totalPages && setPage(page + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}