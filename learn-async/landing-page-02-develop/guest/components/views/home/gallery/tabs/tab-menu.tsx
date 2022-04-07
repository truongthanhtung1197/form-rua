import { GALLERY_TABS } from "../gallery.constants";
import React, { memo } from "react";

interface Iprops {
  activeTab: number;
  handleChangeTab: Function;
}
function TabMenu({ activeTab, handleChangeTab }: Iprops) {
  const renderTabMenu = () => {
    return (
      <nav className="flex justify-start items-center gap-16 my-5">
        {GALLERY_TABS.map((item: { id: number; title: string }) => {
          const isActive = item.id === activeTab;
          return (
            <button
              onClick={() => handleChangeTab(item.id)}
              key={item.id}
              className={`font-semibold ${
                isActive ? "text-bluebtn border-b border-solid " : "text-graysearch"
              }`}
            >
              {item.title}
            </button>
          );
        })}
      </nav>
    );
  };
  return <>{renderTabMenu()}</>;
}
export default memo(TabMenu);
