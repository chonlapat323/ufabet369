// src/components/HeaderAuthSkeleton.tsx
import React from "react";

const HeaderAuthSkeleton = () => {
  return (
    <div className="flex items-center gap-x-3 animate-pulse">
      {/* Skeleton for "สวัสดี, username" */}
      <div className="h-4 bg-gray-700 rounded w-32"></div>
      {/* Skeleton for "ออกจากระบบ" button */}
      <div className="h-10 bg-gray-700 rounded-full w-28"></div>
    </div>
  );
};

export default HeaderAuthSkeleton;
