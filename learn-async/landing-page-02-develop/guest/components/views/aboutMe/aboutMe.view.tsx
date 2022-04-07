import Image from "next/image";
import React, { memo } from "react";
import images from "styles/images/aboutMe/index";

function AboutMe() {
  return (
    <div className="container mx-auto xl:px-[94px] lg:px-[50px] px-5">
      <section className="w-full  mt-[200px]  ">
        <div className="flex justify-end gap-20">
          <div>
            <Image src={images.DXP02} placeholder="blur" alt="DXP" />
          </div>

          <div className=" flex mt-16 gap-4">
            <Image src={images.DXP03} placeholder="blur" alt="DXP" />
            <div className="grid grid-cols content-end">
              <Image src={images.Text_DXP01} placeholder="blur" alt="DXP" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-10 mt-[-235px] ml-[330px]">
          <div className="grid grid-cols content-end font-normal text-[20px] leading-[22px] text-black300 ">
            <p>Founder/CEO Uto Tech JSC</p>
            <p>Founder/CEO Utopia Eco Lodge</p>
            <p>Founder/CEO tại Utopia Travel</p>
            <p>Founder/CEO Uto Academy</p>
            <p>Founder jGooooo</p>
            <p>Inspirer and Speaker</p>
          </div>
          <div>
            <Image src={images.DXP01} placeholder="blur" alt="DXP" />
          </div>
        </div>
      </section>

      <section className=" mt-[95px]   rounded-[7px]  h-[204px] bg-gray400">
        <div className=" w-full ">
          <p className=" px-[40px] py-[45px] font-normal leading-[30px] text-[20px] w-full h-[99px] text-black300  ">
            “Tôi sẽ không để cuộc đời này ép buộc tôi phải sống theo cách của nó, tôi sẽ là người
            đưa ra quyết định và lựa chọn tôi muốn sống thế nào. Và tôi tin rằng, chỉ cần bạn có ý
            chí đủ lớn, khát vọng đủ mạnh, kiên trì bền bỉ tới cùng, bạn có thể làm bất cứ điều gì
            bạn muốn trong đời này”
          </p>
        </div>
        <p className=" grid justify-items-end mt-[40px]   leading-[30px] text-[20px] text-black300 px-[40px] font-semibold">
          Dương Xuân Phi
        </p>
      </section>

      <section className="h-[151px] mt-[64px]">
        <p className="font-normal text-[20px] leading-[30px] text-black300">
          Dương Xuân Phi sinh ra ở tỉnh Nam Định, sống tại thành phố Nha Trang (tỉnh Khánh Hòa), anh
          từng học Học viện Hàng không tại Thành phố Hồ Chí Minh. Khi đang học năm 2 của học viện,
          anh chọn lối rẽ khác và trải qua nhiều ngành nghề khác nhau. Năm 2014, vì muốn khám phá
          cuộc sống và hiểu thêm về bản thân nên anh cùng một người bạn đi hết 63 tỉnh, thành phố cả
          nước với khoảng 18.000km bằng xe đạp trong vòng một năm rưỡi và trở thành một trong những
          người đầu tiên đạp xe xuyên Việt.
        </p>
      </section>

      <section className="mt-[94px] ">
        <Image src={images.Utopia_01} width={950} height={244} placeholder="blur" alt="DXP" />
      </section>

      <section className="mt-[65px] w-full">
        <div className="flex gap-10">
          <div className=" font-normal  ">
            <p className=" h-[120px] text-black300 leading-[30px] text-[20px]">
              Bẵng đi một thời gian, năm 2016 người ta thấy anh lên Sa Pa (Lào Cai), xây một khu
              nghỉ dưỡng, lưu trú sinh thái giữa thung lũng với núi đá và suối bên đồi - Utopia Eco
              Lodge.
            </p>
            <p className="  h-[200px] text-black300 leading-[30px] text-[20px]">
              Anh biến nơi hoang sơ vốn chẳng có đường đến trở thành điểm dừng chân yêu thích của
              những người mê phượt. Anh xây dựng những tour trekking trải nghiệm sinh thái, tự mình
              dẫn tour, chia sẻ về triết lí sống với khách đến.
            </p>
          </div>
          <div className="w-[800px] h-[261px] relative">
            <Image
              src={images.Utopia_02}
              placeholder="blur"
              alt="DXP"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="flex relative ">
          <div className="absolute bottom-0 top-[200] right-[790px]   ">
            <Image src={images.Utopia_07} placeholder="blur" alt="DXP" />
          </div>
          <div className="ml-[575px] mt-[-74px]">
            <Image src={images.Utopia_03} placeholder="blur" alt="DXP" />
          </div>
          <div className="  absolute right-[230px] top-[-80px] ">
            <Image src={images.Utopia_04} placeholder="blur" alt="DXP" />
          </div>
          <div className=" absolute bottom-0 right-[230px] top-[130px]">
            <Image src={images.Utopia_05} placeholder="blur" alt="DXP" />
          </div>
          <div className=" absolute right-[0] top-[-40px]">
            <Image src={images.Utopia_06} placeholder="blur" alt="DXP" />
          </div>
        </div>

        <div className=" mt-[20px] font-normal text-[20px] leading-[30px]  ">
          <p className="  grid justify-items-end">Hình ảnh Utopia Eco Lodge</p>
        </div>

        <div className=" h-[127px] mt-[107px]">
          <p className="font-normal text-[20px] leading-[30px] text-black300">
            Năm 2019 anh lại khiến nhiều người bất ngờ khi chia tay bản Giàng Tả Chải để chọn Đà
            Nẵng làm nơi đặt những viên gạch đầu tiên phát triển ứng dụng mạng xã hội du lịch của
            người Việt. “Tôi luôn có khát vọng làm những điều lớn lao và mong muốn đưa Việt Nam vào
            bản đồ công nghệ thế giới. Tôi luôn muốn thử thách bản thân, với tôi, người trẻ phải
            viết nên câu chuyện của chính mình và chọn con đường khó để đi”, Dương Xuân Phi.
          </p>
        </div>
      </section>

      <section className="h-[500px] mt-[100px] ">
        <div className="relative right-[-250px]">
          <div className="ml-[240px]">
            <Image src={images.Uto_02} placeholder="blur" alt="DXP" />
          </div>
          <div className="absolute top-[185px]">
            <Image src={images.Uto_01} placeholder="blur" alt="DXP" />
            <Image src={images.Utop_03} placeholder="blur" alt="DXP" />
          </div>
        </div>

        <div>
          <div className="grid place-items-end mt-[-295px]">
            <Image src={images.Uto_04} placeholder="blur" alt="DXP" />
            <div className=" mt-12">
              <Image src={images.Uto_05} placeholder="blur" alt="DXP" />
            </div>
            <p className="  w-[425px] h-[260px] font-normal text-[20px] leading-[30px] mt-12 text-black300">
              Tháng 2/2020, anh thành lập Công Ty Cổ Phần Uto Technology tại Đà Nẵng. Gần 2 năm
              thành lập, Uto Tech đã trở thành doanh nghiệp công nghệ phát triển nhanh bậc nhất tại
              Đà Nẵng với quy mô, chất lượng cũng như cách tổ chức chuyên nghiệp. Định giá công ty
              là 100 tỷ đồng, đã huy động 5 tỷ cho 5% cổ phần trong vòng gọi vốn đầu tiên trên
              Facebook.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[110px]  ">
        <div className="  flex justify-between  ">
          <div className="w-[637px] ml-[240px]">
            <p className="text-[20px] font-normal leading-[23px]">
              Sau khoảng 1 năm rưỡi chuẩn bị, chịu ảnh hưởng bởi giãn cách vì dịch bệnh, tháng
              8/2021, ứng dụng nền tảng tìm kiếm, kết nối và hỗ trợ du lịch jGooooo chính thức ra
              đời và đưa lên các chợ ứng dụng App Store và CH Play. “Trong khoảng 2 tháng đầu chạy
              thử nghiệm và tiếp tục nâng cấp ứng dụng, jGooooo có hơn 4.000 người dùng và nhiều
              phản hồi tâm huyết để đội ngũ tiếp tục hoàn thiện”
            </p>
          </div>
          <div className="z-10 mr-[40px]">
            <Image src={images.jgooooo_01} placeholder="blur" alt="DXP" />
          </div>
        </div>

        <div className="flex relative">
          <div className="mt-[-100px] ml-[240px] z-10 ">
            <Image src={images.jgooooo_02} placeholder="blur" alt="DXP" />
          </div>
          <div className=" grid items-end mt-[-150px] absolute right-0 w-[677px] h-[487px] bg-blue100">
            <div className="border-white border-b-4 absolute h-[65px] w-[300px] top-[305px] right-[-80px] justify-self-end  rotate-90 ">
              <p className="text-white text-[48px] font-normal leading-[30px] w-[200px] ml-[30px]">
                jGooooo
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[100px]">
          <p className="not-italic font-normal text-[20px] leading-[24px]">
            Hành trình nào cũng bắt đầu từ những bước đi đầu tiên. Anh đã trải qua rất nhiều hành
            trình khác nhau, nhưng hành trình lớn và vĩ đại của anh có lẽ chỉ mới bắt đầu. Sẽ còn
            rất nhiều khó khăn và trở ngại phía trước. Không có thành công nào đến một cách dễ dàng
            nhưng thất bại lại không có trong từ điển của anh, vì anh là kẻ không bao giờ bỏ cuộc.
            Hành trình của anh có lẽ đã và đang có nhiều bạn theo dõi và nó vẫn đang tiếp tục.
          </p>
        </div>
      </section>

      <section className=" mt-[95px]   rounded-[7px]  h-[204px] bg-gray400">
        <div className=" w-full ">
          <p className=" px-[40px] py-[45px] font-normal leading-[30px] text-[20px] w-full h-[99px] text-black300  ">
            Ước mơ từ thuở nhỏ của tôi, cũng là nguồn cảm hứng lớn nhất trong đời tôi, chỉ là được
            trải nghiệm cuộc sống, được tận mắt nhìn thấy thế giới rộng lớn, đẹp đẽ, muôn hình vạn
            trạng này. Tôi không nghĩ mình ngông, tôi chỉ đang theo đuổi đam mê của mình.
          </p>
        </div>
        <p className=" grid justify-items-end mt-[40px] leading-[30px] text-[20px] text-black300 px-[40px] font-semibold">
          Dương Xuân Phi
        </p>
      </section>
    </div>
  );
}

export default memo(AboutMe);
