import { useGetPokemonQuery } from "../store/services/pokemon"

const ParallelQueries = () => {
  const { data: pikachu, isLoading: pLoading } = useGetPokemonQuery("pikachu")

  const { data: charizard, isLoading: cLoading } =
    useGetPokemonQuery("charizard")

  console.log("pikachu Loading", pLoading, "charizard loading", cLoading)
  console.log("Parallel queries", pikachu, charizard)

  return null
}

export default ParallelQueries
