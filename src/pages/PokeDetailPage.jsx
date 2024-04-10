import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const PokeDetailPage = () => {

  const { id } = useParams()

  let idPoke= +id +0

  const [pokeId, setPokeId] = useState(idPoke)

  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`

  const [pokemon, getPokemon] = useFetch(url)


  useEffect(() => {
    getPokemon()
  }, [pokeId])
  
  //logica para pasar de pokemon
  const handlePrevPokemon = () => {
    setPokeId(pokeId === 1 ? pokeId : pokeId - 1);
  };
console.log(pokeId)
  const handleNextPokemon = () => {
     setPokeId(pokeId === 1000 ? pokeId : pokeId + 1);
  };


 // termina la logiaca para pasar de pokemon

  const [barProgress0, setBarProgress0] = useState(0)
  const [barProgress1, setBarProgress1] = useState(0)
  const [barProgress2, setBarProgress2] = useState(0)
  const [barProgress3, setBarProgress3] = useState(0)
  const [barProgress4, setBarProgress4] = useState(0)
  const [barProgress5, setBarProgress5] = useState(0)
  
  const stat0 = pokemon?.stats[0].base_stat
  const percentage0 = Math.floor((stat0 / 255) * 100)
  const handleBar0 = () => {
    setBarProgress0 (percentage0) 
  }

  const stat1 = pokemon?.stats[1].base_stat
  const percentage1 = Math.floor((stat1/ 255) * 100)
  const handleBar1 = () => {
    setBarProgress1 (percentage0) 
  }

  const stat2 = pokemon?.stats[2].base_stat
  const percentage2 = Math.floor((stat2/ 255) * 100)
  const handleBar2 = () => {
    setBarProgress2 (percentage0) 
  }

  const stat3 = pokemon?.stats[3].base_stat
  const percentage3 = Math.floor((stat3 / 255) * 100)
  const handleBar3 = () => {
    setBarProgress3 (percentage0) 
  }

  const stat4 = pokemon?.stats[4].base_stat
  const percentage4 = Math.floor((stat4 / 255) * 100)
  const handleBar4 = () => {
    setBarProgress4 (percentage0) 
  }

  const stat5 = pokemon?.stats[5].base_stat
  const percentage5 = Math.floor((stat5 / 255) * 100)
  const handleBar5 = () => {
    setBarProgress5 (percentage0) 
  }

  
  const allMoves = pokemon?.moves.map((movement) => (
  <p className='movement-all' key={movement.move.name}>
     {movement.move.name}
    </p>
  ))


  return (
    <div className="pokemon__info">
        <a  className = "atras__atras" href="#/pokedex/">&lt;</a>
        <header className="pokedex__header">
        <div className="rectangle__black"></div>
        <div className="circle-home"></div>
        <Link to='/pokedex'>
        <img className="pokedex__img__header"  src="./Pokedexheader.png" alt="" />
        </Link>
      </header>
      
      <article className="card-info">
      <header className={`card-header ${pokemon?.types[0].type.name}`}>
      <button className="card__preview" onClick={handlePrevPokemon}>
          &lt;
        </button>
        <img className="card-img-header" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        <button className="card__netx"  onClick={handleNextPokemon}>
          &gt;
        </button>
      </header>
      <div className="card-info-body">
        <section className="card-info-general">
          <div className='info-general-id'>#{pokemon?.id}</div>
            <hr className="card-info-hr" />
            <h2 className="card-info-pokemon-name">{pokemon?.name}</h2>
            <ul className="card-info-height-weight">
              <li className="height-weight">
                <span className="height-weight-span">Weight</span>
                {pokemon?.weight}
              </li>
              <li className="height-weight">
                <span className="height-weight-span">Height</span>
                {pokemon?.height}
              </li>
            </ul>
            <ul className="type-habilities-list">
              <li className="type-habilities"><span className="type-habilities-span">Type</span>
              <div className="type-habilities-pokemon">
                <div className={`type-habilities-mode ${pokemon?.types[0].type.name}`}>{pokemon?.types[0].type.name}</div> 
                {
                    pokemon?.types[1] ? (  <div className={`type-habilities-mode ${pokemon?.types[1].type.name}`}>
                        {pokemon?.types[1].type.name}
                      </div>
                      ): <></>
                  }
              </div>
              </li>
              <li className="type-habilities">
                <span className="type-habilities-span">Habilities</span>
                <div className="type-habilities-pokemon"> 
                    <div className="type-habilities-mode hability-card-info">{pokemon?.abilities[0].ability.name}</div>
                    {
                    pokemon?.types[1] ? (  <div className="type-habilities-mode hability-card-info">
                        {pokemon?.abilities.map((habil,index) => (
                          <div key ={index}> {habil.ability.name}</div>
                        ))}
                      </div>
                      ): <></>
                  }
                </div>
                </li>
            </ul>
        </section>
        <section className="stats-info">
          <hr className="stats-hr" />
          <h2 className="stats-title">Stats</h2>
          <div className="stats-info-container">
            <article className="stats-info-container">
              <header className="name-stats-info-conteiner">
                <h3 className="name-stats-info">{pokemon?.stats[0].stat.name}</h3>
                <p className="percentage-stat">{pokemon?.stats[0].base_stat}/255</p>
              </header>
              <div className="percentage-bar" id="handleBar">
                <div className="percentage-stats" id="handleBar" style={{width: `${percentage0}%`, transition: "width 500ms ease"}} ></div>
              </div>
            </article>
            <article className="stats-info-container">
              <header className="name-stats-info-conteiner">
                <h3 className="name-stats-info">{pokemon?.stats[1].stat.name}</h3>
                <p className="percentage-stat">{pokemon?.stats[1].base_stat}/255</p>
              </header>
              <div className="percentage-bar" id="handleBar">
                <div className="percentage-stats" id="handleBar" style={{width: `${percentage1}%`, transition: "width 500ms ease"}} ></div>
              </div>
            </article>
            <article className="stats-info-container">
              <header className="name-stats-info-conteiner">
                <h3 className="name-stats-info">{pokemon?.stats[2].stat.name}</h3>
                <p className="percentage-stat">{pokemon?.stats[2].base_stat}/255</p>
              </header>
              <div className="percentage-bar" id="handleBar">
                <div className="percentage-stats" id="handleBar" style={{width: `${percentage2}%`, transition: "width 500ms ease"}} ></div>
              </div>
            </article>
            <article className="stats-info-container">
              <header className="name-stats-info-conteiner">
                <h3 className="name-stats-info">{pokemon?.stats[3].stat.name}</h3>
                <p className="percentage-stat">{pokemon?.stats[3].base_stat}/255</p>
              </header>
              <div className="percentage-bar" id="handleBar">
                <div className="percentage-stats" id="handleBar" style={{width: `${percentage3}%`, transition: "width 500ms ease"}} ></div>
              </div>
            </article>
            <article className="stats-info-container">
              <header className="name-stats-info-conteiner">
                <h3 className="name-stats-info">{pokemon?.stats[4].stat.name}</h3>
                <p className="percentage-stat">{pokemon?.stats[4].base_stat}/255</p>
              </header>
              <div className="percentage-bar" id="handleBar">
                <div className="percentage-stats" id="handleBar" style={{width: `${percentage4}%`, transition: "width 500ms ease"}} ></div>
              </div>
            </article>
            <article className="stats-info-container">
              <header className="name-stats-info-conteiner">
                <h3 className="name-stats-info">{pokemon?.stats[5].stat.name}</h3>
                <p className="percentage-stat">{pokemon?.stats[5].base_stat}/255</p>
              </header>
              <div className="percentage-bar" id="handleBar">
                <div className="percentage-stats" id="handleBar" style={{width: `${percentage5}%`, transition: "width 500ms ease"}} ></div>
              </div>
            </article>
          </div>
        </section>
      </div>
      </article>
      <article className="movements">
        <hr className="movements-hr" />
        <h2 className="movements-title">Movements</h2>
        <div className="movement-all-container">
          {allMoves} 
          </div>
      </article>
    </div>
  )
}

export default PokeDetailPage


