import {NavLink} from 'react-router-dom';
import navbarStyle from './Navbar.module.css';

function Navbar() {

    return(
        <div className={navbarStyle.Navbar}>   
            <ul>
                <li><NavLink to='/'>메인</NavLink></li>
                <li><NavLink to='/menu'>메뉴</NavLink></li>
            </ul>
        </div>
    );

}

export default Navbar;