import { useState, useEffect } from "react"

function PriceDisplay({ sizePrice, toppingsPrice, sizeChoice, toppingChoice }) {
  const [total, setTotal] = useState("This shows the total price in")

  useEffect(() => {
    setTotal(sizePrice + toppingsPrice + " INR")
  }, [sizePrice, toppingsPrice])

  return (
    <div className="shadow-2xl bg-white p-7 rounded-2xl h-auto">
      <div className="bg-gray-200 p-2 h-10">{total}</div>
      {/* <button className="mt-5 bg-slate-800 p-3 rounded-md font-bold text-white text-lg hover:bg-gray-500">
        Calculate
      </button> */}
      <div className="flex flex-col bg-gray-200 mt-10 p-2 h-20">
        <div className="mb-3">{sizeChoice}</div>
        <div>{toppingChoice}</div>
      </div>
    </div>
  )
}

export default PriceDisplay
