import React from "react";

const About = () => {
  return <section className="about flex w-full md:px-32 px-4 md:py-24 flex-col">
    <article className="flex md:mx-24 md:pb-20 md:flex-row flex-col mt-8 md:mt-0">
      <img
        src='https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/coffee.jpg?alt=media&token=84f309f0-d389-45b5-8872-39e05536bdc2'
        alt="Café"
        className="rounded-3xl"
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
        <img
          src='https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/icon-origin-local.png?alt=media&token=91822739-9903-4710-9489-14d6db886c60'
          alt="origen local"
          className="rounded-3xl mx-auto md:mr-4 h-20 md:h-24 w-20 md:w-24 mb-4"
        />
        <span>
          <h3 style={{color: '#EE8E11'}} className="text-md md:text-lg font-semibold text-center md:text-left mb-4 mt-4">Origen Local</h3>
          <p className="text-xs md:text-sm text-center md:text-left  px-[4%]">Priorizamos los productos locales, colaborando estrechamente con agricultores del país para garantizar la frescura y calidad en cada taza.</p>
        </span>
      </aside>
      <aside className="flex flex-col md:flex-row">
        <img
          src='https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/icon-holistic-approach.png?alt=media&token=4c0dc58b-e815-484a-afd8-c77ddf41cef3'
          alt="Origen histórico"
          className="rounded-3xl mx-auto md:mr-4 h-20 md:h-24 w-20 md:w-24 mb-4"
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
          <img
            src='https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/product-1.jpg?alt=media&token=ec65700e-570a-4e5d-b54e-911cb299ab47'
            alt="Servicios"
            className="rounded-3xl mx-auto"
            width={300}
            height={300}
          />
          <p className="text-center text-sm mt-2 p-2"><strong>Cafetería especializada: </strong>Probá nuestra panedería fresca y emparejala con una bebidita caliente</p>
        </article>
        <article className="md:w-72 md:mx-24">
          <img
            src='https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/product-2.jpg?alt=media&token=d8a5832a-f5cc-49ff-a54e-b74fb01f89bf'
            alt="Servicios"
            className="rounded-3xl mx-auto"
            width={300}
            height={300}
          />
          <p className="text-center text-sm mt-2 p-2"><strong>¿Tenés calor?:</strong> Refrescate con nuestra linea de productos heladitos</p>
        </article>
        <article className="md:w-72">
          <img
            src='https://firebasestorage.googleapis.com/v0/b/cafedelicia-1f909.appspot.com/o/product-3.jpg?alt=media&token=20b58c42-32a0-4d2e-8399-afc7da855999'
            alt="Servicios"
            className="rounded-3xl mx-auto"
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