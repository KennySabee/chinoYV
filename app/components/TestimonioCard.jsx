// app/components/TestimonioCard.jsx
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TestimonioCard = ({title, info, name, profession, img, rating}) => {
  return (
    <motion.figure 
      whileHover={{ y: -5 }}
      className="flex flex-col items-center justify-center p-6 md:p-8 text-center bg-white shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 h-full"
    >
      <blockquote className="max-w-2xl mx-auto mb-4 text-gray-600">
        {rating && <div className="mb-2">{rating}</div>}
        <h3 className="text-lg font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="my-4 text-sm md:text-base italic leading-relaxed">
          {info}
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-100">
        <div className="relative">
          <Image
            className="rounded-full w-12 h-12 object-cover"
            src={img}
            alt={`Foto de ${name}`}
            width={48}
            height={48}
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="space-y-0.5 font-medium text-left">
          <div className="font-bold text-gray-900">{name}</div>
          <div className="text-sm text-red-600 font-medium">
            {profession}
          </div>
        </div>
      </figcaption>
    </motion.figure>
  )
}

export default TestimonioCard