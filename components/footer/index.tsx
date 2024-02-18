import Image from "next/image";
import React from "react";

const Footer = (): React.ReactElement => {
  return <footer className="flex px-4 md:px-48 justify-between flex-col md:flex-row pt-12 md:pt-16 md:pb-16">
    <aside className="mx-2 md:mx-12 pb-4 md:pb-0">
      <li className="list-none flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          className="dark:invert"
          width={80}
          height={80}
          priority
        />
        <strong className="ml-4">Café</strong>
        <span className="text-header ml-1">delicia</span>
      </li>
      <p className="text-3xl font-bold max-w-96 pr-4 mt-4">
      El secreto de un café rico es  tomarselo entre <span className="text-header">amigos</span>
      </p>
    </aside>
    <ul className="mr-20 leading-8 md:leading-6">
      <li>Nosotros</li>
      <li>Café</li>
      <li>Panadería</li>
      <li>Bistro</li>
      <li>Testimonio</li>
      <li>Historia</li>
      <li>Contacto</li>
    </ul>
  </footer>;
}

export default Footer;