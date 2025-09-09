'use client'
import React from "react";
import {useState} from 'react'




const Form = () => {

    const [message, setMessage] = useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = new FormData(e.target)
        const response = await fetch(e.target.action,{
            method: 'POST',
            body: data,
            headers: {
                Accept: 'application/json'
            }


        })
        const result = await response.json()
        if(!response.ok){
            setMessage(result.errors.map(error => error.message).
            join(','))
            return false
        }
        setMessage('Enviado')
    }
  return (
    <form action="https://formspree.io/f/xdovprlg"
    method="POST" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-4 w-full py-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="uppercase text-sm py-2">
            Nombre
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text" id="name" name="name" placeholder="Nombre y Apellido"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="telephone" className="uppercase text-sm py-2">
            Telefono
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="telephone" id="telephone" name="telephone" placeholder="(555) 555-5555"
          />
        </div>
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2" htmlFor="email">
          Email
        </label>
        <input
          className="border-2 rounded-lg p-3 flex border-gray-300"
          type="email" placeholder="mail@mail.com" id="email" name="email"
        />
      </div>
      
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm p-2" htmlFor="message">
          Mensaje
        </label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          rows={10} id="message" name="message"
        />
      </div>
      <button className="w-full text-gray-100 p-4 mt-4 button text-center uppercase py-3 rounded-lg bg-white font-bold text-sm " >Enviar Mensaje</button>
      
      {message && <p className="shadow-xl shadow-gray-400 rounded-xl uppercase text-center  text-gray-100 bg-gray-500 w-full p-4 mt-4">{message}</p> }
    </form>
  );
};

export default Form;
