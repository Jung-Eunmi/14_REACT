import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {getMenuByCode} from '../apis/MenuAPI'

function MenuDetail() {
    const {menuCode} = useParams();
    const [menu, setMenu] = useState({
        menuName:'',
        menuPrice:0,
        categoryName:''
    });

    useEffect(() => {
        setMenu(getMenuByCode(menuCode));
    },[])

    return(
        <>
                <h2>이름: {menu.menuName}</h2>
                <h2>가격: {menu.menuPrice}</h2>
                <h2>종류: {menu.categoryName}</h2>
        </>
    );
}

export default MenuDetail;