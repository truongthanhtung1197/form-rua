import React, { memo } from "react";
import TextInput from "components/form/text-input";

function RegisterForm() {
  return (
    <div className="bg-white px-5 py-6 rounded-lg mt-6">
      <h1 className="text-2xl font-semibold">Đăng ký khoá học</h1>
      <form>
        <TextInput label={"Tên"} name={"name"} />
        <TextInput label={"Điện thoại"} name={"phone"} />
        <TextInput label={"Email"} name={"email"} />
        <TextInput label={"Khoá học quan tâm"} name={"course"} />
        <button className="w-full h-10 bg-bluebtn rounded-lg mt-5 text-white font-semibold text-lg">
          Đăng ký ngay
        </button>
      </form>
    </div>
  );
}

export default memo(RegisterForm);
