import React, { useState } from 'react'
import foodweb from '../assests/Restaurant.png';
import mountain from '../assests/Mountain.png';
import dreamy from '../assests/Dreamy Dwellings.png';
import Education from '../assests/Education.png';
import ToDoList from '../assests/ToDoList.png'

const Portfolio = () => {

    const portfolio=[
        {
            id:1,
            src:dreamy,
            name:"Dreamy Dwelling",
            CodeLink:"https://github.com/Jain-Aparna/Dreamy-Dwellings"
        },
        {
            id:2,
            src:mountain,
            name:"Basic Template",
            CodeLink:"https://github.com/Jain-Aparna/some-basic-templates"
        },
        {
            id:3,
            src:foodweb,
            name:"Food restaurant",
            CodeLink:"https://github.com/Jain-Aparna/food-restaurant"
        },
        {
            id:4,
            src:Education,
            name:"Education ",
            CodeLink:"https://github.com/Jain-Aparna/some-basic-templates"
        },
        {
            id:5,
            src:ToDoList,
            name:"ToDoList",
            CodeLink:"https://github.com/Jain-Aparna/ToDoList"
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check Out some of my work right here</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
            portfolio.map(({id, src, CodeLink, name})=>(
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="error" className="rounded-md duration-200 hover:scale-105" />
                <div className="flex items-center justify-center">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >{name}</button>
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(CodeLink, '_blank')}> Code</button>
                </div>
            </div>
            ))
        }
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio
