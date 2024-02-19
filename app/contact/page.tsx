'use client'
import React, { useCallback, useState } from "react";
import { ReCaptcha, ReCaptchaProvider, useReCaptcha } from "next-recaptcha-v3";

const Contact = () => {
  const classInput = "border-solid rounded-md border-2 border-[#301C03] placeholder-primary text-xs px-4 py-2 m-2 bg-transparent";
  const { executeRecaptcha } = useReCaptcha();
  const [name, setName] = useState("");

  const handleSubmit = useCallback(
    async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      // Generate ReCaptcha token
      const token = await executeRecaptcha("form_submit");
    },
    [executeRecaptcha],
  );
  return <main className="contact flex justify-center">
    <ReCaptchaProvider  reCaptchaKey={"6LfUjXcpAAAAACSLbuJZb8hZHnNJbsweJBhgxUV4"}>
    <section className="mt-32 md:mt-48 flex justify-center content-center flex-col md:flex-row w-full px-8">
      <form onSubmit={handleSubmit} className="flex md:mr-24 md:mb-28 flex-col w-full md:w-96">
        <h3 className="mt-4 mb-4 md:mt-0  text-4xl md:text-5xl font-semibold w-24 leading-normal">¿Querés hablar?</h3>
        <input className={classInput} type="text" placeholder="Tu nombre" />
        <input className={classInput} type="text" placeholder="Tu correo"/>
        <input className={classInput} type="text" placeholder="Tu teléfono" />
        <textarea className={classInput} placeholder="¿Un mensaje?"/>
        <ReCaptcha onValidate={() => {}} action="form_submit" />
        <button  type="submit" className="my-4 border-solid rounded-xl border-[1px] border-[#301C03] text-xs px-4 py-1 w-min m-auto">¡Háblanos!</button>
      </form>
      <span>
        <iframe className="rounded-3xl w-[300px] h-[250px] md:w-[400px] md:h-[350px] mb-24" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63719.909615985416!2d-76.52406660434784!3d3.4721684485608306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smaps!5e0!3m2!1ses-419!2sco!4v1708195559976!5m2!1ses-419!2sco" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </span>
    </section>
    </ReCaptchaProvider>
  </main>
}

export default Contact;