interface Props {
  categories: string[];
}

export const ProductsCategoriesTable = (props: Props) => {
  const { categories } = props;

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
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Category
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr
                    key={category + String(index)}
                    className={`border-b ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                  >
                    <td className="text-sm text-gray-900 font-light px-4 py-2 whitespace-nowrap text-center">
                      {index + 1}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">
                      {category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
