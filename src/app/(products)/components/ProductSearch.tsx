'use client';

import { SearchIcon } from 'lucide-react';
import { IoClose } from 'react-icons/io5';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

import { Input } from '@/app/commons/components/ui/input';
import { Label } from '@/app/commons/components/ui/label';
import { Button } from '@/app/commons/components/ui/button';

export const ProductSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex relative mb-6">
      <Label htmlFor="search-product" className="sr-only">
        Search
      </Label>
      <Input
        className="pl-10 text-base border border-gray-800"
        id="search-product"
        name="search-product"
        placeholder="Search for products"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2" />
      {searchParams.get('query') && (
        <Button
          className="absolute right-1 top-1/2 rounded-full -translate-y-1/2 h-8 w-8 border-black"
          onClick={() => handleSearch('')}
          size="icon"
          variant="outline"
        >
          <IoClose size={16} />
        </Button>
      )}
    </div>
  );
};
