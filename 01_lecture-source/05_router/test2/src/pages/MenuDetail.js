import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { getMenuCode } from '../apis/MenuAPI';

function MenuDetail() {

    const {menuCode} = useParams();
    const [menu, setMenu] = useState({
        menuName:'',
        menuPrice:0,
        categoryName:''
    });

    useEffect(()=>{
        setMenu(getMenuCode(menuCode))
    },[])

    return(
        <div>
            <h2>이름 : {menu.menuName}</h2>
            <h2>가격 : {menu.menuPrice}</h2>
            <h2>종류 : {menu.categoryName}</h2>
        </div>
    );
}

export default MenuDetail;