import { formatContent } from "utils/common";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import images from "styles/images/home";

function Modal({ foundation, hide }: any) {
  return (
    <div className="fixed inset-0 z-40 flex justify-center items-center">
      <div className="relative w-[1077px] h-[806px] bg-white z-[100] rounded-[40px]">
        <button className="absolute right-[0px] top-[-80px] cursor-pointer" onClick={hide}>
          <Image src={images.icon_delete} width={63} height={63} alt="icon delete" />
        </button>
        <div className="mt-[108px] mb-[70px] ml-[144px] mr-[99px] flex">
          <div className="flex flex-col items-center">
            <div>
              <Image
                src={foundation?.logoImg?.url}
                width={foundation?.logoImg?.width}
                height={foundation?.logoImg?.height}
                alt="logo"
                placeholder="blur"
                blurDataURL={foundation?.logoImg?.urlBlur}
              />
            </div>
            <div className="mt-[75px]">
              <Image
                src={foundation?.mediaContents[0].url}
                width={foundation?.mediaContents[0].width}
                height={foundation?.mediaContents[0].height}
                alt="Avatar"
                placeholder="blur"
                blurDataURL={foundation?.mediaContents[0]?.urlBlur}
              />
            </div>
          </div>
          <div className="ml-[109px] relative">
            <div className="/">
              <div className="font-normal text-[42px] text-sky">{foundation.branding}</div>
              <Link href={foundation.url} passHref>
                <p className="text-[18px] font-normal underline cursor-pointer">{foundation.url}</p>
              </Link>
              <div className="flex mt-[8px]">
                <Link href="https://www.facebook.com/utotechjsc" passHref>
                  <div className="cursor-pointer">
                    <Image src={images.icon_facebook} alt="icon_facebook" width={35} height={35} />
                  </div>
                </Link>
                <Link href="https://www.tiktok.com/@utotechjsc_2202" passHref>
                  <div className="ml-[22px] cursor-pointer">
                    <Image src={images.icon_tiktok} alt="icon_tiktok" width={35} height={35} />
                  </div>
                </Link>
                <Link href="https://www.youtube.com/channel/UCax4Ns2z-AqXR58X7WI4KkA" passHref>
                  <div className="ml-[22px] cursor-pointer">
                    <Image src={images.icon_ytb} alt="icon_youtobe" width={35} height={35} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-[484px] h-[380px] font-normal text-[18px] mt-[66px] overflow-y-scroll">
              {formatContent(foundation.content)}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
}

export default memo(Modal);
