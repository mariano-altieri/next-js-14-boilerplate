'use client';

import type { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

import { AdminSideMenu } from '../AdminSideMenu';
import { AdminSidebar } from '../AdminSidebar';
import { AdminTopNavigation } from '../AdminTopNavigation';

import '../../styles/admin.css';

interface Props {
  children: React.ReactNode;
  pageTitle: string;
}

export function AdminLayout(props: Props) {
  const { children, pageTitle } = props;

  const { data } = useSession();

  return (
    <div className="flex w-screen h-screen text-gray-700">
      <div className="flex flex-col items-center w-16 pb-4 overflow-auto border-r bg-slate-800">
        <AdminSidebar />
      </div>
      <div className="flex flex-col w-56 border-r border-gray-300">
        <AdminSideMenu />
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300">
          <AdminTopNavigation pageTitle={pageTitle} session={data as Session} />
        </div>
        <div className="flex-grow p-6 overflow-auto bg-gray-200">{children}</div>
      </div>
    </div>
  );
}
