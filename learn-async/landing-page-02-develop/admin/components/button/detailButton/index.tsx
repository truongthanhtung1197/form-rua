import Image from "next/image";
import Images from "styles/images/news";
import Link from "next/link";
import React, { memo } from "react";

function DetailButton({ route }: { route: string }) {
  return (
    <Link href={`${route}`}>
      <a className="bg-green-900 rounded-sm flex items-center justify-center h-[30px] w-[30px]">
        <Image src={Images.detailIcon} alt="utopia" width={18} height={18} />
      </a>
    </Link>
  );
}

export default memo(DetailButton);
