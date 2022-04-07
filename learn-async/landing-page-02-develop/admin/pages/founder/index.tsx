import { ROUTERS } from "constants/router.constant";
import ContentHeader from "components/layouts/content-header";
import Founder from "components/views/founder/list";

const Index = () => {
  return (
    <div className="bg-graydivide w-full">
      <div className="container mx-auto px-10">
        <ContentHeader
          title="Trang chủ"
          searchHidden={false}
          action={"Tạo mới"}
          actionLink={ROUTERS.FOUNDER_CREATE}
        >
          <div className="text-[18px]">Founder/CEO</div>
        </ContentHeader>
        <Founder />
      </div>
    </div>
  );
};
export default Index;
