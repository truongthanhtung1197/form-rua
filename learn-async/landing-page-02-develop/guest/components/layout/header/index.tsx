import { HEADERS } from "./header.constant";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import MenuMobile from "./menu.mobile";
import React, { useState } from "react";
import SubHeaderMobile from "./subHeader.mobile";
import images from "styles/images/header";
export default function Header() {
  const router = useRouter();
  const [isShowing, setIsShowing] = useState(false);
  const onShowing = () => {
    setIsShowing(!isShowing);
  };
  const result: any = HEADERS?.find((i: any) => {
    return i.route === router.pathname;
  });

  return (
    <>
      <section className="fixed top-0 right-0 left-0 z-40 lg:h-[99px] h-[52px] bg-white shadow">
        <button className="absolute z-30 ml-[12px] mt-[9px] block lg:hidden" onClick={onShowing}>
          <Image src={images.list_menu} width={32} height={32} alt="icon_listMenu" />
        </button>
        <div className="shadow lg:shadow-none flex items-center xl:px-[90px] justify-center">
          <div className="flex lg:mt-[16px] lg:flex-1 ">
            <div className="lg:block hidden">
              <Image src={images.logo_DXP} width={87} height={71} alt="logo_DXP" />
            </div>
            <div className="text-center">
              <div className="lg:font-semibold font-medium text-[18px] lg:text-[34px] lg:leading-[30px] leading-[22px] mt-[8px]">
                DUONG XUAN PHI
              </div>
              <div className="lg:text-[18px] text-[11px] font-light	lg:font-normal lg:mt-[3px]">
                Inspirer, Entrepreneur and Speaker
              </div>
            </div>
          </div>
          <ul className="lg:flex-1 hidden lg:flex">
            {HEADERS.map((item: any, i: number) => (
              <li key={i} className="text-[18px] font-normal flex-1 flex justify-center">
                <Link href={item.route}>
                  <a
                    className={`${
                      item.route === router.pathname ? "border-b border-black" : ""
                    } cursor-pointer pb-[8.5px]`}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`lg:hidden fixed z-20 inset-0 transiton-all ease-in-out duration-200 ${
            isShowing ? " opacity-100 translate-x-0" : "-translate-x-full opacity-0"
          } `}
        >
          <MenuMobile />
        </div>
        {!isShowing && (
          <div className={`${isShowing ? "hidden" : "block"}`}>
            <SubHeaderMobile
              name={result?.label_subHeader ? result?.label_subHeader : result?.label}
            />
          </div>
        )}
      </section>
    </>
  );
}
