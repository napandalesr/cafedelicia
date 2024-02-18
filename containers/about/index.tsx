import React from "react";
import Image from "next/image";

import imgCoffe from '../../public/coffee.jpg';
import iconOriginLocal from '../../public/icon-origin-local.png';
import iconHolistic from '../../public/icon-holistic-approach.png';
import product3 from '../../public/product-3.jpg';

const About = () => {
  return <section className="about flex w-full md:px-32 px-4 md:py-24 flex-col">
    <article className="flex md:mx-24 md:pb-20 md:flex-row flex-col mt-8 md:mt-0">
      <Image
        src={imgCoffe}
        alt="Café"
        className="rounded-3xl"
        priority
        width={350}
      />
      <span className="md:pl-24 flex flex-col">
        <h1 className="text-xl md:text-2xl md:mt-24 mb-4 pt-10 text-center md:text-left"><strong>Somos Café Delicia</strong></h1>
        <p className="text-center md:text-left text-xs px-[4%]">Una marca caleña y comprometida con ofrecerte una experiencia auténtica y acogedora. Calidosos, auténticos y amables en todo lo que hacemos. Buscamos crear momentos de 
          verdadera delicia para todos con nuestra selección de cafés locales de primera y platos para calmarte el hambre. Nuestro enfoque cálido y amistoso refleja nuestro 
          compromiso con tu satisfacción y el bienestar de los caleños.</p>
      </span>
    </article>
    <aside className="flex md:mx-24 flex-col md:flex-row">
      <aside className="flex mb-10 md:mr-10 flex-col md:flex-row mt-12 md:mt-1">
        <Image
          src={iconOriginLocal}
          alt="origen local"
          className="rounded-3xl mx-auto md:mr-4 h-20 md:h-24 w-20 md:w-24 mb-4"
          priority
        />
        <span>
          <h3 style={{color: '#EE8E11'}} className="text-md md:text-lg font-semibold text-center md:text-left mb-4 mt-4">Origen Local</h3>
          <p className="text-xs md:text-sm text-center md:text-left  px-[4%]">Priorizamos los productos locales, colaborando estrechamente con agricultores del país para garantizar la frescura y calidad en cada taza.</p>
        </span>
      </aside>
      <aside className="flex flex-col md:flex-row">
        <Image
          src={iconHolistic}
          alt="Origen histórico"
          className="rounded-3xl mx-auto md:mr-4 h-20 md:h-24 w-20 md:w-24 mb-4"
          priority
          width={100}
        />
        <span>
          <h3 style={{color: '#EE8E11'}} className="text-md md:text-lg font-semibold text-center md:text-left">Enfoque Holístico</h3>
          <p className="text-xs md:text-sm text-center md:text-left  px-[4%]">Consideramos cada aspecto del proceso de producción con cuidado y respeto hacia la naturaleza, promoviendo prácticas sostenibles en cada etapa.</p>
        </span>
      </aside>
    </aside>
    <section className="md:mx-24">
      <h2 className="font-bold text-3xl md:text-4xl my-8 text-center">Nuestros Servicios</h2>
      <aside className="flex flex-col md:flex-row">
        <article className="md:w-72">
          <Image
            src='/product-1.jpg'
            alt="Servicios"
            className="rounded-3xl mx-auto"
            priority
            width={300}
            height={300}
          />
          <p className="text-center text-sm mt-2 p-2"><strong>Cafetería especializada: </strong>Probá nuestra panedería fresca y emparejala con una bebidita caliente</p>
        </article>
        <article className="md:w-72 md:mx-24">
          <Image
            src='/product-2.jpg'
            alt="Servicios"
            className="rounded-3xl mx-auto"
            priority
            width={300}
            height={300}
          />
          <p className="text-center text-sm mt-2 p-2"><strong>¿Tenés calor?:</strong> Refrescate con nuestra linea de productos heladitos</p>
        </article>
        <article className="md:w-72">
          <Image
            src={product3}
            alt="Servicios"
            className="rounded-3xl mx-auto"
            priority
            width={300}
            height={300}
          />
          <p className="text-center text-sm mt-2 p-2"><strong>Bistro pa’ esa hambre:</strong> A cualquier hora del día, tenemos antojitos que te dan energía para seguir el día</p>
        </article>
      </aside>
    </section>
  </section>;
};

export default About; 