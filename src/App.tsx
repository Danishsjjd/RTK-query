import DependentQueries from "./components/queries/DependentQueries"
import GlobalState from "./components/queries/GlobalState"
import ParallelQueries from "./components/queries/ParallelQueries"
import Pokemon from "./components/queries/Pokemon"

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
