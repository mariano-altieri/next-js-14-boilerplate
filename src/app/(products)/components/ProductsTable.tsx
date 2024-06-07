import { formatCurrency } from '@/app/commons/libs/currency';
import { MinimalisticProduct } from '../entities/product.entity';
import Image from 'next/image';
import { Button } from '@/app/commons/components/ui/button';
import Link from 'next/link';

interface Props {
  products: MinimalisticProduct[];
}

export const ProductsTable = (props: Props) => {
  const { products } = props;

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr className="bg-slate-300">
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center w-[40px]"
                  >
                    Id
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center w-[100px]"
                  >
                    Thumbnail
                  </th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Product
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center w-24"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 w-24 text-center"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={product.id}
                    className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap text-center">
                      {product.id}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 flex justify-center">
                      <Image
                        width={50}
                        height={50}
                        className="object-cover"
                        src={product.thumbnail}
                        alt={product.title}
                      />
                    </td>
                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap">
                      <span className="line-clamp-1">{product.title}</span>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap text-center">
                      {formatCurrency(product.price)}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap text-center">
                      <Button asChild variant="default">
                        <Link href={`/admin/product/${product.id}`}>Edit</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <ProductsGrid products={products} />
      <div className="my-4 border-t pt-2">
        <Paginator total={total} page={page} perPage={perPage} baseRoute="/products?page={page}" />
      </div> */}
    </div>
  );
};
