import React from "react";

const Footer = (): React.ReactElement => {
  return <footer className="flex px-4 md:px-48 justify-between flex-col md:flex-row pt-12 md:pt-16 md:pb-16">
    <aside className="mx-2 md:mx-12 pb-4 md:pb-0">
      <li className="list-none flex items-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/logo.png?alt=media&token=07ca5a10-47a3-403b-ab26-84313a4d1794"
          alt="Logo"
          className="dark:invert"
          width={80}
          height={80}
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