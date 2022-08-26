import { ReactNode } from "react"

interface CardToolProps {
  title: string
  children: ReactNode
}

export function CardTool({title, children}: CardToolProps){
  return (
    <div>
      <h4 className="text-center text-white text-lg font-bold font-raleway mb-5">{title}</h4>
      <div className="flex items-center justify-center text-white p-9 border-4 border-solid border-blue-light rounded-[20px]">
        {children}
      </div>
    </div>
  )
}