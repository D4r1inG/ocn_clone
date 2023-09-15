import { hasPermission } from '@/utils/functions';
import { Result, Spin } from '@/UI';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import { useAuth } from '@/configs/Auth/client';

interface Props {
  renderContent: ReactNode;
}

const Author: React.FC<Props> = ({ renderContent }) => {
  const [isAllowed, setIsAllowed] = useState<boolean>();
  const router = useRouter();
  const { userInfo } = useAuth();

  useEffect(() => {
    if (!userInfo) return;
    setIsAllowed(hasPermission(router.pathname, userInfo));
  }, [userInfo, router]);

  if (typeof isAllowed === 'undefined')
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin />
      </div>
    );

  return (
    <div className="flex flex-col overflow-x-hidden max-h-[100vh]">
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Add Nav bar here */}
        {!isAllowed ? (
          <div className="flex-1 flex items-center justify-center">
            <Result status="403" title="403" subTitle="Xin lỗi, bạn không có quyền truy cập trang web này." />
          </div>
        ) : (
          renderContent
        )}
      </main>
    </div>
  );
};

export default Author;
