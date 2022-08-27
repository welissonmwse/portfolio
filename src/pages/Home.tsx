import { Type } from "../components/Type";
import FrameImg from '../assets/frame.png'

export function Home() {
  return (
    <section className="max-w-6xl py-8 px-4 m-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center h-full">
        <div className="flex-1">
          <h1 className="font-raleway font-bold text-white lg:text-5xl text-3xl">
            Olá!{" "}
            <span className="animate-wave inline-block" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="font-raleway font-bold text-white lg:text-5xl text-3xl lg:leading-[73px]">
            Eu sou
            <strong className="text-blue-light"> Welisson Silveira</strong>
          </h1>

          <div className="font-raleway font-bold text-blue-light lg:text-5xl text-3xl mt-6">
            <Type />
          </div>
        </div>

        <div>
          <img
            src={FrameImg}
            alt="home pic"
            className="lg:min-w-fit mt-6 lg:mt-0 md:w-96"
          />
        </div>
      </div>
      {/* <Home2 /> */}
    </section>
  )
}