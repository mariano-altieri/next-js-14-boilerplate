import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/app/commons/components/ui/pagination';
import Link from 'next/link';

import { cn } from '../libs/utils';
import { buttonVariants } from './ui/button';

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
            <Link
              href={baseRoute.replace('{page}', String(pageNumber))}
              aria-current={pageNumber === page ? 'page' : undefined}
              className={cn(
                buttonVariants({
                  variant: pageNumber === page ? 'outline' : 'ghost',
                }),
              )}
            >
              {pageNumber}
            </Link>
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
