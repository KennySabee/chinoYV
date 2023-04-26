import React from 'react'

const TestimonioCard = ({title, info, name, profession,img}) => {
  return (
    <figure className="flex flex-col items-center justify-center p-8 text-center shadow-sm md:shadow-lg shadow-gray-400 rounded-xl   ">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                {title}
              </h3>
              <p className="my-4">
                {info}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="rounded-full w-9 h-9"
                src={img}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium  text-left">
                <div>{name}</div>
                <div className="text-sm text-gray-500 ">
                  {profession}
                </div>
              </div>
            </figcaption>
          </figure>
  )
}

export default TestimonioCard