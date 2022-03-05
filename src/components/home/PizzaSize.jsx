import { IoIosPizza as Choice1 } from "react-icons/io"
import { IoPizzaOutline as Choice2 } from "react-icons/io5"
import { GiPizzaSlice as Choice3 } from "react-icons/gi"
import { MdOutlineLocalPizza as Choice4 } from "react-icons/md"

function PizzaSize({ setSizePrice, setSizeChoice }) {
  const handleChange1 = () => {
    setSizePrice(500)
    setSizeChoice("8 inch : 500 INR")
  }

  const handleChange2 = () => {
    setSizePrice(600)
    setSizeChoice("10 inch : 600 INR")
  }

  const handleChange3 = () => {
    setSizePrice(700)
    setSizeChoice("18 inch : 700 INR")
  }

  const handleChange4 = () => {
    setSizePrice(800)
    setSizeChoice("24 inch : 800 INR")
  }

  return (
    <div className="shadow-2xl bg-white p-5 rounded-2xl">
      <div className="mb-5 text-xl font-bold">
        This is Choice of Pizza Slice:-
      </div>
      <div className="grid grid-cols-2 gap-4 font-semibold mb-5">
        <button
          onClick={handleChange1}
          className="flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-xl hover:bg-yellow-400 justify-center items-center choice1 bg-yellow-700 h-auto p-2 cursor-pointer font-bold"
        >
          <Choice1 size={45} color="white" /> INR 500
          <p>8" SMOL</p>
        </button>
        <button
          onClick={handleChange2}
          className="flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-xl hover:bg-yellow-400 justify-center items-center choice2 bg-red-700 h-auto p-2 cursor-pointer font-bold"
        >
          <Choice2 size={45} color="white" /> INR 600
          <p>10" SMOL+</p>
        </button>
        <button
          onClick={handleChange3}
          className="flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-xl hover:bg-yellow-400 justify-center items-center choice3 bg-blue-700 h-auto p-2 cursor-pointer font-bold"
        >
          <Choice3 size={45} color="white" /> INR 700
          <p>18" MAX</p>
        </button>
        <button
          onClick={handleChange4}
          className="flex flex-col rounded-lg drop-shadow-md hover:drop-shadow-xl hover:bg-yellow-400 justify-center items-center choice4 bg-purple-700 h-auto p-2 cursor-pointer font-bold"
        >
          <Choice4 size={45} color="white" /> INR 800
          <p>24" GIANT</p>
        </button>
      </div>
    </div>
  )
}

export default PizzaSize
