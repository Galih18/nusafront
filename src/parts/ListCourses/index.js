import React from 'react'
import Link from 'next/link';
import RenderItem from './RenderItem';

export default function ListCourses({data}) {
  return (
    <>
    <div className="flex justify-between items-baseline">
        <div className="w-auto">
          <h2 className="text-lg text-blue-800">
            Kelas Terbaru
          </h2>
        </div>
        <div className="w-auto">
          <Link href="/courses"><a className="text-gray-500 hover:underline text-sm">Lihat Semua Kelas</a></Link>
        </div>
    </div>
    <div className="flex justify-start items-baseline -mx-4 mt-6">
      {data?.length > 0 ? ( 
        data.map((item, index) => {
          return <RenderItem item={item} key={index}></RenderItem>;
        }) 
        ) : ( 
          <div className="w-full text-center-py-12">
          No Item Found
          </div>
        )}
    </div>
    </>
  );
}
