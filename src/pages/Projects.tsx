import CarshopImg from '../assets/carshop.png'
import GitHubBlogImg from '../assets/github-blog.png'
import CoffeeDeliveryImg from '../assets/coffe-delivery.png'
import TodoImg from '../assets/todo.png'
import DtMoneyImg from '../assets/dt-money.png'
import IgniteTimerImg from '../assets/ignite-timer.png'
import { CardProject } from '../components/CardProject'

export function Projects(){
  return (
    <section className="max-w-6xl py-8 m-auto h-full">
      <h1 className="text-blue-light font-raleway font-bold text-4xl text-center">Meus Projetos</h1>
      <div className="grid grid-cols-3 gap-8 mt-14">
        <CardProject title="Github Blog" src={GitHubBlogImg} link="https://github.com/welissonmwse/github-blog" />
        <CardProject title="DT Money" src={DtMoneyImg} link="https://github.com/welissonmwse/dt-money" />
        <CardProject title="Coffee Delivery" src={CoffeeDeliveryImg} link="https://github.com/welissonmwse/coffee-delivery" />
        <CardProject title="Ignite Timer" src={IgniteTimerImg} link="https://github.com/welissonmwse/Timer" />
        <CardProject title="ToDo List" src={TodoImg} link="https://github.com/welissonmwse/Todo-list" />
        <CardProject title="Carshop" src={CarshopImg} link="#" />
      </div>
    </section>
  )
}