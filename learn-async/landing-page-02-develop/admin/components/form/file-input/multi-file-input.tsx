import { ErrorMessage } from "formik";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import images from "styles/images/review";

function MultiFileInput(props: any) {
  const { handleChangeFile, name } = props;
  const [imgPrev, setImgPrev] = useState<any>([]);
  const [files, setFiles] = useState<any>([]);
  const onChangeFile = (e: any) => {
    const fileList = e.target.files;
    const file = Object.values(fileList).map((item) => item);
    setFiles(files.concat(file));
  };

  useEffect(() => {
    showFiles(files);
    const data = Object.assign({}, files);
    handleChangeFile(data);
  }, [files]);
  const showFiles = (files: any) => {
    const imgPrevResult: any = files.map((file: any) => {
      return URL.createObjectURL(file);
    });
    setImgPrev(imgPrevResult);
  };

  const handleRemove = (i: any) => {
    const newImage = [...imgPrev];

    newImage.splice(i, 1);

    setImgPrev(newImage);
  };
  return (
    <div>
      <div className="mb-3 mt-[50px]">
        <label className="font-semibold text-2xl">Hình ảnh</label>
        <div className="h-11 my-5">
          <label htmlFor="file-upload" className="custom-file-upload font-medium h-11 text-white">
            <div className="justify-center h-11 bg-black rounded-md w-32 flex items-center ">
              <div className="relative flex  ">
                <Image alt="icon_image" src={images.icon_image} width={19} height={20} />
              </div>
              <span className="ml-2">Chọn ảnh</span>
            </div>
          </label>

          <div className="text-red-100 ml-1 mt-2">
            <ErrorMessage name={name} />
          </div>
          <input onChange={onChangeFile} className="hidden" id="file-upload" type="file" multiple />
        </div>
        <div className="flex w-full flex-wrap">
          {imgPrev &&
            imgPrev.map((img: any, i: number) => {
              return (
                <div key={i} className="mr-3 h-16 w-24 relative">
                  <button
                    className="absolute -top-2 h-3 w-3 -right-1 z-10 cursor-pointer"
                    onClick={() => handleRemove(i)}
                  >
                    <Image alt="icon_edit" src={images.icon_x} width={11} height={11} />
                  </button>
                  <Image
                    alt="icon_edit"
                    src={img}
                    layout="fill"
                    objectPosition={"center"}
                    objectFit="cover"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default memo(MultiFileInput);
