import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/app/commons/components/ui/pagination';

interface PaginatorProps {
  total: number;
  page: number;
  perPage: number;
  baseRoute: string;
}

export function Paginator(props: PaginatorProps) {
  const { total, page, perPage, baseRoute } = props;

  const totalPages = Math.ceil(total / perPage);

  return (
    <Pagination>
      <PaginationContent className="flex-wrap">
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious href={baseRoute.replace('{page}', String(page - 1))} />
          </PaginationItem>
        )}

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href={baseRoute.replace('{page}', String(pageNumber))}
              isActive={pageNumber === page}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page < totalPages && (
          <PaginationItem>
            <PaginationNext href={baseRoute.replace('{page}', String(page + 1))} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
