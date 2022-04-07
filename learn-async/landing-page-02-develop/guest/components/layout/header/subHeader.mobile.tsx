import React, { memo } from "react";

function SubHeaderMobile(props: { name: any }) {
  return (
    <div className="h-[35px] font-[600] text-[18px] flex items-center right-0 left-0 shadow top-[50px] fixed z-40 bg-white lg:hidden">
      <span className="ml-[12px] text-[#081419]">{props.name}</span>
    </div>
  );
}

export default memo(SubHeaderMobile);
