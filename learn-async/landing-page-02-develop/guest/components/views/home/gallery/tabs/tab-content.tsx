import { GALLERY_TABS } from "../gallery.constants";
import React, { memo } from "react";

function TabContent({ activeTab }: { activeTab: number }) {
  const renderContent = () => {
    const content = GALLERY_TABS.find((item: any) => item.id === activeTab);
    return <>{content && content.content}</>;
  };
  return <>{renderContent()}</>;
}

export default memo(TabContent);
