import {NavLink} from 'react-router-dom';

function Navbar() {

    return(
        <div className="Navbar">   
            <span><NavLink to='/'>🏠</NavLink></span>
            <span><NavLink to='/monsterList'>포켓몬</NavLink></span>
        </div>
    );

}

export default Navbar;