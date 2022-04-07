import { GALLERY_TABS } from "../gallery.constants";
import Icon from "styles/images/icon";
import Image from "next/image";
import React, { memo } from "react";

function TabHeader({ activeTab }: { activeTab: number }) {
  return (
    <div className="flex items-center justify-start md:gap-3 gap-2">
      <nav>Trang chủ</nav>
      <div className="md:w-3.5 md:h-3.5 w-2 h-2 relative">
        <Image src={Icon.doubleRightIcon} alt="icon" layout="fill" />
      </div>
      <nav>{GALLERY_TABS[activeTab].name}</nav>
    </div>
  );
}

export default memo(TabHeader);
