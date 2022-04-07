import { ROUTERS } from "constants/router.constant";
import Link from "next/link";
import React, { memo } from "react";
import TextInput from "components/form/text-input";

const CreateUserForm = (props: any) => {
  const { handleSubmit } = props;

  return (
    <div className="w-full container mx-auto pb-20">
      <form onSubmit={handleSubmit}>
        <TextInput label="Tên hiển thị" name="fullName" />
        <TextInput label="Email" name="email" type="email" />
        <TextInput label="Mật khẩu" name="password" type="password" />
        <TextInput label="Nhắc lại mật khẩu" name="confirmPassword" type="password" />
        <div>
          <TextInput label={"Quyền hạn"} name={"roles"} component={"select"}>
            <option value="admin">Admin</option>
            <option value="mod">Mod</option>
          </TextInput>
        </div>
        <div className="flex justify-end">
          <button className="btn-primary bg-green100" type="submit">
            Lưu
          </button>
          <Link href={ROUTERS.USERS} passHref>
            <div className="btn-primary ml-[25px] bg-buttonsubmit">Huỷ</div>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default memo(CreateUserForm);
