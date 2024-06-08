import Link from 'next/link';

export const AdminSideMenu = () => {
  return (
    <>
      <button className="relative text-sm focus:outline-none group">
        <div className="flex items-center justify-between w-full h-16 px-4 border-b border-gray-300 hover:bg-slate-800 hover:text-white">
          <span className="font-medium">Dropdown</span>
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute z-10 flex-col items-start hidden w-full py-4 bg-white shadow-lg group-focus:flex">
          <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
            Menu Item 1
          </a>
          <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
            Menu Item 1
          </a>
          <a className="w-full px-4 py-2 text-left hover:bg-gray-300" href="#">
            Menu Item 1
          </a>
        </div>
      </button>
      <div className="flex flex-col flex-grow p-4 overflow-auto">
        <Link
          className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-slate-800 hover:text-white"
          href="/admin/dashboard"
        >
          <span className="leading-none">Dashboard</span>
        </Link>
        <Link
          className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-slate-800 hover:text-white"
          href="/admin/products"
        >
          <span className="leading-none">Products</span>
        </Link>
        <Link
          className="flex items-center flex-shrink-0 h-10 px-2 text-sm font-medium rounded hover:bg-slate-800 hover:text-white"
          href="/admin/categories"
        >
          <span className="leading-none">Categories</span>
        </Link>
        <Link
          className="flex items-center flex-shrink-0 h-10 px-3 mt-auto text-sm font-medium rounded bg-slate-800 text-white"
          href="/admin/product/new"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span className="ml-2 leading-none">Add Product</span>
        </Link>
      </div>
    </>
  );
};
