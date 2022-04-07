import Image from "next/image";
import Images from "styles/images/sharing";
import React from "react";

function PostDetailView() {
  return (
    <div className="px-4">
      <div>
        <Image src={Images.DxpFake} layout="responsive" placeholder="blur" alt="DXP" />
      </div>
      <article>
        <h1 className="font-semibold text-[24px] leading-[29px] text-left mt-[16px]">
          NHỮNG BÀI HỌC SÂU SẮC CẦN KHẮC CỐT GHI TÂM
        </h1>
        <p className="font-normal text-[14px] leading-[16px] opacity-50">05/08/2019</p>
        <div className="font-normal text-[18px] leading-[24px] text-justify ">
          <p className="mt-[15px]">
            Có lẽ nhiều người sẽ lý luận rằng mệt mỏi thì phải nghỉ ngơi chứ sao lại làm việc, nhưng
            cách để thoát khỏi trạng thái này thực chất là phải làm ngược lại. Những bạn đã vượt qua
            25 tuổi chắc hẳn sẽ rất hiểu cảm giác này: Mỗi ngày trôi qua rất mệt mỏi và dù có đắm
            chìm trong thú vui giải trí, tiêu thụ nhiều đến đâu thì cảm giác này cũng không mất đi.
            Thực tế là các bạn chỉ đang sử dụng các thú vui giải trí để che đi cái bản chất của sự
            mệt mỏi chứ chưa hề giải quyết nó từ gốc.
          </p>
          <p className="mt-[15px]">
            Sự thật là những ai làm việc 8 tiếng/ngày, 5 ngày/tuần mệt mỏi không phải là vì kiệt
            sức. So với công nhân làm việc 12 tiếng/ngày, 7 ngày/tuần hay những người làm Startup
            làm việc 14 tiếng/ngày, 7 ngày/tuần thì cường độ làm việc của dân công sở không thấm vào
            đâu. Sự mệt mỏi mà bạn cảm nhận không đến từ cơ thể mà đến tinh thần, đó là dấu hiệu cho
            thấy bạn đang cố chối bỏ sự bất lực của bản thân trong công việc.
          </p>
          <p className="mt-[15px]">
            Dấu hiệu rõ nhất của những người trốn tránh sự yếu kém của bản thân chính là đắm chìm
            trong thú vui tiêu thụ để quên đi sự thật này. Họ lướt Facebook liên tục hàng giờ mỗi
            ngày, đọc truyện, chơi game, tiệc tùng, cờ bạc… những thói quen giải trí không lành mạnh
            liên tục được củng cố mà nhiều người lại tưởng rằng mình đang theo đuổi lối sống YOLO.
            Chính sự cháy trốn thực tại này khiến họ lại càng sợ hãi khi phải giải quyết vấn đề, do
            đó lựa chọn thay vì cố gắng để làm việc tiến bộ hơn lại quyết định sẽ “chơi nốt hôm nay
            thôi”. Sau khi sự vui vẻ nhờ giải trí đi qua, họ phải quay về đối mặt với vấn đề chưa
            được giải quyết và hậu quả là sự mệt mỏi tăng tiến nhiều lần.
          </p>
          <p className="mt-[15px]">
            Giải pháp đã quá rõ ràng, quan trọng là bạn có chọn thực hiện nó hay không. Nếu vấn đề
            là công việc thì hãy giải quyết nó đi và đừng viện cớ cái sự mệt của mình nữa. Đó chính
            là cách giải quyết từ gốc giúp bạn thoát được cái vòng luẩn quẩn của mệt mỏi và những
            thói quen không lành mạnh. Lẽ dĩ nhiên là để làm được điều này thực sự không hề dễ dàng,
            nó đòi hỏi ở bạn một ý chí vượt khó và biết cách chấp nhận yếu điểm của bản thân. Nhưng
            xin hãy nhớ một điều: “Tâm trạng tốt thì làm tốt là lẽ đương nhiên, nhưng tâm trạng tệ
            mà vẫn làm tốt mới là người xuất chúng.”
          </p>
        </div>
        <p className="text-[16px] leading-[19px] font-bold ml-[225px] mt-[5px]">Dương Xuân Phi</p>
      </article>
    </div>
  );
}

export default PostDetailView;
