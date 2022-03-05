import { GiFullPizza as Pizza } from "react-icons/gi"

function Footer() {
  return (
    <div className="flex h-full p-5 bg-yellow-600">
      <div className="flex w-1/3 justify-around">
        <div>
          <Pizza size={150} />
        </div>
        <div className="nameDiv p-10">Pizzarriba</div>
      </div>
      <div className="flex w-2/3 justify-around items-center">
        <div>Links</div>
        <div>Contact Us</div>
      </div>
    </div>
  )
}

export default Footer
