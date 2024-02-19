'use client'
import React from "react";

const Banner = () => {
  return <section className='banner brightness-40 from-current text-neutral-50 bg-[180%_auto] md:bg-[100%_auto] '>
    <div className="gradient justify-center content-center flex-wrap flex h-full text-center font-normal flex-col pt-10">
      <p className="text-2xl md:text-5xl max-w-64 text-center md:max-w-2xl leading-snug mt-24 mx-auto">Disfrutá del sabor auténtico en <span style={{color: '#EE8E11'}}><strong>Café </strong><span className="text-header">delicia</span></span></p>
      <p className="max-w-2xl text-md md:text-lg p-4 md:p-1">Café Delicia es una experiencia única con café de alta calidad y un ambiente parchado para todos. !Vení y disfruta de un momento de delicia con nosotros¡</p>
      <p className="mt-20">Conocenos</p>
      <a href="#" onClick={() => { window.scroll({top: 680, behavior: "smooth"})}} className="icon-vector">
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#FAFAFA" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="#FAFAFA" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      </a>
    </div>
  </section>
};

export default Banner;