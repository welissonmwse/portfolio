import { useState } from "react";
import {VscHome, VscPerson} from 'react-icons/vsc'
import {MdOutlineComputer} from 'react-icons/md'
import { Link } from "./Link";

export function Header(){
  const [isMenuVisibility, setIsMenuVisibility] = useState(false)

  return (
    <header className="backdrop-blur-sm bg-white/5">
      <nav className="max-w-6xl m-auto">
        <div className="container flex flex-wrap justify-end items-center mx-auto">
          <button 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 m-4 text-sm text-blue-light rounded-lg md:hidden  focus:outline-none focus:ring-2" 
            aria-controls="navbar-default" 
            aria-expanded={isMenuVisibility}
            onClick={() => setIsMenuVisibility(!isMenuVisibility)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className={`${isMenuVisibility ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
              <li>
                <Link to="/" >
                  <VscHome size={20} />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" >
                  <VscPerson size={20} />
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/projects" >
                  <MdOutlineComputer size={20} />
                  Projetos
                </Link>
              </li>
              {/* <li>
                <Link to="/contact" >Contato</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}