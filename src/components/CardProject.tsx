interface CardProjectProps {
  title: string
  src: string
  link: string
}

export function CardProject({title, src, link}:CardProjectProps){
  return (
    <div className="hover:scale-110 transition-all delay-75">
      <h2 className="text-white font-raleway font-bold text-2xl p-2">{title}</h2>
      <div className="rounded-2xl overflow-hidden ">
        <img className="" src={src} alt="" />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <a className="text-white inline-block hover:brightness-95 bg-blue-light rounded-xl py-3 px-12" href={link} target="_blank">Ver projeto</a>
      </div>
    </div>
  )
}