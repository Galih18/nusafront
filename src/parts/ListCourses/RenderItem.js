import React from 'react';
import Link from 'next/link';
import IconPlay from "public/images/icon-play.svg";


export default function RenderItem({item}) {
  return (
    <div className="w-1/4 px-4">
      <div className="item relative">
        <figure className="item-image">
          <IconPlay></IconPlay> 
          <img 
          src={item?.thumbnail ?? ""} 
          alt={item?.name ?? "some information"} 
          />
        </figure>
        <div className="item-meta mt-2">
          <h4 className="text-md text-gray-900">{item?.name?? "Nama Kursus"}</h4>
          <h5 className="text-xs text-gray-600">{item?.level?? "Level Kursus"}</h5>
        </div>
        <Link href="/courses/[slug]" as={`/courses/${item.id}`}> 
        <a className="link-wrapped"></a> 
        </Link>
      </div>
    </div>
  );
}
