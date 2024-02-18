import React from "react";
import Image from "next/image";

import contact1 from '../../public/contact1.jpg';
import contact2 from '../../public/contact2.jpg';

const CallToAction = () => {
  return <section className="call-to-action flex justify-center content-center flex-wrap md:h-[750px] px-4 py-8 relative">
    <Image
      src={contact1}
      alt="Instalaciones"
      className="rounded-3xl h-[280px] md:h-min w-[200px] md:w-[420px] absolute md:static top-8 left-4"
      priority
    />
    <aside className="md:ml-8 text-center md:text-left pt-48 md:pt-0 mt-48 md:mt-0">
      <h4 className="text-5xl font-semibold mt-8 mb-4">¡Caénos!</h4>
      <p className="text-xs">Estamos en el barrio Granada, al lado de Container Park y diagonal a 1975</p>
      <button className="my-8 border-solid rounded-2xl border-2 border-[#5F3907] text-xs px-4 py-1">Contáctanos</button>
      <Image
        src={contact2}
        alt="Instalaciones"
        className="rounded-3xl object-none object-[40%_90%] w-[200px] md:w-[600px] h-[280px] md:h-[480px] absolute md:static top-36 left-40"
        priority
        width={650}
      />
    </aside>
  </section>;
}

export default CallToAction;