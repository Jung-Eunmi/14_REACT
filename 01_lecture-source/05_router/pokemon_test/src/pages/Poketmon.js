import { useState, useEffect } from 'react';
import { getPoketmonList } from '../apis/PoketmonAPI';
import "./Poketmon.css";
import PoketmonItem from '../items/PoketmonItem';

function Poketmon() {
  const [nextPage, setNextPage] = useState('');
  const [poketmonList, setPoketmonList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const data = await getPoketmonList();
      setPoketmonList(data.results);
      setTotalCount(data.count);
    }

    fetchData();
  }, []);

  return (
    <>  
      <h1>전체 포켓몬 {totalCount} 마리!!</h1>
      <div className='pokemonList'>
        
        {poketmonList.map((list, index) => {
          const pokeId = list.url.split('/')[6]; 
          
          return (
            <PoketmonItem 
              key={index}   
              pokeId={pokeId} 
              pokeName={list.name} 
            />
          );

        })}

      </div>
    </>
  );
}

export default Poketmon;
