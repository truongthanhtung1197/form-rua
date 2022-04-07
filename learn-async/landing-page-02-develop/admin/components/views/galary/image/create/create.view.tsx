import { IMAGE_STATUS } from "constants/galary.constants";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { memo, useEffect, useState } from "react";
import images from "styles/images/icon";

interface Iprops {
  onSubmit: Function;
  setData: Function;
  data: Object;
}
function Index(props: Iprops) {
  const [imageFile, setImageFile] = useState<any>(null);
  const [error, setError] = useState(false);
  const [checked, setChecked] = useState(true);
  const router = useRouter();

  useEffect(() => {
    return () => {
      imageFile && URL.revokeObjectURL(imageFile?.prev);
    };
  }, [imageFile]);

  const onChangeFile = (e: any) => {
    const file: any = e.target.files[0];
    if (file) {
      file.prev = URL.createObjectURL(file);
      setImageFile(file);
      setError(false);
    }
    props.setData({
      ...props.data,
      file: file,
    });
  };
  const onChangeStatus = (e: any) => {
    setChecked(!checked);
    props.setData({
      ...props.data,
      status: e.target.value,
    });
  };
  const handleCancel = () => {
    router.replace("/galary/image");
  };
  return (
    <div>
      <div className="font-semibold text-[20px]">Tải hình ảnh lên</div>
      <form>
        <input id="input-image" type="file" accept="image/*" hidden onChange={onChangeFile} />
        <label htmlFor="input-image">
          <div
            className={`cursor-pointer mt-[19px] flex justify-center items-center gap-3 btn-file bg-black`}
          >
            <span>
              <Image src={images.imgIcon} alt="utopia" />
            </span>
            <p className="text-lg font-normal">Chọn ảnh</p>
          </div>
        </label>

        {imageFile && (
          <div className="w-full flex justify-center mt-10">
            <Image
              src={imageFile.prev}
              width={500}
              height={300}
              objectFit="cover"
              objectPosition="center"
              alt="admin"
            />
          </div>
        )}
        {error && <p className="text-[16px] text-redbg italic">Require</p>}

        <div className="ml-[25px] mt-[55px] font-semibold text-[16px]">
          <div className="flex items-center">
            <input
              className="cursor-pointer w-6 h-6"
              type="radio"
              name="status"
              value={IMAGE_STATUS.HIDE}
              onChange={onChangeStatus}
              checked={checked}
            />
            <p className="ml-[17px]">Ẩn</p>
          </div>

          <div className="flex items-center mt-[12px]">
            <input
              className="cursor-pointer w-6 h-6"
              type="radio"
              name="status"
              value={IMAGE_STATUS.SHOW}
              onChange={onChangeStatus}
              checked={!checked}
            />
            <p className="ml-[17px]">Hiện</p>
          </div>
        </div>
        <div className="gap-[25px] flex mt-[25px]">
          <button type="button" className="btn-cancel" onClick={handleCancel}>
            Huỷ
          </button>
          <div
            className="btn-upload flex items-center justify-center cursor-pointer"
            onClick={() => props?.onSubmit(setError)}
          >
            Tải lên
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(Index);
