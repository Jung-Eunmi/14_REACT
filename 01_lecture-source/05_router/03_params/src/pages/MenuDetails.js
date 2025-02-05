import {useState, useEffect} from 'react';
// MenuDetails 컴포넌트가 호출되는 시점은 PathVariable 로
// MenuCode 가 넘어오는 시점이다. 
// 해당 파라미터를 꺼내올 수 있는 useParams 라는 훅을 router 에서 제공하고있다.
import {useParams} from 'react-router-dom';

function MenuDetails() {
    // useParams 에 PathVariable 이 들어있는 것 확인함
    // console.log(useParams());
    const {menuCode} = useParams();
    const [menu, setMenu] = useState({
        menuName: '',
        menuPrice: 0,
        categoryName: '',
        detail: {}
    });

    

}

export default MenuDetails;