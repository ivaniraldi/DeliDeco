import NavBar from "../NavBar/NavBar";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";
import gmail from "../../assets/gmail.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function validate(input) {
  let errors = {}; //genero un objeto errores
  if (!input.name) {
    //input es mi estado local, si en mi estadolocal.name no hay nada,
    errors.name = "Name is required"; //entonces en mi objeto.name pongo un string que diga se requiere un nombre
  } else if (!input.email) {
    errors.email = "Email is required";
  } else if (!input.message) {
    errors.message = "Message is required";
  }
  return errors;
}

function Contact() {
  const form = useRef();
  const [input, setInput] = useState({
    name: "",
    lastName: "xxxxx",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      errors.name !== undefined ||
      errors.email !== undefined ||
      errors.message !== undefined
    ) {
      document.getElementById("DoNotSubmit");
      return alert("Please complete the fields with valid data");
    }

    emailjs
      .sendForm(
        "service_urynada",
        "template_4jfhbhf",
        form.current,
        "-4OVkyttlIm08uYsA"
      )
      .then(
        (result) => {
          Swal.fire(
            "Gracias!",
            "Generalmente suelo responder en las proximas 24hs habiles.!",
            "success"
          );
          setInput({
            name: "",
            lastName: "xxxxx",
            email: "",
            message: "",
          });
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <NavBar></NavBar>
      <motion.div
        style={{width:"full"}}
        initial={{ scale: 0.8, opacity: 1 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex mt-6"
      >
        <div className="relative lg:flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0 ">
          <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
            <div className="relative">
              <p className="mb-2 font-medium text-gray-700 uppercase">
                Work smarter
              </p>
              <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
                ¡Celebra en grande, decora con estilo!
              </h2>
            </div>
            <p className="text-2xl text-gray-700">
              ¡Transforma tus fiestas en momentos mágicos con nuestras
              decoraciones únicas!
            </p>
            <div className="w-full flex justify-around">
              <Link to="https://web.whatsapp.com/" target="blank_">
                <img className="w-12" src={whatsapp} alt="" />
              </Link>
              <Link
                to="https://www.instagram.com/dalidecoshop/"
                target="blank_"
              >
                <img className="w-12" src={instagram} alt="" />
              </Link>
              <Link to="https://mail.google.com/mail" target="blank_">
                <img className="w-12" src={gmail} alt="" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24 tails-selected-element">
          <h4 className="w-full text-3xl font-bold">Contactame por mail!</h4>
          <p className="text-lg text-gray-500">
            puedes dejar tu mensaje aqui abajo y enviarlo directamente a mi
            casilla electronica, no olvides colocar tu mail asi podre
            responderte!
          </p>
          <div className="relative w-full mt-2 space-y-8">
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative">
                <input
                  type="text"
                  className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                  data-primary="blue-600"
                  value={input.name}
                  onChange={(e) => handleChange(e)}
                  name="name"
                  id="name"
                  data-rounded="rounded-lg"
                  placeholder="Ingresa tu nombre"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  className="block w-full px-4 py-4 my-2 text-xl placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                  data-primary="blue-600"
                  id="email"
                  name="email"
                  data-rounded="rounded-lg"
                  placeholder="Ingresa tu mail"
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="relative">
                <textarea
                  type="Text"
                  className="block w-full px-4 py-4 my-2 text-xl placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                  data-primary="blue-600"
                  data-rounded="rounded-lg"
                  onChange={(e) => handleChange(e)}
                  value={input.message}
                  name="message"
                  id="message"
                  placeholder="Escribe tu mensaje..."
                />
              </div>
              <div className="relative">
                <button
                  value="send"
                  type="submit"
                  className="inline-block w-full px-5 py-4 text-2xl font-medium text-center transition duration-200  rounded-lg ease"
                  data-primary="blue-600"
                  data-rounded="rounded-lg"
                  style={{
                    background: "#efd4d1",
                  }}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
