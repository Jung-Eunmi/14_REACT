import {useState, useEffect} from 'react';
import MenuItem from '../items/MenuItem';
import {getMenuList} from '../apis/MenuAPI'

function Menu() {

    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        setMenuList(getMenuList());
    },[])

    return(
        <div>
            <h1>Menu 리스트</h1>
            {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
    );
}

export default Menu;