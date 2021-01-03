import React from 'react'

export default function Hero() {
  function submit() {
  }
  return (
    <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-4xl text-black mb-5 ml-20">
            <span className="text-blue-700 font-semibold">
              Bangun Skill </span> <span className="text-teal-400">Anda dimulai dari sini </span>
          </h1>
          <p className="text-black text-md mb-8 ml-20">Belajar animasi dan design dengan mudah <br/>
          dibimbing sampai bisa dan dibutuhkan oleh dunia industri</p>

          <form onSubmit={submit}>
            <input type="text" className="bg-grey-300 ml-20 px-6 py-3 w-1/2" placeholder="Alamat Email Anda"/>
            <button className="transition-all shadow-inner text-black px-6 py-3">Daftar</button>
          </form>
        </div>
        <div className="w-1/2 flex-justify-end pt-24 pr-16 -mt-12 -mr-6 right-0">
          <div className="relative" style={{width:369, height:440}}>
          <img src="/images/img-hero-cima2.jpg" alt="nusaedu laskar cima"/>
          </div>
        </div>
    </div>
  )
}
