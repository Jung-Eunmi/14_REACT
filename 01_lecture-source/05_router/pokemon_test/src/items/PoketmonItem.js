import { NavLink } from "react-router-dom";

function PoketmonItem({pokeId ,pokeName }) {
    const pokeImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

    return(
        <div>
            <li>
                <NavLink to={`/monsterList/${pokeId}`}>
                {pokeName}
                <img 
                    src={pokeImageUrl} 
                    alt={pokeName} 
                    width="50" 
                    height="50" 
                />
                </NavLink>
            </li>
        </div>
    );
}

export default PoketmonItem;