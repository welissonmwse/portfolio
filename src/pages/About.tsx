import {FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaGitlab, FaHtml5, FaJs, FaLinux, FaReact, FaTrello, FaWindows} from 'react-icons/fa'
import {SiStyledcomponents, SiTailwindcss, SiTypescript, SiVisualstudiocode} from 'react-icons/si'
import AvatarImg from '../assets/avatar.png'
import FrameAbout from '../assets/frameAbout.png'
import { CardTool } from '../components/CardTool'
export function About(){
  return (
    <main className="max-w-6xl py-8 m-auto h-full">
      <div className="flex gap-16 items-center">
        <img className="img-fluid" src={AvatarImg} alt="Avatar"/>
        
        <div>
          <h1 className="md:hidden">Sobre mim</h1>
          <p className="text-2xl text-white font-bold font-raleway">
            Olá! Meu nome é Welisson Silveira, tenho 26 anos e moro em Brasília - DF. <br/> 
            Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Paulista (Unip).<br/>
            Atualmente trabalho como Desenvolvedor Frontend.
          </p>
        </div>
      </div>
      <div className="flex">
        <div>
          <p className="text-2xl text-white font-bold font-raleway">
            Venho estudando e desenvolvendo aplicações Web acerca de 3 anos.<br />

            Tenho experiência nas linguagens:<span className="text-blue-light"> HTML, CSS, Javascript e Typescript</span><br />
            Frameworks/Libs:<span className="text-blue-light"> ReactJS, NextJS</span> <br />

            Minhas áreas de interesse são a construção de novas tecnologias e aplicações para a Web.<br />
          </p>
        </div>
        <img className="min-w-fit" src={FrameAbout} alt=""/>
        
      </div>
      <div className="mt-28">
        <h2 className="text-blue-light font-raleway font-bold text-4xl text-center">Ferramentas que eu uso</h2>
        <div className="grid grid-cols-5 gap-8 mt-10">
          <CardTool title="JAVASCRIPT">
            <FaJs size={74} />
          </CardTool>
          <CardTool title="HTML">
            <FaHtml5 size={74} />
          </CardTool>
          <CardTool title="CSS">
            <FaCss3Alt size={74} />
          </CardTool>
          <CardTool title="REACT JS">
            <FaReact size={74} />
          </CardTool>
          <CardTool title="TYPESCRIPT">
            <SiTypescript size={74} />
          </CardTool>
          <CardTool title="TAILWIND CSS">
            <SiTailwindcss size={74} />
          </CardTool>
          <CardTool title="STYLED COMPONENT">
            <SiStyledcomponents size={74} />
          </CardTool>
          <CardTool title="GIT">
            <FaGitAlt size={74} />
          </CardTool>
          <CardTool title="GITHUB">
            <FaGithub size={74} />
          </CardTool>
          <CardTool title="GITLAB">
            <FaGitlab size={74} />
          </CardTool>
          <CardTool title="TRELLO">
            <FaTrello size={74} />
          </CardTool>
          <CardTool title="FIGMA">
            <FaFigma size={74} />
          </CardTool>
          <CardTool title="LINUX">
            <FaLinux size={74} />
          </CardTool>
          <CardTool title="WINDOWS">
            <FaWindows size={74} />
          </CardTool>
          <CardTool title="VS CODE">
            <SiVisualstudiocode size={74} />
          </CardTool>
        </div>
      </div>
    </main>
  )
}