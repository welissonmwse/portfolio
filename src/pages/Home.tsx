import { Type } from "../components/Type";
import FrameImg from '../assets/frame.png'

export function Home() {
  return (
    <section className="max-w-6xl py-8 m-auto h-full">
      <div className="flex justify-between items-center h-full">
        <div className="flex-1">
          <h1 className="font-raleway font-bold text-white text-5xl">
            Olá!{" "}
            <span className="animate-wave inline-block" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>

          <h1 className="font-raleway font-bold text-white text-5xl leading-[73px]">
            Eu sou
            <strong className="text-blue-light"> Welisson Silveira</strong>
          </h1>

          <div className="font-raleway font-bold text-blue-light text-5xl mt-6">
            <Type />
          </div>
        </div>

        <div style={{ paddingBottom: 20 }}>
          <img
            src={FrameImg}
            alt="home pic"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
          />
        </div>
      </div>
      {/* <Home2 /> */}
    </section>
  )
}