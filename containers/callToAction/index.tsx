import React from "react";

const CallToAction = () => {
  return <section className="call-to-action flex justify-center content-center flex-wrap md:h-[750px] px-4 py-8 relative">
    <img
      src='https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/contact1.jpg?alt=media&token=7fd2aea3-4432-4d5f-aef8-5a5e7c68e496'
      alt="Instalaciones"
      className="rounded-3xl h-[280px] md:h-min w-[200px] md:w-[420px] absolute md:static top-8 left-4"
    />
    <aside className="md:ml-8 text-center md:text-left pt-48 md:pt-0 mt-48 md:mt-0">
      <h4 className="text-5xl font-semibold mt-8 mb-4">¡Caénos!</h4>
      <p className="text-xs">Estamos en el barrio Granada, al lado de Container Park y diagonal a 1975</p>
      <button className="my-8 border-solid rounded-2xl border-2 border-[#5F3907] text-xs px-4 py-1">Contáctanos</button>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/contact2.jpg?alt=media&token=35733326-209a-4410-8265-8035daeb519b'
        alt="Instalaciones"
        className="rounded-3xl object-none object-[40%_90%] w-[200px] md:w-[600px] h-[280px] md:h-[480px] absolute md:static top-36 left-40"
        width={650}
      />
    </aside>
  </section>;
}

export default CallToAction;