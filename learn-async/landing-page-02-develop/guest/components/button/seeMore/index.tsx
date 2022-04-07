import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import images from "styles/images/home";

function Index(props: { navigation: string }) {
  return (
    <Link href={props.navigation} passHref>
      <button className="flex items-center relative w-[110px] h-[21px]">
        <p className="text-[18px] font-normal leading-[21.09px]">Xem thêm</p>
        <div className="top-[1px] absolute right-[5px]">
          <Image src={images.arrow_right} width={16} height={18} alt="arrow_right" />
        </div>
      </button>
    </Link>
  );
}

export default memo(Index);
