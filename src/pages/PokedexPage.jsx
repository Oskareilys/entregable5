import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import ListPokemons from "../components/PokedexPage/ListPokemons";
import SelecType from "../components/PokedexPage/SelecType";
import '../style/PokedexPage.css' 
import { Link } from "react-router-dom";

const PokedexPage = () => {
  const [pokeSearch, setPokeSearch] = useState('');
  const [typeSelected, setTypeSelected] = useState('All Pokemons');

  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(4)

  const inputSearch = useRef();

  const trainer = useSelector((states) => states.trainer);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0";
  const [pokemons, getPokemons, getPokeByType] = useFetch(url);

  useEffect(() => {
    if (typeSelected === 'All Pokemons') {
      getPokemons();
    } else {
      getPokeByType(typeSelected)
    }
    setPage(1)
  }, [typeSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPokeSearch(inputSearch.current.value.trim().toLowerCase());
    setPage(1)
  };

  const pokemonsFiltered = pokemons?.results.filter((poke) => {
    return poke.name.includes(pokeSearch);
  });

  //logica paginacion

  const startIndex = (page-1) * pokePerPage
  const endIndex = startIndex + pokePerPage
  const quantityPokes = pokemonsFiltered ? pokemonsFiltered.length : 0
  const quantityPages = Math.ceil(quantityPokes/pokePerPage)


  return (
    <div className="pokedex">
      <header className="pokedex__header">
        <div className="rectangle__black"></div>
        <div className="circle-home"></div>
        <Link to='/'><img className="pokedex__img__header" src="./Pokedexheader.png" alt="" /></Link>
      </header>
      <aside className="pokedex__aside">
      <h1 className="pokedex__title"><span className="pokedex__name__trainer">Welcome {trainer}</span>, here you can find your favorite pokemon</h1>
      <div className="search__container">
      <form className="form__content-pokedex" onSubmit={handleSubmit}>
        
        <input className='form__input-pokedex' ref={inputSearch} type="text" />
        <button className='form__btn-pokedex'>Search</button>
        <SelecType setTypeSelected={setTypeSelected} />
        
        </form>
        </div>
        </aside>
      <ListPokemons pokemons={pokemonsFiltered}
      startIndex = {startIndex}
      endIndex = {endIndex}
      quantityPages = {quantityPages}
      setPage={setPage}
      page={page}
      />
    </div>
  );
};

export default PokedexPage;
