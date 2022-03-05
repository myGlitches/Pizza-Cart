import { useState } from "react"
import PizzaSize from "./PizzaSize"
import PriceDisplay from "./PriceDisplay"
import Toppings from "./Toppings"

function Home() {
  const [sizePrice, setSizePrice] = useState("")
  const [toppingsPrice, setToppingsPrice] = useState("")
  const [sizeChoice, setSizeChoice] = useState("")
  const [toppingChoice, setToppingChoice] = useState("")

  return (
    <div className="grid grid-cols-2 h-full p-10 bg-yellow-200">
      <div className="flex flex-col h-auto w-full p-5">
        <PizzaSize setSizePrice={setSizePrice} setSizeChoice={setSizeChoice} />
        <Toppings
          setToppingsPrice={setToppingsPrice}
          setToppingChoice={setToppingChoice}
        />
      </div>
      <div className="w-full p-5">
        <PriceDisplay
          sizePrice={sizePrice}
          toppingsPrice={toppingsPrice}
          sizeChoice={sizeChoice}
          toppingChoice={toppingChoice}
        />
      </div>
    </div>
  )
}

export default Home
