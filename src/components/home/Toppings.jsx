import { IoIosPizza as Choice1 } from "react-icons/io"
import { IoPizzaOutline as Choice2 } from "react-icons/io5"
import { GiPizzaSlice as Choice3 } from "react-icons/gi"
import { MdOutlineLocalPizza as Choice4 } from "react-icons/md"

function Toppings({ setToppingsPrice, setToppingChoice }) {
  const handleChange1 = () => {
    setToppingsPrice(200)
    setToppingChoice("Paporoni: 200 INR")
  }

  const handleChange2 = () => {
    setToppingsPrice(250)
    setToppingChoice("B-B-Queue: 250 INR")
  }

  const handleChange3 = () => {
    setToppingsPrice(300)
    setToppingChoice("Aneons: 300 INR")
  }

  const handleChange4 = () => {
    setToppingsPrice(350)
    setToppingChoice("Zalami: 350 INR")
  }

  return (
    <div className="shadow-2xl bg-white p-5 mt-5 rounded-2xl">
      <div className="mb-5 text-xl font-bold">
        This is Choice of Pizza Toppings:-
      </div>
      <div className="grid grid-cols-2 gap-4 font-semibold mb-5">
        <button
          onClick={handleChange1}
          className="flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-xl hover:bg-yellow-400 justify-center items-center choice1 bg-yellow-700 h-auto p-2 cursor-pointer font-bold"
        >
          <Choice1 size={45} color="white" /> INR 200
          <p>Paporoni</p>
        </button>
        <button
          onClick={handleChange2}
          className="flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-xl hover:bg-yellow-400 justify-center items-center choice2 bg-red-700 h-auto p-2 cursor-pointer font-bold"
        >
          <Choice2 size={45} color="white" /> INR 250
          <p>B-B-Queue</p>
        </button>
        <button
          onClick={handleChange3}
          className="flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-xl hover:bg-yellow-400 justify-center items-center choice3 bg-blue-700 h-auto p-2 cursor-pointer font-bold"
        >
          <Choice3 size={45} color="white" /> INR 300
          <p>Aneons</p>
        </button>
        <button
          onClick={handleChange4}
          className="flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-xl hover:bg-yellow-400 justify-center items-center choice4 bg-purple-700 h-auto p-2 cursor-pointer font-bold"
        >
          <Choice4 size={45} color="white" /> INR 350
          <p>Zalami</p>
        </button>
      </div>
    </div>
  )
}

export default Toppings
