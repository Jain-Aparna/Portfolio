import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
           Hello ! MySelf Aparna Jain persuing my B.E. degree from MBM University, Jodhpur in Computer Science and Engineering Branch. Currently I am in forth year. 
        </p>

        <br/>

        <p className="text-xl">
            Basically I am a mern stack developer having knowledge of HTML, CSS, JavaScript, TailwindCSS, React Js., Node Js, Express Js , MongoDB. I have made many projects using these technoloies which you can see on my git-hub profile. 
        </p>
      </div>

    </div>
  )
}

export default About
