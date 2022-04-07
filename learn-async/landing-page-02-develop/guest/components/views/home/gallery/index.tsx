import { Header } from "components";
import { TabContent, TabHeader, TabMenu } from "../gallery/tabs";
import React, { memo, useState } from "react";

function Gallery() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="mt-32 mb-6 font-normal md:text-2xl text-sm bg-grayf6">
      <Header />
      <div className="xl:px-[94px] lg:px-[50px] px-5 container mx-auto pt-5">
        <TabHeader activeTab={activeTab} />
        <TabMenu activeTab={activeTab} handleChangeTab={handleChangeTab} />
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}

export default memo(Gallery);
