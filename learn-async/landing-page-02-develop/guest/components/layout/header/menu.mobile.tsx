import { HEADERS } from "./header.constant";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import images from "styles/images/header";

function HeaderMenu() {
  const router = useRouter();
  return (
    <div className="relative text-center min-h-screen bg-black text-white z-0 top-[52px] w-full">
      <div>
        {HEADERS.map((_: { route: string; label: string }) => (
          <li className="flex justify-center" key={_.label}>
            <Link href={_.route}>
              <a
                className={`font-normal text-[20px] not-italic text-white p-2 leading-[20.56px] mt-[35px] uppercase ${
                  router.pathname == _.route ? "font-[700] border-b border-white" : ""
                }`}
              >
                {_.label}
              </a>
            </Link>
          </li>
        ))}
      </div>
      <div className="mt-[60px]">
        <Image
          src={images.logo_DXP_mobile}
          width={212}
          height={206}
          alt="logo_DXP"
          placeholder="blur"
          blurDataURL={images.logo_DXP_mobile}
        />
      </div>
    </div>
  );
}

export default memo(HeaderMenu);
