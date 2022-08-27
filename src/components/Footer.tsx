import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer(){
  return (
    <footer className="bg-blue-dark">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl py-6 px-4 m-auto">
        <p className="text-white font-raleway font-light text-base">
          Projetado e desenvolvido por Welisson 
        </p>
        <p className="text-white font-raleway font-light text-base">Copyright © 2022</p>
        <div className="flex items-center gap-4 ">
          <a className="hover:brightness-75 text-blue-light" 
            href="https://www.linkedin.com/in/welisson-silveira" 
            target="_blanck"
          >
            <FaLinkedin size={33} />
          </a>
          <a className="hover:brightness-75 text-blue-light" 
            href="https://github.com/welissonmwse" 
            target="_blanck"
          >
            <FaGithub size={33} />
          </a>
          <a className="hover:brightness-75 text-blue-light" 
            href="https://api.whatsapp.com/send?phone=61982949804" 
            target="_blanck"
          >
            <FaWhatsapp size={33} />
          </a>
        </div>
      </div>
    </footer>
  )
}