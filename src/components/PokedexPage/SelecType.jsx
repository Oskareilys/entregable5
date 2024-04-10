import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import '../../style/PokedexPage.css' 

const SelecType = ({setTypeSelected}) => {

const url = `https://pokeapi.co/api/v2/type`
const [types, getTypes] = useFetch(url)

useEffect(() => {
    getTypes()
}, [])

const handleChange = e => {
    setTypeSelected(e.target.value)
}

  return (
    <select className="select__pokemons" onChange={handleChange}>
        <option value='All Pokemons'>All Pokemons</option>
        {
            types?.results.map(typeInfo => (
                <option key={typeInfo.url} value={typeInfo.url}>{typeInfo.name}
                </option>
            ))
        }
    </select>
  )
}

export default SelecType
