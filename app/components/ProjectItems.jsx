// app/components/ProjectItems.jsx
'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProjectItems = ({ img, title, useWith, url, description, features }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
    >
      {/* Imagen con overlay */}
      <div className="relative group overflow-hidden">
        <Image 
          src={img} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
              {useWith}
            </span>
          </div>
          
          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            {description}
          </p>

          {/* Características */}
          {features && (
            <ul className="mb-6 space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-700">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Botón */}
        <Link 
          href={url}
          target="_blank"
          className="inline-block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Más Información
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectItems;