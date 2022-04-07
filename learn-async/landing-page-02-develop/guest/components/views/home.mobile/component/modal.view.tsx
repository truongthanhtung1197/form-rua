import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import images from "styles/images/home";

function Modal({ foundation, hide }: any) {
  return (
    <div className="fixed flex flex-col inset-0 justify-center items-center">
      <button className="relative top-[40px] left-[140px] z-40" onClick={hide}>
        <Image
          src={images.icon_delete}
          width={44}
          height={44}
          alt="icon delete"
          blurDataURL={images.icon_delete}
          placeholder="blur"
        />
      </button>

      <div className="w-[320px] h-[530px] bg-white z-40 rounded-[40px] relative top-[40px]">
        <div className="m-[27px]">
          <div>
            <div className="font-normal text-[24px] text-sky">{foundation.label}</div>
            <Link href={foundation.link} passHref>
              <p className="text-[18px] font-normal underline cursor-pointer">{foundation.link}</p>
            </Link>
            <div className="flex my-[13px]">
              <Link href="https://www.facebook.com/utotechjsc" passHref>
                <div className="cursor-pointer">
                  <Image
                    src={images.icon_facebook}
                    alt="icon_facebook"
                    width={35}
                    height={35}
                    blurDataURL={images.icon_facebook}
                    placeholder="blur"
                  />
                </div>
              </Link>
              <Link href="https://www.tiktok.com/@utotechjsc_2202" passHref>
                <div className="ml-[22px] cursor-pointer">
                  <Image
                    src={images.icon_tiktok}
                    alt="icon_tiktok"
                    width={35}
                    height={35}
                    blurDataURL={images.icon_tiktok}
                    placeholder="blur"
                  />
                </div>
              </Link>
              <Link href="https://www.youtube.com/channel/UCax4Ns2z-AqXR58X7WI4KkA" passHref>
                <div className="ml-[22px] cursor-pointer">
                  <Image
                    src={images.icon_ytb}
                    alt="icon_youtobe"
                    width={35}
                    height={35}
                    blurDataURL={images.icon_ytb}
                    placeholder="blur"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="mt-[0px]">
              <Image
                src={foundation.img}
                width={133}
                height={171}
                alt="icon"
                blurDataURL={foundation.img}
                placeholder="blur"
              />
            </div>
            <div>
              <Image
                src={foundation.logo}
                width={102.86}
                height={73}
                alt="logo"
                blurDataURL={foundation.logo}
                placeholder="blur"
              />
            </div>
          </div>

          <div className="font-normal h-[150px] text-[18px] leading-[18px] mt-[15px] overflow-y-scroll">
            {foundation.content}
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
}

export default memo(Modal);
