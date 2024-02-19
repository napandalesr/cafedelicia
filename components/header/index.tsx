'use client'
import Link from "next/link";
import { usePathname  } from "next/navigation";
import React, { useState } from "react";

const Header = (): React.ReactElement => {
  const [showMenu, setShowMEnu] = useState(false);
  const pathname = usePathname();
  return <header>
    <section className="absolute text-white z-10 md:w-1/2 md:my-auto top-10 md:translate-x-1/2 backdrop-blur-sm bg-black/30 justify-between py-2 px-10 items-center mx-[10%] md:mx-[0px] rounded-3xl flex">
      <li className="list-none flex mr-[20vh] md:mr-[0px]">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/logo.png?alt=media&token=07ca5a10-47a3-403b-ab26-84313a4d1794"
          alt="Logo"
          className="dark:invert"
          width={44}
          height={44}
        />
        <strong className="py-3 px-1 md:pl-8">Café</strong>
        <span className="text-header py-3">delicia</span>
      </li>
      <svg onClick={()=>{setShowMEnu(true)}} className="icon-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={30}><path fill="#FAFAFA" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
      <ul className="flex menu-desktop">
        <li className="p-1"><Link href="/home" className={!pathname.includes('home') ? 'text-[#A3A3A3]' : ''}>Inicio</Link></li>
        <li className="p-1"><Link href="/contact" className={!pathname.includes('contact') ? 'text-[#A3A3A3]' : ''}>Contacto</Link></li>
      </ul>
    </section>
    <ul className={`flex menu-mobile absolute h-screen left-0 top-0 w-full bg-white ${!showMenu && 'translate-x-[-100%]'} transition duration-200 ease-in-out z-10 text-center bg-[#fff4e5]`}>
      <li className="absolute right-4 top-4"><button onClick={() => {setShowMEnu(false)}}>X</button></li>
      <li className="pt-8 pb-2 border-b-2 border-[#F9E49F]"><Link href="/home" onClick={() => {setShowMEnu(false)}} className={!pathname.includes('home') ? 'text-[#A3A3A3]' : ''}>Inicio</Link></li>
      <li className="p-2 border-b-2 border-[#F9E49F]"><Link href="/contact" onClick={() => {setShowMEnu(false)}} className={!pathname.includes('contact') ? 'text-[#A3A3A3]' : ''}>Contacto</Link></li>
    </ul>
  </header>;
}

export default Header;