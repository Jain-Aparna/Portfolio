import React from 'react'
import html from '../assests/html.png'
import css from '../assests/css.png'
import JavaScript from '../assests/javascript.png'
import Tailwind from '../assests/tailwind.jpeg'
import react from '../assests/react.png'
import Node from '../assests/node.png'
import MongoDB from '../assests/mongodb.png'

const Experience = () => {

    const experience =[
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:JavaScript,
            title:"JavaScript",
            style:"shadow-yellow-500"
        },
        {
            id:4,
            src:Tailwind,
            title:"Tailwind",
            style:"shadow-sky-400"
        },
        {
            id:5,
            src:react,
            title:"React Js",
            style:"shadow-blue-600"
        },
        {
            id:6,
            src:Node,
            title:"Node Js",
            style:"shadow-green-600"
        },
        {
            id:7,
            src:MongoDB,
            title:"MongDB",
            style:"shadow-green-500"
        },
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full md:h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pt-14" >
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
            <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {
                experience.map(({id, src, title, style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="error" className="w-20 mx-auto" />
                    <p className="mt-4">{title}</p>
                </div>
                ))
            }
           
        </div>
      </div>
    </div>
  )
}

export default Experience
