import AvatarImg from '../assets/avatar.png'
import FrameAbout from '../assets/frameAbout.png'
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

            Tenho experiência nas linguagens: HTML, CSS e Javascript<br />

            Minhas áreas de interesse são a construção de novas tecnologias e aplicações para a Web.<br />

            Sempre que possível, me arrisco no desenvolvimento de APIs com Node.js e aplicações com Frameworks como React.js e Ionic.
          </p>
        </div>
        <img className="min-w-fit" src={FrameAbout} alt=""/>
        
      </div>
    </main>
  )
}