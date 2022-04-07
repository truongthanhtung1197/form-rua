import { FILTER_FOUNDERS } from "constants/home.constants";
import { fetcher } from "utils/common";
import Image from "next/image";
import Modal from "components/modal";
import ModalView from "./modal.view";
import React, { memo, useState } from "react";
import useModal from "hook/useModal";
import useSWR from "swr";

function Foundation() {
  const [idFoundation, setIdFoundation] = useState<number>(0);
  const { toggle, isShowing } = useModal();
  const onChangeFoundation = (i: number) => {
    setIdFoundation(i);
    toggle();
  };

  const { data, error } = useSWR(
    `/api/foundation?filter=${JSON.stringify(FILTER_FOUNDERS)}`,
    fetcher
  );

  if (error) return <div>Fail to load...</div>;
  if (!data) return <div>loading...</div>;

  return (
    <section className="flex justify-center pb-[51px]">
      <div className="flex flex-col items-center container lg:px-[180px] mx-auto">
        <div className="sm:text-[48px] sm:mt-[85px] sm:mb-[76px] text-[24px] mt-[34px] font-normal mb-[38.36px]">
          FOUNDER/CEO
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-y-[30px] gap-x-[30px] md:gap-x-[100px] md:gap-y-[70px]">
          {data?.data.map((item: any, i: number) => {
            return (
              <div
                key={i}
                className={`cursor-pointer flex flex-col justify-center items-center sm:w-[290px] sm:h-[230px]`}
                onClick={() => onChangeFoundation(i)}
              >
                <div className="md:w-[217px] md:h-[154px] w-[117px] h-[83px] relative">
                  <Image
                    src={item.logoImg.url}
                    alt="logo"
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={item.logoImg.urlBlur}
                  />
                </div>
                <div className="sm:text-[24px] text-[14px] mt-[14px] sm:mt-[32px]">
                  {item.branding}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Modal isShowing={isShowing}>
        <ModalView foundation={data?.data[idFoundation]} hide={toggle} />
      </Modal>
    </section>
  );
}

export default memo(Foundation);
