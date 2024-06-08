import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <nav role="navigation" aria-label="pagination" className="mx-auto flex w-full justify-center">
      <ul className="flex flex-row items-center gap-1 flex-wrap">
        {page > 1 && (
          <li>
            <Link
              href={baseRoute.replace('{page}', String(page - 1))}
              aria-current={'page'}
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </Link>
          </li>
        )}

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
          <li key={pageNumber}>
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
          </li>
        ))}

        {page < totalPages && (
          <li>
            <Link
              href={baseRoute.replace('{page}', String(page + 1))}
              aria-current={'page'}
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
