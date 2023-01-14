import DependentQueries from "./components/DependentQueries"
import GlobalState from "./components/GlobalState"
import ParallelQueries from "./components/ParallelQueries"
import Pokemon from "./components/Pokemon"

function App() {
  return (
    <>
      <GlobalState />
      <Pokemon />
      <ParallelQueries />
      <DependentQueries />
    </>
  )
}

export default App
