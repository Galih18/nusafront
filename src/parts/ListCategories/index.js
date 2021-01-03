import React from 'react';
import RenderItem from "./RenderItem";
import GraphicDesign from "public/images/icon_design.svg";
import GameDev from "public/images/icon_game.svg";
import MobileDev from "public/images/icon_mobile.svg";
import Animation from "public/images/icon_animasi.svg";
import WebDev from "public/images/icon_webdev.svg";
import DigitalMarketing from "public/images/icon_dm.svg";

export default function index() {

  const data = [{
    imageName: <GraphicDesign />,
    name : "Graphic Design",
    total :12493,  
  },
  {
    imageName: <GameDev />,
    name : "Game Developer",
    total : 839,  
  }
  ,
  {
    imageName: <MobileDev />,
    name : "Mobile Developer",
    total : 478,  
  }
  ,
  {
    imageName: <Animation />,
    name : "Animation",
    total : 839,  
  }
  ,
  {
    imageName: <WebDev />,
    name : "Web Developer",
    total : 839,  
  }
  ,
  {
    imageName: <DigitalMarketing />,
    name : "Digital Marketing",
    total : 839,  
  }
]
  return (
    <>
    <div className="flex justify-between items-baseline">
        <div className="w-auto">
          <h2 className="text-lg text-blue-800">
            Kategori Kelas
          </h2>
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
  )
}
