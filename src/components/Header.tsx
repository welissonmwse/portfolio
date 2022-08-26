import { Link } from "./Link";

export function Header(){
  return (
    <header className="backdrop-blur-sm bg-white/5">
      <nav className="max-w-6xl m-auto">
        <div className="container flex flex-wrap justify-between md:justify-end items-center mx-auto">
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about" >Sobre</Link>
              </li>
              <li>
                <Link to="/projects" >Projetos</Link>
              </li>
              <li>
                <Link to="/contact" >Contato</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}