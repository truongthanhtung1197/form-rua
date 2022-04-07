import { SearchInput } from "components";
import { fetcher, formatContentView } from "utils/common";
import { useRouter } from "next/router";
import DetailContent from "./content";
import FeaturedNews from "../_components-mobile/featured-news";
import Icons from "styles/images/icon";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";
import useSWR from "swr";

function DetailMobile() {
  const router = useRouter();
  const id = Number(router.query.id);
  const { data, error } = useSWR(`/api/view-detail/${id}`, fetcher);
  if (!data) return <div>Loading...</div>;
  if (error) return <div>Fail to load</div>;
  return (
    <div className="px-5 mt-28 mx-auto">
      <div className="flex justify-start items-center gap-3 mb-10">
        <p className="text-sm flex-auto w-1/6">Báo chí</p>
        <Image src={Icons.doubleRight} alt="icon" />
        <p className="text-sm line-clamp-1">{formatContentView(data.title, 40)}</p>
      </div>
      <SearchInput placeholder="" />
      {data && <DetailContent data={data} />}
      <FeaturedNews />
      <div className="flex justify-end items-center gap-2 my-5">
        <Link href="">
          <a className="text-sm text-gray800">Xem thêm</a>
        </Link>
        <Image src={Icons.next} alt="icon" />
      </div>
    </div>
  );
}

export default memo(DetailMobile);
