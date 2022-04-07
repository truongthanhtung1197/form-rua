import Image from "next/image";
import React from "react";
import images from "styles/images/aboutMobi/index";

export default function AboutMeMobi() {
  return (
    <>
      <section className="   mt-[100px] not-italic">
        <div className=" flex justify-center  w-full">
          <div className="">
            <Image src={images.DXP_01} width={138} height={162} alt="DXP" placeholder="blur" />
          </div>
          <div className="ml-[20px] mt-[15px]">
            <Image src={images.DXP_02} width={170} height={214} alt="DXP" placeholder="blur" />
          </div>
          <div className="mt-[100px] ml-[-18px]">
            <Image src={images.DXP_04} width={44} height={126} placeholder="blur" alt="DXP" />
          </div>
        </div>

        <div className="flex justify-center mt-[-114px] ml-[-60px]">
          <Image src={images.DXP_03} width={128} height={150} alt="DXP" />
        </div>

        <div className="font-normal mt-8 text-[18px] leading-[24px] mx-8 text-black300 ">
          <p>Founder/CEO Uto Tech JSC</p>
          <p>Founder/CEO Utopia Eco Lodge</p>
          <p>Founder/CEO tại Utopia Travel</p>
          <p>Founder/CEO Uto Academy</p>
          <p>Founder jGooooo</p>
          <p>Inspirer and Speaker</p>
        </div>

        <div className=" bg-gray400 mt-6 ">
          <p className="p-6 font-normal text-[18px] leading-[24px] text-black300">
            “Tôi sẽ không để cuộc đời này ép buộc tôi phải sống theo cách của nó, tôi sẽ là người
            đưa ra quyết định và lựa chọn tôi muốn sống thế nào. Và tôi tin rằng, chỉ cần bạn có ý
            chí đủ lớn, khát vọng đủ mạnh, kiên trì bền bỉ tới cùng, bạn có thể làm bất cứ điều gì
            bạn muốn trong đời này”
          </p>
          <p className="px-6 ml-[212px] mt-[-20px] font-semibold text-[18px] leading-[24px] text-black300 ">
            Dương Xuân Phi
          </p>
        </div>

        <div>
          <p className="p-6 font-normal text-[18px] leading-[24px] text-black300">
            Dương Xuân Phi sinh ra ở tỉnh Nam Định, sống tại thành phố Nha Trang (tỉnh Khánh Hòa),
            anh từng học Học viện Hàng không tại Thành phố Hồ Chí Minh. Khi đang học năm 2 của học
            viện, anh chọn lối rẽ khác và trải qua nhiều ngành nghề khác nhau. Năm 2014, vì muốn
            khám phá cuộc sống và hiểu thêm về bản thân nên anh cùng một người bạn đi hết 63 tỉnh,
            thành phố cả nước với khoảng 18.000km bằng xe đạp trong vòng một năm rưỡi và trở thành
            một trong những người đầu tiên đạp xe xuyên Việt.
          </p>
        </div>

        <div className="p-6 mt-[-20px]">
          <Image src={images.utopia_01} alt="Utopia" placeholder="blur" />
          <p className="text-[18px] leading-[24px] font-normal text-black300">
            Bẵng đi một thời gian, năm 2016 người ta thấy anh lên Sa Pa (Lào Cai), xây một khu nghỉ
            dưỡng, lưu trú sinh thái giữa thung lũng với núi đá và suối bên đồi - Utopia Eco Lodge.
          </p>
          <p className="mt-4 text-[18px] leading-[24px] font-normal text-black300">
            Anh biến nơi hoang sơ vốn chẳng có đường đến trở thành điểm dừng chân yêu thích của
            những người mê phượt. Anh xây dựng những tour trekking trải nghiệm sinh thái, tự mình
            dẫn tour, chia sẻ về triết lí sống với khách đến.
          </p>
        </div>

        <section className="p-6 ">
          <div className="ml-[120px]">
            <Image
              src={images.utopia_02}
              width={245}
              height={172}
              alt="Utopia"
              placeholder="blur"
            />
          </div>

          <div className="flex">
            <div className="mt-[-100px] mr-[-20px]">
              <Image
                src={images.utopia_03}
                width={193}
                height={128}
                alt="Utopia"
                placeholder="blur"
              />
              <div className="mt-4">
                <Image
                  src={images.utopia_04}
                  width={193}
                  height={103}
                  alt="Utopia"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="ml-20 mt-2">
              <Image
                src={images.utopia_05}
                width={139}
                height={217}
                alt="Utopia"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex">
            <div className="mt-[-66px]">
              <Image src={images.utopia_06} width={126} height={203} alt="uto" placeholder="blur" />
            </div>
            <div className="ml-[27px] mt-2">
              <Image src={images.utopia_07} width={207} height={132} alt="uto" placeholder="blur" />
            </div>
          </div>
          <div>
            <p className="ml-[185px] font-normal text-[14px] leading-[30px]">
              Hình ảnh Utopia Eco Lodge
            </p>
          </div>

          <div className=" mt-2 ">
            <p className="text-[18px] leading-[24px] font-normal text-black300">
              Năm 2019 anh lại khiến nhiều người bất ngờ khi chia tay bản Giàng Tả Chải để chọn Đà
              Nẵng làm nơi đặt những viên gạch đầu tiên phát triển ứng dụng mạng xã hội du lịch của
              người Việt.
            </p>
            <p className="text-[18px] leading-[24px] font-normal text-black300">
              “Tôi luôn có khát vọng làm những điều lớn lao và mong muốn đưa Việt Nam vào bản đồ
              công nghệ thế giới. Tôi luôn muốn thử thách bản thân, với tôi, người trẻ phải viết nên
              câu chuyện của chính mình và chọn con đường khó để đi”, Dương Xuân Phi.
            </p>
          </div>
          <div className="mt-8">
            <div className="ml-[170px]">
              <Image src={images.uto_01} alt="uto" placeholder="blur" />
            </div>
            <div className="flex">
              <div className="mt-[-78px] ml-10">
                <Image src={images.uto_02} alt="uto" placeholder="blur" />
              </div>
              <div className="mt-2">
                <Image src={images.uto_03} alt="uto" placeholder="blur" />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="fontSv4 text-[24px] leading-[28px] font-normal ml-[150px] text-right">
              Thành lập công ty công nghệ về du lịch
            </p>
            <p className="text-blue200 text-[24px] leading-[25px] font-normal ml-[212px] mt-4">
              Uto Tech JSC
            </p>
          </div>
        </section>

        <section className="p-6 ">
          <div>
            <p className="text-[18px] leading-[24px] font-normal text-black300">
              Tháng 2/2020, anh thành lập Công Ty Cổ Phần Uto Technology tại Đà Nẵng. Gần 2 năm
              thành lập, Uto Tech đã trở thành doanh nghiệp công nghệ phát triển nhanh bậc nhất tại
              Đà Nẵng với quy mô, chất lượng cũng như cách tổ chức chuyên nghiệp. Định giá công ty
              là 100 tỷ đồng, đã huy động 5 tỷ cho 5% cổ phần trong vòng gọi vốn đầu tiên trên
              Facebook.
            </p>
          </div>
          <div className="mt-4">
            <Image src={images.jgooooo_01} alt="Jgooooo" placeholder="blur" />
          </div>
          <div className="mt-4">
            <p className="text-[18px] leading-[24px] font-normal ">
              Sau khoảng 1 năm rưỡi chuẩn bị, chịu ảnh hưởng bởi giãn cách vì dịch bệnh, tháng
              8/2021, ứng dụng nền tảng tìm kiếm, kết nối và hỗ trợ du lịch jGooooo chính thức ra
              đời và đưa lên các chợ ứng dụng App Store và CH Play. “Trong khoảng 2 tháng đầu chạy
              thử nghiệm và tiếp tục nâng cấp ứng dụng, jGooooo có hơn 4.000 người dùng và nhiều
              phản hồi tâm huyết để đội ngũ tiếp tục hoàn thiện”
            </p>
          </div>
          <div className="mt-4">
            <Image src={images.jgooooo_02} alt="jgooooo" placeholder="blur" />
          </div>
          <div className="mt-4">
            <p className="text-[18px] leading-[24px] font-normal">
              Hành trình nào cũng bắt đầu từ những bước đi đầu tiên. Anh đã trải qua rất nhiều hành
              trình khác nhau, nhưng hành trình lớn và vĩ đại của anh có lẽ chỉ mới bắt đầu. Sẽ còn
              rất nhiều khó khăn và trở ngại phía trước. Không có thành công nào đến một cách dễ
              dàng nhưng thất bại lại không có trong từ điển của anh, vì anh là kẻ không bao giờ bỏ
              cuộc. Hành trình của anh có lẽ đã và đang có nhiều bạn theo dõi và nó vẫn đang tiếp
              tục.
            </p>
          </div>
        </section>
        <div>
          <div className="bg-gray400 p-6">
            <p className="text-[18px] leading-[24px] font-normal">
              Ước mơ từ thuở nhỏ của tôi, cũng là nguồn cảm hứng lớn nhất trong đời tôi, chỉ là được
              trải nghiệm cuộc sống, được tận mắt nhìn thấy thế giới rộng lớn, đẹp đẽ, muôn hình vạn
              trạng này. Tôi không nghĩ mình ngông, tôi chỉ đang theo đuổi đam mê của mình.
            </p>
            <div className="ml-[210px] mt-4">
              <p className="font-semibold text-[18px] leading-[24px] text-black300">
                Dương Xuân Phi
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
