import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMonsterById } from '../apis/PoketmonAPI';

function PoketmonDetail() {
    const { id } = useParams();

    console.log('상세id:', id);

    const [monster, setMonster] = useState({
        name: '',
        height: 0,
        weight: 0,
        types: []
    });

    useEffect(() => {
        async function fetchData() {
            const data = await getMonsterById(id);
            console.log('데이터', data);
            setMonster(data);
        }

        fetchData();
    }, [id]); // id가 변경될 때마다 호출

    return (
        <>
            <h1>{monster.name} 상세정보</h1>
            <h3>키: {monster.height}</h3>
            <h3>몸무게: {monster.weight}</h3>
            <h3>공격: {monster.height}</h3>
            <h1>{monster.name}의 타입</h1>

            {/* 데이터가 존재할 경우에만 타입을 출력 */}
            {monster.types.length > 0 && (
                <>
                    <h3>{monster.types[0]?.type.name}</h3>
                    {monster.types[1] && <h3>{monster.types[1]?.type.name}</h3>}
                </>
            )}
        </>
    );
}

export default PoketmonDetail;
