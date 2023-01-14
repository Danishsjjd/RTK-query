import { useEffect } from "react"
import DependentQueries from "./components/queries/DependentQueries"
import GlobalState from "./components/queries/GlobalState"
import ParallelQueries from "./components/queries/ParallelQueries"
import Pokemon from "./components/queries/Pokemon"
import { useGetAllPostQuery } from "./store/services/api"

function App() {
  const { data } = useGetAllPostQuery()

  // we cannot use usePrefetch here
  // so, instead we use dispatch approach
  useEffect(() => {
    if (data) {
      // TODO:
      // this is not a good approach
      // because we are fetching 100 api at initial page load
      // and we already have data
      // so to make this better we have to cache this data
      data.forEach(({ id }) => {
        // dispatch(api.util.prefetch("getPost", id, { force: true }))
      })
    }
  }, [data])

  return (
    <>
      <div>
        <h1>Queries</h1>
        <GlobalState />
        <Pokemon />
        <ParallelQueries />
        <DependentQueries />
      </div>
    </>
  )
}

export default App
