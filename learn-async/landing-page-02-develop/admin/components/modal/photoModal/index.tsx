import Image from "next/image";
import React, { memo } from "react";
function ModalPhoto({ hide, photoUrl }: { hide: any; photoUrl: string }) {
  return (
    <div className="fixed top-48 bg-opacity-20 flex w-full justify-center items-center">
      <div className="z-30 relative lg:w-3/5 sm:w-4/5 w-full flex justify-center  ">
        <Image src={photoUrl} alt="Photo" width={1024} height={700}></Image>
      </div>
      <div onClick={hide} className="fixed inset-0 bg-opacity-50 bg-black z-10 cursor-pointer" />
    </div>
  );
}

export default memo(ModalPhoto);
