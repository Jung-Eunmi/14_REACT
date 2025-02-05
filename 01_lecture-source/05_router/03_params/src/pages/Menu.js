import boxStyle from './Menu.module.css';
import { useEffect, useState } from 'react';
import { getMenuList } from '../apis/MenuAPI';
import MenuItem from '../items/MenuItem';
import {useNavigate} from 'react-router-dom';

function Menu() {

    const [menuList, setMenuList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    // 마운트 시점에 동작 (메뉴 전체 조회)
    useEffect(() => {
        /* Menu 컴포넌트는 마운트되는 시점에 데이터를 가져와 state 에 담아 줄 것이다. */ 
        setMenuList(getMenuList());
    },[])

    const changeHandler = e => setSearchValue(e.target.value);
    // 검색하기 버튼을 누르면 검색 결과 페이지로 이동 할 것이다.
    const clickHandler = () => {
        // 우리가 관리하는 값 쿼리스트링으로 전달 
        navigate(`/menu/search?menuName=${searchValue}`)
    }

    return(
        <>
            <h1>🎂하이미디어 레스토랑 메뉴🎂</h1>
            <div>
                <input 
                    type="search" 
                    name="menuName"
                    onChange={changeHandler}    
                />
                <button onClick={clickHandler}>메뉴이름검색</button>
            </div>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/> )}
            </div>
        </>
    );
}

export default Menu;