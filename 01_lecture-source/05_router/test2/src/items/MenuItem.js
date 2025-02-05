import {NavLink} from 'react-router-dom';

function MenuItem({menu}) {
    
    return(
        <NavLink to={`/menu/${menu.menuCode}`}>
            <h2>메뉴이름 : {menu.menuName}</h2>
            <h2>메뉴가격 : {menu.menuPrice}</h2>
            <h2>메뉴종류 : {menu.categoryName}</h2>
        </NavLink>
    )
}

export default MenuItem;