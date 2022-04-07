import Link from "next/link";
import React, { memo } from "react";
import SearchInput from "components/form/search-input";

function ContentHeader({
  title,
  action,
  actionLink,
  children,
  searchHidden,
}: {
  title: string;
  action?: string;
  actionLink?: string;
  children?: any;
  searchHidden: boolean;
}) {
  return (
    <div className="flex pb-5 justify-between w-full mt-7">
      <div className="flex flex-1 justify-start items-end text-2xl gap-3">
        <p className="font-semibold">{title}</p>
        <p>{">"}</p>
        {children}
      </div>
      <div className={`gap-3 justify-between flex `}>
        {action && actionLink && (
          <Link href={actionLink}>
            <a>
              <button className="btn-create flex justify-center items-center gap-2">
                <span>+</span> {action}
              </button>
            </a>
          </Link>
        )}
        <div className={`${searchHidden ? "hidden" : ""}`}>
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

export default memo(ContentHeader);
