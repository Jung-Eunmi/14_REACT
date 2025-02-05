import { useState, useEffect } from "react";
import {getMenuList} from '../apis/MenuAPI'
import MenuItem from "../items/MenuItem";

function Menu() {

    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        setMenuList(getMenuList());
    },[])

    return(
        <div>
            {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
       
    );
}

export default Menu;