import { useEffect, useState } from "react";
import PokeCard from "./PokeCard";
import '../../style/PokedexPage.css' 

const ListPokemons = ({
  pokemons,
  startIndex,
  endIndex,
  quantityPages,
  setPage,
  page,
}) => {
 
  const [blockPage, setBlockPage] = useState(1)
  const [pagesPerBlock, setPagesPerBlock] = useState(5)

  //logica de bloques
  const initialPageBlock = (blockPage - 1) * pagesPerBlock
  const endPageBlock = initialPageBlock + pagesPerBlock

  useEffect(() => {
    setBlockPage(Math.ceil(page / pagesPerBlock))
    
  }, [page])

  const arrPages = [];
  for (let i = 1; i <= quantityPages; i++) {
    arrPages.push(i);
  }

  const changePage = (pageNumber) => setPage(pageNumber);

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNetx = () => {
    setPage(page + 1);
  };

  return (
    <div className="List__pokemons">
    <div className="pagination__container">
      <ul className="pagination__container">
        <button className="pagination__preview" disabled={page === 1 && true} onClick={handlePrev}>
          &lt;
        </button>
        {arrPages.slice(initialPageBlock, endPageBlock).map((pageNumber) => (
          <li
            className={`${pageNumber === page && "active-page"}`}
            onClick={() => changePage(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        ))}
        <button className="pagination__netx" disabled={page === quantityPages && true} onClick={handleNetx}>
          &gt;
        </button>
      </ul>
      </div>
      <div className="card__container">
        {pokemons?.slice(startIndex, endIndex).map((pokeInfo) => (
          <PokeCard key={pokeInfo.url} pokeInfo={pokeInfo} />
        ))}
      </div>
      <div className="pagination__container">
      <ul className="pagination__container">
        <button className="pagination__preview" disabled={page === 1 && true} onClick={handlePrev}>
          &lt;
        </button>
        {arrPages.slice(initialPageBlock, endPageBlock).map((pageNumber) => (
          <li
            className={`${pageNumber === page && "active-page"}`}
            onClick={() => changePage(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        ))}
        <button className="pagination__netx" disabled={page === quantityPages && true} onClick={handleNetx}>
          &gt;
        </button>
      </ul>
      </div>
    </div>
  );
};

export default ListPokemons;
