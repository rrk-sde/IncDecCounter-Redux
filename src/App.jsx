import Counter from "./components/Counter"
import DecrementButton from "./components/DecrementButton"
import IncrementButton from "./components/IncrementButton"


function App() {

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Counter />
      <div className="flex gap-4 ml-4 px-8 font-serif text-3xl bg-blue-600 text-white">
        <DecrementButton />
        <IncrementButton />
      </div>
    </div>
  )
}

export default App
