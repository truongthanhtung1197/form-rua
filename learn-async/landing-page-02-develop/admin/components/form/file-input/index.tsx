import { ErrorMessage } from "formik";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import images from "styles/images/icon";

function FileInput({
  imgDefault,
  handleChangeFile,
  label,
  buttonName,
  idInput,
  name,
  accept,
}: {
  // eslint-disable-next-line unused-imports/no-unused-vars
  handleChangeFile: (file: any) => void;
  imgDefault?: any;
  label: string;
  buttonName: string;
  idInput: string;
  accept?: string;
  name: string;
}) {
  const [img, setImg] = useState<any>(null);
  const [file, setFile] = useState<any>(null);
  useEffect(() => {
    handleChangeFile(file);
  }, [file]);

  const onChangeFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const imgRender: any = URL.createObjectURL(file);
      setImg(imgRender);
      setFile(file);
    }
  };

  const handleRemoveImg = () => {
    setFile(null);
    setImg(null);
  };

  return (
    <div className="flex gap-x-14 w-[40%]">
      <label htmlFor={idInput} className="flex flex-col cursor-pointer">
        <span className="text-lg font-semibold">{label}</span>

        <div
          className={`mt-[19px] flex justify-center items-center gap-3 btn-file ${
            buttonName === "Thêm ảnh" ? "bg-darkbluebg" : "bg-black"
          }`}
        >
          <span className="">
            <Image src={images.imgIcon} alt="utopia" />
          </span>
          <p className="text-lg font-normal">{buttonName}</p>
        </div>

        <p className="pt-4 text-red100 italic font-medium">
          <ErrorMessage name={name} />
        </p>
      </label>

      <input type="file" id={idInput} hidden onChange={onChangeFile} accept={accept} />

      <div className="mt-[90px] relative">
        <div className="relative w-[217px] h-[217px]">
          {!!img && (
            <Image
              src={img}
              alt="icon_delete"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={img}
              objectPosition="center"
            />
          )}

          {!!imgDefault && !img && (
            <Image
              src={imgDefault.url}
              alt="icon_delete"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={imgDefault.urlBlur}
              objectPosition="center"
            />
          )}
        </div>

        {file && (
          <div
            className="absolute top-[-30px] right-[-30px] cursor-pointer"
            onClick={handleRemoveImg}
          >
            <Image src={images.removeIcon} width={35} height={35} alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(FileInput);
