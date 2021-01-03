import React from 'react';
import Link from 'next/link';

export default function Footer() {
  function submit(){

  }
  return (
    <footer className="container mx-auto ml-2">
        <div className="flex justify-between">
          <div className="w-1/6 ml-20">
            <h6 className="text-white text-lg">Company</h6>
            <ul className="mt-4">
              <li className="mt-2">
                <Link href=""><a href="" className="text-white text-sm hover:text-blue-400 hover:underline">API Developer</a></Link>
              </li>
              <li className="mt-2">
                <Link href=""><a href="" className="text-white text-sm hover:text-blue-400 hover:underline">Career</a></Link>
              </li>
              <li className="mt-2">
                <Link href=""><a href="" className="text-white text-sm hover:text-blue-400 hover:underline">Our Story</a></Link>
              </li>
              <li className="mt-2">
                <Link href=""><a href="" className="text-white text-sm hover:text-blue-400 hover:underline">Events</a></Link>
              </li>
            </ul>
          </div>

          <div className="w-1/6">
            <h6 className="text-white text-lg">Student</h6>
            <ul className="mt-4">
              <li className="mt-2">
                <Link href=""><a href="" className="text-white text-sm hover:text-blue-400 hover:underline">Testimoni</a></Link>
              </li>
              <li className="mt-2">
                <Link href=""><a href="" className="text-white text-sm hover:text-blue-400 hover:underline">Feature</a></Link>
              </li>
              <li className="mt-2">
                <Link href=""><a href="" className="text-white text-sm hover:text-blue-400 hover:underline">Dukungan</a></Link>
              </li>
              <li className="mt-2">
                <Link href=""><a href="" className="text-white text-sm hover:text-blue-400 hover:underline">Partners</a></Link>
              </li>
            </ul>
          </div>

          <div className="w-1/6">
            <h6 className="text-white text-lg">Our Contact</h6>
            <p className="mt-4 text-white-600 leading-loose text-sm">
              Surapati Core Blok L22 <br/>
              Pasirlayung, Kota Bandung <br/>
              +62 853 2002 3301
            </p>
          </div>
          <div className="w-2/6">
            <h6 className="text-white">Keep in Touch</h6>
            <p className="mt-4 text-blue-200">
              Kirim Email untuk Update Berita
            </p>
            <form onSubmit={submit}>
            <input type="text" className="bg-grey-300 ml-2 mt-2 px-6 py-3 w-1/2" placeholder="Alamat Email Anda"/>
            <button className="transition-all shadow-inner text-black px-6 py-3">Daftar</button>
          </form>
          </div>
        </div>
        <div className="border-t pt-8 mt-8 border-blue-700">
          <p className="text-blue-500 text-sm text-center">
          2020 Copyright by Nusaedu
          </p>
        </div>
    </footer>
  );
}
