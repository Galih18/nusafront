import React from "react";
import propTypes from "prop-types";
import {useRouter} from "next/router";
import Link  from "next/link";
import Logo from "public/images/nusalogo.svg";


export default function Header({onLight}) {
  const linkColor = onLight ? "text-gray-900" : "text-white"

  const router = useRouter()

  const linkCTA = router.pathname.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register` :
  `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`

  const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk"
  
  return (
    <header className="flex justify-between items-center">
      <div style={{height:80}}>
        <Logo className="on-dark ml-20"></Logo>
      </div>
      <ul className="flex mr-20">
        <li>
          <Link href="/">
            <a className={[
              linkColor, 
              "text-white text-lg px-6 py-3 mt-2 font-medium hover:text-blue-300"
              ].join(" ")}
              >
                Home
                </a>
                </Link>
        </li>
        <li>
          <Link href="/">
            <a className={[
              linkColor, 
              "text-white text-lg px-6 py-3 mt-2 font-medium hover:text-blue-300"
              ].join(" ")}
              >
                Harga
                </a>
                </Link>
        </li>
        <li>
          <Link href="/">
            <a className={[
              linkColor, 
              "text-white text-lg px-6 py-3 mt-2 font-medium hover:text-blue-300"
              ].join(" ")}
              >
                Fitur
                </a>
                </Link>
        </li>
        <li>
          <Link href="/">
            <a className={[
              linkColor, 
              "text-white text-lg px-6 py-3 mt-2 font-medium hover:text-blue-300"
              ].join(" ")}
              >
                Partners
                </a>
                </Link>
        </li>
        <li>
          
            <a 
            target="_blank" rel="noopener noereferrer" href={linkCTA}
            className="bg-indigo-800 hover:bg-indigo-600 transition-all duration-200 rounded-sm text-white hover:text-teal-300 text-lg px-5 py-3 ml-6"
              >
                {textCTA}
                </a>
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight:propTypes.bool,
}
